import type {
	CostDashboardStats,
	FolderStats,
	LiveStatus,
	MessageStats,
	ModelDashboardStats,
	OverviewStats,
	ProviderDashboardStats,
	ProviderWindowStats,
	RequestDetails,
	TimeRange,
} from "./types";

export const API_BASE = "/api/omp-stats";

export class ApiError extends Error {
	status: number;
	endpoint: string;

	constructor(status: number, endpoint: string, message: string) {
		super(message);
		this.name = "ApiError";
		this.status = status;
		this.endpoint = endpoint;
	}
}

/** Prefer the server's `{ error }` body over a bare status line. */
async function readErrorMessage(res: Response, endpoint: string): Promise<string> {
	try {
		const body: unknown = await res.json();
		if (typeof body === "object" && body !== null && "error" in body && typeof body.error === "string") {
			return body.error;
		}
	} catch {
		// Non-JSON error body: fall through to the status line.
	}
	return `HTTP error ${res.status} on ${endpoint}`;
}

/**
 * Response validators keyed by the parsed body they describe. Revalidating a
 * body sends its ETag; the entry dies with the body when callers drop it.
 */
const validators = new WeakMap<object, string>();

/**
 * Fetch `endpoint` as JSON, revalidating `previous` when it came from an
 * ETag-bearing response: a 304 resolves to `previous` itself (same reference,
 * no re-parse).
 */
async function fetchJson<T>(endpoint: string, options?: RequestInit, previous?: T): Promise<T> {
	const etag = typeof previous === "object" && previous !== null ? validators.get(previous) : undefined;
	let init = options;
	if (etag) {
		const headers = new Headers(options?.headers);
		headers.set("If-None-Match", etag);
		init = { ...options, headers };
	}
	const res = await fetch(endpoint, init);
	if (res.status === 304 && etag) return previous as T;
	if (!res.ok) {
		throw new ApiError(res.status, endpoint, await readErrorMessage(res, endpoint));
	}
	const data = (await res.json()) as T;
	const nextEtag = res.headers.get("ETag");
	if (nextEtag && typeof data === "object" && data !== null) validators.set(data, nextEtag);
	return data;
}

export async function getOverviewStats(range: TimeRange = "24h", signal?: AbortSignal): Promise<OverviewStats> {
	return fetchJson<OverviewStats>(`${API_BASE}/stats/overview?range=${encodeURIComponent(range)}`, {
		signal,
	});
}

export async function getModelDashboardStats(
	range: TimeRange = "24h",
	signal?: AbortSignal,
): Promise<ModelDashboardStats> {
	return fetchJson<ModelDashboardStats>(`${API_BASE}/stats/model-dashboard?range=${encodeURIComponent(range)}`, {
		signal,
	});
}

export async function getCostDashboardStats(
	range: TimeRange = "24h",
	signal?: AbortSignal,
): Promise<CostDashboardStats> {
	return fetchJson<CostDashboardStats>(`${API_BASE}/stats/costs?range=${encodeURIComponent(range)}`, { signal });
}

export async function getRecentRequests(limit = 50, signal?: AbortSignal): Promise<MessageStats[]> {
	return fetchJson<MessageStats[]>(`${API_BASE}/stats/recent?limit=${limit}`, { signal });
}

export async function getRecentErrors(
	range: TimeRange = "24h",
	limit = 50,
	signal?: AbortSignal,
): Promise<MessageStats[]> {
	return fetchJson<MessageStats[]>(`${API_BASE}/stats/errors?range=${encodeURIComponent(range)}&limit=${limit}`, {
		signal,
	});
}

export async function getRequestDetails(id: number, signal?: AbortSignal): Promise<RequestDetails> {
	return fetchJson<RequestDetails>(`${API_BASE}/request/${id}`, { signal });
}

/** Ask the server to start a background sync; progress arrives on the `/api/events` stream. */
export async function requestSync(): Promise<LiveStatus> {
	return fetchJson<LiveStatus>(`${API_BASE}/sync`, { method: "POST" });
}

export async function getFolderStats(range: TimeRange = "24h", signal?: AbortSignal): Promise<FolderStats[]> {
	return fetchJson<FolderStats[]>(`${API_BASE}/stats/folders?range=${encodeURIComponent(range)}`, { signal });
}

export async function getProviderDashboardStats(
	range: TimeRange = "24h",
	signal?: AbortSignal,
): Promise<ProviderDashboardStats> {
	return fetchJson<ProviderDashboardStats>(`${API_BASE}/stats/providers?range=${encodeURIComponent(range)}`, {
		signal,
	});
}

/** Subscription-window insights (all providers) plus utilization series for `provider` only. */
export async function getProviderWindowStats(
	range: TimeRange,
	provider: string | null,
	signal?: AbortSignal,
): Promise<ProviderWindowStats> {
	const params = new URLSearchParams({ range });
	if (provider !== null) params.set("provider", provider);
	return fetchJson<ProviderWindowStats>(`${API_BASE}/stats/provider-windows?${params}`, { signal });
}
