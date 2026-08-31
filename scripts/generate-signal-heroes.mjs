import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

sharp.cache(false);
sharp.concurrency(1);

const args = Object.fromEntries(process.argv.slice(2).map((argument) => {
  const [key, value = "true"] = argument.replace(/^--/, "").split("=");
  return [key, value];
}));
const start = Number(args.start ?? 0);
const limit = Number(args.limit ?? 6);
const missingOnly = args.missing === "true";
if (!Number.isInteger(start) || start < 0) throw new Error("--start must be a non-negative integer");
if (!Number.isInteger(limit) || limit < 1 || limit > 6) throw new Error("--limit must be an integer from 1 to 6");

const root = process.cwd();
const contentDirectory = path.join(root, "content", "industry-signals");
const sourceDirectory = path.join(root, "public", "images", "signals", "source");
const imageDirectory = path.join(root, "public", "images", "signals");
const socialDirectory = path.join(imageDirectory, "og");
for (const directory of [sourceDirectory, imageDirectory, socialDirectory]) fs.mkdirSync(directory, { recursive: true });

const signals = fs.readdirSync(contentDirectory)
  .filter((fileName) => fileName.endsWith(".json"))
  .sort()
  .map((fileName) => JSON.parse(fs.readFileSync(path.join(contentDirectory, fileName), "utf8")));

function hasCompleteArtwork(signal) {
  return [
    path.join(sourceDirectory, `${signal.slug}.svg`),
    path.join(sourceDirectory, `${signal.slug}-social.svg`),
    path.join(imageDirectory, `${signal.slug}.png`),
    path.join(socialDirectory, `${signal.slug}.png`),
  ].every((filePath) => fs.existsSync(filePath));
}

const batch = missingOnly ? signals.filter((signal) => !hasCompleteArtwork(signal)) : signals.slice(start, start + limit);
if (!batch.length) {
  console.log(missingOnly ? "All Industry Signal artwork is already present." : `No records found at --start=${start}`);
  process.exit(0);
}

function escapeXml(value) {
  return String(value).replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[character]);
}

function wrapText(value, maxCharacters, maxLines) {
  const words = value.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxCharacters && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    const clipped = lines.slice(0, maxLines);
    clipped[maxLines - 1] = `${clipped[maxLines - 1].replace(/[.,;:]?$/, "")}…`;
    return clipped;
  }
  return lines;
}

function fittedLines(value, maxCharacters, maxLines, label) {
  const lines = wrapText(value, maxCharacters, maxLines);
  if (lines.some((line) => line.endsWith("…"))) throw new Error(`${label} does not fit the approved visual safe area`);
  return lines;
}

