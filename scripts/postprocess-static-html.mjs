import fs from "node:fs";
import path from "node:path";

const outputDirectory = path.join(process.cwd(), "out");
const zhDirectory = path.join(outputDirectory, "zh");
if (!fs.existsSync(zhDirectory)) throw new Error("Expected static export directory out/zh was not found");

let updated = 0;
function applyTraditionalChineseLanguage(source) {
  return source
    .replace(/<html lang="en-CA">/, '<html lang="zh-Hant">')
    .replaceAll('\\"lang\\":\\"en-CA\\"', '\\"lang\\":\\"zh-Hant\\"');
}

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(filePath);
    else if (entry.isFile() && entry.name.endsWith(".html")) {
      const source = fs.readFileSync(filePath, "utf8");
      const output = applyTraditionalChineseLanguage(source);
      if (source === output && !source.includes('<html lang="zh-Hant">')) throw new Error(`Unable to set language for ${filePath}`);
      if (source !== output) {
        fs.writeFileSync(filePath, output);
        updated += 1;
      }
    }
  }
}
walk(zhDirectory);
const zhRootPath = path.join(outputDirectory, "zh.html");
if (!fs.existsSync(zhRootPath)) throw new Error("Expected static export page out/zh.html was not found");
const zhRootSource = fs.readFileSync(zhRootPath, "utf8");
const zhRootOutput = applyTraditionalChineseLanguage(zhRootSource);
if (zhRootSource === zhRootOutput && !zhRootSource.includes('<html lang="zh-Hant">')) throw new Error(`Unable to set language for ${zhRootPath}`);
if (zhRootSource !== zhRootOutput) {
  fs.writeFileSync(zhRootPath, zhRootOutput);
  updated += 1;
}
console.log(`Verified Traditional Chinese document language across out/zh (${updated} files updated).`);
