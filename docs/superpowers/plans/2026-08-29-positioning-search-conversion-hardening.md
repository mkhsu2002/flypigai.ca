# FlyPig AI Positioning, Search and Conversion Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align FlyPig AI's commercial identity, audience owner pages, technology decision content, Insights metadata and search freshness while preparing—but not prematurely activating—the event-driven contact/newsletter backend.

**Architecture:** Keep the statically exported Next.js site and its current canonical Atlas/Solutions structure. Add focused content data contracts and pages inside the existing App Router, extend the export audit, and isolate Cloudflare event delivery behind tested Pages Function and Queue Worker boundaries.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Node.js test runner, static export, Cloudflare Pages Functions, D1, Queues, Workers and Wrangler 4.

---

## Task checklist

### Task 1: Approved design and clean baseline

**Files:**
- Create: `docs/superpowers/specs/2026-08-29-positioning-search-conversion-hardening-design.md`
- Create: `docs/superpowers/plans/2026-08-29-positioning-search-conversion-hardening.md`

- [x] Confirm `main` and `origin/main` both start at `6a13c01` and the worktree is clean.
- [x] Create isolated branch `seo-positioning-hardening`.
- [x] Run `npm install`, `npm run typecheck`, `npm run build`, `npm run audit:export` and require zero failures.
- [x] Commit the approved design and execution checklist.

### Task 2: Commercial-position contract tests

**Files:**
- Create: `tests/site-content.test.mjs`
- Modify: `package.json`

- [x] Write a failing test that reads the source/exported pages and requires `How We Help`, both audience owner routes, `info@flypigai.ca`, and no public `mkhsu2002@gmail.com`.
- [x] Run `npm test -- tests/site-content.test.mjs`; require the expected failure for missing owner routes/navigation and legacy email.
- [x] Add the minimal test script only after the red result.
- [x] Re-run after Tasks 3–5 and require all assertions to pass.

### Task 3: Navigation, homepage and Services owner

**Files:**
- Modify: `components/SiteChrome.tsx`
- Modify: `app/page.tsx`
- Modify: `app/services/page.tsx`
- Modify: `app/zh/services/page.tsx`
- Modify: `public/llms.txt`

- [x] Add `How We Help`/`合作方式` to desktop, mobile and footer navigation.
- [x] Add a homepage commercial bridge without exposing internal content strategy terminology.
- [x] Rewrite `/services` around Edge AI Technology Route & Qualification and Canada Application & Design-In Readiness.
- [x] Rewrite `/zh/services` as the Traditional Chinese commercial gateway.
- [x] Remove first-level local-representation, agency, distribution and deployment-execution claims.
- [x] Run the focused content test and inspect both language outputs.

### Task 4: Audience owner pages and inquiry alignment

**Files:**
- Create: `app/services/canadian-product-teams/page.tsx`
- Create: `app/services/taiwan-technology-companies/page.tsx`
- Create: `app/zh/services/taiwan-technology-companies/page.tsx`
- Modify: `components/ContactForm.tsx`
- Modify: `app/contact/page.tsx`
- Modify: `app/zh/contact/page.tsx`
- Modify: `app/sitemap.ts`

- [x] Add answer-first Canadian product-team service page with visible inputs, deliverables, boundaries and CTA.
- [x] Add English and substantive Traditional Chinese Taiwan technology-company owner pages.
- [x] Align inquiry audience, stage and requested-support values with the two commercial paths.
- [x] Use `info@flypigai.ca` for public fallback copy.
- [x] Add real hreflang only for the English/Traditional Chinese Taiwan-company pair.
- [x] Add the new owner pages to the sitemap with content revision dates.

### Task 5: Physical AI and legacy Insights positioning repair

**Files:**
- Modify: `app/physical-ai/page.tsx`
- Modify: `app/insights/canada-needs-physical-ai-integrators/page.tsx`
- Modify: `app/insights/page.tsx`
- Modify: `app/insights/guides.ts`

- [x] Re-title Physical AI around Canadian deployment readiness and remove claims that FlyPig AI performs deployment, certification or operational support.
- [x] Reframe the Integrators essay so it describes the ecosystem thesis and FlyPig AI's intelligence/qualification role.
- [x] Update legacy market-entry guides to point to the Taiwan-company owner page and product-selection guides to the Canadian-team owner page.
- [x] Preserve existing canonical URLs to avoid discarding indexed equity.

### Task 6: Technology decision pages

**Files:**
- Create: `app/technologies/[slug]/page.tsx`
- Create: `app/technologies/topics.ts`
- Modify: `app/technologies/page.tsx`
- Modify: `lib/technologyTaxonomy.ts`
- Modify: `app/sitemap.ts`

- [x] Write a failing route/content test for `edge-ai-compute`, `embedded-platforms` and `vision-sensing`.
- [x] Implement a typed topic contract with title, answer, criteria, questions, related technologies and CTA audience.
- [x] Render three static owner pages with breadcrumb, CollectionPage/WebPage schema and related Signals.
- [x] Replace generic `/signals#latest` links with distinct topic owner links.
- [x] Add only the three complete pages to the sitemap; leave incomplete taxonomy nodes as page anchors.

