# FlyPig AI Website Stabilization Design

**Date:** 2026-08-25

**Status:** Approved in conversation

**Scope:** P0 production stabilization, P1 visual/content QA, and the minimum P2 backend work required to make contact and newsletter interactions production-safe.

## 1. Outcome

Stabilize `flypigai.ca` as a credible, deployable Canada–Taiwan Edge AI and Physical AI intelligence website. The release will preserve the current warm editorial visual identity, give Canada and Taiwan equal prominence, keep public content statically exported, and move stateful interactions to a Cloudflare event pipeline with persistent audit evidence.

The release is healthy only when the repository, deployed static files, deployed schema, deployed Worker code, bindings, secrets, and live behavior agree in both preview/dev and production.

## 2. Verified starting point

- The intended production branch is `main` and the deployment target is Cloudflare Pages.
- Local `main` was four commits behind. It was fast-forwarded to `origin/main` at `39e0f65` before this document was written.
- The latest source builds and type-checks, and static generation produces the new Canada, Taiwan, Technologies, Signals, and signal-article pages.
- `flypigai.ca` and `flypigai-ca.pages.dev` currently serve the new Canada–Taiwan positioning and core content routes.
- `POST /api/newsletter/subscribe` is not deployed and returns 404 because a Next.js route handler cannot be emitted as a callable endpoint by the current static-export deployment.
- The legacy Cloudflare contact function is callable, but it sends directly to Resend, has no durable event/audit record, and hard-codes an old sender domain and personal destination address.
- The mobile header hides the full navigation without providing a menu.
- The site has no favicon, producing a browser 404.
- The production dependency audit currently reports one high-severity `nanoid` advisory.

## 3. Decisions

### 3.1 Visual direction

Use the approved “preserve and polish” direction:

- retain the warm off-white background, deep ink, muted teal, restrained blue, Georgia display headings, and system sans-serif body copy;
- improve typography, spacing, contrast, focus states, responsive behavior, and component consistency;
- add a favicon, Apple touch icon, and Open Graph image based on the existing FP mark and palette;
- do not introduce decorative stock photography or a wholesale rebrand.

### 3.2 Audience priority

Canada and Taiwan are equal first-class audiences:

- the Canada path starts from product intent, requirements, constraints, and the need for qualified Taiwan technology routes;
- the Taiwan path starts from capability, evidence, target applications, and the need for qualified Canadian opportunities;
- the homepage presents these paths side by side, with neither framed as secondary.

### 3.3 Runtime boundary

Keep Next.js `output: "export"` for public content. Do not migrate the whole site to a dynamic Next.js runtime in this milestone.

Remove the non-functional Next.js newsletter route handler. Same-origin producer endpoints run as Cloudflare Pages Functions. A companion Cloudflare Worker consumes the queue and performs the once-daily recovery scan. Both use explicit D1 and Queue bindings. Provider secrets remain available only to the consumer Worker that calls Resend.

## 4. Information architecture

### 4.1 Primary navigation

The desktop and mobile navigation use one shared route definition:

1. For Canada — `/canada`
2. For Taiwan — `/taiwan`
3. Technology Intelligence — `/technologies`
4. Industry Signals — `/signals`
5. Insights — `/insights`
6. About — `/about`
7. Language switch
8. Primary CTA — `/contact`

The Canada Physical AI Atlas remains reachable from the homepage, contextual links, Insights, footer, and sitemap. It does not compete with the new two-sided gateway in the primary navigation.

### 4.2 Homepage sequence

1. Concise hero explaining FlyPig AI’s current role without claiming a finished SaaS platform.
2. Equal Canada and Taiwan gateway cards.
3. Technology scope and public intelligence explanation.
4. Three-step working method: understand the project, map the technology, qualify the path.
5. Latest Industry Signal and links to Technologies, Signals, Atlas, and Insights.
6. Trust boundary: public intelligence versus private project/opportunity information.
7. Dual CTA for Canadian projects and Taiwan technologies.

Repeated “What is FlyPig AI?” and generic services sections will be consolidated when they restate the same positioning without adding evidence or a distinct user action.

### 4.3 Bilingual behavior

The `/zh` homepage, shared navigation, footer, metadata, and contact surface will use the new Canada–Taiwan positioning. Pages without a real Traditional Chinese equivalent will link to the English page with an `EN` label and correct `lang` semantics; the site will not pretend that a translation exists.

`hreflang` will be emitted only for genuine translation pairs. English-only pages will not point to `/zh` as though it were a page-level translation.

## 5. Frontend component design

### 5.1 Site header and mobile menu

`SiteHeader` owns one shared navigation data structure. Desktop renders the horizontal navigation. Below the responsive breakpoint, a visible menu button opens a labeled navigation panel.

