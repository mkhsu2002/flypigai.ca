# FlyPig AI SEO, GEO, AEO Remediation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete every approved P0 and P1 SEO, GEO, AEO, social-image, content-architecture, and editorial-template remediation for `flypigai.ca`.

**Architecture:** Centralize legal/entity/metadata values, make `/Solutions` and `/atlas` the canonical audience owners, validate Signals as structured content, generate all owned media deterministically, and verify the final static export rather than trusting source metadata alone. Stateful newsletter infrastructure is outside this plan.

**Tech Stack:** Next.js 16 App Router static export, React 19, TypeScript, Node.js validation/generation scripts, Sharp rasterization, Cloudflare Pages redirects.

---

### Task 1: Canonical routes and entity identity

**Files:**
- Create: `lib/site.ts`
- Create: `app/Solutions/page.tsx`
- Create: `public/_redirects`
- Modify: `components/SiteChrome.tsx`
- Modify: `app/page.tsx`
- Modify: `app/seo.ts`
- Modify: `app/about/page.tsx`
- Modify: `app/contact/page.tsx`
- Modify: `app/privacy/page.tsx`
- Modify: `app/sitemap.ts`
- Delete: `app/canada/page.tsx`
- Delete: `app/taiwan/page.tsx`

- [ ] Add a single site-identity object containing the public brand, legal operator, Delta address, email, founder, canonical routes, and default social image.
- [ ] Add `/Solutions` as an independent Taiwan solution-intelligence page without partnership or authorization claims.
- [ ] Replace every internal `/canada` link with `/atlas` and every internal `/taiwan` link with `/Solutions`.
- [ ] Add Cloudflare 301 rules for `/canada`, `/taiwan`, and lowercase `/solutions`.
- [ ] Remove retired routes from the sitemap and make Organization schema match visible legal/entity details.
- [ ] Run `rg -n 'href="/(canada|taiwan|solutions)' app components` and expect no obsolete internal links.

### Task 2: Metadata, brand media, and language semantics

**Files:**
- Create: `scripts/generate-brand-assets.mjs`
- Create: `scripts/postprocess-static-html.mjs`
- Create: `public/images/brand/flypig-ai-mark.svg`
- Generate: `public/images/brand/flypig-ai-mark-512.png`
- Generate: `public/images/og/flypig-ai-default.png`
- Generate: `public/favicon.ico`
- Generate: `public/apple-touch-icon.png`
- Modify: `app/layout.tsx`
- Modify: `app/seo.ts`
- Modify: `package.json`

- [ ] Generate owned brand assets from repository-controlled vector source.
- [ ] Emit default `openGraph.images`, `twitter.images`, icons, Organization logo, and image dimensions.
- [ ] Add a postbuild export pass that changes `/zh` documents to `lang="zh-Hant"` and leaves English documents `lang="en-CA"`.
- [ ] Run `npm run build`, inspect `out/index.html` and `out/zh/index.html`, and require correct social tags and document languages.

### Task 3: Signals schema, content migration, and asset validation

**Files:**
- Modify: `lib/industrySignals.ts`
- Create: `scripts/migrate-signal-content.mjs`
- Create: `scripts/validate-signal-content.mjs`
- Create: `scripts/generate-signal-heroes.mjs`
- Modify: `content/industry-signals/*.json`
- Generate: `public/images/signals/source/*.svg`
- Generate: `public/images/signals/*.png`
- Generate: `public/images/signals/og/*.png`
- Modify: `package.json`

- [ ] Define strict types for SEO/social titles, full dates, key facts, relationships, corrections, hero/social images, and rights evidence.
- [ ] Migrate all 21 records with human-readable SEO titles and truthful dates; verify the incomplete Winbond date from its primary source before migration.
- [ ] Generate images in batches of at most six, checking filenames, dimensions, visual topic, and JSON references after each batch.
- [ ] Fail validation for incomplete dates, missing assets, remote media, invalid rights status/evidence, dimensions, alt, credit, duplicate slugs, overlong SEO titles, or invalid related slugs.
- [ ] Run `npm run validate:content` and expect all Signals to pass.

### Task 4: Standard Signals editorial template

**Files:**
- Modify: `app/signals/[slug]/page.tsx`
- Modify: `app/signals/page.tsx`
- Modify: `app/globals.css`
- Create: `app/editorial-policy/page.tsx`

- [ ] Pass article-specific image and social title into metadata.
- [ ] Render breadcrumb, published/updated date, organization byline, visible hero/credit, key facts, answer-first summary, related Signals, technology links, corrections link, and compact CTA.
- [ ] Add matching NewsArticle image, dates, author URL, publisher, citations, and BreadcrumbList JSON-LD.
- [ ] Keep the headline within the approved bounded responsive scale and the body within a 720–760px reading column.
- [ ] Add a source-first editorial policy and link it from articles, About, and the footer.

### Task 5: Content-owner differentiation, bilingual trust, and machine-readable context

**Files:**
- Modify: `app/technologies/page.tsx`
- Modify: `app/services/page.tsx`
- Modify: `app/physical-ai/page.tsx`
- Modify: `app/zh/page.tsx`
- Modify: `app/zh/about/page.tsx`
- Modify: `app/zh/contact/page.tsx`
- Modify: `app/zh/privacy/page.tsx`
- Modify: `public/llms.txt`
- Modify: `README.md`
- Modify: `AGENTS.md`
- Modify: `docs/editorial/industry-signals-standard.md`
- Modify: `docs/superpowers/specs/2026-08-25-site-stabilization-design.md`

- [ ] Differentiate technology taxonomy, current Signals, evergreen Insights, commercial Services, and Physical AI education with explicit contextual links.
- [ ] Replace legacy Chinese partnership/commercialization positioning on core Chinese surfaces.
- [ ] Publish visible operator/address/email/founder details in both languages.
- [ ] Rewrite `llms.txt` around the canonical owner pages, independent role, source policy, and entity identity.
- [ ] Update handoff documents so future IDEs and agents preserve `/Solutions`, `/atlas`, media-rights validation, and legal identity.

### Task 6: Full release verification and publication

**Files:**
- Create: `scripts/audit-exported-site.mjs`
- Modify: `package.json`

- [ ] Run `npm run validate:content` and require zero errors.
- [ ] Run `npm run typecheck` and require exit code 0.
- [ ] Run `npm run build` and require exit code 0.
- [ ] Run `npm run audit:export` and require zero missing metadata, JSON-LD, image, language, redirect, or internal-link errors.
- [ ] Start a local static server, capture desktop and 390px screenshots of `/`, `/Solutions`, `/signals`, and one long-title Signal, and inspect each screenshot.
- [ ] Run `git diff --check`, inspect the staged diff, commit coherent source and generated assets, and push `main`.
- [ ] Poll the public domain until the pushed commit is deployed, then verify canonical routes, redirects, OG assets, icon assets, and the representative Signal page.

