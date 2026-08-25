import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import "./globals.css";
import { defaultDescription, organizationJsonLd, siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "FlyPig AI | Canada-Taiwan Edge AI & Physical AI Intelligence", template: "%s | FlyPig AI" },
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
    title: "FlyPig AI | Canada-Taiwan Edge AI & Physical AI Intelligence",
    description: defaultDescription,
    url: siteUrl,
    siteName: "FlyPig AI",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlyPig AI | Canada-Taiwan Edge AI & Physical AI Intelligence",
    description: defaultDescription,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-CA"><body><JsonLd data={organizationJsonLd} />{children}</body></html>;
}
