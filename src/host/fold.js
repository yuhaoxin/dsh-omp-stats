/**
 * 把一个 DSH 会话日志折叠成 omp-stats 的请求记录。
 *
 * DSH 的计费样本出现在 assistant/message 的 usage 上；失败的模型调用记录在
 * assistant/attempt 的 finish.reason 里。同一个 (turn, step) 可能因为重放或
 * 表面替换出现多条 assistant/message，按“后者覆盖前者”处理，避免重复计数。
 *
 * 时间口径：
 * - duration 取 step/start 到 step/end（缺失时退回到 assistant/message 的时间）。
 * - ttft 取 step/start 到流里第一条文本/推理/工具调用增量。
 */

const SNOWFLAKE = 0x811c9dc5;

function hashId(value) {
	let hash = SNOWFLAKE;
	for (let index = 0; index < value.length; index++) {
		hash ^= value.charCodeAt(index);
		hash = Math.imul(hash, 0x01000193);
	}
	return hash >>> 0;
}

function stepKey(turn, step) {
	return `${turn}:${step}`;
}

function firstTokenTime(stream) {
	let first = null;
	for (const record of stream ?? []) {
		let time = null;
		if (record?.type === "text-chunks" || record?.type === "reasoning-chunks" || record?.type === "tool-call-chunks") {
			time = record.time0;
		} else if (record?.type === "chunk") {
			const type = record.chunk?.type;
			if (type === "text-delta" || type === "reasoning-delta" || type === "tool-call-delta") time = record.time;
		}
		if (typeof time === "number" && time > 0 && (first === null || time < first)) first = time;
	}
	return first;
}

function finishOf(stream) {
	let finish = null;
	for (const record of stream ?? []) {
		if (record?.type === "chunk" && record.chunk?.type === "finish") finish = record.chunk.reason ?? null;
	}
	return finish;
}

function usageOf(raw) {
	const input = Number(raw?.inputTokens ?? 0);
	const output = Number(raw?.outputTokens ?? 0);
	const cacheRead = Number(raw?.cacheReadTokens ?? 0);
	const cacheWrite = Number(raw?.cacheWriteTokens ?? 0);
	const totalTokens = Number(raw?.totalTokens ?? 0) || input + output + cacheRead + cacheWrite;
	return { input, output, cacheRead, cacheWrite, totalTokens };
}

function modelOf(data, fallback) {
	const source = data?.message?.source;
	if (source && source.kind === "model") return { provider: source.provider, model: source.model };
	return fallback;
}

function durationOf(step, eventTime, useStepEnd) {
	if (!step?.startTime) return null;
	const end = useStepEnd && step.endTime ? step.endTime : eventTime;
	const duration = end - step.startTime;
	return duration >= 0 ? duration : null;
}

function ttftOf(step, stream) {
	if (!step?.startTime) return null;
	const first = firstTokenTime(stream);
	if (first === null) return null;
	const ttft = first - step.startTime;
	return ttft >= 0 ? ttft : null;
}

function errorOf(finish, interrupted) {
	if (interrupted) return { stopReason: "aborted", errorMessage: "Interrupted" };
	const kind = finish?.kind ?? "stop";
	if (kind === "error" || kind === "aborted") {
		return { stopReason: kind, errorMessage: finish?.failure?.message ?? kind };
	}
	return { stopReason: kind, errorMessage: null };
}

