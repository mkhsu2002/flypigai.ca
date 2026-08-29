import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const canonicalOrigin = "https://flypigai.ca";
const endpoint = "https://api.indexnow.org/indexnow";

export function parseCanonicalUrls(content) {
  const urls = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));

  return [...new Set(urls.map((value) => {
    let url;
    try { url = new URL(value); } catch { throw new Error(`Invalid URL: ${value}`); }
    if (url.protocol !== "https:") throw new Error(`IndexNow URLs must use HTTPS: ${value}`);
    if (url.origin !== canonicalOrigin) throw new Error(`IndexNow URL must belong to flypigai.ca: ${value}`);
    if (url.username || url.password || url.hash) throw new Error(`IndexNow URL contains unsupported credentials or fragment: ${value}`);
    return url.toString();
  }))];
}

export function requireIndexNowConfig(environment) {
  const key = environment.INDEXNOW_KEY;
  const keyLocation = environment.INDEXNOW_KEY_LOCATION;
  if (!key) throw new Error("INDEXNOW_KEY is required");
  if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) throw new Error("INDEXNOW_KEY must follow the IndexNow key format");
  if (!keyLocation) throw new Error("INDEXNOW_KEY_LOCATION is required");

  let location;
  try { location = new URL(keyLocation); } catch { throw new Error("INDEXNOW_KEY_LOCATION must be a valid URL"); }
  if (location.origin !== canonicalOrigin) throw new Error("INDEXNOW_KEY_LOCATION must belong to flypigai.ca");
  if (location.protocol !== "https:" || !location.pathname.endsWith(".txt")) throw new Error("INDEXNOW_KEY_LOCATION must be an HTTPS .txt URL");
  return { key, keyLocation: location.toString() };
}

export function buildIndexNowPayload(urlList, config) {
  return { host: "flypigai.ca", key: config.key, keyLocation: config.keyLocation, urlList };
}

function parseArguments(arguments_) {
  const fileIndex = arguments_.indexOf("--file");
  if (fileIndex === -1 || !arguments_[fileIndex + 1]) throw new Error("Usage: npm run search:submit -- --file <changed-urls.txt> [--dry-run]");
  return { file: path.resolve(arguments_[fileIndex + 1]), dryRun: arguments_.includes("--dry-run") };
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  const urls = parseCanonicalUrls(fs.readFileSync(options.file, "utf8"));
  if (!urls.length) throw new Error("The changed URL file contains no canonical URLs");
  if (urls.length > 10_000) throw new Error("IndexNow accepts at most 10,000 URLs per request");
  const config = requireIndexNowConfig(process.env);
  if (options.dryRun) {
    console.log(`IndexNow dry run passed for ${urls.length} canonical URL(s). No request was sent.`);
    return;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(buildIndexNowPayload(urls, config)),
  });
  if (![200, 202].includes(response.status)) throw new Error(`IndexNow submission failed with HTTP ${response.status}`);
  console.log(`IndexNow accepted ${urls.length} canonical URL(s) with HTTP ${response.status}.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : "IndexNow submission failed");
    process.exitCode = 1;
  });
}
