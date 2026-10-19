/**
 * 抽屉和弹窗原本 portal 到 document.body；在 DSH 面板里改为 portal 到
 * shadow root 内的一个容器，这样 omp 的样式不会泄漏到宿主页面。
 */

let portalRoot = null;

export function setPortalRoot(node) {
	portalRoot = node;
}

export function getPortalRoot() {
	return portalRoot ?? document.body;
}
