# Physical AI Next Decade — Traditional Chinese edition

## Translation scope

The user requested the Chinese edition after the English article was published. This is a full Traditional Chinese translation of the final English release, including its later October evidence and Canada–Taiwan qualification section. The earlier supplied Chinese draft is not substituted for the published English article.

- English: `/insights/physical-ai-modularization/beyond-the-robot-operating-system`.
- Traditional Chinese: `/zh/insights/physical-ai-modularization/beyond-the-robot-operating-system`.
- Publication date: October 24, 2026 (America/Vancouver), the actual release date of both editions.
- All ten body sections, the seven-layer framework, six observable falsifiers, eight primary references, first-party evidence boundaries, uncertainty, hardware counter-case and legal/operator disclosure are retained.
- Citation URLs and their order match the English edition. The Chinese list localises titles/dates while retaining source IDs and URLs from the shared source records.
- No new forecast, confidence score, supplier relationship, deployment result or economic claim is introduced. The original prediction/evidence registries and the six historical essays are unchanged.

## Bilingual integration

Both article headers have visible language links, and their shared site-header language switches target the exact counterpart article. Reciprocal `en-CA`, `zh-Hant` and English `x-default` alternates appear in page metadata and both sitemap entries. Each language has its own canonical URL, title, description, image alt text and social preview. Article JSON-LD uses the correct language, with `workTranslation`/`translationOfWork` linking the two editions.

The Chinese article is linked from the Traditional Chinese homepage, the English Insights/series outlook blocks, llms.txt and sitemap.xml. No nonexistent Chinese Insights or series hub is implied; links to untranslated related essays are visibly marked as English. The Chinese edition uses the shared Chinese header/footer and the existing recursive zh-Hant export safeguard. A language-aware rule in the shared editorial stylesheet permits the Chinese headline to use its reading column while retaining the existing bounded type scale.

The export audit now applies Insights Article checks to `/zh/insights/` as well as `/insights/`, so a translated article must meet the same metadata, structured-data and visible-date checks.

## Original localised visuals

Rights state: `owned`. These are Chinese-localised versions of FlyPig AI’s original analytical diagram, not manufacturer artwork. No third-party media or logos were added.

- Hero: `public/images/insights/physical-ai-next-decade-zh.png`, 1600 × 1000.
- Social: `public/images/og/pages/insights-physical-ai-next-decade-zh.png`, 1200 × 630.
- Editable SVGs: `public/images/insights/source/physical-ai-next-decade-zh.svg` and `physical-ai-next-decade-zh-social.svg`.
- Reproduce from the repository root with `node scripts/generate-physical-ai-forecast-visuals.mjs --locale=zh`. The machine must have Noto Sans CJK TC available for Chinese rendering. No font binaries are copied into the repository.
- The default generator continues to support English; the original English image files remain byte-for-byte unchanged. The Chinese command renders only its two localised assets.

Both editions visibly explain that the diagram is a forecast framework rather than an industry standard or certified safety system. Chinese alt text, credit and an accessible Chinese HTML table accompany the figure.

## Validation

- 18 existing tests passed, no failures/skips.
- Content validation: all 67 Signals passed; production build generated 133 static entries.
- Typecheck, 131-page export audit and diff checks passed.
- The Chinese and English article have identical ordered reference IDs, citation URLs and per-section paragraph counts; both contain ten body sections, seven layer rows and six falsifier items.
- Chromium checks at 1440px and 390px verified both editions, correct canonical/hreflang/schema, all images, no horizontal overflow, no broken in-page citations and no console/page errors.
- Both article-language links were actually clicked in both directions on desktop and mobile; the resulting document language persisted as en-CA/zh-Hant after hydration.
- The XML sitemap was parsed to verify that each article occurs exactly once and both entries list the correct three language alternates.
- Editable SVGs and both Chinese raster outputs were visually inspected. Screenshots and machine-readable local checks are retained under ignored `artifacts/physical-ai-forecast-zh/`.

PR #12 merged and the Cloudflare production deployment succeeded on October 24, 2026. Live bilingual verification passed at 12:11 PDT. See [the production readback](../operations/2026-10-24-physical-ai-next-decade-zh-production-readback.md) for exact commit, deployment and checks.