### Task 7: Insights Article trust contract

**Files:**
- Modify: `app/insights/guides.ts`
- Modify: `app/insights/[slug]/page.tsx`
- Modify: `app/insights/canada-needs-physical-ai-integrators/page.tsx`
- Modify: `app/sitemap.ts`
- Modify: `scripts/audit-exported-site.mjs`

- [x] Write a failing export-audit test requiring Article image, published/modified Open Graph metadata, BreadcrumbList and visible exact dates.
- [x] Extend Insight records with source/citation data and a truthful revision date.
- [x] Pass the Article metadata object into `makeMetadata` and emit a default owned image.
- [x] Add visible breadcrumb, organization byline, exact dates, source list and contextual owner-page links.
- [x] Use each Insight's actual `dateModified` in the sitemap.

### Task 8: IndexNow and search release tooling

**Files:**
- Create: `scripts/submit-indexnow.mjs`
- Create: `docs/operations/search-release.md`
- Modify: `.env.example`
- Modify: `package.json`

- [x] Write a failing test for canonical-host validation, URL-file parsing and missing-key refusal.
- [x] Implement a script that accepts newline-delimited canonical URLs, rejects foreign hosts and reads `INDEXNOW_KEY` only from the process environment.
- [x] Add a dry-run mode used by CI/local verification; do not commit or print the key.
- [x] Document Google Search Console manual recrawl and Bing AI Performance monitoring.
- [x] Do not add automated high-frequency submission or polling.

### Task 9: Event-delivery backend tests and code

**Files:**
- Create: `functions/_shared/events.ts`
- Replace: `functions/api/contact.ts`
- Create: `functions/api/newsletter/subscribe.ts`
- Create: `functions/api/newsletter/unsubscribe.ts`
- Create: `worker/src/index.ts`
- Create: `worker/wrangler.jsonc`
- Create: `migrations/0001_event_delivery.sql`
- Create: `tests/event-delivery.test.mjs`
- Modify: `components/NewsletterNotice.tsx`
- Modify: `app/privacy/page.tsx`
- Modify: `app/zh/privacy/page.tsx`

- [x] Write failing tests for persistence-before-queue, idempotency, hashed audit, unsubscribe token validation, unsubscribed filtering, per-event replay and missing bindings.
- [x] Implement Pages producer handlers that persist before enqueue and return the stable API contract.
- [x] Implement Queue consumer delivery with permanent D1 idempotency, provider idempotency as secondary protection and non-sensitive audit errors.
- [x] Keep `RESEND_API_KEY` only in the Worker contract.
- [x] Keep newsletter UI as an honest launch notice until both environments are deployed and verified.
- [x] Update privacy disclosures for persisted requests, subscriber state and service-provider processing.

### Task 10: Cloudflare resources and activation gate

**Files:**
- Create after resource provisioning: `wrangler.toml`
- Modify after resource provisioning: `worker/wrangler.jsonc`
- Modify after successful live verification: `components/NewsletterNotice.tsx`

- [x] Create separate dev/prod D1 databases, queues and dead-letter queues through Wrangler/API.
- [x] Apply `0001_event_delivery.sql` and `0002_dead_letter_audit.sql` to dev and production and list applied migrations.
- [ ] Configure Pages preview/production D1 and Queue producer bindings from downloaded project settings.
- [ ] Store `RESEND_API_KEY`, sender, recipient and unsubscribe secrets directly in Worker secret storage; never echo values.
- [ ] Deploy dev consumer and preview Pages build; run controlled contact, subscribe, unsubscribe, duplicate and replay checks.
- [ ] Query dev D1 domain, inbox and audit state.
- [ ] Deploy the same reviewed code/migration set to production only after dev passes.
- [ ] If the provider key is unavailable in Keychain or Worker secret storage, leave the frontend launch notice and do not activate the new API contract.

**Current activation gate (2026-08-29):** the existing Pages `RESEND_API_KEY` is encrypted and cannot be copied, and no Resend key is present in the process environment or checked Keychain service names. Resources and migrations are provisioned, but consumer/Pages deployment remains intentionally inactive until the key is securely injected and dev live tests pass.

### Task 11: Full verification and release

**Files:**
- Modify: `README.md`
- Modify: `docs/superpowers/specs/2026-08-25-site-stabilization-design.md` only for verified status updates

- [ ] Run `npm test` and require zero failures.
- [ ] Run `npm run validate:content`, `npm run typecheck`, `npm run build`, `npm run audit:export`, `npm audit --omit=dev` and `git diff --check`.
- [ ] Inspect the task checklist, staged diff and generated-output status.
- [ ] Commit coherent changes, merge to `main`, push `origin/main` and wait for the matching Pages deployment.
- [ ] Read back `/`, `/services`, both audience pages, three technology pages, `/physical-ai`, representative Insights, sitemap, redirects and raw `/zh` language.
- [ ] Submit changed canonical URLs through IndexNow only when a securely injected key is available.
- [ ] Mark backend tasks complete only when deployed schema, functions, bindings, secret names, live behavior and D1 audit all agree.
