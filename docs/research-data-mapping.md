# DSH 会话事件到 omp-stats 的字段映射与客户端构建

研究 ticket：`yuhaoxin/dsh-omp-stats#2`。对象是 DSH 0.2.1-rc.2（Desktop `app.asar/dsh`）与
`@oh-my-pi/omp-stats` 18.12.1 的源码。文中行号以研究时的文件为准；DSH 包内路径都在
`/Applications/DeepSeek Harness.app/Contents/Resources/app.asar/dsh/node_modules/@deepseek-ai/` 下。

## 0. 结论

1. `MessageStats` 的 15 个字段里，12 个能直接映射或从事件推导；`cost` 没有 DSH 来源，只能按
   价目表估算并标 `unpriced`；`serviceTier`、`premiumRequests` 没有来源；`sessionFile` 与 `id`
   是身份字段，必须用 DSH 的键替代。
2. 成功调用只记在 `assistant/message`；失败调用只记在 `assistant/attempt`。每次 `attempt` 都是一次
   真实模型调用，不能按 `(turn, step)` 合并。`turn/end` 不能生成请求行，否则和 `attempt` 重复计数。
3. `duration` 与 `ttft` 都是计算值。唯一可靠的请求起点是 `step/start`（该 step 的第一次尝试）或
   `llm/retry-started`（重试）。不能用 `step/end` 作终点：样本中 `assistant/message` 到 `step/end`
   的间隔 p90 为 8.0 秒、p99 为 240 秒、最大 18 分钟，那段时间主要是工具执行。
4. omp 的 7 个页面调用 9 个只读端点（另有 `/status`、`/sync`、`/events` 和 `/request/:id`）。omp
   服务器读自己的 SQLite（`~/.omp/stats.db`），不能直接复用；可行路径是在 DSH Host 侧重算同样的
   JSON 形状，客户端只把 `API_BASE` 指向 `/api/omp-stats`。
5. 客户端构建用 Bun 输出 CJS，再包进 `window.__ModuleLoader__.load({ id, factory })`；React 由宿主
   模块表提供，必须 external。构建时固定 `NODE_ENV=production`，否则产物引用
   `react/jsx-dev-runtime`，宿主表不保证提供。
6. CSS 放进 shadow root 隔离，变量映射到 `--dsw-alias-*`。omp 源码有三处全局副作用必须在集成时
   处理：模块加载时改 `document.documentElement.dataset.theme`、hash 路由改页面 URL、`Shell` 用
   `window.scrollTo`。
7. Providers 页的订阅窗口整块没有 DSH 来源，必须隐藏；Costs 页只有在价目表命中时才有金额，
   未命中显示 N/A 并排除在合计外。

## 1. 数据来源与读取路径

### 1.1 `sessionQuery.readSession()`

Host 服务契约（`cordis_inspect_query`，host `Service.sessionQuery`）：

```ts
readSession(sessionId: SessionId): Promise<SessionLogSnapshot>

interface SessionLogSnapshot {
  session: SessionHeader
  inheritedEventCount: SessionLogOffset
  events: SessionEvent[]
}

interface SessionHeader {
  version: number
  id: SessionId
  createdAt: number
  cwd?: string
  parentSession?: SessionId
  isSeeded: boolean
  origin?: 'subagent'
  delegationDepth?: number
  agentPreset?: string
}
```

`events` 是从 seq 0 开始的完整原始日志，已经过 replay 校验；读取不会把会话变成 live。读取失败
（持久化错误、头部不兼容、replay 校验失败）会 reject，调用方要逐会话隔离失败。

`SessionEvent` 的包络是 `{ type, seq, time, data, ignorable? }`。`time` 是毫秒时间戳，统计一律以它
为准，不要用 `seq` 估算时间。

### 1.2 会话枚举与增量

两种入口：

- `sessionQuery.listSessions(): Promise<SessionRecord[]>`：live + persisted 的逻辑全集，返回
  `{ header, live, persisted, formatStatus? }`，无 revision。
- `sessionPersistence.list(): Promise<SessionPersistenceSnapshot[]>`：每个已存储会话带
  `revision`、`eventCount`、`sizeBytes`，用于跳过未变化的会话。revision 只在同一服务实例内可比
  （`dsh-session-persistence-jsonl` README 第 85-87 行）。

全量扫描 75 个会话会解码并校验全部日志，首次成本高；后续按 revision 只读变化会话。只保留折叠后
的请求记录，不缓存原始事件。

### 1.3 磁盘布局与身份

`dsh-session-persistence-jsonl` README 第 57-73 行给出布局：

```text
<root>/--<normalized-cwd>--/<encoded-id>/session.v4.jsonl.zstd
```

`readSession`、`SessionRecord`、`SessionPersistenceSnapshot` 都不暴露这个路径。因此：

- `sessionFile` 用 `sessionId`，不要伪造路径；
- `entryId` 用 `String(seq)`；
- 需要展示文件位置时，展示 `header.cwd` 加 session id，不要拼 `~/.dsh/sessions/...`。

### 1.4 事件速查

`SessionEventMap` 来自 `cordis_inspect_query`（host `sessionQuery` / `sessions`），语义说明见
`dsh-session` README 第 100-104、131 行。

