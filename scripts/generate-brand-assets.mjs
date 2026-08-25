import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const publicDirectory = path.join(process.cwd(), "public");
const brandDirectory = path.join(publicDirectory, "images", "brand");
const ogDirectory = path.join(publicDirectory, "images", "og");
const ogSourceDirectory = path.join(ogDirectory, "source");
for (const directory of [brandDirectory, ogDirectory, ogSourceDirectory]) fs.mkdirSync(directory, { recursive: true });

const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" rx="128" fill="#1f2933"/><circle cx="256" cy="256" r="176" fill="none" stroke="#0f766e" stroke-width="18"/><text x="256" y="294" text-anchor="middle" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="144" font-weight="700" letter-spacing="-8">FP</text></svg>`;
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbfaf7"/><stop offset="1" stop-color="#e7f4f1"/></linearGradient><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#1f2933" stroke-opacity=".05"/></pattern></defs><rect width="1200" height="630" fill="url(#bg)"/><rect width="1200" height="630" fill="url(#grid)"/><rect width="18" height="630" fill="#0f766e"/><circle cx="118" cy="110" r="42" fill="#1f2933"/><text x="118" y="119" text-anchor="middle" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="23" font-weight="700">FP</text><text x="181" y="103" fill="#1f2933" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700">FlyPig AI</text><text x="181" y="132" fill="#667085" font-family="Arial, Helvetica, sans-serif" font-size="16" letter-spacing="2">CANADA ↔ TAIWAN</text><text x="76" y="285" fill="#1f2933" font-family="Georgia, 'Times New Roman', serif" font-size="72">Edge AI &amp; Physical AI</text><text x="76" y="370" fill="#1f2933" font-family="Georgia, 'Times New Roman', serif" font-size="72">intelligence.</text><text x="80" y="465" fill="#0f766e" font-family="Arial, Helvetica, sans-serif" font-size="23" font-weight="700">CANADA ATLAS · TAIWAN SOLUTIONS · INDUSTRY SIGNALS</text><text x="80" y="560" fill="#667085" font-family="Arial, Helvetica, sans-serif" font-size="20">Independent, source-based technology and ecosystem research</text></svg>`;

const markSourcePath = path.join(brandDirectory, "flypig-ai-mark.svg");
fs.writeFileSync(markSourcePath, markSvg);
fs.writeFileSync(path.join(ogSourceDirectory, "flypig-ai-default.svg"), ogSvg);

await sharp(Buffer.from(markSvg)).png().resize(512, 512).toFile(path.join(brandDirectory, "flypig-ai-mark-512.png"));
await sharp(Buffer.from(markSvg)).png().resize(180, 180).toFile(path.join(publicDirectory, "apple-touch-icon.png"));
await sharp(Buffer.from(ogSvg)).png({ compressionLevel: 9 }).toFile(path.join(ogDirectory, "flypig-ai-default.png"));

const faviconPng = await sharp(Buffer.from(markSvg)).png().resize(64, 64).toBuffer();
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
const directoryEntry = Buffer.alloc(16);
directoryEntry.writeUInt8(64, 0);
directoryEntry.writeUInt8(64, 1);
directoryEntry.writeUInt8(0, 2);
directoryEntry.writeUInt8(0, 3);
directoryEntry.writeUInt16LE(1, 4);
directoryEntry.writeUInt16LE(32, 6);
directoryEntry.writeUInt32LE(faviconPng.length, 8);
directoryEntry.writeUInt32LE(22, 12);
fs.writeFileSync(path.join(publicDirectory, "favicon.ico"), Buffer.concat([header, directoryEntry, faviconPng]));

console.log("Generated FlyPig AI mark, default Open Graph image, Apple touch icon, and favicon.");
