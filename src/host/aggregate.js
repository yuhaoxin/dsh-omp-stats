/**
 * 把请求记录聚合成 omp-stats 客户端期望的接口形状。
 *
 * 这里只做纯函数计算：输入是 fold.js 产出的请求数组，输出直接序列化成 JSON。
 * 所有页面共用同一份聚合口径，避免概览、模型、项目页出现不同的总数。
 */

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;
const MINUTE_MS = 60 * 1000;

export const TIME_RANGES = ["1h", "24h", "7d", "30d", "90d", "all"];

const RANGE_META = {
	"1h": { spanMs: HOUR_MS, bucketMs: 5 * MINUTE_MS },
	"24h": { spanMs: DAY_MS, bucketMs: HOUR_MS },
	"7d": { spanMs: 7 * DAY_MS, bucketMs: DAY_MS },
	"30d": { spanMs: 30 * DAY_MS, bucketMs: DAY_MS },
	"90d": { spanMs: 90 * DAY_MS, bucketMs: DAY_MS },
	all: { spanMs: null, bucketMs: DAY_MS },
};

export function isTimeRange(value) {
	return TIME_RANGES.includes(value);
}

export function bucketMsOf(range) {
	return RANGE_META[range]?.bucketMs ?? HOUR_MS;
}

function bucketStart(timestamp, bucketMs) {
	return Math.floor(timestamp / bucketMs) * bucketMs;
}

function dayStart(timestamp) {
	return Math.floor(timestamp / DAY_MS) * DAY_MS;
}

function filterRange(requests, range, now = Date.now()) {
	const meta = RANGE_META[range] ?? RANGE_META["24h"];
	if (meta.spanMs === null) return requests;
	const cutoff = now - meta.spanMs;
	return requests.filter(request => request.timestamp >= cutoff);
}

function emptyAggregate() {
	return {
		totalRequests: 0,
		successfulRequests: 0,
		failedRequests: 0,
		errorRate: 0,
		totalInputTokens: 0,
		totalOutputTokens: 0,
		totalCacheReadTokens: 0,
		totalCacheWriteTokens: 0,
		cacheRate: 0,
		cacheSavings: 0,
		totalCost: 0,
		unpricedRequests: 0,
		totalPremiumRequests: 0,
		avgDuration: null,
		avgTtft: null,
		avgTokensPerSecond: null,
		firstTimestamp: 0,
		lastTimestamp: 0,
		_durationSum: 0,
		_durationCount: 0,
		_ttftSum: 0,
		_ttftCount: 0,
		_tpsSum: 0,
		_tpsCount: 0,
		_cacheSaved: 0,
		_cacheUncached: 0,
	};
}

function addToAggregate(aggregate, request) {
	const usage = request.usage;
	aggregate.totalRequests++;
	if (request.stopReason === "error") aggregate.failedRequests++;
	aggregate.totalInputTokens += usage.input;
	aggregate.totalOutputTokens += usage.output;
	aggregate.totalCacheReadTokens += usage.cacheRead;
	aggregate.totalCacheWriteTokens += usage.cacheWrite;
	aggregate.totalCost += usage.cost.total;
	aggregate.totalPremiumRequests += usage.premiumRequests ?? 0;
	if (request.costUnpriced) aggregate.unpricedRequests++;
	if (typeof request.duration === "number") {
		aggregate._durationSum += request.duration;
		aggregate._durationCount++;
	}
	if (typeof request.ttft === "number") {
		aggregate._ttftSum += request.ttft;
		aggregate._ttftCount++;
	}
	if (request.duration > 0 && usage.output > 0) {
		aggregate._tpsSum += (usage.output * 1000) / request.duration;
		aggregate._tpsCount++;
	}
	if (request.rate && !request.costUnpriced && usage.cacheRead > 0) {
		const uncached = (usage.cacheRead / 1_000_000) * request.rate.input;
		aggregate._cacheUncached += uncached;
		aggregate._cacheSaved += uncached - usage.cost.cacheRead;
	}
	if (aggregate.firstTimestamp === 0 || request.timestamp < aggregate.firstTimestamp) {
		aggregate.firstTimestamp = request.timestamp;
	}
	if (request.timestamp > aggregate.lastTimestamp) aggregate.lastTimestamp = request.timestamp;
}