| 事件 | `data` 关键字段 | 可用于 | 不能用于 |
|---|---|---|---|
| `assistant/message` | `turn`、`step`、`message`、`stream`、`usage?`、`interrupted?` | 成功请求、token、模型、结束原因 | 失败请求（失败不写这个事件） |
| `assistant/attempt` | `turn`、`step`、`stream` | 失败/重试/取消的模型调用 | 会话历史；它不进模型上下文 |
| `step/start` | `turn`、`step` | 首次尝试的请求起点 | 任何计费字段 |
| `step/end` | `turn`、`step` | 兜底终点 | LLM 延迟（含工具执行） |
| `turn/end` | `turn`、`reason` | 终态对账、取消归因 | 请求行；会与 `attempt` 重复 |
| `request/header` | `header.config.provider/model`、`reason`、`startsSeries?` | 失败调用的 provider/model | 每 step 的模型；它是 epoch 快照 |
| `request/context` | `provider`、`model`、`contextWindow` | 同上，变更时追加 | 每 step 的模型 |
| `llm/retry` | `provider`、`failure`、`retry`、`delayMs` | 失败调用的 provider、重试次数 | 模型名 |
| `llm/retry-started` | `retryId`、`retry` | 重试尝试的请求起点 | 计费 |
| `tool/call` / `tool/result` | `callId`、`name`、`arguments` / `isError` | Tools 页、详情抽屉 | 首版 7 页的统计 |

`request/header` 是循环实例边界和配置变化时的完整快照，同 series 的后续 step 和重试继承最近一份
（`dsh-session` README 第 104 行）。实测一个 330 步的会话只有 3 条 `request/header`，不能当逐 step
元数据用。

### 1.5 抽样实测

样本：按文件大小取 12 个会话（`/Users/yuhaoxin/.dsh/sessions/**/session.v4.jsonl.zstd`，
典型文件 `--Users-yuhaoxin-Projects-mums-suite-MUMS--/session-a0d64cc7-464b-4bb7-90f5-9ed6ebb5dbf1/`）。

| 观测 | 结果 |
|---|---|
| `assistant/message` | 1622 条，全部带 `usage`，全部有 `finish` chunk |
| `assistant/attempt` | 81 条，finish 全部是 `error`（TIMEOUT / RATE_LIMIT / TRANSPORT / SERVER） |
| 同一会话内重复 `(turn, step)` 的 message | 0 |
| 同一 step 的 attempt | 最多 6 次（重试） |
| `interrupted: true` 的 message | 0 |
| `replayState.response.api/stopReason` 缺失 | 684 / 1622 |
| finish chunk 的 kind | `tool-calls` 1590，`stop` 32 |
| `request/header` | 24 条 / 12 个会话 |

`assistant/attempt` 可以没有 `usage` chunk（30/81），也可以只有全零 usage（51/81）。失败调用的
token 在样本中始终为 0。

## 2. `MessageStats` 字段映射

omp 定义：`src/types.ts` 第 9-54 行（服务端），`src/client/types.ts` 第 43-59 行（客户端）。

| omp 字段 | DSH 来源 | 状态 | 规则 |
|---|---|---|---|
| `id` | 无数据库行号 | 推导 | 见 2.7；首版可不依赖 |
| `sessionFile` | `SessionHeader.id` | 替代 | 用 sessionId，不拼路径 |
| `entryId` | `SessionEvent.seq` | 有 | `String(seq)`；attempt 用 attempt 的 seq |
| `folder` | `SessionHeader.cwd` | 有 | 绝对项目路径；subagent 与父会话同 cwd |
| `model` | `message.source.model` → 最近 `request/header.config.model` → 最近 `request/context.model` | 有 | 见 2.4 |
| `provider` | 同上（`source.provider` / `config.provider` / `context.provider`） | 有 | 见 2.4 |
| `api` | `message.source.replayState.response.api` | 部分 | 684/1622 缺失；缺失时 `"unknown"`，不要写 `"dsh"` |
| `timestamp` | 事件 `time` | 有 | 毫秒 epoch |
| `duration` | 计算 | 推导 | 见 2.3 |
| `ttft` | 计算 | 推导 | 见 2.3；失败 attempt 为 `null` |
| `stopReason` | `finish` chunk 的 `reason.kind` | 有 | 映射见 2.5 |
| `errorMessage` | `reason.failure.message` | 有 | 成功为 `null` |
| `usage` | `assistant/message.data.usage`；attempt 取 stream 里最后一个 `usage` chunk | 有 | 映射见 2.6 |
| `agentType` | `origin === 'subagent'` 或 `delegationDepth > 0` | 推导 | 只有 `main`/`subagent`；`advisor` 无来源 |
| `serviceTier` | 无 | 无 | 置 `null` |
| `costUnpriced` | 价目表匹配结果 | 推导 | 有 token 但无价格时为 `true` |
| `usage.premiumRequests` | 无 | 无 | 置 `0`，对应列隐藏 |

### 2.1 成功请求：`assistant/message`

一条 message 对应一次成功（或已中断）的模型调用。取 `data.usage`；没有 `usage` 的 message 不生成
计费行，但要计入“调用发生过”的计数（见 2.8），否则错误率会失真。同一 `(turn, step)` 出现多条
message 时，后出现的覆盖先出现的（surface 替换/重放），不要累加。样本内没有这种重复，规则仍要
保留，因为 `surfaceOp: replace` 合法。

### 2.2 失败请求：`assistant/attempt`

`dsh-session` README 第 100 行：每次到达终态的模型尝试提交一个事件，成功写
`assistant/message`，失败、被重试、被取消、流错误的尝试写 `assistant/attempt`，且不进入模型历史。

处理规则：

- 只看 `finish.kind === "error"` 或 `"aborted"` 的 attempt；正常 finish 的 attempt 不作为请求行。
- 每条 attempt 单独成行，不按 step 去重。一个 step 重试 5 次就是 5 条失败记录加 1 条成功记录。
- `usage` 取 stream 中最后一个 `usage` chunk；没有就是全零。样本中失败调用的 usage 全为零，
  所以失败行的 cost 为零，且不标 `unpriced`（零 token 不是未知花费）。
