/**
 * Shared type definitions consumed by both the server-side stats code and the
 * standalone client bundle. Keep this file free of any imports from server-only
 * packages (e.g. `@oh-my-pi/pi-ai`, `bun:sqlite`) so the client can import it
 * without dragging server dependencies into its bundle.
 */

/**
 * Aggregated stats for a model or folder.
 */
export interface AggregatedStats {
	/** Total number of requests */
	totalRequests: number;
	/** Number of successful requests */
	successfulRequests: number;
	/** Number of failed requests */
	failedRequests: number;
	/** Error rate (0-1) */
	errorRate: number;
	/** Total input tokens */
	totalInputTokens: number;
	/** Total output tokens */
	totalOutputTokens: number;
	/** Total cache read tokens */
	totalCacheReadTokens: number;
	/** Total cache write tokens */
	totalCacheWriteTokens: number;
	/** Percentage of prompt input tokens served from cache (0-1). */
	cacheRate: number;
	/**
	 * Prompt-input cost saved relative to billing the same tokens uncached
	 * (0-1; negative when cache writes cost more than reads save).
	 */
	cacheSavings: number;
	/** Total cost */
	totalCost: number;
	/** Requests with token usage but no public-equivalent subscription price. */
	unpricedRequests: number;
	/** Total premium requests */
	totalPremiumRequests: number;
	/** Average duration in ms */
	avgDuration: number | null;
	/** Average TTFT in ms */
	avgTtft: number | null;
	/** Average tokens per second (output tokens / duration) */
	avgTokensPerSecond: number | null;
	/** Time range */
	firstTimestamp: number;
	lastTimestamp: number;
}

/**
 * Stats grouped by model.
 */
export interface ModelStats extends AggregatedStats {
	model: string;
	provider: string;
}

/**
 * Stats grouped by folder.
 */
export interface FolderStats extends AggregatedStats {
	folder: string;
}

/**
 * Time series data point.
 */
export interface TimeSeriesPoint {
	/** Bucket timestamp (start of hour/day) */
	timestamp: number;
	/** Request count */
	requests: number;
	/** Error count */
	errors: number;
	/** Total tokens */
	tokens: number;
	/** Total cost */
	cost: number;
}

/**
 * Model usage time series data point (daily buckets).
 */
export interface ModelTimeSeriesPoint {
	/** Bucket timestamp (start of day) */
	timestamp: number;
	/** Model name */
	model: string;
	/** Provider name */
	provider: string;
	/** Request count */
	requests: number;
}

/**
 * Model performance time series data point (daily buckets).
 */
export interface ModelPerformancePoint {
	/** Bucket timestamp (start of day) */
	timestamp: number;
	/** Model name */
	model: string;
	/** Provider name */
	provider: string;
	/** Request count */
	requests: number;
	/** Average TTFT in ms */
	avgTtft: number | null;
	/** Average tokens per second */
	avgTokensPerSecond: number | null;
}

/**
 * Cost time series data point (daily buckets).
 */
export interface CostTimeSeriesPoint {
	/** Bucket timestamp (start of day) */
	timestamp: number;
	/** Model name */
	model: string;
	/** Provider name */
	provider: string;
	/** Total cost for this bucket */
	cost: number;
	/** Requests excluded because no public-equivalent subscription price exists. */
	unpricedRequests: number;
	/** Cost breakdown */
	costInput: number;
	costOutput: number;
	costCacheRead: number;
	costCacheWrite: number;
	/** Request count */
	requests: number;
}

/**
 * Which agent produced a message, derived from its transcript file location
 * inside the session directory: the top-level `<project>/<file>.jsonl` is the
 * `main` agent, an `__advisor.jsonl` is the passive `advisor`, and any other
 * nested transcript is a task `subagent`.
 */
export type AgentType = "main" | "subagent" | "advisor";

/**
 * Token usage aggregated by {@link AgentType} over the active range. Token
 * columns are explicit so the dashboard's share denominator matches the
 * counts it renders (input + output + cache read + cache write).
 */
export interface AgentTypeStats {
	agentType: AgentType;
	/** Total number of requests */
	totalRequests: number;
	/** Total input tokens */
	totalInputTokens: number;
	/** Total output tokens */
	totalOutputTokens: number;
	/** Total cache read tokens */
	totalCacheReadTokens: number;
	/** Total cache write tokens */
	totalCacheWriteTokens: number;
	/** Total cost */
	totalCost: number;
}

/**
 * Aggregated request/token/cost totals for one provider over the active range.
 */
