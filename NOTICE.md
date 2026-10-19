# Third-party notices

`dsh-omp-stats` 是 DeepSeek Harness 的第三方插件，不是 oh-my-pi 或 DeepSeek 官方项目。

## oh-my-pi / omp-stats

`src/client/` 的界面、图表、页面布局和 `src/shared-types.ts` 来自
[`can1357/oh-my-pi`](https://github.com/can1357/oh-my-pi) 的 `packages/stats`，
遵循 MIT 许可。原始版权声明：

```
MIT License

Copyright (c) 2025-2026 Can Bölük
Copyright (c) 2026 Stencil Labs, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

完整文本见 `LICENSES/oh-my-pi-omp-stats-LICENSE`。

## oh-my-pi / pi-catalog

`src/host/pricing.json` 由 [`can1357/oh-my-pi`](https://github.com/can1357/oh-my-pi)
的 `packages/catalog` 生成，遵循 MIT 许可。完整文本见
`LICENSES/oh-my-pi-pi-catalog-LICENSE`。

## lucide-react

界面图标来自 [`lucide-react`](https://github.com/lucide-icons/lucide)，遵循 ISC 许可；
构建时会打包进 `client.js`。

## DeepSeek Harness brand mark

`src/client/brand.ts` 与 `icon.svg` 里的鲸鱼标记路径来自
`@deepseek-ai/dsh-client-ui-primitives` 的 `FishLogo`，属于 DeepSeek Harness，
遵循 MIT 许可。

## React

`client.js` 不打包 React，React 由 DeepSeek Harness 的 Web 页面提供。
