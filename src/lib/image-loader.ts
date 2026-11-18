type LoaderArgs = { src: string; width: number; quality?: number };

/**
 * Images are served straight from the Unsplash CDN, which resizes on the fly.
 * Local files (starting with "/") are returned untouched.
 */
export default function imageLoader({ src, width, quality }: LoaderArgs) {
  if (src.startsWith("/")) return src;
  const url = new URL(src);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 75));
  return url.toString();
}