- `provider` 优先用紧随其后的 `llm/retry.data.provider`；没有就用最近 header/context。`model` 只能
  用最近 header/context，`llm/retry` 不带模型名。
- `duration` 的终点是 attempt 的 `time`，起点见 2.3。失败行的 `ttft` 为 `null`，因为流里没有
  内容增量。

### 2.3 `duration` 与 `ttft`

omp 的这两个值来自 provider 响应自带的 `duration`/`ttft`（`src/parser.ts` 第 293-294 行），DSH
没有对应字段，只能从事件时间推导。

请求起点：

- step 的第一次尝试：`step/start.time`；
- 重试：最近的 `llm/retry-started.time`（同一 `(turn, step)`）；
- 找不到起点：`null`。

计算：

```text
duration(success) = assistant/message.time - requestStart
duration(attempt) = assistant/attempt.time - requestStart
ttft(success)     = 第一条内容增量.time - requestStart
ttft(attempt)     = null
```

“第一条内容增量”取 stream 中最早的 `time0`（`text-chunks`、`reasoning-chunks`、
`tool-call-chunks`）或最早的内容 `chunk.time`（`text-delta`、`reasoning-delta`、`tool-call-delta`）。
`block-start`、`block-end`、`usage`、`finish` 不算 token。

不要用 `step/end`：

| 口径 | p50 | p90 | p99 | max |
|---|---|---|---|---|
| `step/start` → `assistant/message.time` | 8.8s | 23.8s | — | — |
| `assistant/message.time` → `step/end`（多算的部分） | 0.07s | 8.0s | 240s | 1093s |

后一段主要是工具执行，把它算进 LLM 延迟会污染 Models/Providers/Overview 的 Avg latency 和 Tokens/s。
`step/end` 只在 message 缺少时间时兜底。

TTFT 也受起点影响：从 `step/start` 起算会把上下文准备和 TTFB 算进去。这是 DSH 能给出的最接近值，
UI 上应保留“约”的含义，不要宣称是 provider 精确值。

### 2.4 provider / model 解析顺序

1. `assistant/message.data.message.source`（`kind: 'model'` 时取 `provider`、`model`）。
2. 事件之前最近的 `request/header.data.header.config`。
3. 事件之前最近的 `request/context`（`provider`、`model`、`contextWindow`）。
4. 对失败 attempt，可再取紧随的 `llm/retry.data.provider` 补 provider。
5. 仍没有就写 `"unknown"`，不要拿别的会话的值填补。

实测 12 个会话里，所有 message 和 attempt 都能由前 3 条规则解析出 provider/model。

### 2.5 `stopReason`

`FinishReason`（`StreamChunk.finish.reason`）映射：

| DSH kind | omp `StopReason` |
|---|---|
| `stop` | `stop` |
| `tool-calls` | `toolUse` |
| `max-tokens` | `length` |
| `aborted` | `aborted` |
| `error` | `error` |

fallback 顺序：finish chunk → `message.source.replayState.response.stopReason`（pi-ai 的
`stop`/`toolUse`/`length`/`error`/`aborted`，按同表映射）→ 有 `errorMessage` 时 `error`，否则
`aborted`（与 omp parser 第 297 行的保底一致）。`interrupted: true` 的 message 记 `aborted`。

`errorMessage` 取 `reason.failure.message`；`failure.code`（TIMEOUT、RATE_LIMIT、TRANSPORT、
SERVER）不进 `errorMessage`，但可以作为 Errors 页分组或调试字段附加。

### 2.6 token usage

```text
input       = usage.inputTokens
output      = usage.outputTokens
cacheRead   = usage.cacheReadTokens ?? 0
cacheWrite  = usage.cacheWriteTokens ?? 0
totalTokens = usage.totalTokens ?? input + output + cacheRead + cacheWrite
premiumRequests = 0
```

DSH 的 `inputTokens` 是不含 cache read 的未缓存输入：样本里
`10556 + 185 + 10112 = 20853 = totalTokens`，所以四个桶直接对应 omp 的
`input`/`output`/`cacheRead`/`cacheWrite`，不需要再拆。`totalTokens` 存在时以它为准，避免重复计算
cache write。

`cacheRate = cacheRead / (input + cacheRead)`，与 omp README 第 17 行、`rollup.ts` 第 589-592 行
一致。`cacheSavings` 需要单价，见 2.7。

### 2.7 cost

omp 在入库时用 pi-catalog 的公开单价把 token 算成金额，存 `cost_input`/`cost_output`/
`cost_cache_read`/`cost_cache_write`/`cost_total`，`unpriced` 单独标记（`rollup.ts` 第 76-110 行，
`db.ts` 第 933-997 行）。DSH 事件只有 token，没有金额。

可行方案（当前仓库已采用）：

- `src/host/pricing.json`：由 `@oh-my-pi/pi-catalog` 18.12.1 生成，MIT，1690 个模型、13 个 provider、
  provider alias 和分时价；来源字段 `source`/`generatedAt` 写在文件里。
- `src/host/pricing.js` 第 99-131 行：先按 provider 表，再按模型 id（含去前缀和后缀匹配）找单价，
  用事件时间选择峰谷价，按 1M token 计算四个分量。
- 找不到单价且 `totalTokens > 0`：`cost` 全零、`unpriced: true`。UI 显示 N/A，不计入合计。
  找不到单价且 token 为 0：零成本是真实零，不标 unpriced。

注意：

- 这是 API 等价估算，不是账单。网关（如样本里的 `aiflashapi`）没有专属单价时，会按同名模型
  的公开价估算，必须在 UI 上保留 “API-equivalent” 措辞。
