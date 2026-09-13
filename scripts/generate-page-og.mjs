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
if (!Number.isInteger(start) || start < 0) throw new Error("--start must be a non-negative integer");
if (!Number.isInteger(limit) || limit < 1 || limit > 6) throw new Error("--limit must be an integer from 1 to 6");

const root = process.cwd();
const ogDirectory = path.join(root, "public", "images", "og");
const pagesDirectory = path.join(ogDirectory, "pages");
const sourceDirectory = path.join(ogDirectory, "source", "pages");
const sheetDirectory = path.join(root, "artifacts", "og-review-sheets");
const officialLogoPath = path.join(root, "public", "images", "brand", "flypig-logo.png");
for (const directory of [ogDirectory, pagesDirectory, sourceDirectory, sheetDirectory]) fs.mkdirSync(directory, { recursive: true });
if (!fs.existsSync(officialLogoPath)) throw new Error("Missing official FlyPig logo at public/images/brand/flypig-logo.png");

const palette = {
  home: { accent: "#0f766e", second: "#2563eb", pale: "#e7f4f1" },
  solutions: { accent: "#0f766e", second: "#2563eb", pale: "#e7f4f1" },
  technology: { accent: "#2563eb", second: "#0f766e", pale: "#edf4ff" },
  signals: { accent: "#0f766e", second: "#16a34a", pale: "#e8f7f0" },
  insights: { accent: "#1f2933", second: "#0f766e", pale: "#f3eee7" },
  atlas: { accent: "#0f766e", second: "#64748b", pale: "#e9f5f2" },
  physical: { accent: "#2563eb", second: "#0f766e", pale: "#eef6ff" },
  services: { accent: "#1f2933", second: "#0f766e", pale: "#f4f8f7" },
};

