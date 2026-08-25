import fs from "node:fs";
import path from "node:path";

export type SignalHeroVisual = {
  kind: "original_infographic" | "licensed_image" | "approved_press_asset";
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
  sourceUrl: string;
  facts?: string[];
  assetRights: {
    status: "owned" | "licensed" | "approved_press_asset";
    evidence: string;
  };
};

export type IndustrySignal = {
  eventId: string;
  slug: string;
  publishedAt: string;
  modifiedAt?: string;
  supplier: string;
  category: string;
  title: string;
  dek: string;
  summary: string;
  whyItMatters: string[];
  reporting: Array<{ heading: string; paragraphs: string[] }>;
  flypigTake: string;
  sourceName: string;
  sourceUrl: string;
  sourceProductUrl?: string;
  sourceNote: string;
  heroVisual: SignalHeroVisual;
};

const signalsDirectory = path.join(process.cwd(), "content", "industry-signals");
const publicDirectory = path.join(process.cwd(), "public");
const allowedKinds = new Set(["original_infographic", "licensed_image", "approved_press_asset"]);
const allowedRights = new Set(["owned", "licensed", "approved_press_asset"]);

function requireString(value: unknown, field: string, fileName: string): asserts value is string {
  if (typeof value !== "string" || !value.trim()) throw new Error(`Industry Signal ${fileName}: missing or invalid ${field}`);
}

function validateHeroVisual(signal: IndustrySignal, fileName: string) {
  const hero = signal.heroVisual;
  if (!hero || typeof hero !== "object") throw new Error(`Industry Signal ${fileName}: heroVisual is required`);
  if (!allowedKinds.has(hero.kind)) throw new Error(`Industry Signal ${fileName}: unapproved heroVisual.kind`);
  if (!allowedRights.has(hero.assetRights?.status)) throw new Error(`Industry Signal ${fileName}: unapproved assetRights.status`);
  requireString(hero.src, "heroVisual.src", fileName);
  requireString(hero.alt, "heroVisual.alt", fileName);
  requireString(hero.credit, "heroVisual.credit", fileName);
  requireString(hero.sourceUrl, "heroVisual.sourceUrl", fileName);
  requireString(hero.assetRights?.evidence, "heroVisual.assetRights.evidence", fileName);
  if (!hero.src.startsWith("/images/signals/") || /^https?:\/\//.test(hero.src)) throw new Error(`Industry Signal ${fileName}: hero visual must be local`);
  if (!Number.isFinite(hero.width) || !Number.isFinite(hero.height) || hero.width <= 0 || hero.height <= 0) throw new Error(`Industry Signal ${fileName}: hero dimensions are required`);
  if (hero.assetRights.evidence === hero.sourceUrl) throw new Error(`Industry Signal ${fileName}: factual source is not rights evidence`);
  const heroPath = path.join(publicDirectory, hero.src.replace(/^\//, ""));
  if (!fs.existsSync(heroPath)) throw new Error(`Industry Signal ${fileName}: missing hero asset ${hero.src}`);
  if (hero.assetRights.status === "owned") {
    const evidencePath = path.join(process.cwd(), hero.assetRights.evidence);
    if (!fs.existsSync(evidencePath)) throw new Error(`Industry Signal ${fileName}: missing evidence ${hero.assetRights.evidence}`);
  }
  if (heroPath.endsWith(".svg")) {
    const svg = fs.readFileSync(heroPath, "utf8");
    const widthMatch = svg.match(/\bwidth=["'](\d+)["']/);
    const heightMatch = svg.match(/\bheight=["'](\d+)["']/);
    if (!widthMatch || !heightMatch || Number(widthMatch[1]) !== hero.width || Number(heightMatch[1]) !== hero.height) throw new Error(`Industry Signal ${fileName}: SVG dimensions do not match metadata`);
  }
}

function validateSignal(signal: IndustrySignal, fileName: string) {
  [["eventId", signal.eventId], ["slug", signal.slug], ["publishedAt", signal.publishedAt], ["supplier", signal.supplier], ["category", signal.category], ["title", signal.title], ["dek", signal.dek], ["summary", signal.summary], ["flypigTake", signal.flypigTake], ["sourceName", signal.sourceName], ["sourceUrl", signal.sourceUrl], ["sourceNote", signal.sourceNote]]
    .forEach(([field, value]) => requireString(value, String(field), fileName));
  if (!Array.isArray(signal.whyItMatters) || signal.whyItMatters.length < 2) throw new Error(`Industry Signal ${fileName}: whyItMatters needs at least two points`);
  if (!Array.isArray(signal.reporting) || signal.reporting.length < 2) throw new Error(`Industry Signal ${fileName}: reporting needs at least two sections`);
  validateHeroVisual(signal, fileName);
}

function readSignalFile(fileName: string): IndustrySignal[] {
  const parsed = JSON.parse(fs.readFileSync(path.join(signalsDirectory, fileName), "utf8")) as IndustrySignal | IndustrySignal[];
  const signals = Array.isArray(parsed) ? parsed : [parsed];
  signals.forEach((signal, index) => validateSignal(signal, `${fileName}${signals.length > 1 ? `#${index + 1}` : ""}`));
  return signals;
}

export function getIndustrySignals(): IndustrySignal[] {
  if (!fs.existsSync(signalsDirectory)) return [];
  const signals = fs.readdirSync(signalsDirectory).filter((f) => f.endsWith(".json")).flatMap(readSignalFile);
  const unique = new Map(signals.map((signal) => [signal.eventId, signal]));
  return [...unique.values()].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || b.eventId.localeCompare(a.eventId));
}

export function getIndustrySignal(slug: string): IndustrySignal | undefined {
  return getIndustrySignals().find((signal) => signal.slug === slug);
}

function categoryTokens(category: string) {
  return new Set(category.toLowerCase().split(/[·/／,|]+/).map((v) => v.trim()).filter(Boolean));
}

export function getRelatedIndustrySignals(signal: IndustrySignal, limit = 3): IndustrySignal[] {
  const sourceTokens = categoryTokens(signal.category);
  return getIndustrySignals().filter((candidate) => candidate.slug !== signal.slug).map((candidate) => {
    const candidateTokens = categoryTokens(candidate.category);
    const categoryScore = [...sourceTokens].filter((token) => candidateTokens.has(token)).length;
    const supplierScore = candidate.supplier === signal.supplier ? 2 : 0;
    return { candidate, score: categoryScore + supplierScore };
  }).sort((a, b) => b.score - a.score || b.candidate.publishedAt.localeCompare(a.candidate.publishedAt)).slice(0, limit).map(({ candidate }) => candidate);
}