- 分时价必须用请求时间，不能用扫描时间。
- 不要给失败的空 usage 行标 unpriced。

### 2.8 计数口径

omp 的 `failed` 是 `stop_reason = 'error'` 的行数（`rollup.ts` 第 81 行），`successfulRequests =
totalRequests - failedRequests`，aborted 被算进 successful（`rollup.ts` 第 583-584 行）。

DSH 侧建议：

- `totalRequests` = 成功 message 行 + 失败 attempt 行（每次真实模型调用都算一次）；
- `failedRequests` = `stopReason === 'error'` 的行，包括失败的 attempt；
- `aborted` 单独统计，不并入 failed；
- 一个 step 重试 5 次时，该 step 贡献 5 条失败 + 1 条成功。错误率因此反映 provider 调用成功率，
  而不是“步骤成功率”。这一点要在 UI 文案或文档里说清。

### 2.9 去重、fork 与 agentType

- `assistant/message` 按 `(sessionId, turn, step)` 后者覆盖前者；`assistant/attempt` 不去重。
- `inheritedEventCount` 大于 0 表示这是 fork/seed 会话，seq 小于它的前缀是从父会话复制的。统计时
  跳过这段，否则父子的 token 和 cost 会翻倍。父会话文件没有删除 API，跳过不会丢数据。
- `agentType`：`origin === 'subagent'` 或 `delegationDepth > 0` 记 `subagent`，其余 `main`。
  DSH 没有 advisor 会话，`advisor` 分支永远不会出现。

## 3. 首版 7 页的 API 与字段

### 3.1 总体关系

omp 客户端函数在 `src/client/api.ts`，页面在 `src/client/routes/*.tsx`，响应类型在
`src/shared-types.ts` 与 `src/client/types.ts`。DSH 插件在 `/api/omp-stats` 下提供同名形状，客户端
只改 `API_BASE`。

| omp 客户端函数 | HTTP 端点 | 响应类型 |
|---|---|---|
| `getOverviewStats`（api.ts 第 84-88 行） | `GET /api/stats/overview?range=` | `OverviewStats` |
| `getModelDashboardStats`（第 90-97 行） | `GET /api/stats/model-dashboard?range=` | `ModelDashboardStats` |
| `getProviderDashboardStats`（第 181-188 行） | `GET /api/stats/providers?range=` | `ProviderDashboardStats` |
| `getProviderWindowStats`（第 191-199 行） | `GET /api/stats/provider-windows?range=&provider=` | `ProviderWindowStats` |
| `getCostDashboardStats`（第 99-104 行） | `GET /api/stats/costs?range=` | `CostDashboardStats` |
| `getRecentRequests`（第 106-108 行） | `GET /api/stats/recent?limit=` | `MessageStats[]` |
| `getRecentErrors`（第 110-118 行） | `GET /api/stats/errors?range=&limit=` | `MessageStats[]` |
| `getFolderStats`（第 160-162 行） | `GET /api/stats/folders?range=` | `FolderStats[]` |
| `getRequestDetails`（第 120-122 行） | `GET /api/request/:id` | `RequestDetails` |
| `requestSync`（第 125-127 行） | `POST /api/sync` | `LiveStatus` |
| `LiveProvider`（`data/live.tsx` 第 102 行） | `GET /api/events`（SSE） | `LiveStatus` |

`GET /status` 也由客户端的状态加载使用；DSH 侧复用同一个 `LiveStatus` 形状。

### 3.2 Overview

调用：`getOverviewStats(range)` + `getRecentRequests(12)`（`OverviewRoute.tsx` 第 65-66 行）。

需要：

- `overall`：`totalRequests`、`successfulRequests`、`failedRequests`、`errorRate`、
  `totalInputTokens`、`totalOutputTokens`、`totalCacheReadTokens`、`totalCacheWriteTokens`、
  `cacheRate`、`cacheSavings`、`totalCost`、`unpricedRequests`、`totalPremiumRequests`、
  `avgDuration`、`avgTtft`、`avgTokensPerSecond`、`firstTimestamp`、`lastTimestamp`；
- `byAgentType`：`agentType`、四个 token 桶、`totalRequests`、`totalCost`；
- `timeSeries`：`timestamp`、`requests`、`errors`、`tokens`、`cost`；
- 最近 12 条请求的 `model`、`provider`、`timestamp`、`usage.totalTokens`、`usage.cost.total`、
  `duration`、`errorMessage`。

DSH 状态：除 cost、`cacheSavings`（都依赖单价）和 `premiumRequests` 外都有。`byAgentType` 只有
main/subagent 两段。TimeSeries 的桶宽：1h→5 分钟，24h→1 小时，7d/30d/90d/all→1 天
（`data/range.ts`）。

### 3.3 Models

调用：`getModelDashboardStats(range)`（`ModelsRoute.tsx` 第 63 行）。

需要：

- `byModel[]`：`model`、`provider` + 全部 `AggregatedStats`；
- `modelSeries[]`：`timestamp`、`model`、`provider`、`requests`；
- `modelPerformanceSeries[]`：`timestamp`、`model`、`provider`、`requests`、`avgTtft`、
  `avgTokensPerSecond`。

DSH 状态：全部可算；延迟和吞吐为推导值。成本/缓存节省按 2.7。

### 3.4 Providers

调用：`getProviderDashboardStats(range)`、`getProviderWindowStats(range, null)`，选中 provider 后
再调一次 `getProviderWindowStats(range, provider)`（`ProvidersRoute.tsx` 第 78、87、95 行）。

需要：

- `providers[]`：`provider`、`totalRequests`、`failedRequests`、`models`、四个 token 桶、
  `totalTokens`、`totalCost`、`unpricedRequests`、`totalPremiumRequests`、`avgTokensPerSecond`；