const pages = [
  { slug: "home", title: "Canada-Taiwan Edge AI Research", kicker: "FlyPig AI", detail: "Physical AI · Industry Signals · Market Maps", group: "home" },
  { slug: "taiwan-solutions", title: "Taiwan Technology Routes", kicker: "Taiwan Solutions", detail: "Compute · sensing · connectivity · production", group: "solutions" },
  { slug: "technologies", title: "Technology Intelligence", kicker: "Decision guides", detail: "Architecture questions before design-in", group: "technology" },
  { slug: "signals", title: "Industry Signals", kicker: "Source-based reporting", detail: "Product changes that may affect design decisions", group: "signals" },
  { slug: "insights", title: "Physical AI Insights", kicker: "Market structure", detail: "Deployment, platforms and Canada-facing analysis", group: "insights" },
  { slug: "atlas", title: "Canada Physical AI Atlas", kicker: "Ecosystem map", detail: "Robotics · drones · integrators · operators", group: "atlas" },
  { slug: "services", title: "Canada-Taiwan Qualification", kicker: "How We Help", detail: "Two paths from uncertainty to a qualified next step", group: "services" },
  { slug: "services-canadian-product-teams", title: "Edge AI Technology Qualification", kicker: "For Canadian product teams", detail: "Requirements · architecture · fit matrix · open questions", group: "services" },
  { slug: "services-taiwan-technology-companies", title: "Canada Design-In Readiness", kicker: "For Taiwan technology companies", detail: "Application fit, evidence gaps and credible outreach", group: "solutions" },
  { slug: "physical-ai", title: "Physical AI Deployment Readiness", kicker: "Canada framework", detail: "Tasks, sites, safety, support and measurable pilots", group: "physical" },
  { slug: "atlas-technologies", title: "Physical AI Technologies in Canada", kicker: "Atlas browse", detail: "Vision, navigation, autonomy software and enabling systems", group: "atlas" },
  { slug: "atlas-industries", title: "Industries & Applications", kicker: "Atlas browse", detail: "Where robots, drones and autonomy meet operating demand", group: "atlas" },
  { slug: "atlas-locations", title: "Canadian Robotics Clusters", kicker: "Atlas browse", detail: "Regional capability across British Columbia, Ontario, Quebec and Alberta", group: "atlas" },
  { slug: "atlas-methodology", title: "Atlas Methodology", kicker: "Editorial standard", detail: "Selection, sourcing, disclosure and corrections", group: "atlas" },
  { slug: "atlas-submit", title: "Submit an Organization", kicker: "Canada Physical AI Atlas", detail: "Recommend a listing, correction or ecosystem resource", group: "atlas" },
  { slug: "atlas-robotics-manufacturers", title: "Robotics Manufacturers", kicker: "Canada Atlas", detail: "Mobile robots, arms, humanoids, service robots and subsea systems", group: "atlas" },
  { slug: "atlas-drones-autonomous-aircraft", title: "Drones & Autonomous Aircraft", kicker: "Canada Atlas", detail: "Inspection, logistics, defence and public safety missions", group: "atlas" },
  { slug: "atlas-automation-integrators", title: "Automation & Robotics Integrators", kicker: "Canada Atlas", detail: "Controls, deployment and production systems", group: "atlas" },
  { slug: "atlas-components-vision-navigation", title: "Components, Vision & Navigation", kicker: "Canada Atlas", detail: "Sensing, imaging, positioning and embedded software", group: "atlas" },
  { slug: "atlas-research-innovation", title: "Research & Innovation Ecosystem", kicker: "Canada Atlas", detail: "AI hubs, robotics labs and commercialization support", group: "atlas" },
  { slug: "atlas-industrial-adopters", title: "Industrial Adopters & Operators", kicker: "Canada Atlas", detail: "Utilities, rail, energy, mining and field operations", group: "atlas" },
  { slug: "technology-edge-ai-compute", title: "Edge AI Compute", kicker: "Technology decision guide", detail: "Workload, latency, power, memory, software and lifecycle", group: "technology" },
  { slug: "technology-embedded-platforms", title: "Embedded Platform Form Factors", kicker: "Technology decision guide", detail: "SOM, SMARC, OSM, SBC or Mini-ITX", group: "technology" },
  { slug: "technology-vision-sensing", title: "Vision and Sensing", kicker: "Technology decision guide", detail: "Scene, range, privacy, calibration and failure behavior", group: "technology" },
  { slug: "insights-canada-needs-physical-ai-integrators", title: "Canada Needs Physical AI Integrators", kicker: "Opening thesis", detail: "Deployment value above the robot chassis", group: "insights" },
  { slug: "insights-canada-robotics-market-entry-guide", title: "Canada Robotics Market Entry Guide", kicker: "Market entry guide", detail: "Channels, pilots, partners and commercialization", group: "insights" },
  { slug: "insights-canada-physical-ai-ecosystem-overview", title: "Canada Physical AI Ecosystem Overview", kicker: "Ecosystem overview", detail: "Research, platforms, integrators and industrial adopters", group: "insights" },
  { slug: "insights-robotics-integrators-in-canada", title: "Robotics Integrators in Canada", kicker: "Integrator strategy", detail: "Controls, safety, workflow and support ownership", group: "insights" },
  { slug: "insights-drone-autonomous-systems-market-canada", title: "Drone and Autonomous Systems Market in Canada", kicker: "Market map", detail: "Infrastructure inspection, public safety and remote operations", group: "insights" },
  { slug: "insights-asian-robotics-suppliers-enter-canada", title: "How Asian Robotics Suppliers Can Enter Canada", kicker: "Cross-border commercialization", detail: "Local proof, support, partnerships and first reference cases", group: "insights" },
  { slug: "insights-physical-ai-modularization", title: "Physical AI Goes Modular", kicker: "Research series", detail: "Who becomes the Android of Physical AI?", group: "physical" },
  { slug: "insights-physical-ai-modularization-from-reference-phones-to-reference-robots", title: "From Reference Phones to Reference Robots", kicker: "Essay 01", detail: "Reusable platforms and the start of a robot application economy", group: "physical" },
  { slug: "insights-physical-ai-modularization-who-becomes-android-for-physical-ai", title: "Who Becomes the Android of Physical AI?", kicker: "Essay 02", detail: "The software layer for heterogeneous robot bodies", group: "physical" },
  { slug: "insights-physical-ai-modularization-the-qualcomm-moment-for-robotics", title: "The Qualcomm Moment for Robotics", kicker: "Essay 03", detail: "Reference compute changes who is able to build", group: "physical" },
  { slug: "insights-physical-ai-modularization-china-reference-robot-supply-chain", title: "Reference Robot Supply Chains", kicker: "Essay 04", detail: "XGO, Unitree and reusable embodied hardware", group: "physical" },
  { slug: "insights-physical-ai-modularization-robot-skills-as-the-next-app-ecosystem", title: "Robot Skills as the Next App Ecosystem", kicker: "Essay 05", detail: "Trusted physical capabilities as callable tools", group: "physical" },
  { slug: "insights-physical-ai-modularization-where-value-moves-in-modular-physical-ai", title: "Where Value Moves in Modular Physical AI", kicker: "Essay 06", detail: "Models, robot OS, compute, bodies, skills and applications", group: "physical" },
  { slug: "about", title: "About FlyPig AI", kicker: "Company profile", detail: "Canada-based research between product intent and technology capability", group: "services" },
  { slug: "contact", title: "Contact FlyPig AI", kicker: "Start a scoped question", detail: "Product requirements, technology signals, Atlas corrections and research inquiries", group: "services" },
  { slug: "editorial-policy", title: "Editorial Policy", kicker: "Source first", detail: "Facts, interpretation, corrections and media rights", group: "insights" },
  { slug: "privacy", title: "Privacy Notice", kicker: "Data boundary", detail: "Inquiry information, consent state, audit records and service providers", group: "services" },
  { slug: "newsletter-unsubscribe", title: "Unsubscribe from Industry Signals", kicker: "Email preferences", detail: "Update FlyPig AI email delivery from a signed link", group: "signals" },
];