function svgFor(signal, width, height, social = false) {
  const titleLines = fittedLines(signal.socialTitle || signal.title, 34, social ? 2 : 3, `${signal.slug} title`);
  const palette = ["#0f766e", "#2563eb", "#7c3aed", "#b45309", "#be123c"];
  const accent = palette[signals.findIndex((candidate) => candidate.slug === signal.slug) % palette.length];
  const titleSize = social ? 48 : 64;
  const titleStart = social ? 206 : 292;
  const titleStep = social ? 62 : 82;
  const factsTop = social ? 428 : 690;
  const factWidth = social ? 330 : 438;
  const factGap = social ? 24 : 30;
  const side = social ? 72 : 96;
  const factHeight = social ? 118 : 174;
  const factFont = social ? 22 : 28;
  const factLabel = social ? 15 : 18;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbfaf7"/><stop offset="1" stop-color="#eef6f4"/></linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#1f2933" stroke-opacity=".045"/></pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#background)"/>
  <rect width="${width}" height="${height}" fill="url(#grid)"/>
  <rect x="0" y="0" width="18" height="${height}" fill="${accent}"/>
  <circle cx="${side + 34}" cy="${social ? 86 : 112}" r="34" fill="#1f2933"/>
  <text x="${side + 34}" y="${social ? 92 : 118}" text-anchor="middle" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700">FP</text>
  <text x="${side + 86}" y="${social ? 79 : 105}" fill="#1f2933" font-family="Arial, Helvetica, sans-serif" font-size="23" font-weight="700">FlyPig AI</text>
  <text x="${side + 86}" y="${social ? 105 : 132}" fill="#667085" font-family="Arial, Helvetica, sans-serif" font-size="16" letter-spacing="2">INDUSTRY SIGNAL</text>
  <text x="${side}" y="${social ? 167 : 222}" fill="${accent}" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" letter-spacing="2">${escapeXml(signal.supplier.toUpperCase())} · ${escapeXml(signal.category.toUpperCase())}</text>
  ${titleLines.map((line, index) => `<text x="${side}" y="${titleStart + index * titleStep}" fill="#1f2933" font-family="Georgia, 'Times New Roman', serif" font-size="${titleSize}" font-weight="500">${escapeXml(line)}</text>`).join("\n  ")}
  ${signal.keyFacts.map((fact, index) => {
    const x = side + index * (factWidth + factGap);
    const factLines = fittedLines(fact, social ? 24 : 27, 2, `${signal.slug} key fact ${index + 1}`);
    return `<g><rect x="${x}" y="${factsTop}" width="${factWidth}" height="${factHeight}" rx="12" fill="#fff" stroke="#1f2933" stroke-opacity=".13"/><text x="${x + 24}" y="${factsTop + (social ? 32 : 42)}" fill="${accent}" font-family="Arial, Helvetica, sans-serif" font-size="${factLabel}" font-weight="700">0${index + 1}</text>${factLines.map((line, lineIndex) => `<text x="${x + 24}" y="${factsTop + (social ? 68 : 92) + lineIndex * (social ? 27 : 36)}" fill="#1f2933" font-family="Arial, Helvetica, sans-serif" font-size="${factFont}" font-weight="650">${escapeXml(line)}</text>`).join("")}</g>`;
  }).join("\n  ")}
  <text x="${side}" y="${height - (social ? 26 : 52)}" fill="#667085" font-family="Arial, Helvetica, sans-serif" font-size="${social ? 14 : 17}">Independent editorial infographic · Source linked in article · flypigai.ca</text>
  </svg>`;
}

for (const signal of batch) {
  const heroSvg = svgFor(signal, 1600, 1000, false);
  const socialSvg = svgFor(signal, 1200, 630, true);
  const sourcePath = path.join(sourceDirectory, `${signal.slug}.svg`);
  const socialSourcePath = path.join(sourceDirectory, `${signal.slug}-social.svg`);
  const heroPath = path.join(imageDirectory, `${signal.slug}.png`);
  const socialPath = path.join(socialDirectory, `${signal.slug}.png`);
  const heroTemporaryPath = `${heroPath}.next.png`;
  const socialTemporaryPath = `${socialPath}.next.png`;
  fs.writeFileSync(sourcePath, heroSvg);
  fs.writeFileSync(socialSourcePath, socialSvg);
  await sharp(fs.readFileSync(sourcePath)).png().toFile(heroTemporaryPath);
  await sharp(fs.readFileSync(socialSourcePath)).png().toFile(socialTemporaryPath);
  fs.renameSync(heroTemporaryPath, heroPath);
  fs.renameSync(socialTemporaryPath, socialPath);
  const [heroMetadata, socialMetadata] = await Promise.all([sharp(heroPath).metadata(), sharp(socialPath).metadata()]);
  if (heroMetadata.width !== 1600 || heroMetadata.height !== 1000) throw new Error(`Unexpected hero dimensions for ${signal.slug}`);
  if (socialMetadata.width !== 1200 || socialMetadata.height !== 630) throw new Error(`Unexpected social dimensions for ${signal.slug}`);
  console.log(`${signal.slug}: hero 1600x1000, social 1200x630`);
}

console.log(`Generated and verified ${batch.length} Signal artwork set${batch.length === 1 ? "" : "s"}${missingOnly ? " that were missing" : ` (start ${start})`}.`);
