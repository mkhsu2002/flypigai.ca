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

// Keep the supplied artwork intact, removing transparent margins only for display assets.
const lockup = await sharp(officialLogoPath).trim().png().toBuffer();
const { width: lockupWidth, height: lockupHeight } = await sharp(lockup).metadata();
if (lockupWidth !== 1257 || lockupHeight !== 382) throw new Error("Unexpected official logo dimensions; review the symbol crop before generating icons.");
fs.writeFileSync(path.join(brandDirectory, "flypig-lockup.png"), lockup);
const symbol = await sharp(lockup).extract({ left: 0, top: 0, width: 520, height: 382 }).png().toBuffer();
fs.writeFileSync(path.join(brandDirectory, "flypig-symbol.png"), symbol);

const logoDataUri = `data:image/png;base64,${symbol.toString("base64")}`;
const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><image href="${logoDataUri}" x="16" y="80" width="480" height="352" preserveAspectRatio="xMidYMid meet"/></svg>`;

const markSourcePath = path.join(brandDirectory, "flypig-ai-mark.svg");
fs.writeFileSync(markSourcePath, markSvg);

const mark512 = await sharp({
  create: { width: 512, height: 512, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 0 } },
}).composite([{ input: await sharp(symbol).resize({ width: 480, fit: "inside" }).png().toBuffer(), left: 16, top: 80 }]).png().toBuffer();
fs.writeFileSync(path.join(brandDirectory, "flypig-ai-mark-512.png"), mark512);

const touchIcon = await sharp({
  create: { width: 180, height: 180, channels: 4, background: "#fbfaf7" },
}).composite([{ input: await sharp(symbol).resize({ width: 158, fit: "inside" }).png().toBuffer(), left: 11, top: 32 }]).png().toBuffer();
fs.writeFileSync(path.join(publicDirectory, "apple-touch-icon.png"), touchIcon);

const faviconPng = await sharp({
  create: { width: 64, height: 64, channels: 4, background: "#fbfaf7" },
}).composite([{ input: await sharp(symbol).resize({ width: 56, fit: "inside" }).png().toBuffer(), left: 4, top: 11 }]).png().toBuffer();
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

console.log("Generated FlyPig AI lockup, symbol, Apple touch icon, and favicon from the supplied logo.");
