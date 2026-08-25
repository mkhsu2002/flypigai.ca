import type { MetadataRoute } from "next";
import { atlasCategories } from "./atlas/data";
import { insightGuides } from "./insights/guides";

const baseUrl = "https://flypigai.ca";
const lastModified = new Date("2026-08-25");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const corePaths = [
    ["/", 1, "weekly"], ["/zh", 0.9, "weekly"],
    ["/canada", 0.95, "weekly"], ["/taiwan", 0.95, "weekly"], ["/technologies", 0.95, "weekly"],
    ["/services", 0.7, "monthly"], ["/zh/services", 0.65, "monthly"],
    ["/about", 0.75, "monthly"], ["/zh/about", 0.7, "monthly"],
    ["/atlas", 0.9, "weekly"], ["/zh/atlas", 0.85, "weekly"],
    ["/atlas/technologies", 0.8, "monthly"], ["/zh/atlas/technologies", 0.75, "monthly"],
    ["/atlas/industries", 0.8, "monthly"], ["/zh/atlas/industries", 0.75, "monthly"],
    ["/atlas/locations", 0.75, "monthly"], ["/zh/atlas/locations", 0.7, "monthly"],
    ["/atlas/methodology", 0.65, "monthly"], ["/zh/atlas/methodology", 0.6, "monthly"],
    ["/atlas/submit", 0.6, "monthly"], ["/zh/atlas/submit", 0.55, "monthly"],
    ["/insights", 0.85, "weekly"], ["/physical-ai", 0.75, "monthly"],
    ["/contact", 0.65, "monthly"], ["/zh/contact", 0.6, "monthly"],
    ["/privacy", 0.35, "yearly"], ["/zh/privacy", 0.3, "yearly"],
  ] as const;

  const coreRoutes: MetadataRoute.Sitemap = corePaths.map(([path, priority, changeFrequency]) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const atlasRoutes: MetadataRoute.Sitemap = atlasCategories.flatMap((category) => [
    { url: `${baseUrl}/atlas/${category.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/zh/atlas/${category.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.75 },
  ]);

  const insightRoutes: MetadataRoute.Sitemap = insightGuides.map((guide) => ({
    url: `${baseUrl}/insights/${guide.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...coreRoutes, ...atlasRoutes, ...insightRoutes];
}
