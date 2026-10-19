/**
 * API 等价成本估算。
 *
 * 价格表由 oh-my-pi 的 pi-catalog 生成（MIT，见 LICENSES/）：models 是每个模型的
 * 首选公开单价，providers 保留供应商特定单价。DSH 会话日志只记录 token，不记录
 * 金额，所以这里按 1M token 单价估算，用来回答“如果走公开 API 要花多少钱”。
 *
 * 无法匹配价格的请求不按 0 计：调用方用 unpriced 标记，界面显示 N/A 并排除在
 * 金额总计之外。
 */

import { readFileSync } from "node:fs";

const catalog = JSON.parse(readFileSync(new URL("./pricing.json", import.meta.url), "utf8"));

const TOKENS_PER_MILLION = 1_000_000;

function normalizeModel(model) {
	return String(model ?? "")
		.toLowerCase()
		.replace(/^[^/]+\//u, "");
}

function isNonZero(rate) {
	return Boolean(rate && (rate.input || rate.output || rate.cacheRead || rate.cacheWrite));
}

function rateOf(entry) {
	if (!entry) return null;
	return {
		input: Number(entry.input ?? 0),
		output: Number(entry.output ?? 0),
		cacheRead: Number(entry.cacheRead ?? 0),
		cacheWrite: Number(entry.cacheWrite ?? 0),
		timeBased: entry.timeBased,
	};
}

function findProviderRate(provider, model, overrides) {
	const alias = overrides.providerAliases?.[provider] ?? catalog.providerAliases?.[provider] ?? provider;
	const table = overrides.providers?.[alias];
	if (!table) return null;
	const normalized = normalizeModel(model);
	for (const key of [model, normalized]) {
		const rate = rateOf(table[key]);
		if (isNonZero(rate)) return rate;
	}
	for (const [key, entry] of Object.entries(table)) {
		const candidate = normalizeModel(key);
		if (candidate === normalized || candidate.endsWith(`/${normalized}`)) {
			const rate = rateOf(entry);
			if (isNonZero(rate)) return rate;
		}
	}
	return null;
}

function findModelRate(model, overrides) {
	const normalized = normalizeModel(model);
	for (const key of [model, normalized]) {
		const rate = rateOf(overrides.models?.[key]);
		if (isNonZero(rate)) return rate;
		const fallback = rateOf(catalog.models?.[key]);
		if (isNonZero(fallback)) return fallback;
	}
	// 带供应商前缀的模型 id（如 deepseek/deepseek-v4.1-flash）按后缀匹配。
	for (const [key, entry] of Object.entries(catalog.models ?? {})) {
		if (key === normalized || key.endsWith(`/${normalized}`)) {
			const rate = rateOf(entry);
			if (isNonZero(rate)) return rate;
		}
	}
	return null;
}

function isPeak(time, timeBased) {
	if (!timeBased?.peakWindows?.length) return true;
	const date = new Date(time);
	const weekday = date.getUTCDay();
	const minute = date.getUTCHours() * 60 + date.getUTCMinutes();
	return timeBased.peakWindows.some(
		window => window.weekdays?.includes(weekday) && minute >= window.startMinute && minute < window.endMinute,
	);
}

function rateAt(rate, time) {
	if (!rate?.timeBased || isPeak(time, rate.timeBased)) return rate;
	const multiplier = Number(rate.timeBased.offPeakMultiplier ?? 1);
	if (multiplier === 1) return rate;
	return {
		...rate,
		input: rate.input * multiplier,
		output: rate.output * multiplier,
		cacheRead: rate.cacheRead * multiplier,
		cacheWrite: rate.cacheWrite * multiplier,
	};
}

export function createPricing(overrides = {}) {
	const config = {
		providerAliases: { ...(catalog.providerAliases ?? {}), ...(overrides.providerAliases ?? {}) },
		providers: overrides.providers ?? {},
		models: overrides.models ?? {},
	};
	return function priceUsage(provider, model, usage, timestamp = Date.now()) {
		const tokens = {
			input: Number(usage?.inputTokens ?? 0),
			output: Number(usage?.outputTokens ?? 0),
			cacheRead: Number(usage?.cacheReadTokens ?? 0),
			cacheWrite: Number(usage?.cacheWriteTokens ?? 0),
		};
		const totalTokens = Number(usage?.totalTokens ?? 0) || tokens.input + tokens.output + tokens.cacheRead + tokens.cacheWrite;
		const base = findProviderRate(provider, model, config) ?? findModelRate(model, config);
		if (!base) {
			return {
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 },
				unpriced: totalTokens > 0,
				rate: null,
			};
		}
		const rate = rateAt(base, timestamp);
		const cost = {
			input: (tokens.input / TOKENS_PER_MILLION) * rate.input,
			output: (tokens.output / TOKENS_PER_MILLION) * rate.output,
			cacheRead: (tokens.cacheRead / TOKENS_PER_MILLION) * rate.cacheRead,
			cacheWrite: (tokens.cacheWrite / TOKENS_PER_MILLION) * rate.cacheWrite,
		};
		cost.total = cost.input + cost.output + cost.cacheRead + cost.cacheWrite;
		return { cost, unpriced: false, rate: { input: rate.input, cacheRead: rate.cacheRead } };
	};
}

export const pricingSource = catalog.source;
