# Physical AI Next Decade — bilingual production readback

Verified: 2026-10-24T12:11:56.015668-07:00 (America/Vancouver).

- Release PR: https://github.com/mkhsu2002/flypigai.ca/pull/12
- Public-content commit: `dbef9c2f78fd0e932b9376f413c58c98bb8752c4`.
- Cloudflare Pages deployment: `c5ee926f-8a24-4426-b305-1e138b047fd6`; the merged main commit’s Cloudflare Pages check completed successfully.
- English: https://flypigai.ca/insights/physical-ai-modularization/beyond-the-robot-operating-system
- Traditional Chinese: https://flypigai.ca/zh/insights/physical-ai-modularization/beyond-the-robot-operating-system

## Live checks

- Both article URLs returned HTTP 200 with one H1, correct self-canonical, matching published/modified dates and the intended en-CA/zh-Hant document language.
- Both metadata sets contain reciprocal en-CA/zh-Hant alternates and English x-default, and each Article schema links the other edition through workTranslation/translationOfWork.
- Both visible article-language links and the site-header language switches target the exact counterpart article. Local Chromium checks additionally clicked these links in both directions on desktop and mobile and confirmed language persisted after hydration.
- The Chinese article retains the English edition’s eight exact citation URLs, seven layer rows and six falsifiers. The Chinese text is the complete translation of the published English release, not a replacement with the earlier draft.
- English and Chinese social metadata use their respective localised images. All four images returned HTTP 200 with expected dimensions and exact matching repository bytes:

  - `/images/insights/physical-ai-next-decade-zh.png`: 1600 × 1000; SHA-256 `a7a2684cc6274e942c9e32deba5b0cfcd73df7892d51ad6645dc3b5f7480ab22`.
  - `/images/og/pages/insights-physical-ai-next-decade-zh.png`: 1200 × 630; SHA-256 `cf9058f7b2aee3fac41e14995bfc04841d352571d7ab9293bd0d9a27f2711184`.
  - `/images/insights/physical-ai-next-decade.png`: 1600 × 1000; SHA-256 `c91743f5799de207f4fe89f239e11b4ad7ec9cc1c14c1f598767ec1d0f3cc7ad`.
  - `/images/og/pages/insights-physical-ai-next-decade.png`: 1200 × 630; SHA-256 `b4371f098d0a8645e5e8809b99e67322db3f54d8b36674300078a3046c1dadf6`.

- Both canonical URLs occur exactly once in sitemap.xml, each with all three correct language alternates.
- The Chinese article is discoverable from /zh, /insights, the series hub and llms.txt.

## Local release checks and scope

18 tests, production build, typecheck, 131-page export audit and diff checks passed. The audit now applies Insights Article requirements to /zh/insights/. Desktop/390px rendering, Chinese headline/table/graphic inspection, reference targets and counterpart navigation passed. No dependency, API, database, queue, mail-worker, original prediction or evidence-registry changes were made.

Deployment evidence is the successful Cloudflare Pages check on the merged commit plus actual custom-domain readback and matching image hashes. No authenticated Cloudflare project-API canonical_deployment query or live mail test is claimed.

This readback is a documentation-only follow-up committed with [skip ci]; the public-content commit above remains the release being verified.
