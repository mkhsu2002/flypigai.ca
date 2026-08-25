import type { Metadata } from "next";

export const siteUrl = "https://flypigai.ca";
export const siteName = "FlyPig AI";
export const defaultDescription =
  "FlyPig AI connects Canadian product opportunities with Taiwan's Edge AI, semiconductor and Physical AI ecosystem through independent technology intelligence and qualified matching.";

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  zhPath?: string;
  enPath?: string;
  locale?: "en_CA" | "zh_TW";
  type?: "website" | "article";
};

export function makeMetadata({
  title,
  description,
  path,
  zhPath,
  enPath,
  locale = "en_CA",
  type = "website",
}: SeoOptions): Metadata {
  const canonical = `${siteUrl}${path}`;
  const languages: Record<string, string> = {};
  if (enPath) languages["en-CA"] = `${siteUrl}${enPath}`;
  if (zhPath) languages["zh-Hant"] = `${siteUrl}${zhPath}`;
  if (enPath) languages["x-default"] = `${siteUrl}${enPath}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      ...(Object.keys(languages).length ? { languages } : {}),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  founder: {
    "@type": "Person",
    name: "M.K. Hsu",
    url: "https://mkhsu.icareu.tw/",
  },
  areaServed: ["Canada", "Taiwan"],
  knowsAbout: [
    "Edge AI",
    "Physical AI",
    "Robotics",
    "Drones",
    "Autonomous systems",
    "Semiconductors",
    "Embedded computing",
    "Machine vision",
    "Technology intelligence",
    "Canada Taiwan technology collaboration",
  ],
};

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