function finalizeAggregate(aggregate) {
	const promptTokens = aggregate.totalInputTokens + aggregate.totalCacheReadTokens;
	aggregate.cacheRate = promptTokens > 0 ? aggregate.totalCacheReadTokens / promptTokens : 0;
	aggregate.cacheSavings = aggregate._cacheUncached > 0 ? aggregate._cacheSaved / aggregate._cacheUncached : 0;
	aggregate.successfulRequests = aggregate.totalRequests - aggregate.failedRequests;
	aggregate.errorRate = aggregate.totalRequests > 0 ? aggregate.failedRequests / aggregate.totalRequests : 0;
	aggregate.avgDuration = aggregate._durationCount > 0 ? aggregate._durationSum / aggregate._durationCount : null;
	aggregate.avgTtft = aggregate._ttftCount > 0 ? aggregate._ttftSum / aggregate._ttftCount : null;
	aggregate.avgTokensPerSecond = aggregate._tpsCount > 0 ? aggregate._tpsSum / aggregate._tpsCount : null;
	delete aggregate._durationSum;
	delete aggregate._durationCount;
	delete aggregate._ttftSum;
	delete aggregate._ttftCount;
	delete aggregate._tpsSum;
	delete aggregate._tpsCount;
	delete aggregate._cacheSaved;
	delete aggregate._cacheUncached;
	return aggregate;
}

function createProviderAggregate(provider) {
	return {
		provider,
		totalRequests: 0,
		failedRequests: 0,
		models: new Set(),
		totalInputTokens: 0,
		totalOutputTokens: 0,
		totalCacheReadTokens: 0,
		totalCacheWriteTokens: 0,
		totalTokens: 0,
		totalCost: 0,
		unpricedRequests: 0,
		totalPremiumRequests: 0,
		avgTokensPerSecond: null,
		_tpsSum: 0,
		_tpsCount: 0,
	};
}

function addToProvider(aggregate, request) {
	const usage = request.usage;
	aggregate.totalRequests++;
	if (request.stopReason === "error") aggregate.failedRequests++;
	aggregate.models.add(request.model);
	aggregate.totalInputTokens += usage.input;
	aggregate.totalOutputTokens += usage.output;
	aggregate.totalCacheReadTokens += usage.cacheRead;
	aggregate.totalCacheWriteTokens += usage.cacheWrite;
	aggregate.totalTokens += usage.totalTokens;
	aggregate.totalCost += usage.cost.total;
	aggregate.totalPremiumRequests += usage.premiumRequests ?? 0;
	if (request.costUnpriced) aggregate.unpricedRequests++;
	if (request.duration > 0 && usage.output > 0) {
		aggregate._tpsSum += (usage.output * 1000) / request.duration;
		aggregate._tpsCount++;
	}
}

function finalizeProvider(aggregate) {
	aggregate.models = aggregate.models.size;
	aggregate.avgTokensPerSecond = aggregate._tpsCount > 0 ? aggregate._tpsSum / aggregate._tpsCount : null;
	delete aggregate._tpsSum;
	delete aggregate._tpsCount;
	return aggregate;
}

function aggregateAll(requests) {
	const overall = emptyAggregate();
	const byModel = new Map();
	const byFolder = new Map();
	const byAgent = new Map();
	const byProvider = new Map();

	for (const request of requests) {
		addToAggregate(overall, request);

		const modelKey = `${request.provider}\u0000${request.model}`;
		let model = byModel.get(modelKey);
		if (!model) {
			model = { ...emptyAggregate(), model: request.model, provider: request.provider };
			byModel.set(modelKey, model);
		}
		addToAggregate(model, request);

		const folderKey = request.folder || "(unknown)";
		let folder = byFolder.get(folderKey);
		if (!folder) {
			folder = { ...emptyAggregate(), folder: folderKey };
			byFolder.set(folderKey, folder);
		}
		addToAggregate(folder, request);

		const agentKey = request.agentType ?? "main";
		let agent = byAgent.get(agentKey);
		if (!agent) {
			agent = {
				agentType: agentKey,
				totalRequests: 0,
				totalInputTokens: 0,
				totalOutputTokens: 0,
				totalCacheReadTokens: 0,
				totalCacheWriteTokens: 0,
				totalCost: 0,
			};
			byAgent.set(agentKey, agent);
		}
		agent.totalRequests++;
		agent.totalInputTokens += request.usage.input;
		agent.totalOutputTokens += request.usage.output;
		agent.totalCacheReadTokens += request.usage.cacheRead;
		agent.totalCacheWriteTokens += request.usage.cacheWrite;
		agent.totalCost += request.usage.cost.total;

		let provider = byProvider.get(request.provider);
		if (!provider) {
			provider = createProviderAggregate(request.provider);
			byProvider.set(request.provider, provider);
		}
		addToProvider(provider, request);
	}

	finalizeAggregate(overall);
	return {
		overall,
		byModel: [...byModel.values()].map(finalizeAggregate),
		byFolder: [...byFolder.values()].map(finalizeAggregate),
		byAgent: [...byAgent.values()],
		byProvider: [...byProvider.values()].map(finalizeProvider),
	};
}

