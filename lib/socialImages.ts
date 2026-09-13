import { absoluteUrl } from "./site";

export const socialImageSize = {
  width: 1200,
  height: 630,
} as const;

export const socialImageVersion = "20260912-official-flypig-logo";

export function versionSocialImagePath(path: string) {
  if (!path.includes("/images/og/") && !path.includes("/images/signals/og/")) return path;
  if (/[?&]v=/.test(path)) return path;
  return `${path}${path.includes("?") ? "&" : "?"}v=${socialImageVersion}`;
}

export function socialImageUrl(path: string) {
  return absoluteUrl(versionSocialImagePath(path));
}

export function ogImage(path: string, alt: string) {
  return {
    url: versionSocialImagePath(path),
    width: socialImageSize.width,
    height: socialImageSize.height,
    alt,
  };
}

export function pageOgImage(slug: string, alt: string) {
  return ogImage(`/images/og/pages/${slug}.png`, alt);
}

export function pageOgImageUrl(slug: string) {
  return socialImageUrl(`/images/og/pages/${slug}.png`);
}
