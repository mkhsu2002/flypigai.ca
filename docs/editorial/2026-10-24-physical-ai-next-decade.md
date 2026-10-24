# Physical AI’s Next Decade — editorial and release record

## Scope and publication gate

Prepared on October 24, 2026 (America/Vancouver) from the user-supplied Chinese draft, “Physical AI 的下一個十年：真正的 Android，可能根本不是一套作業系統”. This is an original English adaptation for FlyPig AI Insights, with later October evidence, a Canada–Taiwan qualification section, competing scenarios and six falsifiable observations.

Canonical route: `/insights/physical-ai-modularization/beyond-the-robot-operating-system`.

The user explicitly requested a new formal article. It is a supplementary outlook connected to the six original essays, not a renumbering of that series or a new FP-PAI-005 prediction. The earlier October 24 weekly decision not to create a seventh essay from launch announcements remains part of the historical audit. This commissioned synthesis adds a lifecycle-versus-runtime framework, observable portability/economic tests and implications for Canadian product teams and Taiwan technology companies. It does not claim new empirical findings beyond the existing evidence.

The original prediction registry, confidence scores, evidence records and historical essay text remain unchanged. Publication dates in this change are the intended October 24 release date; if the release is delayed to a later date, update the new article date and affected sitemap dates before production publication.

## Rules and skills checked

- `AGENTS.md`, current `README.md`, the August 25 stabilization design and August 29 positioning design.
- `research/physical-ai/README.md`, `IDE_HANDOFF.md`, the immutable prediction registry, evidence tracker and October 24 weekly audit.
- `docs/editorial/industry-signals-standard.md`: this is an Insights forecast rather than a Signal, so it uses Article schema and its own route. The applicable sourcing, rights, bounded typography and rendering checks are retained.
- `docs/operations/search-release.md`, the existing SEO helper, sitemap and series templates.
- The available `cloud-environment:cloud-environment-runtime` skill for policy, credential-name checks and proxy/CA handling. The onboarding setup skill applied to the earlier environment task; its restrictions on changing application files during onboarding do not prohibit this separately requested article implementation.
- No parent/global `AGENTS.md` or project-specific skill files were present in this cloud checkout. Both executor and cloud skill inventories were checked. Legacy skills mentioned by the repository, including `cloudflare-deploy`, `newsletter-worker-standard` and browser account lanes, were not available. The mail-worker skill is also outside the scope of this frontend-only content change. No private browser account, third-party publishing platform or email service was used.

## Claim-to-source review

The source URLs, announcement dates and claims were cross-checked against the existing reviewed repository evidence, not independently reverified online in this task. Fresh HTTPS reads of source sites, GitHub API and production were rejected by the environment proxy with a CONNECT 403. Existing Git read and dry-run push access work. The required domain additions have been saved to the environment draft; saving does not apply that policy.

| Evidence | Article use | Boundary preserved |
| --- | --- | --- |
| PAI-EV-2026-0021 | Intrinsic Core’s ROS compatibility, Apache 2.0 licence and reusable robotics capabilities | Supported hardware and production validation remain necessary. |
| PAI-EV-2026-0026 | Qualcomm’s September agreement to acquire PickNik and stated MoveIt commitments | Agreement and stated future support do not establish completion or universal interoperability. |
| PAI-EV-2026-0030 | AWS Physical AI Toolchain’s lifecycle scope | AWS/NVIDIA dependencies are distinct from neutral cross-cloud portability. |
| PAI-EV-2026-0031 | Odyssey-3 and implications for the skill/app analogy | Domain adaptation, action policies and independent physical validation remain necessary. |
| PAI-EV-2026-0036 | Isaac OS and Isaac Lab 3.0 announcement | An open runtime does not prove a cross-vendor application contract. |
| PAI-EV-2026-0037 | Agile ONE SN reference research platform | Early-2027 availability is a plan, not delivered volume. The disputed weight is omitted. |
| PAI-EV-2026-0038 | Agility’s exclusive Digit 5 onboard-compute selection | Explicit counter-evidence to a simple hardware-commoditisation story. |
| PAI-EV-2026-0039 | CoreWeave lifecycle engineering workflows | Coding-agent skills are not presented as portable robot behaviours. |

