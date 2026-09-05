import type { MetadataRoute } from "next";
import { getIndustrySignals } from "../lib/industrySignals";
import { atlasCategories } from "./atlas/data";
import { insightGuides } from "./insights/guides";
import { physicalAiSeries, seriesDate, seriesPath } from "./insights/physical-ai-modularization/series";
import { technologyOwnerTopics } from "./technologies/topics";

const baseUrl = "https://flypigai.ca";
const currentEditorialRevision = new Date("2026-08-29");
const revisedCorePaths = new Set([
  "/", "/zh", "/Solutions", "/technologies", "/signals", "/services", "/zh/services",
  "/about", "/zh/about", "/physical-ai", "/contact", "/zh/contact", "/privacy",
  "/zh/privacy", "/editorial-policy", "/atlas/methodology", "/zh/atlas/methodology",
  "/services/canadian-product-teams", "/services/taiwan-technology-companies",
  "/zh/services/taiwan-technology-companies",
]);

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const corePaths = [
    ["/", 1, "weekly"], ["/zh", 0.9, "weekly"],
    ["/Solutions", 0.95, "weekly"], ["/technologies", 0.95, "weekly"],
    ["/signals", 0.95, "weekly"], ["/insights", 0.85, "weekly"],
    ["/services", 0.7, "monthly"], ["/zh/services", 0.65, "monthly"],
    ["/services/canadian-product-teams", 0.8, "monthly"],
    ["/services/taiwan-technology-companies", 0.8, "monthly"],
    ["/zh/services/taiwan-technology-companies", 0.75, "monthly"],
    ["/about", 0.75, "monthly"], ["/zh/about", 0.7, "monthly"],
    ["/atlas", 0.9, "weekly"], ["/zh/atlas", 0.85, "weekly"],
    ["/atlas/technologies", 0.8, "monthly"], ["/zh/atlas/technologies", 0.75, "monthly"],
    ["/atlas/industries", 0.8, "monthly"], ["/zh/atlas/industries", 0.75, "monthly"],
    ["/atlas/locations", 0.75, "monthly"], ["/zh/atlas/locations", 0.7, "monthly"],
    ["/atlas/methodology", 0.65, "monthly"], ["/zh/atlas/methodology", 0.6, "monthly"],
    ["/atlas/submit", 0.6, "monthly"], ["/zh/atlas/submit", 0.55, "monthly"],
    ["/physical-ai", 0.75, "monthly"], [seriesPath, 0.8, "monthly"],
    ["/editorial-policy", 0.6, "monthly"],
    ["/contact", 0.65, "monthly"], ["/zh/contact", 0.6, "monthly"],
    ["/privacy", 0.35, "yearly"], ["/zh/privacy", 0.3, "yearly"],
  ] as const;

  const coreRoutes: MetadataRoute.Sitemap = corePaths.map(([routePath, priority, changeFrequency]) => ({
    url: `${baseUrl}${routePath}`,
    ...(routePath === seriesPath ? { lastModified: new Date(seriesDate) } : revisedCorePaths.has(routePath) ? { lastModified: currentEditorialRevision } : {}),
    changeFrequency,
    priority,
  }));

  const atlasRoutes: MetadataRoute.Sitemap = atlasCategories.flatMap((category) => [
    { url: `${baseUrl}/atlas/${category.slug}`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/zh/atlas/${category.slug}`, changeFrequency: "monthly" as const, priority: 0.75 },
  ]);

  const insightRoutes: MetadataRoute.Sitemap = insightGuides.map((guide) => ({ url: `${baseUrl}/insights/${guide.slug}`, lastModified: new Date(guide.dateModified), changeFrequency: "monthly" as const, priority: 0.7 }));
  insightRoutes.unshift({ url: `${baseUrl}/insights/canada-needs-physical-ai-integrators`, lastModified: currentEditorialRevision, changeFrequency: "monthly", priority: 0.75 });

  const seriesRoutes: MetadataRoute.Sitemap = physicalAiSeries.map((article) => ({ url: `${baseUrl}${seriesPath}/${article.slug}`, lastModified: new Date(seriesDate), changeFrequency: "monthly" as const, priority: 0.72 }));

  const technologyRoutes: MetadataRoute.Sitemap = technologyOwnerTopics.map((topic) => ({ url: `${baseUrl}/technologies/${topic.slug}`, lastModified: currentEditorialRevision, changeFrequency: "monthly" as const, priority: 0.8 }));
  const signalRoutes: MetadataRoute.Sitemap = getIndustrySignals().map((signal) => ({ url: `${baseUrl}/signals/${signal.slug}`, lastModified: new Date(signal.modifiedAt), changeFrequency: "monthly" as const, priority: 0.8 }));

  return [...coreRoutes, ...atlasRoutes, ...technologyRoutes, ...insightRoutes, ...seriesRoutes, ...signalRoutes];
}