The mobile menu must provide:

- a 44-pixel minimum target size;
- `aria-expanded`, `aria-controls`, and an explicit accessible name;
- keyboard operation, Escape-to-close, and focus restoration to the trigger;
- language and primary CTA access;
- scroll-safe behavior without clipping the page.

### 5.2 Reusable presentation units

Introduce focused shared units where they remove duplication:

- `AudienceGateway` for the equal Canada/Taiwan entry cards;
- `SectionHeader` for eyebrow, title, and supporting copy;
- `ContentCard` for consistent spacing, heading scale, border, focus, and hover behavior;
- route-data helpers for locale-aware navigation and footer links.

Existing large page files are not broadly refactored unless a shared unit directly serves the stabilized information architecture.

### 5.3 Accessibility and motion

- Add a skip link to the main content.
- Preserve one `h1` per page and a logical heading order.
- Make focus states visible on all links, buttons, form controls, and cards.
- Meet WCAG AA contrast for body copy, muted text, buttons, and dark sections.
- Add only restrained CSS motion and disable it under `prefers-reduced-motion: reduce`.
- Ensure form status messages use `aria-live` and do not rely on color alone.

## 6. Event-driven backend

### 6.1 Endpoints

The static frontend calls these same-origin deployment endpoints:

- `POST /api/contact`
- `POST /api/newsletter/subscribe`
- `POST /api/newsletter/unsubscribe`

The unsubscribe endpoint accepts a signed, expiring token generated for newsletter links. It does not accept an arbitrary email-only request that could silently unsubscribe another person.

The Pages Functions use the D1 binding `FLYPIG_DB`, Queue producer binding `OUTBOUND_EVENTS`, and a Cloudflare rate-limiter binding. The consumer Worker uses `FLYPIG_DB`, Queue consumer binding `OUTBOUND_EVENTS`, and dead-letter queue `OUTBOUND_EVENTS_DLQ`.

### 6.2 Processing sequence

1. Validate method, content type, request origin, size, field lengths, email syntax, honeypot, and rate limit.
2. Read or create the request’s idempotency key.
3. In a D1 transaction, persist the domain record and an immutable event/audit record.
4. Enqueue only the persisted event ID; do not place secrets or full contact payloads in Queue messages.
5. Return `202 Accepted` after persistence and enqueueing.
6. The Queue consumer loads the event from D1, re-checks subscriber state where relevant, calls Resend, and records provider ID and final state.
7. Automatic Queue retries handle transient failures. Exhausted items move to a dead-letter queue and remain visible in D1 audit state.

The primary flow is event-driven. A once-daily recovery job re-enqueues persisted `pending` events that were not queued because of a transient boundary failure. No minute-level polling is allowed.

### 6.3 Storage model

Use a migration-managed D1 schema with these responsibilities:

- `subscribers`: normalized email, subscription status, consent source/time, unsubscribe time, created/updated times;
- `contact_requests`: request ID, submitted fields, locale, source metadata, created time, and current handling state;
- `event_inbox`: immutable event identity, event type, idempotency key, domain-record reference, processing state, attempt count, provider message/contact ID, non-sensitive error code, and timestamps;
- `event_audit`: append-only state transition records linked to the event.

Unique constraints on normalized subscriber email and idempotency key prevent duplicate effects. Contact submissions use a client-generated idempotency key that is retained across a retry of the same submission.

### 6.4 Provider and configuration boundary

- `RESEND_API_KEY` exists only in the Queue consumer Worker environment.
- `NEWSLETTER_FROM` and `CONTACT_FROM` use the verified `flypigai.ca` domain.
- `CONTACT_TO` is deployment configuration, not a hard-coded source string.
- `UNSUBSCRIBE_SECRET` exists only in the deployment environment.
- No provider key is committed, exposed via `NEXT_PUBLIC_*`, stored in Codex automation, or passed through GitHub runners.

### 6.5 API contract

All endpoints return JSON shaped as:

```json
{
  "ok": true,
  "status": "accepted",
  "message": "Your request has been received."
}
```

Stable public statuses are `accepted`, `already_subscribed`, `unsubscribed`, `invalid`, `rate_limited`, and `unavailable`. Internal provider details, stack traces, record identifiers, and full PII are never returned.

- Validation failures return 400 or 422 and preserve the form content in the client.
- Rate limiting returns 429 with a retry hint.
- A persistence failure returns 503 because the event was not safely accepted.
- A provider failure after persistence does not ask the user to submit repeatedly; the event remains retryable and auditable.

### 6.6 Invocation estimate

