/**
 * omp-stats 原来依赖 @oh-my-pi/pi-utils/dates；这里用 Intl 实现同样的格式，
 * 避免把整个 pi-utils 带进 DSH 客户端包。
 *
 * 支持的 pattern 只覆盖面板实际用到的几种：HH:mm、MMM d HH:mm、MMM d、
 * MMM d, HH:mm:ss。
 */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function pad(value) {
	return String(value).padStart(2, "0");
}

export function format(date, pattern) {
	const value = date instanceof Date ? date : new Date(date);
	if (Number.isNaN(value.getTime())) return "";
	return pattern.replace(/MMM|HH|mm|ss|d/gu, token => {
		switch (token) {
			case "MMM":
				return MONTHS[value.getMonth()];
			case "HH":
				return pad(value.getHours());
			case "mm":
				return pad(value.getMinutes());
			case "ss":
				return pad(value.getSeconds());
			case "d":
				return String(value.getDate());
			default:
				return token;
		}
	});
}

export function formatDistanceToNow(date, options = {}) {
	const value = date instanceof Date ? date : new Date(date);
	const seconds = Math.round((value.getTime() - Date.now()) / 1000);
	const absolute = Math.abs(seconds);
	const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto", style: "long" });
	if (absolute < 60) return formatter.format(seconds, "second");
	if (absolute < 3600) return formatter.format(Math.round(seconds / 60), "minute");
	if (absolute < 86_400) return formatter.format(Math.round(seconds / 3600), "hour");
	if (absolute < 2_592_000) return formatter.format(Math.round(seconds / 86_400), "day");
	if (absolute < 31_536_000) return formatter.format(Math.round(seconds / 2_592_000), "month");
	return formatter.format(Math.round(seconds / 31_536_000), "year");
}
