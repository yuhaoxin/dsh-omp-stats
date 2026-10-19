/**
 * 用真实 DSH 会话日志验证 fold.js 的字段映射。
 * 不依赖 DSH 进程，直接解压 ~/.dsh/sessions 下的 zstd JSONL。
 */

import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";
import { zstdDecompressSync } from "node:zlib";
import { createPricing } from "../src/host/pricing.js";
import { foldSession } from "../src/host/fold.js";

const root = join(homedir(), ".dsh", "sessions");
const priceUsage = createPricing();
const files = [];

function walk(dir) {
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		const stat = statSync(path);
		if (stat.isDirectory()) walk(path);
		else if (name.endsWith(".jsonl.zstd")) files.push(path);
	}
}

walk(root);
let sessions = 0;
let requests = 0;
let failed = 0;
let unpriced = 0;
let tokens = 0;
let cost = 0;
const byModel = new Map();
const failures = [];

for (const file of files) {
	let text;
	try {
		text = zstdDecompressSync(readFileSync(file)).toString("utf8");
	} catch (error) {
		failures.push(`${file}: ${error.message}`);
		continue;
	}
	const lines = text.split("\n").filter(Boolean);
	const header = JSON.parse(lines[0]);
	if (header.type !== "session") {
		failures.push(`${file}: 第一行不是 session`);
		continue;
	}
	const events = [];
	for (const line of lines.slice(1)) {
		try {
			const event = JSON.parse(line);
			if (event.type && typeof event.seq === "number") events.push(event);
		} catch {
			// 忽略截断行；运行中的会话可能正在写。
		}
	}
	const result = foldSession({ sessionId: header.id, header, events, priceUsage });
	sessions++;
	for (const request of result.requests) {
		requests++;
		if (request.stopReason === "error") failed++;
		if (request.costUnpriced) unpriced++;
		tokens += request.usage.totalTokens;
		cost += request.usage.cost.total;
		const key = `${request.provider}/${request.model}`;
		byModel.set(key, (byModel.get(key) ?? 0) + 1);
	}
}

console.log(
	JSON.stringify(
		{
			sessions,
			requests,
			failed,
			unpriced,
			tokens,
			cost: Math.round(cost * 1e6) / 1e6,
			byModel: [...byModel.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12),
			failures: failures.slice(0, 5),
		},
		null,
		2,
	),
);
