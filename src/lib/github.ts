// Star counts are read at build time, not in the browser: the chips ship in the
// HTML, so there is no flash of empty state and no client-side GitHub request.
// The deploy workflow rebuilds daily, which is what keeps them current.

const API = 'https://api.github.com/repos/';

/**
 * Live star count for `owner/name`, or `fallback` when GitHub is unreachable,
 * rate-limited, or slow. A flaky API must never fail the build or blank a chip.
 */
export async function fetchStars(repo: string, fallback: number): Promise<number> {
  const token = process.env.GITHUB_TOKEN;
  try {
    const response = await fetch(`${API}${repo}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      signal: AbortSignal.timeout(6000),
    });
    if (!response.ok) {
      console.warn(`[stars] ${repo}: HTTP ${response.status}, using fallback ${fallback}`);
      return fallback;
    }
    const data = (await response.json()) as { stargazers_count?: number };
    if (typeof data.stargazers_count !== 'number') return fallback;
    return data.stargazers_count;
  } catch (error) {
    console.warn(`[stars] ${repo}: ${(error as Error).message}, using fallback ${fallback}`);
    return fallback;
  }
}

/** 9132 -> "9.1k", 776 -> "776". Matches how GitHub itself abbreviates. */
export function formatStars(count: number): string {
  if (count < 1000) return String(count);
  return `${(count / 1000).toFixed(1)}k`;
}

/** 32342 -> "32k" — for the roll-up figure, where a decimal reads as false precision. */
export function formatStarsCoarse(count: number): string {
  if (count < 1000) return String(count);
  return `${Math.round(count / 1000)}k`;
}
