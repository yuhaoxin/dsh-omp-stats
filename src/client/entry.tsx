import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { CSS } from "./generated-css";
import { setPortalRoot } from "./portal";

const PANEL_ID = "omp-stats";

function currentTheme() {
	const explicit = document.documentElement.dataset.theme;
	if (explicit === "dark" || explicit === "light") return explicit;
	const bodyTheme = document.body?.dataset?.theme;
	if (bodyTheme === "dark" || bodyTheme === "light") return bodyTheme;
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * 把 omp 的 React 应用挂到 shadow root 里，隔离它大量的全局 CSS，
 * 同时让 CSS 变量和主题从 DSH 页面继承下来。
 */
function Panel() {
	const hostRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const host = hostRef.current;
		if (!host) return;
		// StrictMode 或重复挂载时复用已有 shadow root，避免 attachShadow 抛错。
		const shadow = host.shadowRoot ?? host.attachShadow({ mode: "open" });
		shadow.replaceChildren();
		const style = document.createElement("style");
		style.textContent = CSS;
		shadow.append(style);

		const mount = document.createElement("div");
		mount.className = "omp-root";
		shadow.append(mount);

		// Drawer/Modal 的 portal 容器必须在 shadow root 内，样式才会跟着面板走。
		const portal = document.createElement("div");
		portal.className = "omp-portal";
		shadow.append(portal);
		setPortalRoot(portal);

		const applyTheme = () => {
			mount.dataset.theme = currentTheme();
		};
		applyTheme();
		const observer = new MutationObserver(applyTheme);
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "class"] });
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		media.addEventListener("change", applyTheme);

		const root = createRoot(mount);
		root.render(<App />);
		return () => {
			root.unmount();
			observer.disconnect();
			media.removeEventListener("change", applyTheme);
			setPortalRoot(null);
			shadow.replaceChildren();
		};
	}, []);

	return <div ref={hostRef} className="omp-stats-host" style={{ height: "100%", minHeight: 0 }} />;
}

function StatsIcon({ size = 20, active = false }: { size?: number; active?: boolean }) {
	return (
		<svg
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-hidden="true"
			data-active={active}
			style={{ display: "block" }}
		>
			<path
				d="M4 19V9M10 19V4M16 19v-7M22 19H2"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.7"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export const inject = ["slots"];

export function apply(ctx) {
	ctx.slots.inject("sidebar.panellist", () =>
		ctx.slots.register(
			{
				name: "sidebar.panellist",
				id: PANEL_ID,
				order: 20,
				label: "Stats",
			},
			StatsIcon,
		),
	);
	ctx.slots.inject("main", () =>
		ctx.slots.register(
			{
				name: "main",
				key: PANEL_ID,
			},
			Panel,
		),
	);
}
