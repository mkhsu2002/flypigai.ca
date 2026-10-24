import fs from "node:fs/promises";
import path from "node:path";

// Original FlyPig AI editorial diagram. No third-party artwork or vendor logos.
// Render only this article's two assets; never regenerate unrelated site artwork.
const root = process.cwd();
process.env.XDG_CACHE_HOME ||= path.join(root, "artifacts/physical-ai-forecast/cache");
await fs.mkdir(process.env.XDG_CACHE_HOME, { recursive: true });
const { default: sharp } = await import("sharp");
const sourceDirectory = path.join(root, "public/images/insights/source");
await fs.mkdir(sourceDirectory, { recursive: true });
await fs.mkdir(path.join(root, "public/images/og/pages"), { recursive: true });

const layers = [
  ["Agents & applications", "Workflows and vertical services"],
  ["Capability & safety interfaces", "Permissions, limits and failure states"],
  ["Lifecycle platforms", "Data, simulation, training and deployment"],
  ["Foundation intelligence", "World models and control policies"],
  ["Robotics middleware", "Abstraction, planning and integration"],
  ["Compute & control", "Edge inference and real-time systems"],
  ["Robot hardware", "Bodies, actuation and physical limits"],
];

function escapeXml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function diagram(social) {
  const width = social ? 1200 : 1600;
  const height = social ? 630 : 1000;
  const side = social ? 52 : 80;
  const top = social ? 190 : 264;
  const boxHeight = social ? 41 : 70;
  const gap = social ? 8 : 12;
  const leftWidth = social ? 610 : 810;
  const rightX = social ? 736 : 1010;
  const rowSize = social ? 18 : 25;
  const detailSize = social ? 13 : 18;
  const rightWidth = width - side - rightX;
  const loop = social ? ["DATA", "SIMULATE + LEARN", "VALIDATE + DEPLOY", "OPERATE + RELEARN"] : ["DATA", "SIMULATION", "LEARNING", "VALIDATION", "DEPLOYMENT", "OPERATIONS", "RELEARNING"];
  const cycleGap = social ? 29 : 30;
  const cycleHeight = social ? 48 : 52;
  const cycleTop = top + (social ? 3 : 7);
  const bands = layers.map(([title, detail], index) => {
    const y = top + index * (boxHeight + gap);
    const highlight = index === 1 || index === 2;
    return `<rect x="${side}" y="${y}" width="${leftWidth}" height="${boxHeight}" rx="9" fill="${highlight ? "#e4f3ed" : "#fffefb"}" stroke="${highlight ? "#6bada0" : "#d5ddd8"}"/>
      <text x="${side + 19}" y="${y + (social ? 27 : 30)}" font-size="${rowSize}" font-weight="650" fill="#182d31">${escapeXml(title)}</text>
      ${social ? "" : `<text x="${side + 19}" y="${y + 55}" font-size="${detailSize}" fill="#4d6263">${escapeXml(detail)}</text>`}`;
  }).join("\n");
  const cycle = loop.map((label, index) => {
    const y = cycleTop + index * (cycleHeight + cycleGap);
    return `<rect x="${rightX}" y="${y}" width="${rightWidth}" height="${cycleHeight}" rx="10" fill="#143f42"/>
      <text x="${rightX + rightWidth / 2}" y="${y + (social ? 30 : 33)}" text-anchor="middle" font-size="${social ? 14 : 19}" font-weight="650" letter-spacing="1.2" fill="#ffffff">${escapeXml(label)}</text>
      ${index < loop.length - 1 ? `<path d="M${rightX + rightWidth / 2} ${y + cycleHeight + 4}v${cycleGap - 10}" stroke="#5c8c83" stroke-width="2" marker-end="url(#arrow)"/>` : ""}`;
  }).join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <title>Physical AI’s next decade: beyond the robot OS</title>
    <desc>Seven proposed layers connect hardware to applications. A separate continuous lifecycle spans data, simulation, learning, validation, deployment, operations and relearning. This is a forecast, not an established standard.</desc>
    <defs><marker id="arrow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="none" stroke="#5c8c83" stroke-width="1.2"/></marker></defs>
    <rect width="${width}" height="${height}" fill="#f8f6f0"/>
    <g font-family="DejaVu Sans, Arial, sans-serif">
      <rect x="${side}" y="${social ? 35 : 55}" width="6" height="${social ? 26 : 36}" fill="#0f766e"/>
      <text x="${side + 20}" y="${social ? 55 : 82}" font-size="${social ? 16 : 22}" font-weight="650" letter-spacing="2.5" fill="#0f766e">FLYPIG AI / TECHNOLOGY FORECAST</text>
      <text x="${side}" y="${social ? 118 : 164}" font-size="${social ? 49 : 67}" font-weight="650" letter-spacing="-1.6" fill="#182d31">Beyond the robot OS</text>
      <text x="${side}" y="${social ? 151 : 207}" font-size="${social ? 19 : 26}" fill="#4d6263">Shared capabilities. Continuous learning. No single winner assumed.</text>
      <text x="${side}" y="${top - 18}" font-size="${social ? 12 : 17}" font-weight="650" letter-spacing="1.8" fill="#566b68">PROPOSED PLATFORM LAYERS</text>
      <text x="${rightX}" y="${top - 18}" font-size="${social ? 12 : 17}" font-weight="650" letter-spacing="1.8" fill="#566b68">CONTINUOUS LIFECYCLE</text>
      ${bands}
      ${cycle}
      <path d="M${rightX + rightWidth + 13} ${cycleTop + (loop.length - 1) * (cycleHeight + cycleGap) + cycleHeight / 2}h13V${cycleTop + cycleHeight / 2}h-13" fill="none" stroke="#5c8c83" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="${side}" y1="${height - (social ? 75 : 110)}" x2="${width - side}" y2="${height - (social ? 75 : 110)}" stroke="#bccbc4"/>
      <text x="${side}" y="${height - (social ? 48 : 72)}" font-size="${social ? 16 : 23}" font-weight="650" fill="#143f42">The test: lower integration cost across different robot bodies.</text>
      <text x="${side}" y="${height - (social ? 22 : 32)}" font-size="${social ? 12 : 17}" fill="#566b68">Original FlyPig AI analysis · October 2026 · Forecast horizon 2026–2036 · Not an industry standard</text>
    </g>
  </svg>`;
}

sharp.cache(false);
sharp.concurrency(1);
for (const social of [false, true]) {
  const name = social ? "physical-ai-next-decade-social" : "physical-ai-next-decade";
  const svg = diagram(social).replace(/[\t ]+$/gm, "");
  const source = path.join(sourceDirectory, `${name}.svg`);
  const output = path.join(root, social ? "public/images/og/pages/insights-physical-ai-next-decade.png" : "public/images/insights/physical-ai-next-decade.png");
  await fs.writeFile(source, svg);
  await sharp(Buffer.from(svg)).png().toFile(output);
  const { width, height } = await sharp(output).metadata();
  if (width !== (social ? 1200 : 1600) || height !== (social ? 630 : 1000)) throw new Error(`Unexpected dimensions: ${output}`);
  console.log(`${width}×${height}: ${path.relative(root, output)}`);
}
