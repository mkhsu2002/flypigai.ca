# FlyPig AI

This repository is the official website and product surface for FlyPig AI Canada.

## IDE handoff status

The project is being handed over to the IDE for full technical ownership from this point forward. The IDE should treat this README as the current source of truth for product direction, deployment issues, unfinished work, and implementation priorities.

Do not assume the current production deployment is healthy just because `https://flypigai.ca/` loads. As of 2026-08-25, the custom domain is still serving an older production deployment while newer `main` commits have been queued or not promoted successfully.

### Current repository state

- Repository: `mkhsu2002/flypigai.ca`
- Production branch intended: `main`
- Framework: Next.js 16 App Router
- Deployment target: Cloudflare Pages
- Current Next.js mode: static export via `output: "export"`
- Public domain: `https://flypigai.ca`
- Cloudflare Pages domain: `flypigai-ca.pages.dev`
- Latest handoff-era main commits include:
  - `b1c9c0e` Phase 1 Canada-Taiwan design intelligence repositioning
  - `fe3b857` enable direct publishing policy
  - `ec4ad53` static-export hardening for Industry Signals

### Known deployment problem

Cloudflare Production was still serving old commit `290b197` while newer `main` commits existed. The Cloudflare dashboard showed:

- old production `main 290b197` active
- `b1c9c0e` no deployment available
- `fe3b857` no deployment available
- `ec4ad53` queued
- preview branch `flypig-phase1-repositioning` successfully deployed at a Cloudflare preview URL

Symptoms:

- `https://flypigai.ca/` loads, but may still show the old site
- `https://flypigai.ca/signals` and signal article routes return 404 until the new build is actually promoted
- some visual assets / image presentation may be incomplete or inconsistent

First IDE task is to inspect Cloudflare Pages build settings, production branch, build command, output directory, compatibility with Next.js static export, and deployment logs. Do not continue feature work until the deployment pipeline is deterministic.

## Strategic positioning

FlyPig AI is not intended to be a generic sourcing agent, trade consultant, distributor, or another electronics marketplace.

The working positioning is:

> Canada-Taiwan Edge AI and Physical AI design intelligence.

Strategically, FlyPig should become the intelligence and opportunity layer between Canadian / North American product intent and Taiwan's semiconductor, Edge AI, embedded-computing, sensing, robotics, module, ODM and manufacturing ecosystem.

Long-term concept:

`Product intent -> requirements -> architecture intelligence -> Taiwan technology matching -> technical introduction -> design-in outcome`

The long-term software/data ambition is an AI-native Design Intelligence platform, but the public site must not overclaim current product maturity, customer traction, supplier authorization, design wins, or proprietary data that does not yet exist.

## Website development phases

### Phase 1: credibility and positioning

Goal: make companies on both sides understand FlyPig's role and consider talking to FlyPig.

Site must establish:

- Canadian company identity
- credible understanding of Taiwan Edge AI / Physical AI ecosystem
- vendor-neutral intelligence positioning
- clear Canada and Taiwan entry paths
- strong SEO / AEO / GEO foundations
- useful public research instead of generic marketing copy

### Phase 2: initial supplier authorization and outbound BD

Goal: secure a small number of Taiwan suppliers / products that FlyPig is authorized or welcomed to represent, introduce, or develop opportunities for in Canada.

The website then becomes BD infrastructure with real supplier and technology entity pages.

Important: do not state authorization unless explicit authorization exists.

### Phase 3: two-sided data flywheel

Goal: both Taiwan suppliers and Canadian companies discover FlyPig through search / AI answers and voluntarily submit structured information.

Submission types:

1. Company profile, generally public after review
2. Technology / product profile, public or reviewed-public
3. Project requirement, private by default

The future system should ingest specifications, project needs, BOMs, supplier information and documents, classify confidential data, extract structured entities, respond intelligently, and create public-safe derivative content without exposing project secrets.

Core principle:

> Public intelligence attracts the market. Private opportunity data builds the moat.

## Target information architecture

The intended top-level structure is approximately:

- `/`
- `/canada`
- `/taiwan`
- `/technologies`
- `/signals`
- `/design-routes`
- `/suppliers`
- `/canada-ecosystem`
- `/insights` or `/intelligence`
- `/about`
- `/submit-project`
- `/submit-technology`

Entity routes should eventually support patterns such as:

- `/company/{slug}`
- `/technology/{slug}`
- `/design-route/{slug}`
- `/signals/{slug}`

The existing Atlas and older Physical AI pages may contain reusable content, but the IDE should audit whether they fit the new positioning before preserving them in navigation.

## Current Phase 1 changes already implemented

Recent work added or modified:

- homepage positioning toward Canada-Taiwan Edge AI / Physical AI intelligence
- `/canada` landing page
- `/taiwan` landing page
- `/technologies` intelligence hub
- global SEO metadata
- Organization JSON-LD
- navigation / footer
- sitemap priorities
- Industry Signals prototype
- newsletter signup component
- Resend-backed newsletter API route