- `hourly[]`：`provider`、`hour`（本地 0-23）、`totalTokens`、`outputTokens`、`requests`；
- `series[]`：`timestamp`、`provider`、`totalTokens`、`cost`、`unpricedRequests`、`requests`；
- `windowInsights[]`、`usageSeries[]`：订阅窗口。

DSH 状态：前三个数组可算；`hour` 用本地时区分桶。`windowInsights`/`usageSeries` 没有来源，返回空
数组并隐藏 “Subscription windows / Window utilization” 两张卡。`totalPremiumRequests` 为 0，
“Premium” 列应隐藏或显示 0。

### 3.5 Costs

调用：`getCostDashboardStats(range)`（`CostsRoute.tsx` 第 65 行）。

需要：`costSeries[]` 的 `timestamp`、`model`、`provider`、`cost`、`unpricedRequests`、
`costInput`、`costOutput`、`costCacheRead`、`costCacheWrite`、`requests`。服务端按 UTC 日分桶
（`CostsRoute.tsx` 第 45 行）。

DSH 状态：token 部分有；金额完全依赖价目表。无价目表时：

- 保留页面，但 `totalCost` 全零、`unpricedRequests = 有 token 的请求数`；
- “Top model”“Per priced request”“Average per day” 的金额显示 N/A 或 “–”；
- 不要显示 `$0.00` 让用户以为是免费。

### 3.6 Requests

调用：`getRecentRequests(limit)`，limit 为 500/2000/10000（`RequestsRoute.tsx` 第 43、50 行），按
`timestamp` 在客户端裁剪到所选 range。

需要：`id`、`sessionFile`、`entryId`、`folder`、`model`、`provider`、`timestamp`、`duration`、
`ttft`、`stopReason`、`errorMessage`、`usage.*`、`costUnpriced`。

DSH 状态：除 `id`、`sessionFile`、cost 外都有。`id` 见 2.7；详情抽屉的
`GET /request/:id` 需要把 id 映射回 `(sessionId, seq)`。首版更简单的做法是抽屉直接用列表行数据，
不请求 `/request/:id`；`RequestDetails.messages`（完整对话）没有现成来源，`output` 可以用
`message.content` 代替。

### 3.7 Errors

调用：`getRecentErrors(range, limit)`（`ErrorsRoute.tsx` 第 47 行）。

需要：`timestamp`、`model`、`provider`、`folder`、`errorMessage`、`usage.totalTokens`、
`usage.cost.total`、`stopReason`。错误签名由 `errorMessage` 归一化得到（`data/view-models.ts`
第 320 行以后），不需要额外字段。

DSH 状态：全部有；失败 attempt 的 `folder` 来自会话 header，`errorMessage` 来自
`finish.failure.message`。RATE_LIMIT/TIMEOUT/TRANSPORT 已经在样本中出现，Errors 页可以直接展示。

### 3.8 Projects

调用：`getFolderStats(range)`（`ProjectsRoute.tsx` 第 46 行）。

需要：`folder` + 全部 `AggregatedStats`（请求、失败、四个 token 桶、cacheRate、cacheSavings、
totalCost、unpricedRequests、avgDuration、avgTtft、first/lastTimestamp）。

DSH 状态：`folder = cwd`；subagent 会话与父会话 cwd 相同，会自然合并进同一个项目。cost 同上。

### 3.9 置空/隐藏清单

| 位置 | 字段 | 处理 |
|---|---|---|
| 全部页面 | `usage.cost.*`、`totalCost`、`avgDailyCost` | 有价目表则估算；否则 0 + unpriced，金额列显示 N/A |
| 全部页面 | `cacheSavings` | 无单价时为 0 / N/A，不显示百分比 |
| 全部页面 | `totalPremiumRequests`、`premiumRequests` | 0，隐藏 Premium 列 |
| 全部页面 | `serviceTier` | 不写入；客户端类型里可省略 |
| Providers | `windowInsights`、`usageSeries` | 返回 `{ windowInsights: [], usageSeries: [] }`，隐藏两张卡 |
| Requests/Errors 抽屉 | `RequestDetails.messages` | 不提供；抽屉不渲染完整对话 |
| 详情 | `sessionFile` 真实路径 | 用 sessionId |
| Overview | byAgentType 的 advisor 段 | 永不出现 |

## 4. 客户端构建与主题接入

### 4.1 包声明

```json
{
  "name": "dsh-omp-stats",
  "type": "module",
  "exports": { ".": "./index.js", "./client": "./client.js", "./locale/*.json": "./locale/*.json", "./icon": "./icon.svg" },
  "dsh": {
    "bundle": { "patch": "./cordis.patch.yml" },
    "client": { "platform": "web", "immediately": true, "inject": [] }
  }
}
```

`dsh.client` 只声明平台、加载时机和激活顺序；`inject` 里的包名只影响激活顺序，不是模块依赖
（`dsh-client-modules` README 第 32-38、50 行）。`client.js` 必须在启动前构建好，缺文件会激活失败
（README 第 52-54 行）。

### 4.2 构建

omp 自己的构建是 `Bun.build` 打包 `src/client/index.tsx`，挂到 `#root`（`build.ts` 第 5-16 行）。
DSH 版本要把入口换成导出 `apply`/`inject` 的 `entry.tsx`，并固定生产 JSX：

```bash
cd /Users/yuhaoxin/Projects/GitHub/dsh-omp-stats
NODE_ENV=production bun build src/client/entry.tsx \
  --outfile /tmp/omp-client.cjs \
  --format=cjs \
  --target=browser \
  --minify \
  --external react \
  --external react-dom \
  --external react-dom/client \
  --external react/jsx-runtime \
  --external react/jsx-dev-runtime
```

