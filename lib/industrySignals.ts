import fs from "node:fs";
import path from "node:path";

export type IndustrySignal = {
  eventId: string;
  slug: string;
  publicationStatus?: "published" | "hold";
  audit?: {
    riskLevel: "low" | "medium" | "high";
    reviewedAt: string;
    findings: string[];
    action: "none" | "highlight" | "hold";
  };
  sourcePublishedAt: string;
  publishedAt: string;
  modifiedAt: string;
  supplier: string;
  category: string;
  title: string;
  seoTitle: string;
  socialTitle: string;
  seoDescription: string;
  dek: string;
  summary: string;
  keyFacts: string[];
  whyItMatters: string[];
  reporting: Array<{ heading: string; paragraphs: string[] }>;
  flypigTake: string;
  productStatus: string;
  openQuestions: string[];
  canadaRelevance: string;
  author: {
    name: string;
    url: string;
    type: "Organization" | "Person";
  };
  reviewedBy?: {
    name: string;
    url: string;
  };
  relatedSignals: string[];
  relatedTechnologies: string[];
  corrections: Array<{ date: string; note: string }>;
  sourceName: string;
  sourceUrl: string;
  sourceProductUrl?: string;
  additionalSources?: Array<{ name: string; url: string }>;
  sourceNote: string;
  heroVisual: {
    kind: "original_infographic" | "licensed_image" | "approved_press_asset";
    src: string;
    socialSrc: string;
    alt: string;
    width: number;
    height: number;
    credit: string;
    sourceUrl: string;
    assetRights: {
      status: "owned" | "licensed" | "approved_press_asset";
      evidence: string;
    };
  };
};

const signalsDirectory = path.join(process.cwd(), "content", "industry-signals");

function readSignalFile(fileName: string): IndustrySignal {
  const raw = fs.readFileSync(path.join(signalsDirectory, fileName), "utf8");
  return JSON.parse(raw) as IndustrySignal;
}

export function getIndustrySignals(): IndustrySignal[] {
  if (!fs.existsSync(signalsDirectory)) return [];
  return fs
    .readdirSync(signalsDirectory)
    .filter((fileName) => fileName.endsWith(".json"))
    .map(readSignalFile)
    .filter((signal) => signal.publicationStatus !== "hold")
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || b.sourcePublishedAt.localeCompare(a.sourcePublishedAt));
}

export function getIndustrySignal(slug: string): IndustrySignal | undefined {
  return getIndustrySignals().find((signal) => signal.slug === slug);
}

export function getIndustrySignalWordCount(signal: IndustrySignal): number {
  const reporting = signal.reporting.flatMap((section) => [section.heading, ...section.paragraphs]);
  return [
    signal.dek,
    signal.summary,
    ...signal.keyFacts,
    ...signal.whyItMatters,
    ...reporting,
    signal.flypigTake,
    signal.productStatus,
    ...signal.openQuestions,
    signal.canadaRelevance,
  ].join(" ").trim().split(/\s+/).filter(Boolean).length;
}
