import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentDir = path.join(root, "content", "industry-signals");
const outputDir = path.join(root, "public", "images", "signals");
fs.mkdirSync(outputDir, { recursive: true });

const escapeXml = (value = "") => String(value).replace(/[<>&'\"]/g, (char) => ({"<":"&lt;",">":"&gt;","&":"&amp;","'":"&apos;",'\"':"&quot;"}[char]));

function wrap(text, max = 42) {
  const words = String(text).split(/\s+/); const lines = []; let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length <= max) line = next; else { if (line) lines.push(line); line = word; }
  }
  if (line) lines.push(line); return lines.slice(0, 4);
}

function svg(signal) {
  const facts = signal.heroVisual.facts ?? [signal.category, signal.supplier, "Official source verified"];
  const titleLines = wrap(signal.title, 43); const fontSize = titleLines.length > 3 ? 49 : 57;
  let y = 180; const title = titleLines.map((line) => { const el = `<text x="110" y="${y}" font-family="Georgia,serif" font-size="${fontSize}" fill="#1f2933">${escapeXml(line)}</text>`; y += fontSize + 16; return el; }).join("");
  const cardY = Math.max(500, y + 58); const labels = ["SIGNAL", "DESIGN LENS", "NEXT CHECK"];
  const cards = facts.slice(0, 3).map((fact, index) => {
    const x = 110 + index * 460; const factLines = wrap(fact, 22).slice(0, 3); let fy = cardY + 116;
    const texts = factLines.map((line) => { const el = `<text x="${x + 34}" y="${fy}" font-family="Inter,Arial,sans-serif" font-size="27" font-weight="600" fill="#1f2933">${escapeXml(line)}</text>`; fy += 38; return el; }).join("");
    return `<rect x="${x}" y="${cardY}" width="400" height="220" rx="24" fill="#fff" stroke="#d7e1df"/><text x="${x + 34}" y="${cardY + 56}" font-family="Inter,Arial,sans-serif" font-size="18" letter-spacing="2" fill="#0f766e">${labels[index]}</text>${texts}`;
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-labelledby="title desc"><title id="title">${escapeXml(signal.title)}</title><desc id="desc">${escapeXml(signal.heroVisual.alt)}</desc><rect width="1600" height="1000" fill="#f8faf8"/><circle cx="1440" cy="130" r="230" fill="#dff1ed" opacity="0.8"/><path d="M0 860 C360 760 520 930 860 820 S1320 700 1600 790 V1000 H0 Z" fill="#e9f0fb"/><text x="110" y="92" font-family="Inter,Arial,sans-serif" font-size="20" letter-spacing="5" fill="#0f766e">FLYPIG AI · TAIWAN INDUSTRY SIGNAL</text><text x="110" y="132" font-family="Inter,Arial,sans-serif" font-size="22" fill="#667085">${escapeXml(signal.supplier)} · ${escapeXml(signal.category)}</text>${title}${cards}<line x1="110" y1="850" x2="1490" y2="850" stroke="#cfd8d6"/><text x="110" y="898" font-family="Inter,Arial,sans-serif" font-size="22" fill="#667085">Independent editorial graphic · Facts checked against ${escapeXml(signal.supplier)} official material</text><text x="110" y="943" font-family="Inter,Arial,sans-serif" font-size="22" font-weight="700" fill="#1f2933">flypigai.ca/signals</text></svg>`;
}

for (const name of fs.readdirSync(contentDir).filter((name) => name.endsWith(".json"))) {
  const signal = JSON.parse(fs.readFileSync(path.join(contentDir, name), "utf8"));
  if (signal.heroVisual?.kind !== "original_infographic") continue;
  const filename = path.basename(signal.heroVisual.src);
  fs.writeFileSync(path.join(outputDir, filename), svg(signal));
}
