export const releasesUrl = "https://github.com/arshadrabbanipune-bot/enhancer-io-releases/releases";
const installerName = "Enhancer-io-Setup-x64.exe";
const latestInstaller = `${releasesUrl}/latest/download/${installerName}`;
const releaseApi = "https://api.github.com/repos/arshadrabbanipune-bot/enhancer-io-releases/releases/latest";

type Release = {
  tag_name: string;
  assets: { name: string; state: string; size: number; digest?: string | null }[];
};

type WindowsDownload = {
  href: string;
  label: string;
  notes: string;
  version?: string;
  size?: string;
  sha256?: string;
};

export async function getWindowsDownload(): Promise<WindowsDownload> {
  const download = { href: latestInstaller, label: "Download for Windows", notes: `${releasesUrl}/latest` };

  try {
    const response = await fetch(releaseApi, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(3500),
    });
    if (!response.ok && response.status !== 404) return download;

    const release: Release | null = response.ok ? await response.json() : null;
    const tag = release?.tag_name;
    const asset = release?.assets.find(({ name, state, size }) =>
      name === installerName && state === "uploaded" && size > 0,
    );

    if (!tag || !/^v\d+\.\d+\.\d+$/.test(tag) || !asset) {
      return { href: releasesUrl, label: "Browse Windows releases", notes: releasesUrl };
    }

    return {
      ...download,
      href: `${releasesUrl}/download/${tag}/${installerName}`,
      notes: `${releasesUrl}/tag/${tag}`,
      version: tag,
      size: `${Math.round(asset.size / 1024 ** 2)} MiB`,
      sha256: asset.digest?.match(/^sha256:([a-f\d]{64})$/i)?.[1],
    };
  } catch {
    // GitHub's direct download is separate from its metadata API.
    return download;
  }
}
