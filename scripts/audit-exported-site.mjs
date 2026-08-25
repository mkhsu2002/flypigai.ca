import fs from "node:fs";
import path from "node:path";

const outputDirectory = path.join(process.cwd(), "out");
const errors = [];
const htmlFiles = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(filePath);
    else if (entry.isFile() && entry.name.endsWith(".html")) htmlFiles.push(filePath);
  }
}
walk(outputDirectory);

function pagePath(filePath) {
  const relative = path.relative(outputDirectory, filePath).replaceAll(path.sep, "/");
  if (relative === "index.html") return "/";
  return `/${relative.replace(/(?:\/index)?\.html$/, "")}`;
}

function attribute(tag, name) {
  return tag.match(new RegExp(`${name}=["']([^"']+)["']`, "i"))?.[1];
}

function resolveExportedRoute(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  if (cleanPath === "/") return fs.existsSync(path.join(outputDirectory, "index.html"));
  const relative = cleanPath.replace(/^\//, "");
  return [path.join(outputDirectory, `${relative}.html`), path.join(outputDirectory, relative, "index.html"), path.join(outputDirectory, relative)].some(fs.existsSync);
}

for (const filePath of htmlFiles) {
  const route = pagePath(filePath);
  if (route === "/404" || route === "/_not-found") continue;
  const html = fs.readFileSync(filePath, "utf8");
  const expectedLanguage = route === "/zh" || route.startsWith("/zh/") ? "zh-Hant" : "en-CA";
  if (!html.includes(`<html lang="${expectedLanguage}">`)) errors.push(`${route}: expected html lang ${expectedLanguage}`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]
    ?.replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'");
  if (!title) errors.push(`${route}: missing title`);
  const isSignalArticle = route.startsWith("/signals/");
  if (isSignalArticle && title && title.length > 65) errors.push(`${route}: title exceeds 65 characters (${title.length})`);
  if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) errors.push(`${route}: expected exactly one h1`);
  const canonicalTag = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)?.[0];
  if (!canonicalTag || !attribute(canonicalTag, "href")) errors.push(`${route}: missing canonical`);
  const descriptionTag = html.match(/<meta[^>]+name=["']description["'][^>]*>/i)?.[0];
  if (!descriptionTag || !attribute(descriptionTag, "content")) errors.push(`${route}: missing description`);
  for (const property of ["og:image", "twitter:image"]) {
    const tag = html.match(new RegExp(`<meta[^>]+(?:property|name)=["']${property}["'][^>]*>`, "i"))?.[0];
    const content = tag && attribute(tag, "content");
    if (!content) errors.push(`${route}: missing ${property}`);
    else if (content.startsWith("https://flypigai.ca/")) {
      const assetPath = new URL(content).pathname;
      if (!fs.existsSync(path.join(outputDirectory, assetPath))) errors.push(`${route}: ${property} asset missing at ${assetPath}`);
    }
  }
  const structuredData = [];
  for (const match of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { structuredData.push(JSON.parse(match[1])); } catch (error) { errors.push(`${route}: invalid JSON-LD (${error.message})`); }
  }
  if (isSignalArticle) {
    const article = structuredData.find((entry) => entry["@type"] === "NewsArticle");
    if (!article) errors.push(`${route}: missing NewsArticle JSON-LD`);
    else {
      for (const field of ["image", "datePublished", "dateModified", "author", "publisher", "citation"]) {
        if (!article[field] || (Array.isArray(article[field]) && article[field].length === 0)) errors.push(`${route}: NewsArticle missing ${field}`);
      }
    }
  }
  for (const match of html.matchAll(/<(?:a|img)\b[^>]+(?:href|src)=["']([^"']+)["'][^>]*>/gi)) {
    const target = match[1];
    if (!target.startsWith("/") || target.startsWith("//")) continue;
    if (/^\/(?:api|_next)\//.test(target)) continue;
    if (/^\/(?:canada|taiwan|solutions)(?:[/?#]|$)/.test(target)) errors.push(`${route}: obsolete internal target ${target}`);
    if (!resolveExportedRoute(target)) errors.push(`${route}: broken internal target ${target}`);
  }
}

for (const asset of ["favicon.ico", "apple-touch-icon.png", "images/og/flypig-ai-default.png", "images/brand/flypig-ai-mark-512.png"]) {
  if (!fs.existsSync(path.join(outputDirectory, asset))) errors.push(`Missing exported asset /${asset}`);
}

const redirectsPath = path.join(outputDirectory, "_redirects");
const redirects = fs.existsSync(redirectsPath) ? fs.readFileSync(redirectsPath, "utf8") : "";
for (const rule of ["/canada      /atlas      301", "/taiwan      /Solutions  301", "/solutions   /Solutions  301"]) {
  if (!redirects.includes(rule)) errors.push(`Missing redirect rule: ${rule}`);
}

const sitemapPath = path.join(outputDirectory, "sitemap.xml");
const sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, "utf8") : "";
if (!sitemap.includes("https://flypigai.ca/Solutions")) errors.push("Sitemap missing /Solutions");
for (const retired of ["https://flypigai.ca/canada", "https://flypigai.ca/taiwan", "https://flypigai.ca/solutions"]) {
  if (sitemap.includes(`<loc>${retired}</loc>`)) errors.push(`Sitemap contains retired route ${retired}`);
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}
console.log(`Audited ${htmlFiles.length} exported HTML pages: metadata, language, JSON-LD, images, internal links, redirects, and sitemap all passed.`);
