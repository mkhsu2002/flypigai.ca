# Weekly Public Content Governance — 2026-10-09

## Scope

Compared clean local `main` and `origin/main` at `a57a04a` with the previous governance commit `0f684d0`. The intervening changes published one solution analysis, `/Solutions/meta-rosetta-metalens`, and changed its `/Solutions` listing, sitemap, `llms.txt`, README and editorial research note. The scan covered `content/industry-signals/*.json`, `app/insights/**`, Atlas content sources, hub/listing routes and all sitemap-producing files. No Industry Signal, Insight or Atlas content source changed this week.

## Article review

- Public article: `https://flypigai.ca/Solutions/meta-rosetta-metalens` (first published 2026-10-02).
- Search intent: MetaRosetta's visible, near-infrared and thermal metalens routes for Canadian product qualification. The 156-character description and source-backed analysis distinguish the three routes and avoid treating supplier claims as independently measured outcomes.
- The original 65-character article title rendered as a 77-character browser title after the site template added `| FlyPig AI`. A dedicated SEO title now renders at 56 characters while the full on-page headline and social title remain intact.
- The page has Article and BreadcrumbList JSON-LD, canonical and article Open Graph metadata, exact visible publication date, six source citations, independent-coverage disclosure, contextual related links, and a sitemap entry. `/Solutions` links to the article.
- The dedicated hero/OG image is a 1200×630 FlyPig AI concept illustration with descriptive alt text and visible conceptual-use clarification. It was visually inspected. The original generated PNG is retained at `assets/solutions/meta-rosetta-metalens-generated-original.png`; no company artwork or logo was used. No new image generation occurred during this run.
- On 2026-10-09, the five MetaRosetta company pages were re-read and supported the article's visible, NIR, LWIR, company and customization descriptions. The Nature review's publisher-indexed abstract and key points supported the stated engineering trade-offs, although full-page access redirected to a login. The article's 2026-10-02 source-check date was left as its historical publication record.

## Validation and release

`npm run validate:content` validated 67 Signals; `npm test` passed 18/18; `npm run typecheck`, `npm run build`, and `npm run audit:export` passed. The export audit covered 129 HTML pages and now requires Article schema, article dates, breadcrumbs and a bounded browser title for `/Solutions/*` articles.

Before this governance patch, the custom-domain article, `/Solutions`, sitemap and hero/OG image all returned HTTP 200. The sitemap contained 126 URLs and the article URL; the live article had the final caption clarification, canonical, Article JSON-LD, exact dates and the repository-matching image bytes.

Public-output commit `4257ea1` was pushed to `origin/main`. Cloudflare Pages listed its Production deployment `a58437d4-68ee-411c-b370-517656f50668` as Active on branch `main` at `https://a58437d4.flypigai-ca.pages.dev`. A custom-domain request briefly served the prior browser title during deployment propagation; a fresh readback at 2026-10-09 10:05 UTC matched the deployment domain and confirmed the 56-character title. The custom-domain article, `/Solutions`, sitemap, article hero/OG image and hub OG image returned HTTP 200. All 19 final readback assertions passed: canonical and article OG metadata, Article and BreadcrumbList JSON-LD, visible and schema dates, six citations, final image caption, hub link and OG image, both sitemap entries with 2026-10-02 `lastmod`, and live image bytes equal to the checked-in asset. The public sitemap contained 126 URLs.
