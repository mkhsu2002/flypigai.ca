# FlyPig AI SEO, GEO, AEO Remediation Design

**Date:** 2026-08-25

**Status:** Approved in conversation

**Scope:** All P0 and P1 items from the 2026-08-25 site audit. Backend newsletter and contact-delivery work remains governed by the separate stabilization design.

## 1. Outcome

Make `flypigai.ca` technically complete and semantically consistent for search engines, answer engines, social sharing, and future editorial publishing. The release must preserve FlyPig AI's independent intelligence position and must not imply supplier authorization or an official partnership.

## 2. Canonical information architecture

- Canada ecosystem and operator discovery is owned by `/atlas`.
- Taiwan solution and supply-side intelligence is owned by `/Solutions` with the visible label `Taiwan Solutions`.
- `/taiwan` permanently redirects to `/Solutions`.
- `/canada` permanently redirects to `/atlas` and is removed from navigation and the sitemap.
- `/technologies` owns technology taxonomy and design-route intelligence.
- `/signals` owns current industry developments.
- `/insights` owns evergreen analysis.
- `/services` describes the commercial engagement process only.
- `/physical-ai` remains an educational deployment-readiness page and must not duplicate the service proposition.

The capitalized `/Solutions` path is intentional and is the canonical form requested by the site owner. A lowercase `/solutions` request redirects to `/Solutions`.

## 3. Legal and entity identity

FlyPig AI is operated by `ICareU Global Trading Ltd.` The public identity must consistently expose:

- Address: `11936 Woodridge Cres., Delta, BC V4E 3H5, Canada`
- Email: `info@flypigai.ca`
- Founder: `M.K. Hsu`
- Founder profile: `https://mkhsu.icareu.tw/`

The Organization schema, About, Contact, Privacy, footer, and machine-readable site description must use this identity. `FlyPig AI` remains the public brand; `ICareU Global Trading Ltd.` is the legal operator. The business is based in Delta, British Columbia, not described generically as a Vancouver company.

## 4. Social and article images

- Add a rights-safe, FlyPig AI-owned default 1200×630 Open Graph image.
- Add favicon, Apple touch icon, and organization logo assets.
- Every Industry Signal gets a local 1600×1000 article infographic and a local 1200×630 social image generated from verified facts already stored in the article record.
- The generator, editable SVG source, raster exports, and rights evidence remain in the repository.
- Metadata emits `og:image` and `twitter:image`; NewsArticle emits a crawlable representative `image` matching the visible hero.
- Article records without a valid local asset, dimensions, alt, credit, source URL, rights status, or evidence fail validation.

No manufacturer product photography or branding is copied into these graphics. Product and company names may appear as factual text; visual composition remains FlyPig AI-owned.

## 5. Signals content contract and template

Each record supports:

- `seoTitle` and `socialTitle` separate from the editorial headline;
- complete `publishedAt` and truthful `modifiedAt` dates;
- visible organization author identity and optional honest reviewer identity;
- `keyFacts`, `relatedSignals`, `relatedTechnologies`, and `corrections`;
- `heroVisual` with `socialSrc` and asset-rights evidence.

The shared page renders a breadcrumb, restrained title scale, published/updated dates, byline, hero with credit, key facts, answer-first summary, reporting, FlyPig interpretation, primary citations, related reading, corrections link, and newsletter CTA. It must remain readable at 390px and desktop widths.

## 6. Technical semantics

- Canonical and hreflang are emitted only for real equivalents.
- Exported Traditional Chinese documents use `<html lang="zh-Hant">`; English documents use `<html lang="en-CA">`.
- Sitemap `lastmod` uses the true content modification date when known and is omitted where it cannot be supported.
- Structured data adds truthful Organization, author, publisher, image, date, citation, and breadcrumb relationships.
- `llms.txt` describes the current independent intelligence role and links the canonical owner pages.

## 7. Trust and editorial policy

Add a public editorial policy covering source priority, fact versus interpretation, AI-assisted workflow responsibility, updates, corrections, commercial relationship disclosure, and media rights. About and article pages link to it. Do not invent named human review where it did not occur.

## 8. Verification gates

The release is accepted only when:

1. content validation passes for all Signals;
2. all declared local image files exist and match their metadata;
3. typecheck and static build pass;
4. exported Chinese HTML has the correct document language;
5. exported pages contain canonical, description, `og:image`, `twitter:image`, and valid JSON-LD;
6. `/canada`, `/taiwan`, and `/solutions` redirect declarations point to their canonical owners;
7. internal links contain no obsolete gateway paths or broken local targets;
8. desktop and 390px article screenshots show readable title, hero, metadata, body, related content, and CTA;
9. the reviewed commit is pushed to `main`, and the public site is read back after deployment.