function timeSeries(requests, bucketMs) {
	const buckets = new Map();
	for (const request of requests) {
		const timestamp = bucketStart(request.timestamp, bucketMs);
		let point = buckets.get(timestamp);
		if (!point) {
			point = { timestamp, requests: 0, errors: 0, tokens: 0, cost: 0 };
			buckets.set(timestamp, point);
		}
		point.requests++;
		if (request.stopReason === "error") point.errors++;
		point.tokens += request.usage.totalTokens;
		point.cost += request.usage.cost.total;
	}
	return [...buckets.values()].sort((a, b) => a.timestamp - b.timestamp);
}

function modelSeries(requests, bucketMs) {
	const buckets = new Map();
	for (const request of requests) {
		const timestamp = bucketStart(request.timestamp, bucketMs);
		const key = `${timestamp}\u0000${request.provider}\u0000${request.model}`;
		let point = buckets.get(key);
		if (!point) {
			point = { timestamp, model: request.model, provider: request.provider, requests: 0 };
			buckets.set(key, point);
		}
		point.requests++;
	}
	return [...buckets.values()].sort((a, b) => a.timestamp - b.timestamp);
}

function modelPerformanceSeries(requests, bucketMs) {
	const buckets = new Map();
	for (const request of requests) {
		const timestamp = bucketStart(request.timestamp, bucketMs);
		const key = `${timestamp}\u0000${request.provider}\u0000${request.model}`;
		let point = buckets.get(key);
		if (!point) {
			point = {
				timestamp,
				model: request.model,
				provider: request.provider,
				requests: 0,
				avgTtft: null,
				avgTokensPerSecond: null,
				_ttftSum: 0,
				_ttftCount: 0,
				_tpsSum: 0,
				_tpsCount: 0,
			};
			buckets.set(key, point);
		}
		point.requests++;
		if (typeof request.ttft === "number") {
			point._ttftSum += request.ttft;
			point._ttftCount++;
		}
		if (request.duration > 0 && request.usage.output > 0) {
			point._tpsSum += (request.usage.output * 1000) / request.duration;
			point._tpsCount++;
		}
	}
	return [...buckets.values()]
		.map(point => {
			point.avgTtft = point._ttftCount > 0 ? point._ttftSum / point._ttftCount : null;
			point.avgTokensPerSecond = point._tpsCount > 0 ? point._tpsSum / point._tpsCount : null;
			delete point._ttftSum;
			delete point._ttftCount;
			delete point._tpsSum;
			delete point._tpsCount;
			return point;
		})
		.sort((a, b) => a.timestamp - b.timestamp);
}

function costSeries(requests) {
	const buckets = new Map();
	for (const request of requests) {
		const timestamp = dayStart(request.timestamp);
		const key = `${timestamp}\u0000${request.provider}\u0000${request.model}`;
		let point = buckets.get(key);
		if (!point) {
			point = {
				timestamp,
				model: request.model,
				provider: request.provider,
				cost: 0,
				unpricedRequests: 0,
				costInput: 0,
				costOutput: 0,
				costCacheRead: 0,
				costCacheWrite: 0,
				requests: 0,
			};
			buckets.set(key, point);
		}
		point.requests++;
		point.cost += request.usage.cost.total;
		point.costInput += request.usage.cost.input;
		point.costOutput += request.usage.cost.output;
		point.costCacheRead += request.usage.cost.cacheRead;
		point.costCacheWrite += request.usage.cost.cacheWrite;
		if (request.costUnpriced) point.unpricedRequests++;
	}
	return [...buckets.values()].sort((a, b) => a.timestamp - b.timestamp);
}

