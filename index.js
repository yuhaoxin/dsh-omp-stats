import { API_PREFIX, createApi } from "./src/host/api.js";
import { createStatsState } from "./src/host/state.js";

export const inject = ["sessionQuery", "sessionPersistence", "webServer"];

/**
 * Host 侧入口：读取 DSH 会话并把聚合结果暴露给面板。
 *
 * 路由注册和 SSE 连接都挂在本次 effect 上，插件卸载时一起释放。
 */
export function apply(ctx, config = {}) {
	const state = createStatsState(ctx, config);
	const api = createApi(state);
	ctx.effect(() => {
		const dispose = ctx.webServer.register({
			kind: "prefix",
			path: API_PREFIX,
			handler: api.handler,
		});
		return () => {
			dispose();
			api.close();
		};
	}, "dsh-omp-stats: HTTP API");
}
