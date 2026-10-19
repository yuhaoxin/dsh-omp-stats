/**
 * 插件自己的 HTTP 路由，挂在 /api/omp-stats 下。
 *
 * 这些路由只服务本机回环地址：面板会暴露项目路径、模型和费用，不跟随
 * DSH 的远程访问策略。客户端用同源 fetch 读取，不需要 CORS。
 */

import {
	buildCostDashboard,
	buildErrors,
	buildFolderStats,
	buildModelDashboard,
	buildOverview,
	buildProviderDashboard,
	buildRecent,
	findRequest,
	isTimeRange,
} from "./aggregate.js";

export const API_PREFIX = "/api/omp-stats";
const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 10_000;

function isLoopback(req) {
	const address = req.socket.remoteAddress;
	if (address !== "::1" && address !== "127.0.0.1" && address !== "::ffff:127.0.0.1") return false;
	const rawHost = String(req.headers.host ?? "");
	if (!rawHost) return false;
	const host = rawHost.startsWith("[") ? rawHost.slice(0, rawHost.indexOf("]") + 1) : rawHost.split(":")[0];
	return host === "127.0.0.1" || host === "localhost" || host === "[::1]";
}

function json(res, data, status = 200) {
	const body = JSON.stringify(data);
	res.writeHead(status, {
		"Content-Type": "application/json; charset=utf-8",
		"Cache-Control": "no-store",
	});
	res.end(body);
}

function parseRange(url) {
	const range = url.searchParams.get("range") ?? "24h";
	return isTimeRange(range) ? range : "24h";
}

function parseLimit(url) {
	const raw = Number(url.searchParams.get("limit") ?? DEFAULT_LIMIT);
	if (!Number.isFinite(raw)) return DEFAULT_LIMIT;
	return Math.min(MAX_LIMIT, Math.max(1, Math.trunc(raw)));
}

function openEvents(req, res, state) {
	res.writeHead(200, {
		"Content-Type": "text/event-stream; charset=utf-8",
		"Cache-Control": "no-cache, no-transform",
		Connection: "keep-alive",
		"X-Accel-Buffering": "no",
	});
	res.flushHeaders?.();

	const send = () => {
		if (res.writableEnded) return;
		try {
			res.write(`data: ${JSON.stringify(state.status())}\n\n`);
		} catch {
			// 客户端已经断开，close 清理会处理。
		}
	};
	send();
	const timer = setInterval(send, 5_000);
	const unsubscribe = state.subscribe(send);

	return {
		close() {
			clearInterval(timer);
			unsubscribe();
			if (!res.writableEnded) res.end();
		},
	};
}

export function createApi(state) {
	const clients = new Set();

	const handler = async (req, res) => {
		try {
			if (!isLoopback(req)) {
				json(res, { error: "omp-stats only serves loopback clients" }, 403);
				return;
			}
			const url = new URL(req.url ?? "/", "http://localhost");
			const path = url.pathname.startsWith(API_PREFIX) ? url.pathname.slice(API_PREFIX.length) || "/" : null;
			if (path === null) {
				json(res, { error: "not found" }, 404);
				return;
			}

			if (path === "/events") {
				if (req.method !== "GET") {
					json(res, { error: "method not allowed" }, 405);
					return;
				}
				const client = openEvents(req, res, state);
				clients.add(client);
				req.on("close", () => {
					clients.delete(client);
					client.close();
				});
				state.ensureScan().catch(() => {});
				return;
			}

			if (path === "/status") {
				if (req.method !== "GET") {
					json(res, { error: "method not allowed" }, 405);
					return;
				}
				state.ensureScan().catch(() => {});
				json(res, state.status());
				return;
			}

			if (path === "/sync") {
				if (req.method !== "POST") {
					json(res, { error: "method not allowed" }, 405);
					return;
				}
				await state.ensureScan(true);
				json(res, state.status());
				return;
			}

			if (req.method !== "GET") {
				json(res, { error: "method not allowed" }, 405);
				return;
			}

			const requests = await state.getRequests();
			const range = parseRange(url);
			const limit = parseLimit(url);

			if (path === "/stats/overview") {
				json(res, buildOverview(requests, range));
				return;
			}
			if (path === "/stats/model-dashboard") {
				json(res, buildModelDashboard(requests, range));
				return;
			}
			if (path === "/stats/costs") {
				json(res, buildCostDashboard(requests, range));
				return;
			}
			if (path === "/stats/folders") {
				json(res, buildFolderStats(requests, range));
				return;
			}
			if (path === "/stats/providers") {
				json(res, buildProviderDashboard(requests, range));
				return;
			}
			if (path === "/stats/provider-windows") {
				// DSH 没有订阅窗口快照；返回空集合让供应商页只展示本地用量。
				json(res, { windowInsights: [], usageSeries: [] });
				return;
			}
			if (path === "/stats/recent") {
				json(res, buildRecent(requests, limit));
				return;
			}
			if (path === "/stats/errors") {
				json(res, buildErrors(requests, range, limit));
				return;
			}
			if (path.startsWith("/request/")) {
				const id = Number(path.slice("/request/".length));
				if (!Number.isFinite(id)) {
					json(res, { error: "invalid request id" }, 400);
					return;
				}
				const details = findRequest(requests, id);
				if (!details) {
					json(res, { error: "request not found" }, 404);
					return;
				}
				json(res, details);
				return;
			}

			json(res, { error: "not found" }, 404);
		} catch (error) {
			console.error("[dsh-omp-stats] request failed", error);
			if (!res.headersSent) json(res, { error: error instanceof Error ? error.message : String(error) }, 500);
			else if (!res.writableEnded) res.end();
		}
	};

	return {
		handler,
		close() {
			for (const client of clients) client.close();
			clients.clear();
		},
	};
}
