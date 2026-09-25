# Weekly Public Content Governance — 2026-09-25

## Scope and state

Checked the 2026-09-18–24 `origin/main` history and the clean local `main` at `cf87d7a`. This run changed only documentation. The latest public-content commit remains `59d2c0c`; its Cloudflare Pages deployment and prior readback are recorded in `2026-09-24-industry-signals-release.md`. No new deployment was required in this run.

Thirteen Industry Signals were added during the window:

- `/signals/sanctuary-ai-tier1-wire-plugging-production-benchmark`
- `/signals/huys-ai-powered-esd-welding-commercialization`
- `/signals/indro-axiom-humanoid-style-research-platform`
- `/signals/mediatek-dimensity-9600-pro-9600m-agentic-ai`
- `/signals/nuvoton-nau85l42yg-quad-audio-adc`
- `/signals/advantech-weda-cross-chip-edge-ai-ecosystem`
- `/signals/nuvoton-m3351-5v-cortex-m33-robotics-control`
- `/signals/winbond-infineon-nor-flash-fram-acquisition`
- `/signals/aaeon-mix-ptlwv1-panther-lake-mini-itx`
- `/signals/fit-ntt-removable-optical-engine-architecture`
- `/signals/canada-defence-drone-initiative-marketplace`
- `/signals/canada-cuas-urban-sandbox-2027`
- `/signals/canada-minerva-arctic-uncrewed-air-system`

Two existing Signals had content or metadata changed: `/signals/dream-photonics-pilot-optical-interconnect-manufacturing` and `/signals/human-in-motion-xomotion-ai-commercialization-scaleup`. Two Physical AI essays had evidence reviews updated: `/insights/physical-ai-modularization/who-becomes-android-for-physical-ai` and `/insights/physical-ai-modularization/robot-skills-as-the-next-app-ecosystem`. The `/signals` and `/insights/physical-ai-modularization` hubs were included in the production readback. No other sitemap page source or hub route changed in the window.

## Local verification

On 2026-09-25, `npm run validate:content`, `npm test` (18 passed), `npm run typecheck`, `npm run build`, and `npm run audit:export` all exited successfully. The content validator checked 65 Signal records, image dimensions, editable source assets, rights evidence, SEO lengths, dates, and related links. The exported-site audit checked 126 HTML pages. All candidate pages had dedicated local OG images and no image generation was needed.

## Production readback

On 2026-09-25, all 19 checked public URLs returned HTTP 200 and appeared in `https://flypigai.ca/sitemap.xml` (HTTP 200, 123 entries): the 15 Signals, the two updated essays, and the two hubs listed above. The 15 Signal pages matched their content records for canonical URL, dedicated `og:image` path, NewsArticle dates, citations, and sitemap `lastmod`; their OG images returned HTTP 200. The two essays had Article JSON-LD and the visible 2026-09-19 updated date; their OG images returned HTTP 200. Both hubs had canonical and working OG images.

No public output, schema, API contract, or deployment setting was changed by this governance run.
