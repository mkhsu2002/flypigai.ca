# FlyPig AI Positioning, Search and Conversion Hardening Design

**Date:** 2026-08-29

**Status:** Approved through the user's instruction to implement the 2026-08-26 audit recommendations

## 1. Outcome

Make FlyPig AI understandable as one company across the homepage, commercial pages, editorial content, structured data and inquiry flow:

> FlyPig AI is a Canada-Taiwan Edge AI and Physical AI design-intelligence company. It helps Canadian product teams qualify Taiwan technology routes and helps Taiwan technology companies prepare for Canadian applications and design-in conversations.

The release must not imply supplier authorization, engineering sign-off, deployment responsibility, inventory, distribution rights, customer traction or completed design wins without evidence.

## 2. Commercial model

The public commercial model has two owner paths under `/services`:

1. **For Canadian product teams — Edge AI Technology Route & Qualification**
   - Input: product intent, environment, compute, power, vision, sensing, connectivity, certification, lifecycle, cost, volume and timing constraints.
   - Output: requirement brief, architecture options, researched Taiwan technology candidates, fit/risk matrix, unresolved questions and an optional bounded introduction.
2. **For Taiwan technology companies — Canada Application & Design-In Readiness**
   - Input: product capability, reference designs, software support, lifecycle, availability and commercial readiness.
   - Output: Canadian application-fit brief, target organization categories, design-in friction, evidence gaps and a qualified opportunity path.

Market representation, referral, agency, distribution and deployment execution are not first-level offers. They may be described only after a separate evidenced relationship exists.

## 3. Information architecture

- `/` owns the company definition and routes users to research or commercial paths.
- `/atlas` owns Canadian ecosystem and demand context.
- `/Solutions` owns Taiwan supply-side solution paths.
- `/technologies` owns stable design-decision taxonomy.
- `/technologies/[slug]` owns one distinct technology-selection intent per page.
- `/signals` owns current Taiwan product and ecosystem developments.
- `/insights` owns evergreen Canada market, readiness and design-in analysis.
- `/services` owns the commercial engagement model.
- `/services/canadian-product-teams` owns Canadian technology-route qualification.
- `/services/taiwan-technology-companies` and `/zh/services/taiwan-technology-companies` own Taiwan supplier readiness.
- `/physical-ai` remains an educational deployment-readiness framework and does not claim that FlyPig AI deploys or certifies systems.

No new tag, filter, supplier archive or programmatic entity URL becomes indexable in this milestone.

## 4. Content changes

### P0 positioning repairs

- Add `How We Help` to the primary and footer navigation.
- Rewrite `/services` around the two owner paths and explicit deliverables.
- Reframe `/physical-ai` as an educational readiness page with a specific answer-led title and no deployment-service claim.
- Rewrite the company-position paragraph in the opening Integrators essay.
- Align inquiry form audience, stage and support options with the two offers.
- Remove personal Gmail from public error copy.

### P1 owner content

- Add English commercial owner pages for Canadian product teams and Taiwan technology companies.
- Add a substantive Traditional Chinese Taiwan-company owner page.
- Add three technology decision pages: Edge AI compute, embedded platform form factors and vision/sensing.
- Each decision page includes an answer-first summary, comparison criteria, decision questions, related Signals and one appropriate commercial path.

### Insights contract

Insights receive accurate published/modified dates, a visible organization byline, owned default social image, Article image, BreadcrumbList, citations when factual claims depend on external evidence, and contextual links to an owner service or technology page.

No named human review, customer result or certification claim is added without evidence.

## 5. Technical search and answer-engine behavior

- Preserve canonical URLs, existing redirect policy and genuine hreflang pairs.
- Add content-derived sitemap `lastModified` for Insights and dated Atlas content.
- Keep `llms.txt` as a low-cost machine-readable directory but do not treat it as a ranking mechanism.
- Add an opt-in publish-time IndexNow command that submits canonical changed URLs from a file; no provider or search credential is committed.
- Expand the export audit to require the new owner pages, service links, Article dates/images/breadcrumbs and absence of legacy commercial claims.
- FAQ content remains visible for users; FAQ schema is not treated as a primary rich-result strategy.

## 6. Contact and newsletter runtime boundary

The target event-delivery design remains the approved 2026-08-25 stabilization contract:

1. Pages Functions validate and persist the domain record plus immutable event state in D1.
2. Only the persisted event ID is sent to a Queue producer.
3. A separate Queue consumer Worker loads the event, rechecks state, calls Resend and records provider/audit state.
4. `RESEND_API_KEY` exists only on the consumer Worker.
5. Preview/dev and production use separate D1 databases and queues.
6. Recovery runs at most once daily and only requeues persisted pending events.

The frontend must not switch to the new contract until both environments have migrations, producer bindings, consumer code and required secrets, and live audit readback has passed. The existing encrypted Pages secret cannot be read or copied; production activation therefore requires the owner to place the Resend key in the OS Keychain or directly into the consumer Worker secret store.

## 7. Testing and release

- Use Node's built-in test runner for content contracts and Worker logic.
- Write each behavioral test before production code and confirm the expected failure.
- Run typecheck, tests, content validation, static build, export audit, dependency audit and `git diff --check`.
- Deploy a preview first and inspect exported HTML plus core pages.
- After merge to `main`, verify the production commit, live HTML, sitemap, redirects and representative owner/article pages.
- Backend completion additionally requires dev and production migration lists, deployed Worker versions, binding/secret-name readback, controlled event/replay tests and D1 audit evidence.

## 8. Success criteria

1. Every core page describes the same company category.
2. Both paying audiences have an explicit owner page, deliverables and CTA.
3. Technology pages answer real selection questions instead of acting only as taxonomy labels.
4. Insights match the minimum Article trust and metadata contract.
5. Search freshness can be triggered without storing credentials in the repository.
6. No frontend is released against an undeployed backend contract.
7. Production is verified from live behavior rather than inferred from local source.
