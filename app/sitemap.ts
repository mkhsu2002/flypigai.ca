import type { MetadataRoute } from "next";
import { atlasCategories } from "./atlas/data";

const baseUrl = "https://flypigai.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const coreRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/zh`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/atlas`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/zh/atlas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/physical-ai`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/zh/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const atlasRoutes: MetadataRoute.Sitemap = atlasCategories.flatMap((category) => [
    { url: `${baseUrl}/atlas/${category.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/zh/atlas/${category.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.75 },
  ]);

  return [...coreRoutes, ...atlasRoutes];
}