There is no primary polling. The design incurs approximately one ingress invocation and one consumer invocation per real event, plus provider retries when necessary. The daily recovery job adds at most 30 or 31 executions per month. At 500 combined contact/subscription events per month, the expected baseline is approximately 1,031 function/worker executions plus exceptional retries, with at most 31 potentially empty recovery runs.

## 7. Content and trust rules

- Preserve the new Canada–Taiwan Edge AI and Physical AI intelligence position.
- Do not claim supplier authorization, customer relationships, proprietary data, design wins, or platform maturity without evidence.
- Keep Industry Signals source attribution visually clear and use official sources first.
- Keep project requirements, customer identities, BOMs, pricing, volume, architecture, and uploaded documents private by default.
- Update privacy content to disclose form storage, processing purpose, subscriber state, service providers, and correction/deletion contact paths.

## 8. Deployment design

### 8.1 Source and build

- `main` is the only production source branch.
- Cloudflare Pages builds the static site with the documented command and serves `out/`.
- The Pages/Worker configuration, D1 migrations, Queue bindings, secrets, and environment names are versioned or documented without secret values.
- The non-functional Next server route is removed so the build output cannot imply an API that does not exist.

### 8.2 Environment synchronization

Before production release, verify individually:

- the implementation commit is on the intended branch;
- preview/dev D1 migrations are applied;
- production D1 migrations are applied;
- preview/dev Functions/Workers and Queue consumers are deployed;
- production Functions/Workers and Queue consumers are deployed;
- both environments contain the expected binding and secret names;
- the frontend contract matches the deployed endpoint contract;
- custom domain and Pages domain serve the intended build;
- live audit rows prove contact, subscribe, unsubscribe, duplicate, and retry behavior.

## 9. Failure handling

- Invalid input produces actionable localized messages without losing entered data.
- Duplicate subscription is a safe, user-friendly success state.
- Resend/network failures update the persisted event and enter automatic retry.
- Permanent failures enter dead-letter state with a non-sensitive reason code.
- A protected replay operation can requeue a specific failed event without creating a new domain action.
- Console and Worker logs contain event IDs and reason codes, not full form bodies or secrets.
- The UI gives a deterministic unavailable state if the persistence boundary is down.

## 10. Verification and release gates

### 10.1 Local

- clean dependency install;
- dependency audit with no unresolved high-severity production advisory;
- TypeScript typecheck;
- production static build;
- automated internal-link and exported-route check;
- contract tests for validation, idempotency, subscriber state transitions, signed unsubscribe tokens, and retry state transitions;
- desktop and 390-pixel mobile rendering checks;
- keyboard, focus, heading, reduced-motion, and console-error checks.

### 10.2 Preview/dev

- apply the actual D1 migration;
- deploy the actual producer endpoints and Queue consumer;
- verify bindings and secret names;
- submit non-delivery smoke-test events using a designated test address;
- query D1 to confirm domain and audit writes;
- verify queue consumption, duplicate handling, unsubscribe, and one controlled failure/retry;
- inspect all core routes and the signal article on desktop and mobile.

### 10.3 Production

- deploy the same reviewed commit and migration set;
- verify `/`, `/canada`, `/taiwan`, `/technologies`, `/signals`, the first signal article, `/atlas`, `/insights`, `/contact`, `/zh`, `robots.txt`, `sitemap.xml`, favicon, and Open Graph image;
- verify a controlled contact event and subscription state through the public domain;
- read back D1 audit evidence and provider response IDs without exposing them publicly;
- confirm `flypigai.ca`, `flypigai-ca.pages.dev`, deployed code, deployed schema, and live behavior are consistent.

No release is complete based only on a local build or a successful HTML deployment.

## 11. Explicit non-goals

- Migrating the whole site to OpenNext or a dynamic Next.js runtime.
- Building the full supplier, company, technology, design-route, or opportunity graphs.
- Backfilling every eligible Industry Signal.
- Building a full broadcast authoring system.
- Automatically publishing confidential project data.
- Claiming commercial relationships or platform capabilities that have not been verified.

## 12. Acceptance criteria

The milestone is accepted when:

1. the full site deploys reproducibly from `main`;
2. all core public routes render without broken internal links or missing essential assets;
3. desktop and mobile navigation expose the same destinations;
4. the homepage presents Canada and Taiwan as equal paths;
5. English and Traditional Chinese surfaces no longer contradict the strategic position;
6. newsletter subscribe/unsubscribe and contact submission use deployed event-driven endpoints;
7. events are persisted before provider processing and have durable audit, retry, and idempotency evidence;
8. production and preview/dev schema, functions, bindings, secrets, and frontend contracts are verified;
9. no high-severity production dependency advisory remains unresolved;
10. public live readback confirms the intended build and behavior.