必须 external 的运行时模块：`react`、`react-dom`、`react-dom/client`、`react/jsx-runtime`。这些在
宿主模块表里；`@deepseek-ai/dsh-client-ui-primitives` 不要 require，按 `practices.md` 的 UI 规则
自己实现控件。

`NODE_ENV=production` 不是可选项：默认构建会引用 `react/jsx-dev-runtime`，宿主表不保证有这一项。
构建后检查：

```bash
grep -o 'require("[^"]*")' /tmp/omp-client.cjs | sort -u
```

输出里只能出现上面四个模块（或宿主已注册的包），不能出现 `react/jsx-dev-runtime`、`node:*`。

### 4.3 `window.__ModuleLoader__.load` 包装

工厂协议来自 `dsh-client-modules` README 第 70-72 行：执行 bundle 只注册工厂，模块体副作用在
`factory(require)` 首次物化时运行。已安装插件的写法可以直接照抄：

- `dsh-better-sidebar/lib/client.js` 第 1-40 行；
- `@ychris12138/dsh-usage-stats/lib/client.js` 第 1-12 行；
- skill 模板 `templates/decoration/client.js` 第 1-22 行。

包装模板：

```js
window.__ModuleLoader__.load({
  id: "dsh-omp-stats",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    // 这里放 Bun 的 CJS 产物
    return module.exports;
  },
});
```

`id` 必须等于包名。CJS 产物末尾应有 `module.exports = ...`（Bun 会写成
`module.exports = __toCommonJS(exports_e)` 的压缩形式）；没有它，`apply` 不会执行。构建脚本要在包装
后跑 `node --check client.js`，并断言 `exports.apply` 存在。

### 4.4 React 来源

`factory(require)` 的 `require("react")` 从宿主模块表解析，不打包自己的 React。DSH Web 前端使用
React 18.2（`@deepseek-ai/dsh-web-frontend/package.json` 第 50-51 行），omp 源码声明 React
19.2.7，但它只用了 `createRoot`、hooks、`useSyncExternalStore`、`useDeferredValue`，没有 React 19
专属 API，可以在 18.2 下运行。集成时不要引入第二份 React，否则 hooks 会报错。

`entry.tsx` 中用 `createRoot` 挂到 shadow root 里的容器，并在清理函数里 `root.unmount()` 与
`shadow.remove()`；这符合“资源在 `apply` 或组件 effect 内注册并清理”的要求。

### 4.5 Slot 注册

全局页面用一对注册（`ui-sidebar` README 第 36-38 行）：

- `sidebar.panellist`（list 槽）：`id`、`order`、`label`，渲染图标；
- `main`（keyed 槽）：`key` 与 panellist 的 `id` 相同，渲染页面。

插件管理器的真实写法见
`dsh-client-ui-plugin-manager/lib/client.js` 第 4411-4483 行：

```js
ctx.slots.inject("main", () =>
  ctx.slots.register({ name: "main", key: "omp-stats", locale: NS }, Panel),
);
ctx.slots.inject("sidebar.panellist", () =>
  ctx.slots.register(
    { name: "sidebar.panellist", id: "omp-stats", order: 20, label: () => t("panel"), locale: NS },
    StatsIcon,
  ),
);
```

`ctx.slots.inject` 处理槽位晚声明/重建；不要把注册放在 `apply` 顶层。需要程序化切页时注入
`layout` 并调 `ctx.layout.selectPanel("omp-stats")`（`ui-layout` README 第 32 行）。

### 4.6 CSS 与 `--dsw-alias-*`

omp 的 `styles.css` 在 `:root`/`[data-theme]` 上定义自己的颜色（第 6-105 行）。集成方式：

1. CSS 字符串注入 shadow root，避免 omp 的全局选择器影响宿主；
2. 把 omp 变量块改成插件作用域，并映射到 DSH token；
3. 宿主主题切换由 DSH 负责，删除 omp 的 `ThemeToggle`。

映射建议（token 名来自已安装插件实际使用；`Theme.listTokens` 是权威清单，研究时 Client inspect
超时，接线前应在有页面连接的会话里再核对一次）：

| omp 变量 | DSH token |
|---|---|
| `--bg` | `--dsw-alias-bg-base` |
| `--panel` | `--dsw-alias-bg-layer-1` |
| `--card` | `--dsw-alias-bg-layer-2` |
| `--raised` | `--dsw-alias-bg-layer-3` |
| `--overlay` | `--dsw-alias-bg-overlay` |
| `--hover` | `--dsw-alias-interactive-bg-hover` |
| `--press` | `--dsw-alias-interactive-bg-active` |
| `--selected` | `--dsw-alias-interactive-bg-hover-accent` |
| `--line-1`…`--line-4` | `--dsw-alias-border-l1`…`--dsw-alias-border-l4` |
| `--ink-1` | `--dsw-alias-label-primary` |
| `--ink-2` | `--dsw-alias-label-secondary` |
| `--ink-3`、`--ink-4` | `--dsw-alias-label-tertiary` |
| `--accent`、`--focus` | `--dsw-alias-brand-primary` |
| `--ok` | `--dsw-alias-state-success-primary` |
| `--warn` | `--dsw-alias-state-warning-primary` |
| `--bad` | `--dsw-alias-state-error-primary` |
| `--chart-grid` | `--dsw-alias-border-l1` |
| `--chart-axis` | `--dsw-alias-label-tertiary` |
| `--chart-primary` | `--dsw-alias-brand-primary` |
| `--chart-secondary` | `--dsw-alias-state-business-primary` |
| `--font-sans` | `--dsw-font-family` |
| `--font-mono` | `--dsw-font-mono` |

