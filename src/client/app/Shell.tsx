import { type ReactNode, useState } from "react";
import { FISH_LOGO_PATH, FISH_LOGO_VIEWBOX } from "../brand";
import { rangeMeta, TIME_RANGES } from "../data/range";
import { useLiveStatus } from "../data/live";
import type { TimeRange } from "../types";
import { Segmented } from "../ui";
import { NAV_ITEMS, type DashboardSection } from "./nav";

export interface ShellProps {
	section: DashboardSection;
	onSectionChange: (section: DashboardSection) => void;
	range: TimeRange;
	onRangeChange: (range: TimeRange) => void;
	children: ReactNode;
}

const RANGE_OPTIONS = TIME_RANGES.map((range, index) => ({
	value: range,
	label: rangeMeta(range).label,
	title: `${rangeMeta(range).windowLabel} (${index + 1})`,
}));

export function Shell({ section, onSectionChange, range, onRangeChange, children }: ShellProps) {
	return (
		<div className="omp-dsh-shell">
			<header className="omp-dsh-header">
				<div className="omp-dsh-brand">
					<svg
						viewBox={FISH_LOGO_VIEWBOX}
						width="22"
						height="16.2"
						aria-hidden="true"
						style={{ display: "block", flex: "0 0 auto" }}
					>
						<path d={FISH_LOGO_PATH} fill="currentColor" />
					</svg>
					<span className="omp-dsh-brand-name">dsh</span>
					<span className="omp-dsh-brand-slash">/</span>
					<span className="omp-dsh-brand-page">deepseek harness</span>
				</div>

				<nav className="omp-dsh-nav" aria-label="Stats pages">
					{NAV_ITEMS.map(item => (
						<button
							key={item.id}
							type="button"
							className="omp-dsh-nav-item"
							data-active={item.id === section}
							aria-current={item.id === section ? "page" : undefined}
							onClick={() => onSectionChange(item.id)}
						>
							<item.icon size={14} />
							<span>{item.label}</span>
						</button>
					))}
				</nav>

				<div className="omp-dsh-actions">
					<Segmented options={RANGE_OPTIONS} value={range} onChange={onRangeChange} aria-label="Time range" />
					<LiveChip />
				</div>
			</header>
			<main className="omp-dsh-body">{children}</main>
		</div>
	);
}

function LiveChip() {
	const { sync, connected, requestSync } = useLiveStatus();
	const [busy, setBusy] = useState(false);
	const label =
		sync.phase === "syncing"
			? `Indexing ${sync.current}/${sync.total}`
			: sync.phase === "error"
				? "Error"
				: connected
					? "Live"
					: "Offline";
	return (
		<button
			type="button"
			className="omp-live"
			data-connected={connected}
			data-error={sync.phase === "error"}
			title={sync.error ?? "Refresh session data"}
			disabled={busy || sync.phase === "syncing"}
			onClick={() => {
				setBusy(true);
				requestSync();
				setTimeout(() => setBusy(false), 800);
			}}
		>
			<span className="omp-live-dot" />
			{label}
		</button>
	);
}