const batch = pages.slice(start, start + limit);
if (!batch.length) {
  console.log(`No page OG records found at --start=${start}`);
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
    clipped[maxLines - 1] = `${clipped[maxLines - 1].replace(/[.,;:]?$/, "")}...`;
    return clipped;
  }
  return lines;
}

function textLines(value, x, y, options = {}) {
  const { size = 62, max = 24, lines = 2, step = Math.round(size * 1.12), family = "Georgia, 'Times New Roman', serif", weight = 500, fill = "#1f2933" } = options;
  return wrapText(value, max, lines).map((line, index) => `<text x="${x}" y="${y + index * step}" fill="${fill}" font-family="${family}" font-size="${size}" font-weight="${weight}">${escapeXml(line)}</text>`).join("\n");
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

function brandLogoPanel() {
  return `<g>
    ${officialLogoImage(782, 166, 360, 305)}
  </g>`;
}

function svgFor(page) {
  const colors = palette[page.group] ?? palette.home;
  const titleSize = page.title.length > 50 ? 50 : page.title.length > 34 ? 56 : 64;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fbfaf7"/>
      <stop offset=".58" stop-color="#fbfaf7"/>
      <stop offset="1" stop-color="${colors.pale}"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#1f2933" stroke-opacity=".05"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect x="0" y="0" width="18" height="630" fill="${colors.accent}"/>
  <text x="76" y="88" fill="#1f2933" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="800">FlyPig AI</text>
  <text x="76" y="118" fill="#667085" font-family="Arial, Helvetica, sans-serif" font-size="15" letter-spacing="2">CANADA - TAIWAN</text>
  <text x="76" y="188" fill="${colors.accent}" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" letter-spacing="2">${escapeXml(page.kicker.toUpperCase())}</text>
  ${textLines(page.title, 76, 274, { size: titleSize, max: 20, lines: 3, step: Math.round(titleSize * 1.08) })}
  ${textLines(page.detail, 80, 464, { size: 21, max: 52, lines: 2, step: 28, family: "Arial, Helvetica, sans-serif", weight: 800, fill: colors.accent })}
  <text x="80" y="555" fill="#667085" font-family="Arial, Helvetica, sans-serif" font-size="18">Independent, source-based technology research · flypigai.ca</text>
  <path d="M704 94V542" stroke="#1f2933" stroke-opacity=".08" stroke-width="1"/>
  ${brandLogoPanel()}
  </svg>`;
}

const renderedPaths = [];
for (const page of batch) {
  const svg = svgFor(page);
  const sourcePath = path.join(sourceDirectory, `${page.slug}.svg`);
  const pngPath = page.slug === "home" ? path.join(ogDirectory, "flypig-ai-default.png") : path.join(pagesDirectory, `${page.slug}.png`);
  const temporaryPath = `${pngPath}.next.png`;
  fs.writeFileSync(sourcePath, svg);
  if (page.slug === "home") fs.writeFileSync(path.join(ogDirectory, "source", "flypig-ai-default.svg"), svg);
  await sharp(Buffer.from(svg))
    .composite([
      { input: await officialLogoBuffer(360), left: 782, top: 166 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(temporaryPath);
  fs.renameSync(temporaryPath, pngPath);
  const metadata = await sharp(pngPath).metadata();
  if (metadata.width !== 1200 || metadata.height !== 630) throw new Error(`Unexpected OG dimensions for ${page.slug}`);
  renderedPaths.push(pngPath);
  console.log(`${page.slug}: 1200x630`);
}

const thumbs = await Promise.all(renderedPaths.map((filePath) => sharp(filePath).resize(400, 210).extend({ top: 0, bottom: 34, left: 0, right: 0, background: "#fbfaf7" }).composite([{ input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="34"><text x="16" y="23" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#1f2933">${escapeXml(path.basename(filePath, ".png"))}</text></svg>`), top: 210, left: 0 }]).toBuffer()));
const columns = Math.min(3, thumbs.length);
const rows = Math.ceil(thumbs.length / columns);
const sheetPath = path.join(sheetDirectory, `page-og-${String(start).padStart(2, "0")}-${String(start + batch.length - 1).padStart(2, "0")}.png`);
await sharp({
  create: {
    width: columns * 400,
    height: rows * 244,
    channels: 4,
    background: "#fbfaf7",
  },
}).composite(thumbs.map((input, index) => ({ input, left: (index % columns) * 400, top: Math.floor(index / columns) * 244 }))).png({ compressionLevel: 9 }).toFile(sheetPath);

console.log(`Generated and verified ${batch.length} page OG image${batch.length === 1 ? "" : "s"} (start ${start}).`);
console.log(`Review sheet: ${path.relative(root, sheetPath)}`);