`--ok-soft`/`--warn-soft`/`--bad-soft` 没有直接 token，用
`color-mix(in srgb, var(--dsw-alias-state-*-primary) 13%, transparent)`，或退回
`--dsw-alias-fill-l1`。图表系列色可以保留 omp 的配色，但坐标轴、网格、文字必须用 token，否则
浅色主题下不可读。

shadow root 会继承宿主的自定义属性，`--dsw-alias-*` 在 shadow 内可直接使用。注意 omp 的 `:root`
选择器在 shadow root 内不匹配，变量块要改成 `.omp-root { ... }` 这类作用域选择器，否则变量全部
失效。

### 4.7 必须处理的全局副作用

| 位置 | 行为 | 处理 |
|---|---|---|
| `useSystemTheme.ts` 第 32-43 行 | 模块加载时写 `document.documentElement.dataset.theme` 和 `style.colorScheme` | 删掉模块级调用，改成读宿主主题；否则改的是整个 DSH 页面 |
| `app/ThemeToggle.tsx` | 用户可切换主题，写到 `localStorage` 和 `<html>` | 从 `Shell` 移除，主题交给 DSH |
| `data/useHashRoute.ts` 第 41-52 行 | `history.pushState` 改页面 hash | 改成组件内 state，或给 hash 加插件前缀；不要让统计页改 DSH 的 URL/后退栈 |
| `app/Shell.tsx` 第 39、164 行 | `window.scrollTo({ top: 0 })` | 面板内部滚动容器 `scrollTo`，不要滚宿主页面 |
| `ui/Drawer.tsx` 第 75 行、`ui/Modal.tsx` 第 104 行 | portal 到 `document.body` | 已用 `portal.ts` 的 `setPortalRoot` 指到 shadow 容器；保留这个处理 |
| `data/live.tsx` 第 102 行 | `new EventSource("/api/events")` | 改成 `${api.API_BASE}/events` |
| `styles.css` 第 6-105 行 | `:root`/`[data-theme]` 全局变量 | 改成 `.omp-root` 作用域，映射 token |

主题判断用 DSH 的 `body[data-ds-dark-theme]`（`ui-layout` README 第 47 行），不要读
`html[data-theme]`，也不要自己写 `<html>`。

## 5. 验证命令

### 5.1 事件层

```bash
S=/Users/yuhaoxin/.dsh/sessions/--Users-yuhaoxin-Projects-mums-suite-MUMS--/session-a0d64cc7-464b-4bb7-90f5-9ed6ebb5dbf1/session.v4.jsonl.zstd

# 事件类型分布
zstd -dc "$S" | jq -r '.type' | sort | uniq -c | sort -rn

# 每条 message 都必须有 finish chunk
zstd -dc "$S" | jq -r 'select(.type=="assistant/message")
  | [.data.stream[] | select(.chunk?.type=="finish") | .chunk.reason.kind] | length' \
  | sort -u          # 期望只有 1

# 失败 attempt 的 finish 只允许 error/aborted
zstd -dc "$S" | jq -r 'select(.type=="assistant/attempt")
  | .data.stream[] | select(.chunk?.type=="finish") | .chunk.reason.kind' | sort -u

# attempt 的 usage 分布（确认是否为零）
zstd -dc "$S" | jq -c 'select(.type=="assistant/attempt")
  | [.data.stream[] | select(.chunk?.type=="usage") | .chunk.usage] | last' | sort | uniq -c

# provider/model 解析覆盖率：应无 unknown
zstd -dc "$S" | jq -r 'select(.type=="assistant/message")
  | .data.message.source.model // "unknown"' | sort | uniq -c
```

### 5.2 Host API

插件启用并扫描完成后（端口以当前 GUI URL 为准）：

```bash
BASE=http://127.0.0.1:60996/api/omp-stats

curl -sS "$BASE/status" | jq
curl -sS "$BASE/stats/overview?range=24h" | jq '.overall'
curl -sS "$BASE/stats/model-dashboard?range=7d" | jq '.byModel[0]'
curl -sS "$BASE/stats/providers?range=24h" | jq '.providers[0]'
curl -sS "$BASE/stats/provider-windows?range=24h" | jq
curl -sS "$BASE/stats/costs?range=30d" | jq '.costSeries[0]'
curl -sS "$BASE/stats/folders?range=30d" | jq '.[0]'
curl -sS "$BASE/stats/recent?limit=5" | jq '.[0] | {model,provider,duration,ttft,stopReason}'
curl -sS "$BASE/stats/errors?range=7d&limit=5" | jq '.[0] | {model,errorMessage,stopReason}'
```

形状断言：

```bash
curl -sS "$BASE/stats/overview?range=24h" | jq -e '
  .overall | has("totalRequests") and has("avgDuration") and has("unpricedRequests")' >/dev/null

curl -sS "$BASE/stats/errors?range=7d&limit=5" | jq -e 'all(.[]; .stopReason=="error")' >/dev/null

# 非回环请求必须 403（在本机用局域网地址试）
curl -sS -o /dev/null -w '%{http_code}\n' "http://<本机局域网IP>:60996$BASE/status"
```

### 5.3 客户端构建

```bash
cd /Users/yuhaoxin/Projects/GitHub/dsh-omp-stats
node --check client.js
grep -c '__ModuleLoader__.load' client.js          # 1
grep -o 'id: "[^"]*"' client.js | head -1          # id: "dsh-omp-stats"
grep -o 'require("[^"]*")' client.js | sort -u     # 只允许宿主模块
node -e "require('fs').accessSync('client.js')"
```

