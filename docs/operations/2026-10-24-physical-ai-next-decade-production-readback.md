# Physical AI Next Decade — production readback

Verified: 2026-10-24T11:44:03.425831-07:00 (America/Vancouver).

- Release PR: https://github.com/mkhsu2002/flypigai.ca/pull/11
- Public-content commit: `7db2c5e997aa8b1ed6c06322613d6f1c4d0385ff`.
- Cloudflare Pages deployment: `bdc4d9ab-1bd9-405d-b0ab-f31f2a543a57`; the Cloudflare Pages check on that main commit completed successfully.
- Canonical article: https://flypigai.ca/insights/physical-ai-modularization/beyond-the-robot-operating-system

## Checks completed

- Official-source verification completed for all eight citations; Qualcomm’s own linked markdown alternate supplied the client-rendered release body.
- Frozen-lock install, production dependency audit (0 vulnerabilities), 18 tests, build, typecheck, 130-page export audit and diff checks passed.
- Desktop and 390px Chromium rendering of the final export passed with no missing images, page overflow, console errors or uncaught exceptions.
- Production article returned HTTP 200 with the intended headline, one H1, canonical, en-CA language, October 24 published/modified dates, Article citations, publisher, OG/Twitter image, seven framework layers and six falsifiers. No invented zh-Hant translation alternate or noindex directive is present.
- Both images returned HTTP 200 with the expected dimensions and exact repository bytes:

  - `/images/insights/physical-ai-next-decade.png`: 1600 × 1000; SHA-256 `c91743f5799de207f4fe89f239e11b4ad7ec9cc1c14c1f598767ec1d0f3cc7ad`.
  - `/images/og/pages/insights-physical-ai-next-decade.png`: 1200 × 630; SHA-256 `b4371f098d0a8645e5e8809b99e67322db3f54d8b36674300078a3046c1dadf6`.

- The article is linked from Insights, the series hub, sitemap.xml and llms.txt. The canonical URL occurs exactly once in the sitemap with October 24 lastmod.
- Raw `/zh`, `/zh/about` and `/zh/contact` HTML declares `lang="zh-Hant"`.
- `/canada` still resolves to `/atlas`; `/taiwan` and `/solutions` still resolve to `/Solutions`.

## Scope and remaining distinctions

Deployment is evidenced by the Cloudflare Pages check on the merged main commit and actual custom-domain responses, including exact matching image bytes. No authenticated Cloudflare project-API `canonical_deployment` read was performed because this environment has no Cloudflare credential binding. The readback does not claim a live D1, Queue, Pages Function or email-delivery test; those implementations and resources were not changed.

INDEXNOW_KEY and INDEXNOW_KEY_LOCATION are absent, so no IndexNow submission was attempted. Sitemap discovery is available; search indexing or rankings are not guaranteed.

The original evidence tracker, prediction registry and six historical essay bodies remain unchanged. Release dependencies were updated within existing version ranges to clear the security gate.

This readback document is a documentation-only follow-up. Its commit uses [skip ci] to avoid a second deployment; the public-content commit above remains the release being verified.
