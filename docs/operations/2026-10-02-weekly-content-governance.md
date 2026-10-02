# Weekly Public Content Governance — 2026-10-02

## Scope

Reviewed clean local `main` and `origin/main` at `bbd044a`, comparing with the previous governance commit `4b46dbd`. The 2026-09-25–10-01 changes added two Industry Signals and updated the English and Traditional Chinese home heroes, shared brand assets, and page/Signal social images. No Insights essay, Atlas content source, or other sitemap route source changed. The earlier 2026-09-25 report remains a historical record.

New public articles:

- `https://flypigai.ca/signals/mediatek-dimensity-cx-c10-max-googlebook-ai-pc` (`EVT-2026-0044`)
- `https://flypigai.ca/signals/nuvoton-i3810yyi-digital-chipcorder-audio` (`EVT-2026-0045`)

## Editorial and asset review

Both records have published status, source dates of 2026-09-22, FlyPig publication and modification dates of 2026-09-28, search titles of 51 and 56 characters, descriptions of 147 and 142 characters, three related Signals each, factual citations, product-status caveats, owned-artwork evidence, descriptive alt text, and dedicated 1600×1000 hero and 1200×630 social images. The two hero and social images were visually inspected on 2026-10-02. The images use the checked-in official FlyPig lockup and do not reproduce manufacturer artwork. No generation was needed during this governance run.

First-party source checks on 2026-10-02 confirmed the MediaTek Taiwan release's 2026-09-22 date and C10 Max's 55 TOPS specification, and Nuvoton's 2026-09-22 release, 3 W rating, and NT-I3810 evaluation board. The articles distinguish vendor specifications from independent benchmarks and do not infer inventory or production volume.

## Validation and deployment

On 2026-10-02, `npm run validate:content` passed for 67 Signals; `npm test` passed 18/18; `npm run typecheck`, `npm run build`, and `npm run audit:export` passed. The exported-site audit checked 128 HTML pages. Cloudflare Pages listed a successful Production deployment of `bbd044a` at `https://f9d7ebab.flypigai-ca.pages.dev` before this governance change. The initial live readback found both new articles HTTP 200, in the 125-entry public sitemap, with correct canonical, dedicated OG image HTTP 200, hero HTTP 200, NewsArticle dates and citations. The English and Chinese home pages and `/signals` hub also returned HTTP 200 with working OG images and the official lockup.

The live sitemap still used the older 2026-08-29 `lastmod` for both home pages and `/signals`. This run corrected those values to the actual 2026-10-01 home-hero update and 2026-09-28 Signals listing update. Final commit, deployment, and post-deploy readback evidence should be appended after release.