function providerSeries(requests, bucketMs) {
	const buckets = new Map();
	for (const request of requests) {
		const timestamp = bucketStart(request.timestamp, bucketMs);
		const key = `${timestamp}\u0000${request.provider}`;
		let point = buckets.get(key);
		if (!point) {
			point = {
				timestamp,
				provider: request.provider,
				totalTokens: 0,
				cost: 0,
				unpricedRequests: 0,
				requests: 0,
			};
			buckets.set(key, point);
		}
		point.requests++;
		point.totalTokens += request.usage.totalTokens;
		point.cost += request.usage.cost.total;
		if (request.costUnpriced) point.unpricedRequests++;
	}
	return [...buckets.values()].sort((a, b) => a.timestamp - b.timestamp);
}

function providerHourly(requests) {
	const buckets = new Map();
	for (const request of requests) {
		const hour = new Date(request.timestamp).getHours();
		const key = `${request.provider}\u0000${hour}`;
		let point = buckets.get(key);
		if (!point) {
			point = { provider: request.provider, hour, totalTokens: 0, outputTokens: 0, requests: 0 };
			buckets.set(key, point);
		}
		point.requests++;
		point.totalTokens += request.usage.totalTokens;
		point.outputTokens += request.usage.output;
	}
	return [...buckets.values()].sort((a, b) => a.provider.localeCompare(b.provider) || a.hour - b.hour);
}

export function messageOf(request) {
	return {
		id: request.id,
		sessionFile: request.sessionId,
		entryId: request.entryId,
		folder: request.folder,
		model: request.model,
		provider: request.provider,
		api: request.api,
		timestamp: request.timestamp,
		duration: request.duration,
		ttft: request.ttft,
		stopReason: request.stopReason,
		errorMessage: request.errorMessage,
		usage: request.usage,
		costUnpriced: request.costUnpriced,
	};
}

export function buildOverview(requests, range, now = Date.now()) {
	const scoped = filterRange(requests, range, now);
	const aggregate = aggregateAll(scoped);
	return {
		overall: aggregate.overall,
		byAgentType: aggregate.byAgent,
		timeSeries: timeSeries(scoped, bucketMsOf(range)),
	};
}

export function buildModelDashboard(requests, range, now = Date.now()) {
	const scoped = filterRange(requests, range, now);
	const aggregate = aggregateAll(scoped);
	const bucketMs = bucketMsOf(range);
	return {
		byModel: aggregate.byModel,
		modelSeries: modelSeries(scoped, bucketMs),
		modelPerformanceSeries: modelPerformanceSeries(scoped, bucketMs),
	};
}

export function buildCostDashboard(requests, range, now = Date.now()) {
	return { costSeries: costSeries(filterRange(requests, range, now)) };
}

export function buildFolderStats(requests, range, now = Date.now()) {
	return aggregateAll(filterRange(requests, range, now)).byFolder;
}

export function buildProviderDashboard(requests, range, now = Date.now()) {
	const scoped = filterRange(requests, range, now);
	const aggregate = aggregateAll(scoped);
	return {
		providers: aggregate.byProvider.sort((a, b) => b.totalTokens - a.totalTokens),
		hourly: providerHourly(scoped),
		series: providerSeries(scoped, bucketMsOf(range)),
	};
}

export function buildRecent(requests, limit) {
	return [...requests]
		.sort((a, b) => b.timestamp - a.timestamp)
		.slice(0, limit)
		.map(messageOf);
}

export function buildErrors(requests, range, limit, now = Date.now()) {
	return filterRange(requests, range, now)
		.filter(request => request.stopReason === "error")
		.sort((a, b) => b.timestamp - a.timestamp)
		.slice(0, limit)
		.map(messageOf);
}

export function findRequest(requests, id) {
	const request = requests.find(item => item.id === id);
	if (!request) return null;
	return {
		...messageOf(request),
		messages: [],
		output: null,
	};
}
