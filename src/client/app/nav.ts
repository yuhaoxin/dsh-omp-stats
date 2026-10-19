import {
	Activity,
	CircleAlert,
	Coins,
	Cpu,
	FolderGit2,
	LayoutGrid,
	type LucideIcon,
	PlugZap,
} from "lucide-react";

export type DashboardSection = "overview" | "models" | "providers" | "costs" | "requests" | "errors" | "projects";

export interface NavItem {
	id: DashboardSection;
	label: string;
	icon: LucideIcon;
}

export interface NavGroup {
	heading: string;
	items: readonly NavItem[];
}

/** 首版页面顺序；与 omp 的分组保持一致，去掉依赖专有数据源的四页。 */
export const NAV: readonly NavGroup[] = [
	{
		heading: "Usage",
		items: [
			{ id: "overview", label: "Overview", icon: LayoutGrid },
			{ id: "models", label: "Models", icon: Cpu },
			{ id: "providers", label: "Providers", icon: PlugZap },
			{ id: "costs", label: "Costs", icon: Coins },
		],
	},
	{
		heading: "Activity",
		items: [
			{ id: "requests", label: "Requests", icon: Activity },
			{ id: "errors", label: "Errors", icon: CircleAlert },
		],
	},
	{
		heading: "Insights",
		items: [{ id: "projects", label: "Projects", icon: FolderGit2 }],
	},
];

export const NAV_ITEMS: readonly NavItem[] = NAV.flatMap(group => group.items);

export const SECTIONS: readonly DashboardSection[] = NAV_ITEMS.map(item => item.id);
