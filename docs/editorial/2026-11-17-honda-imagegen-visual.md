# Honda Canada editorial visual refresh

The owner requested one ImageGen-created scene with Canadian character and industrial technology elements for the published Honda article's cover and OG image.

## Creative and rights decision

Generated one master using OpenAI ImageGen, without reference images. Canadian maple-leaf light, Ontario autumn trees, a generic silver vehicle body, industrial robot arms and subtle blue sensor connections form a deliberately conceptual scene. It is not a factory photograph or evidence of specific Honda equipment. No Honda, government or third-party artwork is reused. The existing official FlyPig AI lockup is composited from the repository asset rather than regenerated.

The production image is an original editorial infographic: ImageGen background plus independently typeset headline and the three verified financial scopes. It retains `original_infographic` / `owned` rights metadata, with the prompt, saved master, rights decision and generation date in `public/images/signals/source/honda-alliston-hybrid-manufacturing-investment-artwork.json`. The visible credit and the image itself disclose the conceptual AI origin.

The saved master and SVG compositions allow deterministic rebuilds through `scripts/generate-signal-heroes.mjs` and `scripts/render-signal-imagegen.mjs`; generation never calls a remote image service during builds. Content validation requires the saved master, prompt, rights decision and visible credit whenever an ImageGen composition manifest is present.

## Exports and dates

- Cover: 1600×1000 PNG; OG: 1200×630 PNG, both exported from the same master.
- New `-canada-industry.png` URLs avoid reusing the old cached illustration URLs.
- Original article publication remains November 16; visual modification uses November 17, the active America/Vancouver client date.
- Article reporting and factual source dates are unchanged.

## Release checks

- Content validation: 83 records passed, including the saved master and ImageGen provenance checks.
- Negative check: temporarily removing the saved master correctly blocks validation; the original was restored immediately.
- Existing tests, TypeScript, production build and diff checks passed. Export audit passed for 147 HTML pages.
- Desktop 1440px and mobile 390px screenshots reviewed: no overflow, browser console errors or broken article images. Visible credit identifies OpenAI ImageGen and conceptual imagery. OG metadata uses the new image URL.
- Master, cover and OG were inspected directly. Key vehicle and maple elements survive both crops, and financial labels and the tracked brand lockup are legible.

Production readback follows deployment.
