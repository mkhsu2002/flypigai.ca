import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import "./globals.css";
import "./editorial.css";
import { siteIdentity } from "../lib/site";
import { socialImageUrl } from "../lib/socialImages";
import { defaultDescription, organizationJsonLd, siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "FlyPig AI | Canada-Taiwan Edge AI & Physical AI Research", template: "%s | FlyPig AI" },
  description: defaultDescription,
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-CA": siteUrl,
      "zh-Hant": `${siteUrl}/zh`,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    title: "FlyPig AI | Canada-Taiwan Edge AI & Physical AI Research",
    description: defaultDescription,
    url: siteUrl,
    siteName: "FlyPig AI",
    locale: "en_CA",
    type: "website",
    images: [{
      url: socialImageUrl(siteIdentity.images.defaultSocial),
      width: 1200,
      height: 630,
      alt: "FlyPig AI - Canada-Taiwan Edge AI and Physical AI research",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlyPig AI | Canada-Taiwan Edge AI & Physical AI Research",
    description: defaultDescription,
    images: [socialImageUrl(siteIdentity.images.defaultSocial)],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/images/brand/flypig-logo.png", type: "image/png" }, { url: "/images/brand/flypig-ai-mark.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-CA"><body><JsonLd data={organizationJsonLd} />{children}</body></html>;
}
