import fs from "node:fs";
import path from "node:path";

export type IndustrySignal = {
  eventId: string;
  slug: string;
  publishedAt: string;
  modifiedAt: string;
  supplier: string;
  category: string;
  title: string;
  seoTitle: string;
  socialTitle: string;
  dek: string;
  summary: string;
  keyFacts: string[];
  whyItMatters: string[];
  reporting: Array<{ heading: string; paragraphs: string[] }>;
  flypigTake: string;
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
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getIndustrySignal(slug: string): IndustrySignal | undefined {
  return getIndustrySignals().find((signal) => signal.slug === slug);
}
