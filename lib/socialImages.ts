import { absoluteUrl } from "./site";

export const socialImageSize = {
  width: 1200,
  height: 630,
} as const;

export function ogImage(path: string, alt: string) {
  return {
    url: path,
    width: socialImageSize.width,
    height: socialImageSize.height,
    alt,
  };
}

export function pageOgImage(slug: string, alt: string) {
  return ogImage(`/images/og/pages/${slug}.png`, alt);
}

export function pageOgImageUrl(slug: string) {
  return absoluteUrl(`/images/og/pages/${slug}.png`);
}
