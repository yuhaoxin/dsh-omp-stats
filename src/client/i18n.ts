/**
 * 统计面板的中文翻译。
 *
 * 上游 UI 的文案是英文硬编码；直接改 7 个 route 会把移植成本和后续同步成本拉高。
 * 这里用一层 presentation adapter：在 shadow root 上把已经渲染出来的英文文本和
 * 常见属性翻译成中文，语言由 DSH 的 ctx.locale 决定，切换语言时重新执行。
 *
 * 只替换字典里明确列出的文案；模型名、项目路径、错误消息等用户数据原样保留。
 */

const MONTH_ZH = {
	Jan: "1月",
	Feb: "2月",
	Mar: "3月",
	Apr: "4月",
	May: "5月",
	Jun: "6月",
	Jul: "7月",
	Aug: "8月",
	Sep: "9月",
	Oct: "10月",
	Nov: "11月",
	Dec: "12月",
};

const WINDOW_ZH = {
	"the last hour": "最近 1 小时",
	"the last 24 hours": "最近 24 小时",
	"the last 7 days": "最近 7 天",
	"the last 30 days": "最近 30 天",
	"the last 90 days": "最近 90 天",
	"all time": "全部时间",
};

function zhWindow(value) {
	return WINDOW_ZH[value] ?? value;
}

