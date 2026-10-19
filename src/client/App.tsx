import { useCallback, useRef, useState } from "react";
import { Shell } from "./app/Shell";
import { LiveProvider } from "./data/live";
import {
	CostsRoute,
	ErrorsRoute,
	ModelsRoute,
	OverviewRoute,
	ProjectsRoute,
	ProvidersRoute,
	RequestsRoute,
} from "./routes";
import type { DashboardSection } from "./app/nav";
import type { TimeRange } from "./types";
import { RequestDrawer } from "./ui/RequestDrawer";

export function App() {
	return (
		<LiveProvider>
			<Dashboard />
		</LiveProvider>
	);
}

function Dashboard() {
	const [section, setSection] = useState<DashboardSection>("overview");
	const [range, setRange] = useState<TimeRange>("24h");
	const [selectedRequestId, setSelectedRequestId] = useState<number | null>(null);
	const closeDrawer = useCallback(() => setSelectedRequestId(null), []);

	// 访问过的页面保持挂载，切回来不再重新拉取；只有 active 页会发请求。
	const mounted = useRef(new Set<DashboardSection>());
	mounted.current.add(section);

	const render = (target: DashboardSection) => {
		const active = target === section;
		switch (target) {
			case "overview":
				return <OverviewRoute active={active} range={range} onRequestClick={setSelectedRequestId} />;
			case "models":
				return <ModelsRoute active={active} range={range} />;
			case "providers":
				return <ProvidersRoute active={active} range={range} />;
			case "costs":
				return <CostsRoute active={active} range={range} />;
			case "requests":
				return <RequestsRoute active={active} range={range} onRequestClick={setSelectedRequestId} />;
			case "errors":
				return <ErrorsRoute active={active} range={range} onRequestClick={setSelectedRequestId} />;
			case "projects":
				return <ProjectsRoute active={active} range={range} />;
			default:
				return null;
		}
	};

	return (
		<div className="omp-app">
			<Shell section={section} onSectionChange={setSection} range={range} onRangeChange={setRange}>
				{[...mounted.current].map(target => (
					<div key={target} hidden={target !== section}>
						{render(target)}
					</div>
				))}
			</Shell>
			<RequestDrawer id={selectedRequestId} onClose={closeDrawer} />
		</div>
	);
}
