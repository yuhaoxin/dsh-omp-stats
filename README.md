# dsh-omp-stats

把 [oh-my-pi](https://github.com/can1357/oh-my-pi) 的 `omp stats` 面板移植成
DeepSeek Harness 的 Web 插件。数据来自本机 DSH 会话，不读取 omp 的数据库。

## 现在能做什么

- 左侧栏新增 **Stats** 图标，点击后在主区域打开整页统计面板。
- 首版 7 页：Overview、Models、Providers、Costs、Requests、Errors、Projects。
- 复用 omp 的卡片、图表、表格与粉/青配色；面板运行在 shadow root 里，跟随
  DSH 的亮/暗主题，不污染宿主页面样式。
- 数据直接从 `sessionQuery` 读取，按 `sessionPersistence` 的 revision 做增量扫描；
  第一次打开读取全部会话，之后只重读变化的会话。
- 成本按公开 API 单价估算（来自 oh-my-pi 的 pi-catalog），无法匹配价格的请求显示
  `N/A`，不计入总额。

## 安装

需要 DeepSeek Harness 0.2 或更新版本，且 profile 里有 `sessionQuery`、
`sessionPersistence`、`webServer` 三个 Host 服务。

从本地目录安装（开发时）：

```bash
dsh plugin --profile desktop add "$PWD"
```

或从 GitHub 安装：

```bash
dsh plugin --profile desktop add "github:yuhaoxin/dsh-omp-stats"
```

把 `desktop` 换成你实际使用的 profile。安装后重启 `dsh web`（或重启 DSH
Desktop），刷新页面，左侧栏会出现 Stats 图标。

## 开发

```bash
bun install
bun run build:client   # 生成 client.js；Host 代码不需要构建
```

`client.js` 是提交进仓库的构建产物。修改 `src/client/**` 后重新运行
`bun run build:client`，刷新页面即可；修改 `index.js` 或 `src/host/**` 需要重启
DSH 进程。

用真实日志检查会话折叠逻辑：

```bash
node scripts/verify-fold.mjs
```

## 数据口径

| 指标 | 算法 |
| --- | --- |
| 请求数 | 有 usage 的 `assistant/message`，加上以 error/aborted 结束的 `assistant/attempt` |
| Tokens | `inputTokens + outputTokens + cacheReadTokens + cacheWriteTokens` |
| 缓存命中率 | `cacheRead / (input + cacheRead)` |
| 缓存节省 | 按同一模型未缓存单价与实际缓存读取成本的差额 |
| Duration | `step/start` 到 `step/end`；缺失时退回到消息提交时间 |
| TTFT | `step/start` 到流里第一条文本/推理/工具调用增量 |
| 成本 | 公开 API 单价 × token；未匹配到价格的请求计入 unpriced |

同一个 `(turn, step)` 出现多条 `assistant/message` 时，后出现的覆盖先出现的，
避免重放或表面替换造成重复计数。

## 已知限制

- 首版的 Traces、Tools、Frustration、Gain 四页没有移植：它们依赖 omp 的 span 树、
  judge 服务和 snapcompact 数据，DSH 没有对应来源。
- Providers 页的订阅额度卡片为空：DSH 没有 omp 的 usage-limit 快照，页面只展示
  本地 token、请求和成本。
- 价格表是当前公开单价的快照；DeepSeek 的 off-peak 折扣按 pi-catalog 的窗口计算，
  历史 `effectiveRates` 切换没有实现。
- 面板 UI 文案沿用 omp 的英文；插件元数据提供中英文。
- 统计数据只监听本机回环地址；通过远程地址打开 DSH 时不会暴露项目路径和费用。

## 许可

MIT。客户端界面来自 `can1357/oh-my-pi` 的 `packages/stats`，价格表来自
`packages/catalog`，两者都是 MIT。完整版权声明见 [NOTICE.md](NOTICE.md) 和
`LICENSES/`。