const EXACT = {
	// Shell / navigation
	Overview: "概览",
	Models: "模型",
	Providers: "供应商",
	Costs: "成本",
	Requests: "请求",
	Errors: "错误",
	Projects: "项目",
	Stats: "统计",
	stats: "统计",
	Live: "实时",
	Offline: "离线",
	Indexing: "索引中",
	Error: "错误",
	"Refresh session data": "刷新会话数据",
	"Time range": "时间范围",
	"Stats pages": "统计页面",
	"1h": "1 小时",
	"24h": "24 小时",
	"7d": "7 天",
	"30d": "30 天",
	"90d": "90 天",
	All: "全部",
	"the last hour": "最近 1 小时",
	"the last 24 hours": "最近 24 小时",
	"the last 7 days": "最近 7 天",
	"the last 30 days": "最近 30 天",
	"the last 90 days": "最近 90 天",
	"all time": "全部时间",
	"the last hour (1)": "最近 1 小时（1）",
	"the last 24 hours (2)": "最近 24 小时（2）",
	"the last 7 days (3)": "最近 7 天（3）",
	"the last 30 days (4)": "最近 30 天（4）",
	"the last 90 days (5)": "最近 90 天（5）",
	"all time (6)": "全部时间（6）",

	// Page titles / descriptions
	"API-equivalent": "API 等价",
	"API-equivalent cost": "API 等价成本",
	"API-equivalent estimate": "API 等价估算",
	"API-equivalent estimate at public rates": "按公开价格估算的 API 等价成本",
	"API-equivalent cost at public API rates": "按公开 API 价格估算的 API 等价成本",
	"Conversation tokens": "会话 Token",
	"Cache rate": "缓存命中率",
	"Cache savings": "缓存节省",
	"Error rate": "错误率",
	"Uncached input": "未缓存输入",
	"Cache read": "缓存读取",
	"Cache write": "缓存写入",
	Output: "输出",
	Input: "输入",
	"Premium requests": "高级请求",
	"Premium requests (subscription multiplier units)": "高级请求（订阅倍率单位）",
	"Tokens/s": "Token/秒",
	"Avg latency": "平均延迟",
	"Avg TTFT": "平均 TTFT",
	"Avg duration": "平均耗时",
	"Avg output": "平均输出",
	"Average output throughput": "平均输出吞吐",
	"Average output tokens per second": "平均输出 Token/秒",
	"Average time to first token": "平均首 token 时间",
	"Models used": "使用模型",
	"Most used": "最常用",
	"Top model": "最常用模型",
	Failed: "失败",
	Succeeded: "成功",
	"Main agent": "主代理",
	Subagents: "子代理",
	Advisor: "顾问",
	Activity: "活动",
	"Token mix": "Token 构成",
	"Latest requests": "最新请求",
	"Request log": "请求日志",
	"Request share": "请求占比",
	"All models": "全部模型",
	"All requests": "全部请求",
	"Provider totals": "供应商汇总",
	"Burn by provider": "按供应商消耗",
	"Peak burn hours": "高峰时段",
	"Subscription windows": "订阅窗口",
	"Window utilization": "窗口利用率",
	"Where it went": "成本去向",
	"By model": "按模型",
	"By component": "按计费项",
	"Daily estimate": "每日估算",
	"Top by cost": "按成本排序",
	"Top by requests": "按请求排序",
	"Error signatures": "错误签名",
	"Failures per model": "按模型的失败",
	"Affected models": "受影响模型",
	Failures: "失败",
	Signatures: "错误签名",
	"Last failure": "最近失败",
	"Last seen": "最近出现",
	"Last active": "最近活动",
	Folders: "项目",
	Folder: "项目",
	Project: "项目",
	Provider: "供应商",
	Model: "模型",
	Share: "占比",
	Cost: "成本",
	Tokens: "Token",
	Status: "状态",
	When: "时间",
	Duration: "耗时",
	Window: "窗口",
	Accounts: "账户",
	Resets: "重置",
	"Windows burned": "消耗窗口",
	"Tokens / window": "每窗口 Token",
	"Peak utilization": "峰值利用率",
	Exhaustions: "耗尽次数",
	"Latest used": "最近使用",
	Account: "账户",
	"Accounts needed": "所需账户",
	Recorded: "已记录",
	Snapshots: "快照",
	Unpriced: "未定价",
	"Unpriced requests": "未定价请求",
	Split: "拆分",
	"Split by": "拆分方式",
	"OK": "正常",
	Aborted: "已中止",
	"Unknown error": "未知错误",
	"Load more": "加载更多",
	"Loading…": "加载中…",
	Request: "请求",
	Timing: "耗时",
	Identity: "标识",
	Started: "开始时间",
	"Time to first token": "首 token 时间",
	"Output tokens/s": "输出 Token/秒",
	Total: "合计",
	"Request id": "请求 ID",
	"Entry id": "事件 ID",
	"Stop reason": "结束原因",
	API: "API",
	"Session file": "会话文件",
	"Output message": "输出消息",
	"Session entry": "会话事件",
	"Stats row": "统计行",
	"Open navigation": "打开导航",
	"Open this request's session in the trace view": "在追踪视图中打开此请求的会话",
	"Show all": "显示全部",
	"Filter folders…": "筛选项目…",
	"Search": "搜索",
	"Close": "关闭",
	"Cancel": "取消",
	"Retry": "重试",
	"Clear": "清除",
	"Pick a wider range in the top bar.": "在顶部选择更长的时间范围。",
	"Try a longer range.": "试试更长的时间范围。",
	"Temporary folders are hidden.": "临时目录已隐藏。",
	"Every request succeeded or was aborted.": "所有请求都成功或被中止。",
	"Clear the search or the selected filters.": "清除搜索或已选筛选。",
	"No usage in this range": "此时间范围内没有用量",
	"No model usage in this range": "此时间范围内没有模型用量",
	"No project folders in this range": "此时间范围内没有项目目录",
	"Only temporary folders in this range": "此时间范围内只有临时目录",
	"No folders match": "没有匹配的项目",
	"No affected models": "没有受影响模型",
	"No failures match": "没有匹配的失败",
	"No priced usage in this range": "此时间范围内没有可定价用量",
	"No provider activity in this range": "此时间范围内没有供应商活动",
	"No requests in this range": "此时间范围内没有请求",
	"No usage snapshots in this range": "此时间范围内没有用量快照",
	"No utilization readings for this window": "此窗口没有利用率读数",
	"No activity in this range": "此时间范围内没有活动",
	"Nothing priced yet": "还没有可定价数据",
	"No performance samples": "没有性能样本",
	"Most recent model calls across every session": "所有会话中最近的模型调用",
	"Where conversation tokens went": "会话 Token 的去向",
	"Per hour": "每小时",
	"Per 5 minutes": "每 5 分钟",
	"Per day": "每天",
	"Click a row for latency and throughput over time": "点击行查看延迟和吞吐随时间的变化",
	"What this usage would cost at public API rates": "按公开 API 价格估算这些用量",
	"Uncached input + cache reads + cache writes + output": "未缓存输入 + 缓存读取 + 缓存写入 + 输出",
	"Cache reads ÷ (uncached input + cache reads)": "缓存读取 ÷（未缓存输入 + 缓存读取）",
	"Cache reads ÷ (uncached input + cache reads), across every folder": "缓存读取 ÷（未缓存输入 + 缓存读取），跨所有项目",
	"Estimate per model with its input, output and cache split": "按模型估算，并拆分输入、输出和缓存",
	"Per UTC day, stacked by model": "按 UTC 日，按模型堆叠",
	"Per UTC day, stacked by billing component": "按 UTC 日，按计费项堆叠",
	"Estimate by billing component": "按计费项估算",
	"Estimate ÷ days with any usage": "估算 ÷ 有用量的天数",
	"Estimate ÷ priced requests": "估算 ÷ 已定价请求",
	"Estimate ÷ requests that have a public price": "估算 ÷ 有公开价格的请求",
	"Requests with no public-equivalent price": "没有公开等价价格的请求",
	"Subscription usage with no public-equivalent price; excluded from the estimate": "没有公开等价价格的订阅用量，不计入估算",
	"Subscription usage without a public price is counted as unpriced, not free.": "没有公开价格的订阅用量计入未定价，不按免费处理。",
	"Input · output · cache read · cache write": "输入 · 输出 · 缓存读取 · 缓存写入",
	"Average per day": "日均",
	"Per request": "每次请求",
	"Per priced request": "每个已定价请求",
	"all usage priced": "全部用量已定价",
	"excluded from the estimate": "不计入估算",
	"Cost is an API-equivalent estimate. Select a row for its token mix.": "成本是 API 等价估算。选择一行查看 Token 构成。",
	"Peak of summed used fraction across accounts at any sampled instant; the bar is relative to fleet capacity": "所有账户已用比例之和的采样峰值；条形相对于总容量",
	"Provider tokens burned in range ÷ windows burned — what one full window is worth": "范围内消耗的供应商 Token ÷ 消耗窗口数——一个完整窗口的价值",
	"Accounts needed to keep peak demand under 90% of fleet capacity": "把峰值需求控制在总容量 90% 以下所需账户数",
	"Subscription-window equivalents consumed in range (sum of used-fraction increases across accounts)": "范围内消耗的订阅窗口等价数（所有账户已用比例增量之和）",
	"Transitions into an exhausted state observed in range": "范围内观察到的耗尽状态转换",
	"Window resets observed (drops in used fraction)": "观察到的窗口重置（已用比例下降）",
	"Tokens by local hour of day": "按本地小时统计 Token",
	"DSH does not record subscription usage snapshots; this panel only shows local session usage.": "DSH 不记录订阅用量快照；此面板只展示本机会话用量。",
	"Fraction of all tokens in range": "占范围内全部 Token 的比例",
	"Peak in range": "范围内峰值",
	"Distinct models used through this provider": "通过此供应商使用的不同模型数",
	"Distinct error messages after normalizing ids and numbers": "归一化 id 和数字后的不同错误消息",
	"Same message with ids and counters normalized. Select one to filter the failures below.": "id 和计数器归一化后的相同消息。选择一条筛选下方失败。",
	"Failures per model. Select one to filter.": "按模型的失败。选择一项筛选。",
	"Message, model or project": "消息、模型或项目",
	"Model, provider or project": "模型、供应商或项目",
	"What one usage window buys you and how many accounts peak demand needs. Select a row to chart it.": "一个用量窗口能买多少，以及峰值需求需要多少账户。选择一行绘制图表。",
	"Too little of the window was consumed to extrapolate": "窗口消耗太少，无法外推",
	"Share of API-equivalent cost": "API 等价成本占比",
	"Share of all requests": "全部请求占比",
	"Prompt-input cost saved versus billing the same tokens uncached": "缓存读取相对未缓存计费节省的提示输入成本",
	"Session folders under /tmp or /var/folders": "/tmp 或 /var/folders 下的会话目录",
	"Model performance": "模型性能",
	"Model share": "模型占比",
	"Trend": "趋势",
	"Timing is recorded for streamed responses.": "只有流式响应会记录耗时。",
	"Other": "其他",
	"Unknown": "未知",
};

