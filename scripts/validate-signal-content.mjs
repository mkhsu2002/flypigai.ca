import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const contentDirectory = path.join(root, "content", "industry-signals");
const files = fs.readdirSync(contentDirectory).filter((fileName) => fileName.endsWith(".json")).sort();
const errors = [];
const signals = [];
const allowedKinds = new Set(["original_infographic", "licensed_image", "approved_press_asset"]);
const allowedRights = new Set(["owned", "licensed", "approved_press_asset"]);
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

for (const fileName of files) {
  try {
    signals.push({ fileName, data: JSON.parse(fs.readFileSync(path.join(contentDirectory, fileName), "utf8")) });
  } catch (error) {
    errors.push(`${fileName}: invalid JSON (${error.message})`);
  }
}

const slugs = new Set(signals.map(({ data }) => data.slug));
if (slugs.size !== signals.length) errors.push("Duplicate Signal slugs detected");

for (const { fileName, data } of signals) {
  const label = `${fileName} (${data.slug ?? "missing slug"})`;
  for (const field of ["eventId", "slug", "supplier", "category", "title", "seoTitle", "socialTitle", "seoDescription", "dek", "summary", "flypigTake", "productStatus", "canadaRelevance", "sourceName", "sourceUrl", "sourceNote"]) {
    if (typeof data[field] !== "string" || !data[field].trim()) errors.push(`${label}: missing ${field}`);
  }
  for (const field of ["sourcePublishedAt", "publishedAt", "modifiedAt"]) {
    if (!datePattern.test(data[field] ?? "") || Number.isNaN(Date.parse(`${data[field]}T00:00:00Z`))) errors.push(`${label}: ${field} must be YYYY-MM-DD`);
  }
  if (data.publishedAt && data.modifiedAt && data.modifiedAt < data.publishedAt) errors.push(`${label}: modifiedAt predates publishedAt`);
  if (data.sourcePublishedAt && data.publishedAt && data.sourcePublishedAt > data.publishedAt) errors.push(`${label}: sourcePublishedAt is later than FlyPig publishedAt`);
  if ((data.seoTitle ?? "").length > 65) errors.push(`${label}: seoTitle exceeds 65 characters`);
  if ((data.seoDescription ?? "").length < 120 || (data.seoDescription ?? "").length > 160) errors.push(`${label}: seoDescription must be 120-160 characters`);
  if (!Array.isArray(data.keyFacts) || data.keyFacts.length !== 3 || data.keyFacts.some((fact) => typeof fact !== "string" || !fact.trim())) errors.push(`${label}: keyFacts must contain exactly three strings`);
  if (!Array.isArray(data.whyItMatters) || data.whyItMatters.length < 3) errors.push(`${label}: whyItMatters needs at least three points`);
  if (!Array.isArray(data.reporting) || data.reporting.length < 2) errors.push(`${label}: reporting needs at least two sections`);
  if (!Array.isArray(data.openQuestions) || data.openQuestions.length < 2 || data.openQuestions.some((item) => typeof item !== "string" || !item.trim())) errors.push(`${label}: openQuestions needs at least two strings`);
  if (!data.author || !["Organization", "Person"].includes(data.author.type) || !data.author.name || !data.author.url) errors.push(`${label}: invalid author`);
  if (!Array.isArray(data.relatedSignals) || data.relatedSignals.length < 2) errors.push(`${label}: relatedSignals needs at least two slugs`);
  else for (const relatedSlug of data.relatedSignals) {
    if (relatedSlug === data.slug) errors.push(`${label}: cannot relate to itself`);
    if (!slugs.has(relatedSlug)) errors.push(`${label}: unknown related Signal ${relatedSlug}`);
  }
  if (!Array.isArray(data.relatedTechnologies) || data.relatedTechnologies.length < 2) errors.push(`${label}: relatedTechnologies needs at least two entries`);
  if (!Array.isArray(data.corrections)) errors.push(`${label}: corrections must be an array`);
  for (const sourceField of ["sourceUrl", "sourceProductUrl"]) {
    if (data[sourceField] && !/^https:\/\//.test(data[sourceField])) errors.push(`${label}: ${sourceField} must use HTTPS`);
  }
  if (data.additionalSources && (!Array.isArray(data.additionalSources) || data.additionalSources.some((source) => !source?.name || !/^https:\/\//.test(source?.url ?? "")))) errors.push(`${label}: invalid additionalSources`);

  const reportingText = Array.isArray(data.reporting) ? data.reporting.flatMap((section) => [section.heading, ...(section.paragraphs ?? [])]) : [];
  const editorialWordCount = [data.dek, data.summary, ...(data.keyFacts ?? []), ...(data.whyItMatters ?? []), ...reportingText, data.flypigTake, data.productStatus, ...(data.openQuestions ?? []), data.canadaRelevance]
    .filter(Boolean).join(" ").trim().split(/\s+/).filter(Boolean).length;
  if (editorialWordCount < 350) errors.push(`${label}: editorial content is too thin (${editorialWordCount} words; minimum 350)`);

  const hero = data.heroVisual;
  if (!hero) {
    errors.push(`${label}: missing heroVisual`);
    continue;
  }
  if (!allowedKinds.has(hero.kind)) errors.push(`${label}: invalid hero kind`);
  if (!allowedRights.has(hero.assetRights?.status)) errors.push(`${label}: invalid asset rights status`);
  if (!hero.assetRights?.evidence?.includes("scripts/generate-signal-heroes.mjs") || !hero.assetRights.evidence.includes("editable source:")) errors.push(`${label}: incomplete owned-asset evidence`);
  if (!hero.alt || !hero.credit || !hero.sourceUrl) errors.push(`${label}: incomplete hero attribution`);
  if ((hero.alt ?? "").length < 60 || /summarizing .+ developments/i.test(hero.alt ?? "")) errors.push(`${label}: hero alt must specifically describe the visual`);
  if (hero.width !== 1600 || hero.height !== 1000) errors.push(`${label}: hero dimensions must be 1600x1000`);
  for (const [field, dimensions] of [["src", [1600, 1000]], ["socialSrc", [1200, 630]]]) {
    const value = hero[field];
    if (typeof value !== "string" || !value.startsWith("/") || /^https?:/.test(value) || !value.endsWith(".png")) {
      errors.push(`${label}: ${field} must be a local PNG path`);
      continue;
    }
    const filePath = path.join(root, "public", value);
    if (!fs.existsSync(filePath)) {
      errors.push(`${label}: missing file public${value}`);
      continue;
    }
    const metadata = await sharp(filePath).metadata();
    if (metadata.width !== dimensions[0] || metadata.height !== dimensions[1]) errors.push(`${label}: ${field} dimensions do not match ${dimensions.join("x")}`);
  }
  const sourceMatch = hero.assetRights?.evidence?.match(/editable source: ([^;]+)$/);
  if (!sourceMatch || !fs.existsSync(path.join(root, sourceMatch[1]))) errors.push(`${label}: editable source evidence does not resolve`);
  const socialSourcePath = path.join(root, "public", "images", "signals", "source", `${data.slug}-social.svg`);
  if (!fs.existsSync(socialSourcePath)) errors.push(`${label}: editable social-image source does not resolve`);
}

if (!fs.existsSync(path.join(root, "scripts", "generate-signal-heroes.mjs"))) errors.push("Missing reusable Signal hero generator");
if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}
console.log(`Validated ${signals.length} Industry Signals, media assets, rights evidence, dates, titles, and relationships.`);
