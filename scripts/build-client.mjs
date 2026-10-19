/**
 * 构建 DSH 客户端包。
 *
 * omp 的源码是普通 React 应用；DSH 需要 window.__ModuleLoader__.load 的工厂
 * 形式。这里把 CSS 拼成字符串塞进生成的模块，再用 Bun 打成 CJS，最后包一层
 * 工厂。React 保持 external，由宿主页面提供。
 */

import { execFileSync } from "node:child_process";
import { readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const client = join(root, "src", "client");

const CSS_FILES = [
	"styles.css",
	"routes/models.css",
	"routes/providers.css",
	"routes/costs.css",
	"routes/errors.css",
	"routes/projects.css",
	"ui/modal.css",
	"ui/request-drawer.css",
	"dsh.css",
];

const css = CSS_FILES.map(file => readFileSync(join(client, file), "utf8")).join("\n");
writeFileSync(
	join(client, "generated-css.ts"),
	`// 由 scripts/build-client.mjs 生成，勿手改。\nexport const CSS = ${JSON.stringify(css)};\n`,
);

const output = join(root, "client.js.tmp.cjs");
execFileSync(
	process.execPath,
	[
		"build",
		join(client, "entry.tsx"),
		"--outfile",
		output,
		"--format=cjs",
		"--target=browser",
		"--minify",
		"--external",
		"react",
		"--external",
		"react-dom",
		"--external",
		"react-dom/client",
		"--external",
		"react/jsx-runtime",
		"--define",
		'process.env.NODE_ENV="production"',
	],
	{ cwd: root, stdio: "inherit" },
);

const body = readFileSync(output, "utf8");
unlinkSync(output);

const wrapped = `window.__ModuleLoader__.load({
  id: "dsh-omp-stats",
  factory: (require) => {
    const module = { exports: {} };
    const exports = module.exports;
${body}
    return module.exports;
  },
});
`;
writeFileSync(join(root, "client.js"), wrapped);
execFileSync(process.env.NODE ?? "node", ["--check", join(root, "client.js")], { stdio: "inherit" });
console.log("client.js written");
