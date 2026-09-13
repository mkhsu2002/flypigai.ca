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
const officialLogoPath = path.join(root, "public", "images", "brand", "flypig-logo.png");
const sheetDirectory = path.join(root, "artifacts", "signal-review-sheets");
for (const directory of [sourceDirectory, imageDirectory, socialDirectory, sheetDirectory]) fs.mkdirSync(directory, { recursive: true });
if (!fs.existsSync(officialLogoPath)) throw new Error("Missing official FlyPig logo at public/images/brand/flypig-logo.png");

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

function officialLogoImage(x, y, width, height) {
  return `<image href="/images/brand/flypig-logo.png" x="${x}" y="${y}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet"/>`;
}

const logoBuffers = new Map();
async function officialLogoBuffer(width) {
  if (!logoBuffers.has(width)) {
    logoBuffers.set(width, await sharp(officialLogoPath).resize({ width, fit: "inside", withoutEnlargement: true }).png().toBuffer());
  }
  return logoBuffers.get(width);
}

function svgFor(signal, width, height, social = false) {
  const titleLines = fittedLines(signal.socialTitle || signal.title, social ? 28 : 34, social ? 3 : 3, `${signal.slug} title`);
  const palette = ["#0f766e", "#2563eb", "#7c3aed", "#b45309", "#be123c"];
  const accent = palette[signals.findIndex((candidate) => candidate.slug === signal.slug) % palette.length];
  const titleSize = social ? 48 : 64;
  const titleStart = social ? 206 : 292;
  const titleStep = social ? 62 : 82;
  const factsTop = social ? 438 : 690;
  const factWidth = social ? 330 : 438;
  const factGap = social ? 24 : 30;
  const side = social ? 72 : 96;
  const factHeight = social ? 118 : 174;
  const factFont = social ? 22 : 28;
  const factLabel = social ? 15 : 18;
  const logoWidth = social ? 320 : 430;
  const logoLeft = width - side - logoWidth;
  const logoTop = social ? 166 : 260;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbfaf7"/><stop offset="1" stop-color="#eef6f4"/></linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#1f2933" stroke-opacity=".045"/></pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#background)"/>
  <rect width="${width}" height="${height}" fill="url(#grid)"/>
  <rect x="0" y="0" width="18" height="${height}" fill="${accent}"/>
  <text x="${side}" y="${social ? 79 : 105}" fill="#1f2933" font-family="Arial, Helvetica, sans-serif" font-size="23" font-weight="700">FlyPig AI</text>
  <text x="${side}" y="${social ? 105 : 132}" fill="#667085" font-family="Arial, Helvetica, sans-serif" font-size="16" letter-spacing="2">INDUSTRY SIGNAL</text>
  <text x="${side}" y="${social ? 167 : 222}" fill="${accent}" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" letter-spacing="2">${escapeXml(signal.supplier.toUpperCase())} · ${escapeXml(signal.category.toUpperCase())}</text>
  ${titleLines.map((line, index) => `<text x="${side}" y="${titleStart + index * titleStep}" fill="#1f2933" font-family="Georgia, 'Times New Roman', serif" font-size="${titleSize}" font-weight="500">${escapeXml(line)}</text>`).join("\n  ")}
  ${social ? signal.keyFacts.map((fact, index) => {
    const factLines = fittedLines(fact, 54, 1, `${signal.slug} key fact ${index + 1}`);
    return `<text x="${side}" y="${factsTop + index * 34}" fill="#1f2933" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700"><tspan fill="${accent}">0${index + 1}</tspan> ${escapeXml(factLines[0])}</text>`;
  }).join("\n  ") : signal.keyFacts.map((fact, index) => {
    const x = side + index * (factWidth + factGap);
    const factLines = fittedLines(fact, social ? 24 : 27, 2, `${signal.slug} key fact ${index + 1}`);
    return `<g><rect x="${x}" y="${factsTop}" width="${factWidth}" height="${factHeight}" rx="12" fill="#fff" stroke="#1f2933" stroke-opacity=".13"/><text x="${x + 24}" y="${factsTop + (social ? 32 : 42)}" fill="${accent}" font-family="Arial, Helvetica, sans-serif" font-size="${factLabel}" font-weight="700">0${index + 1}</text>${factLines.map((line, lineIndex) => `<text x="${x + 24}" y="${factsTop + (social ? 68 : 92) + lineIndex * (social ? 27 : 36)}" fill="#1f2933" font-family="Arial, Helvetica, sans-serif" font-size="${factFont}" font-weight="650">${escapeXml(line)}</text>`).join("")}</g>`;
  }).join("\n  ")}
  ${officialLogoImage(logoLeft, logoTop, logoWidth, Math.round(logoWidth * 550 / 650))}
  <text x="${side}" y="${height - (social ? 26 : 52)}" fill="#667085" font-family="Arial, Helvetica, sans-serif" font-size="${social ? 14 : 17}">Independent editorial infographic · Source linked in article · flypigai.ca</text>
  </svg>`;
}

async function renderWithOfficialLogo(svg, outputPath, social) {
  const width = social ? 1200 : 1600;
  const side = social ? 72 : 96;
  const logoWidth = social ? 320 : 430;
  const logoLeft = width - side - logoWidth;
  const logoTop = social ? 166 : 260;
  await sharp(Buffer.from(svg))
    .composite([{ input: await officialLogoBuffer(logoWidth), left: logoLeft, top: logoTop }])
    .png()
    .toFile(outputPath);
}

const renderedSocialPaths = [];
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
  await renderWithOfficialLogo(heroSvg, heroTemporaryPath, false);
  await renderWithOfficialLogo(socialSvg, socialTemporaryPath, true);
  fs.renameSync(heroTemporaryPath, heroPath);
  fs.renameSync(socialTemporaryPath, socialPath);
  const [heroMetadata, socialMetadata] = await Promise.all([sharp(heroPath).metadata(), sharp(socialPath).metadata()]);
  if (heroMetadata.width !== 1600 || heroMetadata.height !== 1000) throw new Error(`Unexpected hero dimensions for ${signal.slug}`);
  if (socialMetadata.width !== 1200 || socialMetadata.height !== 630) throw new Error(`Unexpected social dimensions for ${signal.slug}`);
  renderedSocialPaths.push(socialPath);
  console.log(`${signal.slug}: hero 1600x1000, social 1200x630`);
}

const thumbs = await Promise.all(renderedSocialPaths.map((filePath) => sharp(filePath).resize(400, 210).extend({ top: 0, bottom: 34, left: 0, right: 0, background: "#fbfaf7" }).composite([{ input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="34"><text x="16" y="23" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#1f2933">${escapeXml(path.basename(filePath, ".png"))}</text></svg>`), top: 210, left: 0 }]).toBuffer()));
const columns = Math.min(3, thumbs.length);
const rows = Math.ceil(thumbs.length / columns);
const sheetPath = path.join(sheetDirectory, `signal-og-${String(start).padStart(2, "0")}-${String(start + batch.length - 1).padStart(2, "0")}.png`);
await sharp({
  create: {
    width: columns * 400,
    height: rows * 244,
    channels: 4,
    background: "#fbfaf7",
  },
}).composite(thumbs.map((input, index) => ({ input, left: (index % columns) * 400, top: Math.floor(index / columns) * 244 }))).png({ compressionLevel: 9 }).toFile(sheetPath);

console.log(`Generated and verified ${batch.length} Signal artwork set${batch.length === 1 ? "" : "s"}${missingOnly ? " that were missing" : ` (start ${start})`}.`);
console.log(`Review sheet: ${path.relative(root, sheetPath)}`);
