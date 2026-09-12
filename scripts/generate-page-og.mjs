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
for (const directory of [ogDirectory, pagesDirectory, sourceDirectory, sheetDirectory]) fs.mkdirSync(directory, { recursive: true });

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
  { slug: "home", title: "Canada-Taiwan Edge AI Research", kicker: "FlyPig AI", detail: "Physical AI · Industry Signals · Market Maps", motif: "bridge", group: "home" },
  { slug: "taiwan-solutions", title: "Taiwan Technology Routes", kicker: "Taiwan Solutions", detail: "Compute · sensing · connectivity · production", motif: "modules", group: "solutions" },
  { slug: "technologies", title: "Technology Intelligence", kicker: "Decision guides", detail: "Architecture questions before design-in", motif: "stack", group: "technology" },
  { slug: "signals", title: "Industry Signals", kicker: "Source-based reporting", detail: "Product changes that may affect design decisions", motif: "radar", group: "signals" },
  { slug: "insights", title: "Physical AI Insights", kicker: "Market structure", detail: "Deployment, platforms and Canada-facing analysis", motif: "notebook", group: "insights" },
  { slug: "atlas", title: "Canada Physical AI Atlas", kicker: "Ecosystem map", detail: "Robotics · drones · integrators · operators", motif: "map", group: "atlas" },
  { slug: "services", title: "Canada-Taiwan Qualification", kicker: "How We Help", detail: "Two paths from uncertainty to a qualified next step", motif: "fork", group: "services" },
  { slug: "services-canadian-product-teams", title: "Edge AI Technology Qualification", kicker: "For Canadian product teams", detail: "Requirements · architecture · fit matrix · open questions", motif: "matrix", group: "services" },
  { slug: "services-taiwan-technology-companies", title: "Canada Design-In Readiness", kicker: "For Taiwan technology companies", detail: "Application fit, evidence gaps and credible outreach", motif: "route", group: "solutions" },
  { slug: "physical-ai", title: "Physical AI Deployment Readiness", kicker: "Canada framework", detail: "Tasks, sites, safety, support and measurable pilots", motif: "robot", group: "physical" },
  { slug: "atlas-technologies", title: "Physical AI Technologies in Canada", kicker: "Atlas browse", detail: "Vision, navigation, autonomy software and enabling systems", motif: "stack", group: "atlas" },
  { slug: "atlas-industries", title: "Industries & Applications", kicker: "Atlas browse", detail: "Where robots, drones and autonomy meet operating demand", motif: "grid", group: "atlas" },
  { slug: "atlas-locations", title: "Canadian Robotics Clusters", kicker: "Atlas browse", detail: "Regional capability across British Columbia, Ontario, Quebec and Alberta", motif: "map", group: "atlas" },
  { slug: "atlas-methodology", title: "Atlas Methodology", kicker: "Editorial standard", detail: "Selection, sourcing, disclosure and corrections", motif: "stamp", group: "atlas" },
  { slug: "atlas-submit", title: "Submit an Organization", kicker: "Canada Physical AI Atlas", detail: "Recommend a listing, correction or ecosystem resource", motif: "inbox", group: "atlas" },
  { slug: "atlas-robotics-manufacturers", title: "Robotics Manufacturers", kicker: "Canada Atlas", detail: "Mobile robots, arms, humanoids, service robots and subsea systems", motif: "robot", group: "atlas" },
  { slug: "atlas-drones-autonomous-aircraft", title: "Drones & Autonomous Aircraft", kicker: "Canada Atlas", detail: "Inspection, logistics, defence and public safety missions", motif: "drone", group: "atlas" },
  { slug: "atlas-automation-integrators", title: "Automation & Robotics Integrators", kicker: "Canada Atlas", detail: "Controls, deployment and production systems", motif: "fork", group: "atlas" },
  { slug: "atlas-components-vision-navigation", title: "Components, Vision & Navigation", kicker: "Canada Atlas", detail: "Sensing, imaging, positioning and embedded software", motif: "sensor", group: "atlas" },
  { slug: "atlas-research-innovation", title: "Research & Innovation Ecosystem", kicker: "Canada Atlas", detail: "AI hubs, robotics labs and commercialization support", motif: "notebook", group: "atlas" },
  { slug: "atlas-industrial-adopters", title: "Industrial Adopters & Operators", kicker: "Canada Atlas", detail: "Utilities, rail, energy, mining and field operations", motif: "grid", group: "atlas" },
  { slug: "technology-edge-ai-compute", title: "Edge AI Compute", kicker: "Technology decision guide", detail: "Workload, latency, power, memory, software and lifecycle", motif: "chip", group: "technology" },
  { slug: "technology-embedded-platforms", title: "Embedded Platform Form Factors", kicker: "Technology decision guide", detail: "SOM, SMARC, OSM, SBC or Mini-ITX", motif: "modules", group: "technology" },
  { slug: "technology-vision-sensing", title: "Vision and Sensing", kicker: "Technology decision guide", detail: "Scene, range, privacy, calibration and failure behavior", motif: "sensor", group: "technology" },
  { slug: "insights-canada-needs-physical-ai-integrators", title: "Canada Needs Physical AI Integrators", kicker: "Opening thesis", detail: "Deployment value above the robot chassis", motif: "fork", group: "insights" },
  { slug: "insights-canada-robotics-market-entry-guide", title: "Canada Robotics Market Entry Guide", kicker: "Market entry guide", detail: "Channels, pilots, partners and commercialization", motif: "route", group: "insights" },
  { slug: "insights-canada-physical-ai-ecosystem-overview", title: "Canada Physical AI Ecosystem Overview", kicker: "Ecosystem overview", detail: "Research, platforms, integrators and industrial adopters", motif: "map", group: "insights" },
  { slug: "insights-robotics-integrators-in-canada", title: "Robotics Integrators in Canada", kicker: "Integrator strategy", detail: "Controls, safety, workflow and support ownership", motif: "fork", group: "insights" },
  { slug: "insights-drone-autonomous-systems-market-canada", title: "Drone and Autonomous Systems Market in Canada", kicker: "Market map", detail: "Infrastructure inspection, public safety and remote operations", motif: "drone", group: "insights" },
  { slug: "insights-asian-robotics-suppliers-enter-canada", title: "How Asian Robotics Suppliers Can Enter Canada", kicker: "Cross-border commercialization", detail: "Local proof, support, partnerships and first reference cases", motif: "route", group: "insights" },
  { slug: "insights-physical-ai-modularization", title: "Physical AI Goes Modular", kicker: "Research series", detail: "Who becomes the Android of Physical AI?", motif: "stack", group: "physical" },
  { slug: "insights-physical-ai-modularization-from-reference-phones-to-reference-robots", title: "From Reference Phones to Reference Robots", kicker: "Essay 01", detail: "Reusable platforms and the start of a robot application economy", motif: "modules", group: "physical" },
  { slug: "insights-physical-ai-modularization-who-becomes-android-for-physical-ai", title: "Who Becomes the Android of Physical AI?", kicker: "Essay 02", detail: "The software layer for heterogeneous robot bodies", motif: "stack", group: "physical" },
  { slug: "insights-physical-ai-modularization-the-qualcomm-moment-for-robotics", title: "The Qualcomm Moment for Robotics", kicker: "Essay 03", detail: "Reference compute changes who is able to build", motif: "chip", group: "physical" },
  { slug: "insights-physical-ai-modularization-china-reference-robot-supply-chain", title: "Reference Robot Supply Chains", kicker: "Essay 04", detail: "XGO, Unitree and reusable embodied hardware", motif: "robot", group: "physical" },
  { slug: "insights-physical-ai-modularization-robot-skills-as-the-next-app-ecosystem", title: "Robot Skills as the Next App Ecosystem", kicker: "Essay 05", detail: "Trusted physical capabilities as callable tools", motif: "sensor", group: "physical" },
  { slug: "insights-physical-ai-modularization-where-value-moves-in-modular-physical-ai", title: "Where Value Moves in Modular Physical AI", kicker: "Essay 06", detail: "Models, robot OS, compute, bodies, skills and applications", motif: "radar", group: "physical" },
  { slug: "about", title: "About FlyPig AI", kicker: "Company profile", detail: "Canada-based research between product intent and technology capability", motif: "bridge", group: "services" },
  { slug: "contact", title: "Contact FlyPig AI", kicker: "Start a scoped question", detail: "Product requirements, technology signals, Atlas corrections and research inquiries", motif: "inbox", group: "services" },
  { slug: "editorial-policy", title: "Editorial Policy", kicker: "Source first", detail: "Facts, interpretation, corrections and media rights", motif: "stamp", group: "insights" },
  { slug: "privacy", title: "Privacy Notice", kicker: "Data boundary", detail: "Inquiry information, consent state, audit records and service providers", motif: "notebook", group: "services" },
  { slug: "newsletter-unsubscribe", title: "Unsubscribe from Industry Signals", kicker: "Email preferences", detail: "Update FlyPig AI email delivery from a signed link", motif: "radar", group: "signals" },
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

