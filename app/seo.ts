import type { Metadata } from "next";
import { absoluteUrl, siteIdentity } from "../lib/site";

export const siteUrl = siteIdentity.url;
export const siteName = siteIdentity.brandName;
export const defaultDescription = siteIdentity.description;

type SocialImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  zhPath?: string;
  enPath?: string;
  locale?: "en_CA" | "zh_TW";
  type?: "website" | "article";
  image?: SocialImage;
  socialTitle?: string;
  absoluteTitle?: boolean;
  article?: {
    publishedTime: string;
    modifiedTime: string;
    authors: string[];
    section: string;
    tags: string[];
  };
};

export function makeMetadata({
  title,
  description,
  path,
  zhPath,
  enPath,
  locale = "en_CA",
  type = "website",
  image,
  socialTitle,
  absoluteTitle = false,
  article,
}: SeoOptions): Metadata {
  const canonical = `${siteUrl}${path}`;
  const socialImage = image ?? {
    url: siteIdentity.images.defaultSocial,
    width: 1200,
    height: 630,
    alt: "FlyPig AI — Canada-Taiwan Edge AI and Physical AI intelligence",
  };
  const imageUrl = absoluteUrl(socialImage.url);
  const languages: Record<string, string> = {};
  if (enPath) languages["en-CA"] = `${siteUrl}${enPath}`;
  if (zhPath) languages["zh-Hant"] = `${siteUrl}${zhPath}`;
  if (enPath) languages["x-default"] = `${siteUrl}${enPath}`;

  const socialBase = {
    title: socialTitle ?? title,
    description,
    url: canonical,
    siteName,
    locale,
    images: [{ ...socialImage, url: imageUrl }],
  };

  const openGraph: Metadata["openGraph"] = type === "article" ? {
    ...socialBase,
    type: "article",
    publishedTime: article?.publishedTime,
    modifiedTime: article?.modifiedTime,
    authors: article?.authors,
    section: article?.section,
    tags: article?.tags,
  } : {
    ...socialBase,
    type: "website",
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      ...(Object.keys(languages).length ? { languages } : {}),
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: socialTitle ?? title,
      description,
      images: [imageUrl],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  legalName: siteIdentity.legalName,
  url: siteUrl,
  description: defaultDescription,
  email: `mailto:${siteIdentity.email}`,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl(siteIdentity.images.logo),
    width: 512,
    height: 512,
  },
  address: {
    "@type": "PostalAddress",
    ...siteIdentity.address,
  },
  founder: {
    "@type": "Person",
    "@id": `${siteIdentity.founder.url}#person`,
    ...siteIdentity.founder,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "business inquiries",
    email: siteIdentity.email,
    availableLanguage: ["English", "Traditional Chinese"],
    areaServed: ["CA", "TW"],
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
    "Canada Taiwan technology intelligence",
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
