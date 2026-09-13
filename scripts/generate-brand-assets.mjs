import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const publicDirectory = path.join(process.cwd(), "public");
const brandDirectory = path.join(publicDirectory, "images", "brand");
const ogDirectory = path.join(publicDirectory, "images", "og");
const ogSourceDirectory = path.join(ogDirectory, "source");
for (const directory of [brandDirectory, ogDirectory, ogSourceDirectory]) fs.mkdirSync(directory, { recursive: true });

const officialLogoPath = path.join(brandDirectory, "flypig-logo.png");
if (!fs.existsSync(officialLogoPath)) throw new Error("Missing official FlyPig logo at public/images/brand/flypig-logo.png");

const logoDataUri = `data:image/png;base64,${fs.readFileSync(officialLogoPath).toString("base64")}`;
const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><image href="${logoDataUri}" x="0" y="39" width="512" height="433" preserveAspectRatio="xMidYMid meet"/></svg>`;

const markSourcePath = path.join(brandDirectory, "flypig-ai-mark.svg");
fs.writeFileSync(markSourcePath, markSvg);

const mark512 = await sharp({
  create: { width: 512, height: 512, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 0 } },
}).composite([{ input: await sharp(officialLogoPath).resize({ width: 480, fit: "inside" }).png().toBuffer(), left: 16, top: 53 }]).png().toBuffer();
fs.writeFileSync(path.join(brandDirectory, "flypig-ai-mark-512.png"), mark512);

const touchIcon = await sharp({
  create: { width: 180, height: 180, channels: 4, background: "#fbfaf7" },
}).composite([{ input: await sharp(officialLogoPath).resize({ width: 158, fit: "inside" }).png().toBuffer(), left: 11, top: 23 }]).png().toBuffer();
fs.writeFileSync(path.join(publicDirectory, "apple-touch-icon.png"), touchIcon);

const faviconPng = await sharp({
  create: { width: 64, height: 64, channels: 4, background: "#fbfaf7" },
}).composite([{ input: await sharp(officialLogoPath).resize({ width: 56, fit: "inside" }).png().toBuffer(), left: 4, top: 8 }]).png().toBuffer();
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

console.log("Generated FlyPig AI logo-derived brand mark, Apple touch icon, and favicon.");