The article distinguishes company disclosures, FlyPig interpretation and FlyPig prediction. It neither invents benchmarks, customers or revenue nor declares a platform winner. The seven-layer framework is explicitly a forecast model. Confidence values are not presented as measured probabilities. The forecast horizon is 2026–2036.

## Media rights and provenance

Both images are original FlyPig AI editorial diagrams, generated programmatically from independently written labels and layout. They do not reproduce a manufacturer diagram, product image, third-party logo or distinctive third-party graphic composition.

- Hero: `public/images/insights/physical-ai-next-decade.png`, 1600 × 1000.
- Social: `public/images/og/pages/insights-physical-ai-next-decade.png`, 1200 × 630.
- Editable sources: `public/images/insights/source/physical-ai-next-decade.svg` and `physical-ai-next-decade-social.svg`.
- Reproducible generator: `node scripts/generate-physical-ai-forecast-visuals.mjs` from the repository root. It renders only this article’s two images and preserves unrelated artwork. A local writable Fontconfig cache is used under ignored `artifacts/` when no XDG cache path is supplied.
- Rights state: `owned`; evidence: this generator and the committed original SVGs. The pre-existing official FlyPig logo is used by the shared site header/footer without alteration.
- Visible credit, alt text, image dimensions and an accessible HTML table accompany the graphic. The seven-layer diagram is analytical, not a validated architecture or safety certification.

## Local validation completed

- `npm test`: 18 passed, zero failed/skipped.
- `npm run build`: content validation passed for all 67 Signals; 132 static-generation entries including the new route.
- `npm run typecheck`: passed.
- `npm run audit:export`: 130 HTML pages passed metadata, language, JSON-LD, images, internal-link, redirect and sitemap checks.
- `git diff --check`: passed.
- Chromium rendering of the actual static export at 1440 × 1000 and 390 × 844: HTTP 200, one H1, correct canonical and `en-CA`, eight references, seven table rows, six forecast tests, loaded hero image, valid Article JSON-LD, working in-page reference targets, no horizontal page overflow, no console errors and no uncaught page errors. Screenshots are retained under ignored `artifacts/physical-ai-forecast/`.
- The raw exported `/zh` language safeguard remains in place. No translated counterpart is invented for the new English article.

The temporary local export server initially served a directory listing because Next emits both a route directory and a sibling `.html` file. That validation harness was corrected to resolve `.html` first; screenshots and the passing checks above belong to the corrected run.

## Outstanding release requirements

At the time of this record, production publication has NOT been verified. Do not describe the intended canonical URL as already live.

1. Apply the saved environment network additions. Re-read the eight official sources, checking source-to-claim fit and acquisition/release chronology. If a source changed, correct the article before publication.
2. Inspect the final diff and confirm the source review, rights and visual gates. The earlier environment dependency audit reported pre-existing critical/high findings; this article does not alter dependency declarations or upgrade the runtime. Resolve the applicable release security requirement before treating this as a security-cleared release.
3. Follow the repository’s Git-to-Cloudflare production route after the gates pass; do not deploy `out/` to a separate static host, omit Pages Functions or mutate D1/Queues/Workers for this content-only change.
4. Confirm Cloudflare’s canonical production deployment for the final commit and read back the new URL, title, canonical, social image, Article dates/citations, sitemap and raw `/zh` HTML. A push alone does not establish publication.
5. `INDEXNOW_KEY` and `INDEXNOW_KEY_LOCATION` are absent. Do not invent or expose them. Search notification is optional after live verification and requires the documented secure provisioning; sitemap inclusion is implemented.