export function foldSession({ sessionId, header, events, priceUsage }) {
	const steps = new Map();
	const messages = new Map();
	const attempts = [];
	let current = { provider: "unknown", model: "unknown" };
	let title = null;

	const ordered = [...events].sort((a, b) => Number(a.seq) - Number(b.seq));
	for (const event of ordered) {
		const data = event.data ?? {};
		switch (event.type) {
			case "session/title": {
				if (typeof data.title === "string" && data.title.trim()) title = data.title;
				break;
			}
			case "request/header": {
				const config = data.header?.config;
				if (config?.provider) current = { provider: config.provider, model: config.model ?? "unknown" };
				break;
			}
			case "request/context": {
				if (data.provider) current = { provider: data.provider, model: data.model ?? current.model };
				break;
			}
			case "step/start": {
				steps.set(stepKey(data.turn, data.step), {
					startTime: event.time,
					endTime: null,
					provider: current.provider,
					model: current.model,
				});
				break;
			}
			case "step/end": {
				const step = steps.get(stepKey(data.turn, data.step));
				if (step) step.endTime = event.time;
				break;
			}
			case "assistant/message": {
				const key = stepKey(data.turn, data.step);
				const step = steps.get(key);
				const model = modelOf(data, { provider: step?.provider ?? current.provider, model: step?.model ?? current.model });
				if (!data.usage) break;
				messages.set(key, {
					key,
					seq: event.seq,
					time: event.time,
					turn: data.turn,
					step: data.step,
					stream: data.stream,
					usage: data.usage,
					interrupted: data.interrupted === true,
					model,
					step,
				});
				break;
			}
			case "assistant/attempt": {
				const key = stepKey(data.turn, data.step);
				const step = steps.get(key);
				const finish = finishOf(data.stream);
				if (!finish || (finish.kind !== "error" && finish.kind !== "aborted")) break;
				attempts.push({
					key,
					seq: event.seq,
					time: event.time,
					turn: data.turn,
					step: data.step,
					stream: data.stream,
					finish,
					model: { provider: step?.provider ?? current.provider, model: step?.model ?? current.model },
					step,
				});
				break;
			}
			default:
				break;
		}
	}

	const requests = [];
	for (const message of messages.values()) {
		const step = message.step;
		const usage = usageOf(message.usage);
		const priced = priceUsage(message.model.provider, message.model.model, message.usage, message.time);
		const outcome = errorOf(finishOf(message.stream), message.interrupted);
		requests.push({
			id: hashId(`${sessionId}#${message.seq}#message`),
			sessionId,
			entryId: String(message.seq),
			folder: header.cwd ?? "",
			model: message.model.model,
			provider: message.model.provider,
			api: "dsh",
			timestamp: message.time,
			duration: durationOf(step, message.time, true),
			ttft: ttftOf(step, message.stream),
			stopReason: outcome.stopReason,
			errorMessage: outcome.errorMessage,
			usage: {
				input: usage.input,
				output: usage.output,
				cacheRead: usage.cacheRead,
				cacheWrite: usage.cacheWrite,
				totalTokens: usage.totalTokens,
				premiumRequests: 0,
				cost: priced.cost,
			},
			// 失败请求没有可确认的 token 金额，但零成本是“未知”而不是“免费”。
			costUnpriced: priced.unpriced,
			rate: priced.rate,
			agentType: agentTypeOf(header),
		});
	}

	for (const attempt of attempts) {
		const usage = { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, totalTokens: 0 };
		const outcome = errorOf(attempt.finish, false);
		requests.push({
			id: hashId(`${sessionId}#${attempt.seq}#attempt`),
			sessionId,
			entryId: String(attempt.seq),
			folder: header.cwd ?? "",
			model: attempt.model.model,
			provider: attempt.model.provider,
			api: "dsh",
			timestamp: attempt.time,
			duration: durationOf(attempt.step, attempt.time, false),
			ttft: ttftOf(attempt.step, attempt.stream),
			stopReason: outcome.stopReason,
			errorMessage: outcome.errorMessage,
			usage: {
				...usage,
				premiumRequests: 0,
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 },
			},
			costUnpriced: false,
			rate: null,
			agentType: agentTypeOf(header),
		});
	}

	requests.sort((a, b) => a.timestamp - b.timestamp);
	return {
		sessionId,
		header,
		title: title ?? fallbackTitle(header, sessionId),
		folder: header.cwd ?? "",
		agentType: agentTypeOf(header),
		createdAt: header.createdAt ?? 0,
		requests,
	};
}

function agentTypeOf(header) {
	return header.origin === "subagent" || Number(header.delegationDepth ?? 0) > 0 ? "subagent" : "main";
}

function fallbackTitle(header, sessionId) {
	const cwd = String(header.cwd ?? "").replace(/\/+$/u, "");
	const name = cwd.split("/").filter(Boolean).at(-1);
	return name || sessionId.slice(0, 8);
}
