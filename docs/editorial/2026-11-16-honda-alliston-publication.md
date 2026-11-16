# Honda Alliston manual editorial release — 2026-11-16

## Scope and authorisation

The owner selected the Honda manufacturing topic for the first article and explicitly requested publication on FlyPig AI CA, following the site's skills and rules. This is a directly commissioned publication, not an unattended run of the reviewed-Sheet-row automation. The general publication checks and risk policy remain applicable. No external social post, newsletter broadcast or other article is included.

## Register and duplicate review

Read the source spreadsheet metadata and the header of `加拿大 Industry Signals 事件庫` (sheetId 210000008). A bounded Honda search in A2:O150 returned zero matches. Read A1:O65 to confirm the register structure and existing Canadian event numbering. Repository content and editorial files contained no Honda/Alliston article. No Sheet row was changed and no pre-existing `已初審` status is asserted. The owner instruction supplies the manual commission; the article records its primary-source and prepublication risk review locally under unique event ID `CA-2026-1113-HONDA`.

## Primary sources read on November 16

- [Federal announcement, November 13](https://www.canada.ca/en/innovation-science-economic-development/news/2026/11/canada-invests-313-million-in-honda-north-america-to-advance-next-generation-vehicle-manufacturing-in-ontario.html): CAD 313M federal support, CAD 156M Ontario contribution, expected maintenance of more than 4,000 jobs and supported output up to 400,000 vehicles annually.
- [Honda announcement, November 9](https://hondanews.ca/en-CA/releases/honda-strengthens-commitment-to-canadian-manufacturing-with-investment-to-expand-hybrid-production): CAD 166M capital investment is part of CAD 867M broader commitment, including future planned investments and related expenses; hybrid-electric and gasoline production and return of engine manufacturing.

## Risk decision

Medium / highlight: retain attribution and distinguish financial scopes and expectations. Do not add public contributions to the broader commitment, infer incremental capacity, describe retained jobs as new jobs, or infer AI/robotics deployment or Taiwan supplier awards. The English website article expands the earlier conversational draft to reflect Honda's capital-versus-commitment distinction. Public copy contains no operational approval notes.

## Visual rights

Use the existing FlyPig AI original infographic generator, three factual labels, and the tracked official FlyPig AI brand asset. Retain editable hero and social SVGs and raster exports. No Honda or government image is downloaded or reused.

## Verification

- Clean dependency installation with the existing lockfile completed; no dependency or source configuration change.
- `validate:content`: 83 records passed, including image dimensions and editable-source rights evidence.
- `npm test`: all three test files passed; `typecheck` passed.
- `npm run build`: passed with 149 generated pages; the sandbox initially suppressed detached TypeScript subprocess stdout, and the same unmodified command passed outside the sandbox.
- `audit:export`: 147 HTML pages passed metadata, language, JSON-LD, image, internal-link, redirect and sitemap checks.
- Desktop 1440px and mobile 390px screenshots reviewed. No horizontal overflow, browser console errors or page errors. Hero, related images, visible image credit, source disclosure and newsletter field verified. NewsArticle dates, citations, canonical and images match visible content. Hero and social graphic independently inspected after shortening labels to fit the existing template.
- Production dependency audit has no high or critical finding; one existing moderate Next.js advisory remains (GHSA-mfr8-8qww-v76h). This content-only release does not alter dependencies or introduce the affected caching pattern.
- Existing build generation fills previously missing artwork for other articles locally; only this article's four owned visual files are included in this release.
- `git diff --check`: passed.

## Production release and readback

- Content commit: `cee8ae76a1a9c51223813eab2314617408725a62` on `main`.
- Cloudflare Pages check: completed successfully; deployment `8c777c74-dc42-4d42-a8d6-6fa40e49c645`.
- The public custom domain returned the new article with HTTP 200, expected headline, canonical, November 16 publication/modified dates, English NewsArticle schema, both official citations and visible image/source/independence disclosures.
- Hero and social PNGs returned HTTP 200 and exactly matched local SHA-256 hashes. OG references the published social graphic.
- `/signals` lists the article; sitemap includes its canonical URL with November 16 lastmod. The current homepage provides an Industry Signals link rather than an individual latest-article card.
- Homepage, `/zh`, `/atlas`, `/Solutions`, `/technologies`, `/insights`, `/contact`, robots, sitemap and favicon returned HTTP 200. Raw `/zh` HTML declares `zh-Hant`.
- Detailed local evidence: `artifacts/honda-visual-check.json`, desktop/mobile screenshots and `artifacts/honda-production-readback.json` (ignored build/review artifacts).
- No IndexNow key was configured in this session; no key was searched for, exposed or provisioned, and no indexing submission is claimed. Sitemap discovery remains available.

Published canonical URL: https://flypigai.ca/signals/honda-alliston-hybrid-manufacturing-investment
