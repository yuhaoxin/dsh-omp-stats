/**
 * 验证面板的覆盖层在 shadow root 里能拿到主题变量并贴合面板边界。
 *
 * 面板把样式注入 shadow root，抽屉和弹窗 portal 到与 `.omp-root` 平级的
 * `.omp-portal`。令牌只写在 `:host` 上时两者都能继承；若退回 `:root`，
 * 抽屉背景变成 transparent、圆角归零，遮罩还会因为 `position: fixed`
 * 铺满宿主窗口，表现为点击条目后整个界面变暗。
 *
 * 用无头 Chrome 渲染真实 CSS 后读计算样式，不依赖 DSH 进程。
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const client = join(root, "src/client");
const CSS_FILES = [
	"styles.css",
	"routes/models.css",
	"routes/providers.css",
	"routes/costs.css",
	"routes/errors.css",
	"routes/projects.css",
	"ui/modal.css",
	"ui/request-drawer.css",
	"dsh.css",
];

const CHROME_CANDIDATES = [
	process.env.CHROME,
	"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
	"/Applications/Chromium.app/Contents/MacOS/Chromium",
	"/usr/bin/google-chrome",
	"/usr/bin/chromium",
].filter(Boolean);
const chrome = CHROME_CANDIDATES.find(path => existsSync(path));
if (!chrome) {
	console.error("找不到 Chrome；用 CHROME 环境变量指定可执行文件。");
	process.exit(2);
}

const css = CSS_FILES.map(file => readFileSync(join(client, file), "utf8")).join("\n");

/** 面板占据窗口右侧，遮罩只应盖住这块区域。 */
const harness = `<!doctype html><html><head><meta charset="utf-8"><style>
html, body { margin: 0; height: 100%; background: #f5f5f7; }
#host { position: fixed; left: 224px; top: 52px; right: 0; bottom: 0; }
</style></head><body>
<div id="host" class="omp-stats-host" style="height:100%;min-height:0"></div>
<script>
const CSS = ${JSON.stringify(css)};
const host = document.getElementById("host");
const shadow = host.attachShadow({ mode: "open" });
const style = document.createElement("style");
// 关掉入场动画，否则抽屉还停在 translateX 的起始帧，位置读数偏移。
style.textContent = CSS + "\\n* { animation: none !important; }";
shadow.append(style);

const mount = document.createElement("div");
mount.className = "omp-root";
mount.innerHTML = '<div class="omp-app"><div class="omp-dsh-shell"><div class="omp-dsh-body">'
	+ '<div class="page"><div class="card" id="card">row</div></div></div></div></div>';
shadow.append(mount);

const portal = document.createElement("div");
portal.className = "omp-portal";
portal.innerHTML = '<div class="drawer-scrim"></div>'
	+ '<div class="drawer" id="drawer"><span class="mono" id="mono">deepseek</span></div>'
	+ '<div class="modal-overlay" id="overlay"><div class="modal" id="modal"></div></div>';
shadow.append(portal);
host.dataset.theme = "light";

const q = sel => shadow.querySelector(sel);
const style_ = el => getComputedStyle(el);
const rect = el => {
	const r = el.getBoundingClientRect();
	return [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)];
};
document.title = "RESULT" + JSON.stringify({
	drawerBg: style_(q("#drawer")).backgroundColor,
	drawerRadius: style_(q("#drawer")).borderRadius,
	drawerPosition: style_(q("#drawer")).position,
	modalBg: style_(q("#modal")).backgroundColor,
	cardRadius: style_(q("#card")).borderRadius,
	monoFont: style_(q("#mono")).fontFamily,
	scrimPosition: style_(q(".drawer-scrim")).position,
	scrimRect: rect(q(".drawer-scrim")),
	drawerRect: rect(q("#drawer")),
	panelRect: rect(host),
});
</script></body></html>`;

const dir = mkdtempSync(join(tmpdir(), "omp-panel-"));
const page = join(dir, "panel.html");
writeFileSync(page, harness);

let probe;
try {
	const dom = execFileSync(
		chrome,
		[
			"--headless",
			"--disable-gpu",
			"--no-sandbox",
			`--user-data-dir=${join(dir, "profile")}`,
			"--window-size=1348,777",
			"--dump-dom",
			`file://${page}`,
		],
		{ encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
	);
	const match = dom.match(/RESULT({.*})/);
	if (!match) throw new Error("页面没有输出探测结果");
	probe = JSON.parse(match[1]);
} finally {
	rmSync(dir, { recursive: true, force: true });
}

const failures = [];
const check = (name, ok, detail) => {
	if (!ok) failures.push(`${name}: ${detail}`);
};

// 令牌缺失时抽屉背景是 transparent，圆角退成 0。
check("抽屉背景", probe.drawerBg !== "rgba(0, 0, 0, 0)", `期望有底色，实际 ${probe.drawerBg}`);
check("抽屉圆角", probe.drawerRadius !== "0px", `期望继承 --r-panel，实际 ${probe.drawerRadius}`);
check("弹窗背景", probe.modalBg !== "rgba(0, 0, 0, 0)", `期望有底色，实际 ${probe.modalBg}`);
check("卡片圆角", probe.cardRadius !== "0px", `期望继承 --r-panel，实际 ${probe.cardRadius}`);
check("等宽字体", /mono/i.test(probe.monoFont), `期望 --font-mono，实际 ${probe.monoFont}`);

// 遮罩若用 fixed 会铺满宿主窗口，而不是贴合面板。
check("抽屉定位", probe.drawerPosition === "absolute", `实际 ${probe.drawerPosition}`);
check("遮罩定位", probe.scrimPosition === "absolute", `实际 ${probe.scrimPosition}`);
check(
	"遮罩范围",
	JSON.stringify(probe.scrimRect) === JSON.stringify(probe.panelRect),
	`遮罩 ${probe.scrimRect} 应等于面板 ${probe.panelRect}`,
);

// 抽屉用 absolute 加 8px 内缩，位置应落在面板内部。
const [px, py, pw, ph] = probe.panelRect;
const [dx, dy, dw, dh] = probe.drawerRect;
check(
	"抽屉范围",
	dx >= px && dy >= py && dx + dw <= px + pw && dy + dh <= py + ph,
	`抽屉 ${probe.drawerRect} 应落在面板 ${probe.panelRect} 内`,
);

if (failures.length > 0) {
	console.error(failures.join("\n"));
	process.exit(1);
}
console.log(JSON.stringify(probe, null, 2));