export interface ProviderAggregate {
	provider: string;
	totalRequests: number;
	failedRequests: number;
	/** Distinct models used through this provider in the range. */
	models: number;
	totalInputTokens: number;
	totalOutputTokens: number;
	totalCacheReadTokens: number;
	totalCacheWriteTokens: number;
	/** Uncached input + cache reads + cache writes + output. */
	totalTokens: number;
	totalCost: number;
	/** Requests excluded because no public-equivalent subscription price exists. */
	unpricedRequests: number;
	totalPremiumRequests: number;
	avgTokensPerSecond: number | null;
}

/**
 * Token burn attributed to one local hour-of-day (0-23) for one provider.
 * Powers the "peak burn hours" histogram.
 */
export interface ProviderHourlyPoint {
	provider: string;
	/** Local hour of day, 0-23. */
	hour: number;
	totalTokens: number;
	outputTokens: number;
	requests: number;
}

/** Provider token/cost time-series point (bucketed like the model series). */
export interface ProviderTimeSeriesPoint {
	timestamp: number;
	provider: string;
	totalTokens: number;
	cost: number;
	/** Requests excluded because no public-equivalent subscription price exists. */
	unpricedRequests: number;
	requests: number;
}

/** One recorded usage-limit snapshot for an (account, window) series. */
export interface UsageWindowPoint {
	timestamp: number;
	/** Used fraction 0..1 (>1 = overage) when the provider reported one. */
	usedFraction: number | null;
	exhausted: boolean;
}

/**
 * Utilization history for one (account, limit window) pair of a provider,
 * sourced from the auth store's recorded usage-limit snapshots.
 */
export interface UsageWindowSeries {
	provider: string;
	accountKey: string;
	/** Email/account id when known, else the stable account key. */
	accountLabel: string;
	/** Groups the same limit window across accounts: the limit id, or quota family + window for positional Codex slots. */
	windowKey: string;
	/** Human label of the limit (distinguishes same-duration windows). */
	windowLabel: string;
	points: UsageWindowPoint[];
}

/**
 * Derived subscription insight for one provider limit window across all
 * accounts: how much of the window was consumed, what one window is worth in
 * tokens, and how many accounts peak demand would have needed.
 */
export interface ProviderWindowInsight {
	provider: string;
	/** Groups the same limit window across accounts: the limit id, or quota family + window for positional Codex slots. */
	windowKey: string;
	/** Human label of the limit (distinguishes same-duration windows). */
	windowLabel: string;
	/** Accounts with at least one snapshot for this window in range. */
	accounts: number;
	/** Window resets observed (drops in used fraction). */
	cycles: number;
	/**
	 * Subscription-window equivalents consumed in range: sum of positive
	 * used-fraction deltas across accounts (1.0 = one full window burned).
	 */
	fractionConsumed: number;
	/**
	 * Estimated tokens one full window buys: provider tokens burned in range
	 * divided by {@link fractionConsumed}. Null when too little of the window
	 * was consumed to extrapolate.
	 */
	estTokensPerWindow: number | null;
	/** Peak of sum-across-accounts used fraction at any sampled instant. */
	peakConcurrentFraction: number;
	/**
	 * Accounts needed to keep peak demand under 90% of fleet capacity:
	 * max(1, ceil(peakConcurrentFraction / 0.9)).
	 */
	idealAccounts: number;
	/** Transitions into an exhausted state observed in range. */
	exhaustedEvents: number;
}

/** Ingest state of the dashboard host's background session sync. */
export interface LiveSyncStatus {
	phase: "idle" | "syncing" | "error";
	/** Files completed in the running sync (0 when not yet known). */
	current: number;
	/** Files in the running sync's work set (0 while listing → indeterminate). */
	total: number;
	/** Rows inserted by the running (or last) sync. */
	processed: number;
	/** Wall-clock time the last sync finished, if any. */
	lastSyncedAt: number | null;
	/** Failure message of the last sync when `phase` is `"error"`. */
	error: string | null;
}

/**
 * Payload of every `GET /api/events` server-sent event (and `GET /api/status`).
 * `version` increases whenever stored stats may have changed, so clients
 * revalidate their queries when it moves.
 */
export interface LiveStatus {
	version: number;
	sync: LiveSyncStatus;
	/** Hours whose rollups are still being (re)built; ranges covering them may be incomplete. */
	indexingHours: number;
}

/** Providers dashboard payload: local request stats only (fast, DB-backed). */
export interface ProviderDashboardStats {
	providers: ProviderAggregate[];
	hourly: ProviderHourlyPoint[];
	series: ProviderTimeSeriesPoint[];
}

/**
 * Subscription-window payload (`GET /api/stats/provider-windows`). Snapshots
 * may come from the auth broker over the network, so it is fetched separately
 * from {@link ProviderDashboardStats}. `usageSeries` only carries the
 * requested provider's series (empty without a provider) — all of them can be
 * thousands of series.
 */
export interface ProviderWindowStats {
	windowInsights: ProviderWindowInsight[];
	usageSeries: UsageWindowSeries[];
}