Review the actual implementation before assuming quality. The current request is specifically for the IDE to clean up deployment, visual consistency, assets, architecture and production readiness.

## Taiwan Industry Signals

A major content hub should be maintained at:

- `/signals`

Purpose: professionally rewrite and publish important new Taiwan Edge AI, semiconductor, embedded, robotics and Physical AI product / ecosystem developments for a North American audience.

Editorial style:

- English
- professional industry journalist perspective
- original reporting / analysis, not press-release copying
- explain what changed
- explain why it matters for product design / commercialization
- distinguish confirmed facts from implications
- preserve uncertainty
- include official source disclosure at the end
- include newsletter CTA at the bottom

Articles should be published directly to the live site once written. The user prefers reviewing real public webpages rather than drafts or PR-only previews.

### Source database

Primary Google Sheet:

`台灣 Edge AI 消費性電子產品創新雷達 v1`

Spreadsheet ID:

`1s1eimCEtX5wTvB879EoP27HHtWny_y7po7Mo15YUqjA`

Important tab:

`新品事件庫`

Current known event IDs ran from `EVT-2026-0001` through at least `EVT-2026-0021` as of 2026-08-25.

The first prototype article is based on:

- event `EVT-2026-0019`
- MediaTek MT8875 5G Modem-Based IoT Platform
- intended slug: `/signals/mediatek-mt8875-5g-iot-genai`

Current content storage:

`content/industry-signals/*.json`

Current loader:

`lib/industrySignals.ts`

Current dynamic route:

`app/signals/[slug]/page.tsx`

Current Signals index:

`app/signals/page.tsx`

The IDE should verify that this approach works reliably with the final deployment architecture. If static export is retained, all signal paths must be generated correctly. If Cloudflare's recommended Next.js runtime is adopted instead, refactor accordingly rather than patching around static-export limitations.

## Weekly Industry Signals automation

A ChatGPT-side weekly condition-watch automation has been created to monitor `新品事件庫` for new reviewed rows.

Intended behavior:

1. detect event IDs not yet published
2. require non-duplicate row
3. require review status `已初審`
4. require official source URL
5. verify the official source
6. rewrite as original English industry reporting
7. publish directly to `main`
8. source disclosure and newsletter CTA handled by site template

Repository policy file:

`automation/industry-signals-policy.json`

The policy was changed to allow direct publishing after the user requested all finished articles be public for visual review.

The IDE should inspect and normalize this mechanism. If a GitHub Action / server-side workflow is more reliable than the current external automation, it may implement one, but preserve the editorial and verification rules above.

## Newsletter and Resend

Newsletter provider: Resend

Sending domain: `flypigai.ca`

Current code expects server-side environment variable:

`RESEND_API_KEY`

There is also an example sender variable in `.env.example`.

Important security rule:

- never commit the API key into GitHub
- never expose it through `NEXT_PUBLIC_*`
- configure it as a Cloudflare / deployment environment secret

A Resend key was supplied privately during project setup. It must not be copied into README, source code, logs, public issues or commits. If the IDE cannot retrieve the deployment secret, ask the user to configure / provide it securely in the deployment environment.

Current newsletter component:

`components/NewsletterSignup.tsx`

Current API implementation:

`app/api/newsletter/subscribe/route.ts`

Because the site currently uses `output: "export"`, the IDE must explicitly verify whether this API route can actually run in the chosen Cloudflare Pages architecture. This is a likely architectural inconsistency. Either move subscription handling to a Cloudflare Function / Worker or migrate the site to a deployment mode that supports Next.js server routes.

This issue must be resolved before calling newsletter signup production-ready.

## SEO / AEO / GEO requirements

SEO, AEO and GEO should be treated as one authority architecture, not three separate content programs.

Technical baseline:

- crawlable HTML
- sitemap
- canonical URLs
- hreflang where bilingual pages genuinely exist
- Googlebot access
- Bingbot access
- OAI-SearchBot access
- structured data
- clear entity relationships
- strong internal linking
- descriptive URLs
- trustworthy source citations

Structured data priorities:

- Organization
- Article / NewsArticle
- Product where appropriate
- BreadcrumbList
- FAQ only when real FAQ content exists
- Dataset where a genuine public dataset exists

Do not generate low-value SEO filler. The content should answer real technical and commercial questions such as:

- which Taiwan Edge AI platforms fit a robotics architecture
- Taiwan alternatives for specific hardware stacks
- processor / module comparisons
- design routes for inspection robots, AMRs, drones or machine vision
- non-PRC / trusted supply-chain options
- Taiwan supplier capability mapping

## Design-route content

A future high-value content type is Reference Design Routes.

Examples:

- outdoor inspection robot
- indoor AMR
- AI machine-vision camera
- autonomous drone payload
- low-power surveillance node
- agricultural robot
- warehouse vision system
- Edge VLM box
- remote inspection drone
- industrial AI gateway

Each page should cover:

- system requirements
- architecture alternatives
- compute
- vision
- sensing
- connectivity
- power
- environmental constraints
- Taiwan technology candidates
- trade-offs
- potential design partners

These pages should serve product intelligence, sales collateral, SEO, AEO and GEO simultaneously.

## Data architecture direction

Long-term graph layers:

1. Company Graph
2. Technology Graph
3. Application Graph
4. Opportunity Graph

The first three can be largely public.

The Opportunity Graph is private and potentially the highest-value proprietary layer.

A future submission pipeline should conceptually be:

`submission -> confidentiality classification -> private store -> AI extraction -> structured entities -> validation -> public-safe derivative -> optional publication`

Never automatically publish client project details, BOMs, volume, target launch, pricing, customer identities, confidential architecture or uploaded technical documents.

## Canada-Taiwan strategic context

FlyPig is intentionally being developed as a Canadian technology / intelligence company rather than merely a trade intermediary.

A strategic milestone under monitoring is Canadian government R&D partnering activity with Taiwan in autonomous systems, robotics, unmanned systems, Edge AI and related technology areas.

Earlier research identified a planned `Canadian Autonomous & Robotic Technologies R&D Partnering Delegation to Taiwan` for November 2026, but it later disappeared from the current official IPP mission list without an explicit cancellation notice.

A later official mission appeared for January 25-28, 2027:

`Canadian Dual-Use Unmanned Technologies R&D Partnering Delegation to Taiwan`

This remains strategically relevant.

General Innovation Partnership Program qualification logic observed:

- Canadian incorporated for-profit SME
- generally <=500 FTE
- technology nearing commercialization
- seeking international co-innovation / co-development
- owns or co-owns the IP being presented
- has capacity to support the project
- pure trade consulting services are generally out of scope

Therefore FlyPig should continue building genuine proprietary technology / data / workflow IP, not present itself solely as a Canada-Taiwan intermediary.

## Immediate IDE priorities

Work in this order.

### P0: restore deterministic production deployment

1. inspect Cloudflare Pages project settings
2. confirm production branch is `main`
3. inspect latest Cloudflare build logs
4. confirm build command and output directory
5. decide whether static export is still appropriate
6. fix any Next.js / Cloudflare architectural mismatch
7. ensure `main` automatically deploys to production
8. verify custom domain points at newest successful production deployment
9. verify `/`, `/canada`, `/taiwan`, `/technologies`, `/signals`, and the first signal article
10. verify mobile layout and missing assets

Do not proceed until production deploy is reliable.

### P1: visual and content QA

- audit homepage visual hierarchy
- restore / add appropriate imagery where needed
- avoid empty or broken image slots
- keep a credible B2B technology-intelligence look
- audit English copy for clarity and overclaiming
- make navigation coherent
- check responsive behavior
- eliminate inconsistent legacy positioning

### P2: complete Industry Signals MVP

- make `/signals` archive production-safe
- make signal article URLs stable
- validate NewsArticle schema
- make source attribution visually clear
- newsletter CTA at article bottom
- configure Resend securely
- resolve newsletter backend architecture
- after first article visual QA, backfill all existing eligible rows in `新品事件庫`

### P3: two-sided intake

Build structured:

- `/submit-project`
- `/submit-technology`

Project submissions must be private by default.

Technology submissions should support future entity-page publishing after review.

### P4: bilingual consistency

Existing `/zh` pages may reflect legacy positioning. Audit and update only after English IA and production deployment are stable.

### P5: authority-content expansion

Begin Reference Design Routes and supplier / technology entity pages only after deployment and core site architecture are stable.

## Working principles for the IDE

- prefer fixing root architecture over adding deployment patches
- do not invent customers, suppliers, authorization, metrics or partnerships
- do not publish confidential project data
- do not commit secrets
- completed editorial articles should normally be published directly so the user can inspect the real webpage
- do not create unnecessary PR review friction for normal content publishing unless the change is infrastructure-sensitive
- major infrastructure, privacy, payment, irreversible data or production-risk changes should be surfaced before execution
- preserve the site's role as a future data / intelligence product, not merely a corporate brochure

## Definition of a healthy next milestone

The handoff is considered stabilized when:

- `main` deploys automatically and predictably to Cloudflare production
- `flypigai.ca` reflects the latest `main`
- no broken core routes
- no obvious missing assets
- first Industry Signal article is publicly viewable
- `/signals` archive works
- newsletter subscription has a valid server-side execution path
- site clearly communicates the Canada-Taiwan Edge AI / Physical AI intelligence positioning

Once this is achieved, proceed into supplier entity pages, design routes, structured intake and content-scale automation.