const PATTERNS = [
	// 页面描述（带范围）
	[/^Everything DeepSeek Harness did across your sessions in (.+)\.$/u, m => `DeepSeek Harness 在${zhWindow(m[1])}内的全部活动。`],
	[/^Which models did the work in (.+), and how fast they answered\.$/u, m => `${zhWindow(m[1])}内哪些模型在干活，响应有多快。`],
	[/^Usage by session folder in (.+)\.$/u, m => `${zhWindow(m[1])}内按会话目录统计的用量。`],
	[/^Burn, reliability and subscription headroom per provider over (.+)\.$/u, m => `${zhWindow(m[1])}内各供应商的消耗、可靠性和订阅余量。`],
	[/^What (.+) of usage would cost at public API rates\. Subscription usage without a public price is counted as unpriced, not free\.$/u, m => `按公开 API 价格估算${zhWindow(m[1])}的用量成本。没有公开价格的订阅用量计入未定价，不按免费处理。`],
	[/^Every model call DeepSeek Harness made in (.+), newest first\. Open a row for its full payload\.$/u, m => `DeepSeek Harness 在${zhWindow(m[1])}内的每次模型调用，最新的在前。点击行查看详情。`],
	[/^Failed model requests in (.+), grouped by error signature\. Open a failure for its full payload\.$/u, m => `${zhWindow(m[1])}内失败的模型请求，按错误签名分组。点击失败查看详情。`],
	[/^No failures in (.+)$/u, m => `${zhWindow(m[1])}内没有失败`],
	[/^Showing the latest ([\d,]+) failures in (.+); older ones are not loaded\.$/u, m => `显示${zhWindow(m[2])}内最新 ${m[1]} 次失败；更早的没有加载。`],
	[/^([\d,]+) of the latest ([\d,]+) requests$/u, m => `最新 ${m[2]} 次请求中的 ${m[1]} 次`],
	[/^([\d,]+) of ([\d,]+) requests in (.+)$/u, m => `${zhWindow(m[3])}内 ${m[2]} 次请求中的 ${m[1]} 次`],
	[/^([\d,]+) of ([\d,]+) folders$/u, m => `${m[2]} 个项目中的 ${m[1]} 个`],

	// 数字 + 单位
	[/^([\d,.]+) failed$/u, m => `${m[1]} 次失败`],
	[/^([\d,.]+) succeeded$/u, m => `${m[1]} 次成功`],
	[/^([\d,.]+) aborted$/u, m => `${m[1]} 次中止`],
	[/^([\d,.]+) unpriced$/u, m => `${m[1]} 个未定价`],
	[/^([\d,.]+) requests?$/u, m => `${m[1]} 次请求`],
	[/^([\d,.]+) models?$/u, m => `${m[1]} 个模型`],
	[/^([\d,.]+) folders?$/u, m => `${m[1]} 个项目`],
	[/^([\d,.]+) providers?$/u, m => `${m[1]} 个供应商`],
	[/^([\d,.]+) accounts?$/u, m => `${m[1]} 个账户`],
	[/^([\d,.]+) windows? burned$/u, m => `${m[1]} 个窗口`],
	[/^([\d,.]+) resets?$/u, m => `${m[1]} 次重置`],
	[/^([\d,.]+)% saved$/u, m => `节省 ${m[1]}%`],
	[/^([\d,.]+) req$/u, m => `${m[1]} 次请求`],
	[/^since (.+)$/iu, m => `自 ${translateCore(m[1]) ?? m[1]}`],
	[/^Indexing ([\d,]+)\/([\d,]+)$/u, m => `索引中 ${m[1]}/${m[2]}`],
	[/^Indexing$/u, () => "索引中"],
	[/^across ([\d,]+) providers?$/u, m => `覆盖 ${m[1]} 个供应商`],
	[/^([\d,]+) temporary$/u, m => `${m[1]} 个临时`],
	[/^Hide temporary \(([\d,]+)\)$/u, m => `隐藏临时目录（${m[1]}）`],
	[/^Load latest ([\d,]+)$/u, m => `加载最新 ${m[1]} 条`],
	[/^Top (\d+)$/u, m => `前 ${m[1]} 名`],
	[/^Peak at (.+)$/u, m => `峰值在 ${m[1]}`],
	[/^peak at (.+)$/u, m => `峰值在 ${m[1]}`],
	[/^(.+) of (.+)$/u, m => `${translateCore(m[1]) ?? m[1]} / ${translateCore(m[2]) ?? m[2]}`],

	// 日期与相对时间
	[/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2})$/u, m => `${MONTH_ZH[m[1]]}${m[2]}日`],
	[/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}) (\d{2}):(\d{2})$/u, m => `${MONTH_ZH[m[1]]}${m[2]}日 ${m[3]}:${m[4]}`],
	[/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}), (\d{2}):(\d{2}):(\d{2})$/u, m => `${MONTH_ZH[m[1]]}${m[2]}日 ${m[3]}:${m[4]}:${m[5]}`],
	[/^(\d+) seconds? ago$/u, m => `${m[1]} 秒前`],
	[/^(\d+) minutes? ago$/u, m => `${m[1]} 分钟前`],
	[/^(\d+) hours? ago$/u, m => `${m[1]} 小时前`],
	[/^(\d+) days? ago$/u, m => `${m[1]} 天前`],
	[/^(\d+) months? ago$/u, m => `${m[1]} 个月前`],
	[/^(\d+) years? ago$/u, m => `${m[1]} 年前`],
	[/^in (\d+) seconds?$/u, m => `${m[1]} 秒后`],
	[/^in (\d+) minutes?$/u, m => `${m[1]} 分钟后`],
	[/^in (\d+) hours?$/u, m => `${m[1]} 小时后`],
	[/^in (\d+) days?$/u, m => `${m[1]} 天后`],
	[/^yesterday$/u, () => "昨天"],
	[/^today$/u, () => "今天"],
	[/^just now$/u, () => "刚刚"],
	[/^last week$/u, () => "上周"],
	[/^last month$/u, () => "上个月"],
	[/^last year$/u, () => "去年"],
];