构建产物里不能出现 `react/jsx-dev-runtime`、`node:` 前缀或另一份 React。

### 5.4 页面

浏览器打开 DSH Web，侧栏出现 Stats 图标，点击后：

1. 7 个页签都能切换，Overview 有数字，不空白；
2. 切换 DSH 的明暗主题，面板文字/边框/图表轴跟着变；
3. Requests 行点开抽屉，不报错，不出现 `#root` 缺失；
4. Providers 页没有订阅窗口卡片；
5. 关闭插件或刷新页面后，`document.documentElement.dataset.theme` 不被统计插件改写。

研究时 `cordis_inspect_query` 的 Client `Slots.listSubTree` 与 `Theme.listTokens` 超时（页面未连接
到当前会话），槽位 props 和 token 清单需要在有页面连接时复核。

## 6. 已知风险

1. **`duration` 口径错误会污染所有延迟指标。** 用 `step/end` 会把工具执行算进去；样本 p99 多算
   240 秒。必须用 message/attempt 的时间作终点，重试起点用 `llm/retry-started`。
2. **失败请求重复计数。** 同时用 `assistant/attempt` 和 `turn/end` 会把同一个失败算两次。只认
   attempt；turn/end 只用于对账。
3. **fork/seed 双计。** 不跳过 `seq < inheritedEventCount` 的复制前缀，父子的 token 和 cost 会翻倍。
4. **首次全量扫描成本。** `readSession` 会解码并 replay 校验整个日志；75 个会话首次扫描较慢。
   用 `sessionPersistence.list()` 的 revision 做增量，单会话失败时保留上次结果。
5. **`assistant/message.usage` 可选。** 缺 usage 时不能当作 0 计费，也不能悄悄丢掉这行；计数和
   计费要分开处理。
6. **价格为估算。** 网关 provider 没有专属价时按同名模型公开价算，`$` 数字不是账单；无价时必须
   标 unpriced，不能显示 0。
7. **`id` 冲突。** 32 位哈希在 1 万行时碰撞概率约 1.2%，10 万行时约 69%。要么用 53 位/字符串键，
   要么详情抽屉不依赖 numeric id。
8. **全局副作用。** omp 客户端会改 `<html data-theme>`、URL hash、全局滚动；不处理会破坏 DSH 页面
   主题和后退栈。`EventSource` 路径不改成 `/api/omp-stats/events` 会连到 DSH 的 `/api/events`。
9. **CSS 变量作用域。** `:root` 在 shadow root 内不匹配；不改选择器，omp 的变量全部失效，页面会
   退化成无样式。
10. **构建时 NODE_ENV。** 开发构建引用 `react/jsx-dev-runtime`；宿主表不保证提供，运行时报
    require 失败。
11. **模块 ID。** `__ModuleLoader__.load` 的 `id` 与包名不一致时，客户端模块图无法把工厂挂到
    Loader 行上。
12. **路由匹配。** `webServer` 的匹配顺序是 exact → 最长 prefix → fallback
    （`dsh-host-webserver` README 第 61 行），`/api/omp-stats` 比 `/api` 更长，可以命中；但回环
    校验必须自己做。当前 `isLoopback` 把缺失的 `remoteAddress` 当作允许，属于信任边界漏洞，应
    改为缺失即拒绝，并同时校验 Host 头为 loopback。
13. **订阅窗口无来源。** Providers 的 `windowInsights`/`usageSeries` 在 DSH 没有对应快照，返回空
    并隐藏，不要伪造 0% 利用率。
14. **会话格式迁移。** `formatStatus === 'migration-required'` 的会话 `readSession` 会失败，跳过并
    在状态里计数，不要让整次扫描失败。
15. **子代理会话量。** 本机 75 个会话里 24 个是 subagent；按项目聚合时它们会并入父项目，数字比
    “主会话”口径大，UI 的 Projects 说明要写清。

## 7. 与当前工作树的差异

研究时工作树已有实现（`src/host/fold.js`、`aggregate.js`、`pricing.js`、`scripts/build-client.mjs`）。
对照本文，优先确认三处：

- `src/host/fold.js` 第 66-71 行用 `step/end` 作成功请求的终点。按第 2.3 节的测量，这会把工具执行
  算进 `duration`；应改成 `message.time`，并用 `llm/retry-started` 重置重试起点。
- `src/host/fold.js` 第 205-230 行把失败 attempt 的 usage 固定为全零。样本中确实全零，但类型允许
  attempt 携带 usage；应读取 stream 里最后一个 usage chunk。
- `src/host/fold.js` 第 244-246 行按 `origin`/`delegationDepth` 分 agentType，正确；但没有跳过
  `inheritedEventCount`，fork 会话会双计，需要补。

这三处影响的是数字正确性，不是形状；API 形状和 7 页字段可以保持不变。

研究后已在实现中修复：

- `duration` 改用 `assistant/message.time` / `assistant/attempt.time` 减请求起点；
  重试起点优先 `llm/retry-started`，不再用 `step/end`。
- 失败 attempt 从 stream 里最后一个 usage chunk 读取 token；没有 usage 时按零计。
- `foldSession` 接收 `inheritedEventCount`，跳过 fork/seed 复制的前缀。
- 没有 usage 的 `assistant/message` 仍计入请求数，token 记零，不再静默丢弃。
- `stopReason` 映射到 omp 的 `toolUse` / `length` / `error` / `aborted`。
- 请求 id 改为 53 位哈希，降低抽屉 id 碰撞。
- 回环校验改为地址和 Host 头都必须指向本机，缺失地址直接拒绝。
- 主题判断优先读 `body[data-ds-dark-theme]`，再退回 `html[data-theme]` 和系统偏好。
