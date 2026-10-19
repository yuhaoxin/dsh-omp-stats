/**
 * 客户端类型检查：抓“引用了不存在或未导入的名字”这类只在渲染时才崩的错误。
 *
 * 仓库没有全量类型检查，历史代码里仍有类型不匹配；这里只把名字解析失败
 * （TS2304/2552/2448/2454/2305/2724/2503）当作失败，其余诊断忽略。
 */

import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const NAME_ERROR = /\berror TS(2304|2552|2448|2454|2305|2724|2503):/;

let output = "";
try {
	output = execFileSync(join(root, "node_modules/.bin/tsc"), ["-p", "tsconfig.json"], {
		cwd: root,
		encoding: "utf8",
		stdio: ["ignore", "pipe", "pipe"],
	});
} catch (error) {
	output = `${error.stdout ?? ""}${error.stderr ?? ""}`;
}

const failures = output.split("\n").filter(line => NAME_ERROR.test(line));
if (failures.length > 0) {
	console.error(failures.join("\n"));
	process.exit(1);
}
console.log("客户端类型检查通过（无未定义名字）");