export function isChinese(locale) {
	return String(locale ?? "").toLowerCase().startsWith("zh");
}

function translateCore(core) {
	const exact = EXACT[core];
	if (exact !== undefined) return exact;
	for (const [pattern, replace] of PATTERNS) {
		const match = core.match(pattern);
		if (match) return replace(match);
	}
	return null;
}

export function translateText(text, chinese = true) {
	if (!chinese || !text) return text;
	const leading = text.match(/^\s*/u)?.[0] ?? "";
	const trailing = text.match(/\s*$/u)?.[0] ?? "";
	const core = text.trim();
	if (!core) return text;
	const translated = translateCore(core);
	return translated === null ? text : `${leading}${translated}${trailing}`;
}

export function translateAttribute(value, chinese = true) {
	if (!chinese || !value) return value;
	const core = value.trim();
	const translated = translateCore(core);
	return translated === null ? value : translated;
}

const SKIP_SELECTOR = ".mono, .num, .code-block, pre, code, style, script, textarea, [data-i18n-skip]";
const ATTRIBUTES = ["title", "aria-label", "placeholder", "alt"];

/**
 * 在 shadow root 上安装翻译。返回 apply 供语言切换时调用，dispose 释放观察器。
 */
export function installTranslation(root, getLocale) {
	const originals = new WeakMap();
	const rendered = new WeakMap();
	const attributeOriginals = new WeakMap();
	const observeOptions = {
		subtree: true,
		childList: true,
		characterData: true,
		attributes: true,
		attributeFilter: ATTRIBUTES,
	};
	let observer = null;
	let running = false;
	let scheduled = false;
	let disposed = false;

	const shouldSkip = node => {
		const parent = node.parentElement;
		return parent === null || parent.closest(SKIP_SELECTOR) !== null;
	};

	const applyText = chinese => {
		const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
		for (let node = walker.nextNode(); node; node = walker.nextNode()) {
			if (shouldSkip(node)) continue;
			const current = node.data;
			if (chinese) {
				const previous = rendered.get(node);
				const original = originals.get(node);
				if (original === undefined || (current !== previous && current !== original)) {
					originals.set(node, current);
				}
				const translated = translateText(originals.get(node), true);
				if (current !== translated) node.data = translated;
				rendered.set(node, translated);
			} else {
				const original = originals.get(node);
				if (original !== undefined && current !== original) node.data = original;
			}
		}
	};

	const applyAttributes = chinese => {
		for (const element of root.querySelectorAll("*")) {
			if (element.closest(SKIP_SELECTOR) !== null) continue;
			let originalsForElement = attributeOriginals.get(element);
			for (const attribute of ATTRIBUTES) {
				const current = element.getAttribute(attribute);
				if (current === null) continue;
				if (originalsForElement === undefined) {
					originalsForElement = new Map();
					attributeOriginals.set(element, originalsForElement);
				}
				if (chinese) {
					if (!originalsForElement.has(attribute)) originalsForElement.set(attribute, current);
					const translated = translateAttribute(originalsForElement.get(attribute), true);
					if (current !== translated) element.setAttribute(attribute, translated);
				} else if (originalsForElement.has(attribute)) {
					const original = originalsForElement.get(attribute);
					if (current !== original) element.setAttribute(attribute, original);
				}
			}
		}
	};

	const apply = () => {
		if (running || disposed) return;
		running = true;
		observer?.disconnect();
		const chinese = isChinese(getLocale());
		applyText(chinese);
		applyAttributes(chinese);
		observer?.observe(root, observeOptions);
		running = false;
	};

	// 表格和图表会产生大量 mutation；按帧合并，避免每次 hover 都全树扫描。
	const schedule = () => {
		if (scheduled || disposed) return;
		scheduled = true;
		const run = () => {
			scheduled = false;
			if (!disposed) apply();
		};
		if (typeof requestAnimationFrame === "function") requestAnimationFrame(run);
		else setTimeout(run, 0);
	};

	observer = new MutationObserver(schedule);
	observer.observe(root, observeOptions);
	queueMicrotask(() => {
		if (!disposed) apply();
	});

	return {
		apply,
		dispose() {
			disposed = true;
			observer?.disconnect();
			observer = null;
		},
	};
}