function flypigTotem(accent, second, motif) {
  const marks = {
    bridge: `<path d="M865 340C940 270 1018 270 1092 340" fill="none" stroke="${second}" stroke-width="10" stroke-linecap="round"/><circle cx="865" cy="340" r="13" fill="${accent}"/><circle cx="1092" cy="340" r="13" fill="${second}"/>`,
    modules: `<rect x="820" y="275" width="92" height="70" rx="10" fill="#fff" stroke="${accent}" stroke-width="4"/><rect x="938" y="228" width="108" height="82" rx="10" fill="#fff" stroke="${second}" stroke-width="4"/><rect x="1010" y="358" width="86" height="70" rx="10" fill="#fff" stroke="${accent}" stroke-width="4"/>`,
    stack: `<path d="M830 255H1090L1036 314H776Z" fill="#fff" stroke="${accent}" stroke-width="4"/><path d="M806 338H1066L1012 397H752Z" fill="#fff" stroke="${second}" stroke-width="4"/><path d="M844 420H1104L1050 479H790Z" fill="#fff" stroke="${accent}" stroke-width="4"/>`,
    radar: `<circle cx="968" cy="344" r="134" fill="none" stroke="${accent}" stroke-width="4" stroke-opacity=".28"/><circle cx="968" cy="344" r="88" fill="none" stroke="${accent}" stroke-width="4" stroke-opacity=".38"/><path d="M968 344L1078 280" stroke="${second}" stroke-width="8" stroke-linecap="round"/><path d="M832 430C890 382 934 382 984 430S1084 478 1130 430" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round"/>`,
    notebook: `<rect x="820" y="235" width="250" height="260" rx="18" fill="#fff" stroke="${accent}" stroke-width="5"/><path d="M872 235V495" stroke="${accent}" stroke-width="5"/><path d="M914 300H1030M914 352H1010M914 404H1044" stroke="${second}" stroke-width="7" stroke-linecap="round"/>`,
    map: `<path d="M804 275L906 238L992 280L1102 238V462L996 502L906 462L804 500Z" fill="#fff" stroke="${accent}" stroke-width="5"/><path d="M906 238V462M992 280V502" stroke="${accent}" stroke-width="3" stroke-opacity=".4"/><circle cx="878" cy="374" r="13" fill="${accent}"/><circle cx="998" cy="348" r="13" fill="${second}"/><circle cx="1058" cy="425" r="13" fill="${accent}"/>`,
    fork: `<path d="M832 430C910 430 922 355 982 355H1092" fill="none" stroke="${accent}" stroke-width="9" stroke-linecap="round"/><path d="M832 430C910 430 922 505 982 505H1092" fill="none" stroke="${second}" stroke-width="9" stroke-linecap="round"/><circle cx="832" cy="430" r="16" fill="${accent}"/><circle cx="1092" cy="355" r="16" fill="${second}"/><circle cx="1092" cy="505" r="16" fill="${accent}"/>`,
    matrix: `<g stroke="${accent}" stroke-width="4"><rect x="810" y="250" width="270" height="210" rx="14" fill="#fff"/><path d="M900 250V460M990 250V460M810 320H1080M810 390H1080"/></g><circle cx="945" cy="356" r="14" fill="${second}"/><circle cx="1035" cy="426" r="14" fill="${accent}"/>`,
    route: `<path d="M810 470C870 310 968 520 1096 290" fill="none" stroke="${accent}" stroke-width="9" stroke-linecap="round" stroke-dasharray="1 24"/><circle cx="810" cy="470" r="18" fill="${accent}"/><circle cx="1096" cy="290" r="18" fill="${second}"/><path d="M1044 284L1096 290L1064 332" fill="none" stroke="${second}" stroke-width="7" stroke-linecap="round"/>`,
    robot: `<rect x="876" y="288" width="168" height="150" rx="24" fill="#fff" stroke="${accent}" stroke-width="6"/><circle cx="922" cy="352" r="13" fill="${second}"/><circle cx="998" cy="352" r="13" fill="${second}"/><path d="M932 402H988" stroke="${accent}" stroke-width="7" stroke-linecap="round"/><path d="M960 288V246" stroke="${accent}" stroke-width="6"/><circle cx="960" cy="236" r="14" fill="${second}"/>`,
    drone: `<path d="M946 352H1030M988 310V394" stroke="${accent}" stroke-width="8" stroke-linecap="round"/><circle cx="914" cy="352" r="44" fill="none" stroke="${second}" stroke-width="6"/><circle cx="1062" cy="352" r="44" fill="none" stroke="${second}" stroke-width="6"/><circle cx="988" cy="278" r="44" fill="none" stroke="${accent}" stroke-width="6"/><circle cx="988" cy="426" r="44" fill="none" stroke="${accent}" stroke-width="6"/><rect x="950" y="314" width="76" height="76" rx="20" fill="#fff" stroke="${accent}" stroke-width="5"/>`,
    sensor: `<circle cx="960" cy="350" r="86" fill="#fff" stroke="${accent}" stroke-width="6"/><circle cx="960" cy="350" r="42" fill="none" stroke="${second}" stroke-width="8"/><circle cx="960" cy="350" r="12" fill="${accent}"/><path d="M960 230V178M960 522V470M840 350H788M1132 350H1080" stroke="${accent}" stroke-width="8" stroke-linecap="round"/>`,
    chip: `<rect x="870" y="248" width="210" height="210" rx="28" fill="#fff" stroke="${accent}" stroke-width="7"/><rect x="922" y="300" width="106" height="106" rx="20" fill="${accent}" fill-opacity=".12" stroke="${second}" stroke-width="5"/><path d="M910 222V248M950 222V248M990 222V248M1030 222V248M910 458V486M950 458V486M990 458V486M1030 458V486M844 288H870M844 328H870M844 368H870M844 408H870M1080 288H1108M1080 328H1108M1080 368H1108M1080 408H1108" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>`,
    grid: `<rect x="812" y="240" width="92" height="92" fill="#fff" stroke="${accent}" stroke-width="5"/><rect x="936" y="240" width="92" height="92" fill="#fff" stroke="${second}" stroke-width="5"/><rect x="1060" y="240" width="92" height="92" fill="#fff" stroke="${accent}" stroke-width="5"/><rect x="812" y="364" width="92" height="92" fill="#fff" stroke="${second}" stroke-width="5"/><rect x="936" y="364" width="92" height="92" fill="#fff" stroke="${accent}" stroke-width="5"/><rect x="1060" y="364" width="92" height="92" fill="#fff" stroke="${second}" stroke-width="5"/>`,
    stamp: `<circle cx="960" cy="356" r="126" fill="#fff" stroke="${accent}" stroke-width="7"/><circle cx="960" cy="356" r="92" fill="none" stroke="${second}" stroke-width="4" stroke-dasharray="10 12"/><text x="960" y="342" text-anchor="middle" fill="${accent}" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="800">SOURCE</text><text x="960" y="378" text-anchor="middle" fill="#1f2933" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="800">CHECKED</text>`,
    inbox: `<rect x="820" y="280" width="280" height="180" rx="18" fill="#fff" stroke="${accent}" stroke-width="6"/><path d="M820 344H906L936 388H984L1014 344H1100" fill="none" stroke="${second}" stroke-width="7" stroke-linejoin="round"/><path d="M960 210V326M916 282L960 326L1004 282" fill="none" stroke="${accent}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
  };
  return `<g>
    <ellipse cx="963" cy="360" rx="190" ry="170" fill="#fff" opacity=".66"/>
    <path d="M826 324C776 284 780 220 836 194C900 164 930 238 876 286Z" fill="${second}" fill-opacity=".16" stroke="${second}" stroke-width="5"/>
    <path d="M1070 324C1120 284 1116 220 1060 194C996 164 966 238 1020 286Z" fill="${accent}" fill-opacity=".14" stroke="${accent}" stroke-width="5"/>
    <rect x="890" y="276" width="144" height="106" rx="34" fill="#1f2933"/>
    <ellipse cx="962" cy="344" rx="62" ry="38" fill="#fbfaf7"/>
    <circle cx="938" cy="344" r="10" fill="${accent}"/>
    <circle cx="986" cy="344" r="10" fill="${second}"/>
    <path d="M902 278V252M930 276V248M994 276V248M1022 278V252" stroke="#1f2933" stroke-width="8" stroke-linecap="round"/>
    <text x="962" y="313" text-anchor="middle" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="800">FP</text>
    ${marks[motif] ?? marks.bridge}
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
  <circle cx="116" cy="96" r="38" fill="#1f2933"/>
  <text x="116" y="104" text-anchor="middle" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="800">FP</text>
  <text x="174" y="88" fill="#1f2933" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="800">FlyPig AI</text>
  <text x="174" y="118" fill="#667085" font-family="Arial, Helvetica, sans-serif" font-size="15" letter-spacing="2">CANADA - TAIWAN</text>
  <text x="76" y="188" fill="${colors.accent}" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" letter-spacing="2">${escapeXml(page.kicker.toUpperCase())}</text>
  ${textLines(page.title, 76, 274, { size: titleSize, max: 20, lines: 3, step: Math.round(titleSize * 1.08) })}
  ${textLines(page.detail, 80, 464, { size: 21, max: 52, lines: 2, step: 28, family: "Arial, Helvetica, sans-serif", weight: 800, fill: colors.accent })}
  <text x="80" y="555" fill="#667085" font-family="Arial, Helvetica, sans-serif" font-size="18">Independent, source-based technology research · flypigai.ca</text>
  <path d="M704 94V542" stroke="#1f2933" stroke-opacity=".08" stroke-width="1"/>
  ${flypigTotem(colors.accent, colors.second, page.motif)}
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
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(temporaryPath);
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
