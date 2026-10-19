/**
 * 会话扫描与缓存。
 *
 * 只缓存每个会话折叠后的请求记录，不保留原始事件；会话日志增长时按
 * sessionPersistence 的 revision 判断是否需要重读。第一次扫描会读取全部会话，
 * 之后只有变化的会话重新解析。
 */

import { createPricing } from "./pricing.js";
import { foldSession } from "./fold.js";

const DEFAULT_REFRESH_SECONDS = 10;

function clampRefresh(value) {
	const seconds = Number(value);
	if (!Number.isFinite(seconds)) return DEFAULT_REFRESH_SECONDS;
	return Math.min(300, Math.max(1, Math.round(seconds)));
}

async function mapLimit(items, limit, worker) {
	const results = new Array(items.length);
	let next = 0;
	const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
		for (;;) {
			const index = next++;
			if (index >= items.length) return;
			results[index] = await worker(items[index], index);
		}
	});
	await Promise.all(runners);
	return results;
}

function emptySession(header, priceUsage) {
	return foldSession({ sessionId: header.id, header, events: [], priceUsage });
}

export function createStatsState(ctx, config = {}) {
	const priceUsage = createPricing(config.pricing ?? {});
	const refreshMs = clampRefresh(config.refreshSeconds) * 1000;
	const cache = new Map();
	const clients = new Set();

	let requests = [];
	let version = 0;
	let lastScanAt = 0;
	let lastSyncedAt = null;
	let lastError = null;
	let scanning = null;
	let progress = { current: 0, total: 0 };
	let totalRequests = 0;

	function status() {
		return {
			version,
			sync: {
				phase: scanning ? "syncing" : lastError ? "error" : "idle",
				current: progress.current,
				total: progress.total,
				processed: totalRequests,
				lastSyncedAt,
				error: lastError,
			},
			indexingHours: 0,
		};
	}

	async function scan() {
		const startedAt = Date.now();
		const snapshots = await ctx.sessionPersistence.list();
		const liveIds = new Set();
		const errors = [];
		let changed = false;
		progress = { current: 0, total: snapshots.length };

		await mapLimit(snapshots, 3, async snapshot => {
			const header = snapshot.header;
			const id = header.id;
			liveIds.add(id);
			progress.current++;
			if (snapshot.formatStatus === "migration-required") {
				errors.push(`${id}: 会话格式需要迁移`);
				return;
			}
			const revision = String(snapshot.revision);
			const cached = cache.get(id);
			if (cached && cached.revision === revision) return;
			if (snapshot.eventCount === 0) {
				cache.set(id, { revision, aggregate: emptySession(header, priceUsage) });
				changed = true;
				return;
			}
			try {
				const log = await ctx.sessionQuery.readSession(id);
				const aggregate = foldSession({
					sessionId: id,
					header: log.session,
					events: log.events,
					inheritedEventCount: Number(log.inheritedEventCount ?? 0),
					priceUsage,
				});
				cache.set(id, { revision, aggregate });
				changed = true;
			} catch (error) {
				errors.push(`${id}: ${error instanceof Error ? error.message : String(error)}`);
				// 读取失败的会话保留上一次结果；没有旧结果时下一轮重试，不缓存空快照。
			}
		});

		for (const id of cache.keys()) {
			if (!liveIds.has(id)) {
				cache.delete(id);
				changed = true;
			}
		}

		requests = [...cache.values()].flatMap(entry => entry.aggregate.requests);
		totalRequests = requests.length;
		lastSyncedAt = Date.now();
		lastScanAt = startedAt;
		lastError = errors.length > 0 ? (errors.length === 1 ? errors[0] : `${errors.length} 个会话读取失败：${errors[0]}`) : null;
		if (changed || version === 0) version++;
		for (const client of clients) client();
	}

	function ensureScan(force = false) {
		if (scanning) return scanning;
		if (!force && Date.now() - lastScanAt < refreshMs) return Promise.resolve();
		if (!force && lastError && Date.now() - lastScanAt < 30_000) return Promise.resolve();
		scanning = scan()
			.catch(error => {
				lastError = error instanceof Error ? error.message : String(error);
				lastScanAt = 0;
			})
			.finally(() => {
				scanning = null;
			});
		return scanning;
	}

	return {
		status,
		ensureScan,
		getRequests: async () => {
			await ensureScan();
			return requests;
		},
		findRequest: id => requests.find(request => request.id === id) ?? null,
		subscribe(client) {
			clients.add(client);
			return () => clients.delete(client);
		},
		close() {
			for (const client of clients) client();
			clients.clear();
		},
	};
}
