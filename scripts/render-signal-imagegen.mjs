import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const xml = (value) => String(value).replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[character]);

// ImageGen supplies the conceptual scene. Exact editorial labels and the tracked
// brand asset are composed locally; the source SVGs reference the saved master.
export async function renderImagegenSignal(signal, root, specPath) {
  const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
  if (spec.type !== "imagegen_editorial_background" || !spec.prompt || !spec.rightsDecision || !spec.disclosure || !spec.masterSrc?.startsWith("/images/signals/source/") || spec.masterSrc.includes("..")) {
    throw new Error(`Incomplete ImageGen provenance: ${specPath}`);
  }
  const master = path.join(root, "public", spec.masterSrc);
  if (!fs.existsSync(master)) throw new Error(`Missing ImageGen master: ${master}`);
  const logo = path.join(root, "public/images/brand/flypig-lockup.png");
  const { facts, titleLines, eyebrow } = spec;
  if (!Array.isArray(facts) || facts.length !== 3 || facts.some((item) => !Array.isArray(item) || item.length !== 2 || item.some((value) => typeof value !== "string" || !value.trim())) || !Array.isArray(titleLines) || titleLines.length !== 2 || titleLines.some((value) => typeof value !== "string" || !value.trim()) || typeof eyebrow !== "string" || !eyebrow.trim()) {
    throw new Error(`Incomplete editorial overlay: ${specPath}`);
  }
  for (const social of [false, true]) {
    const width = social ? 1200 : 1600;
    const height = social ? 630 : 1000;
    const side = social ? 48 : 72;
    const ribbon = social ? 505 : 830;
    const logoWidth = social ? 178 : 230;
    const logoHeight = Math.round(logoWidth * 382 / 1257);
    const titleSize = social ? 39 : 54;
    const titleY = social ? 115 : 167;
    const labelY = social ? 66 : 103;
    const overlays = `<defs><linearGradient id="shade"><stop stop-color="#071725" stop-opacity=".88"/><stop offset=".55" stop-color="#071725" stop-opacity=".1"/><stop offset="1" stop-color="#071725" stop-opacity="0"/></linearGradient></defs>
      <rect width="${width * .66}" height="${ribbon}" fill="url(#shade)"/>
      <rect y="${ribbon}" width="${width}" height="${height - ribbon}" fill="#071725" fill-opacity=".94"/>
      <text x="${side}" y="${labelY}" font-family="Arial,Helvetica,sans-serif" font-size="${social ? 13 : 18}" font-weight="700" letter-spacing="3" fill="#8cddd9">${xml(eyebrow)}</text>
      <text x="${side}" y="${titleY}" font-family="Georgia,serif" font-size="${titleSize}" fill="#fff"><tspan x="${side}">${xml(titleLines[0])}</tspan><tspan x="${side}" dy="1.15em">${xml(titleLines[1])}</tspan></text>
      <rect x="${width - side - logoWidth - 12}" y="${social ? 35 : 64}" width="${logoWidth + 24}" height="${logoHeight + 18}" rx="8" fill="#fbfaf7" fill-opacity=".96"/>
      ${facts.map(([value, label], index) => `<text x="${side + index * (width - 2 * side) / 3}" y="${ribbon + (social ? 44 : 63)}" font-family="Arial,Helvetica,sans-serif" font-size="${social ? 29 : 42}" font-weight="700" fill="#fff">${xml(value)}</text><text x="${side + index * (width - 2 * side) / 3}" y="${ribbon + (social ? 69 : 96)}" font-family="Arial,Helvetica,sans-serif" font-size="${social ? 15 : 21}" fill="#c0d4df">${xml(label)}</text>`).join("")}
      <text x="${side}" y="${height - (social ? 14 : 24)}" font-family="Arial,Helvetica,sans-serif" font-size="${social ? 11 : 15}" fill="#a8bdca">Conceptual AI illustration · Not a factory photograph · flypigai.ca</text>`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><image href="${xml(spec.masterSrc)}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice"/>${overlays}<image href="/images/brand/flypig-lockup.png" x="${width - side - logoWidth}" y="${social ? 44 : 73}" width="${logoWidth}" height="${logoHeight}"/></svg>`;
    const source = path.join(root, "public/images/signals/source", `${signal.slug}${social ? "-social" : ""}.svg`);
    fs.writeFileSync(source, svg);
    const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${overlays}</svg>`);
    const logoBuffer = await sharp(logo).resize({ width: logoWidth }).png().toBuffer();
    const output = path.join(root, "public", social ? signal.heroVisual.socialSrc : signal.heroVisual.src);
    fs.mkdirSync(path.dirname(output), { recursive: true });
    await sharp(master).resize(width, height, { fit: "cover", position: "centre" }).composite([
      { input: overlay, left: 0, top: 0 },
      { input: logoBuffer, left: width - side - logoWidth, top: social ? 44 : 73 },
    ]).png().toFile(`${output}.next.png`);
    fs.renameSync(`${output}.next.png`, output);
    const metadata = await sharp(output).metadata();
    if (metadata.width !== width || metadata.height !== height) throw new Error(`ImageGen export size mismatch: ${output}`);
  }
}
