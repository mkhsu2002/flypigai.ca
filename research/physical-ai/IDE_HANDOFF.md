# FlyPig AI Physical AI Pipeline — IDE Handoff

Last reviewed: 2026-09-12
Owner repo: `mkhsu2002/flypigai.ca`
Primary public site: `https://flypigai.ca/`

## 1. Purpose

This document is the operational handoff for the FlyPig AI Physical AI research and publishing system.

The system has two different speeds and they must remain separate:

1. `Industry Signals` is the higher-frequency evidence/news layer.
2. `Physical AI Thesis & Prediction Engine` is the lower-frequency analysis/prediction layer.

Do not collapse them into one generic news pipeline.

The flagship research question is:

> Who becomes the Android of Physical AI?

The working thesis is that Physical AI may enter a long hardware build-out period, while durable control points increasingly emerge in common runtimes, capability interfaces, robot skills, agent/application layers and operating data. This is a hypothesis to test, not a conclusion to protect.

## 2. Source-of-truth files

Always read these before changing behavior:

- `automation/industry-signals-policy.json`
- `automation/industry-signals-audit-policy.json`
- `research/physical-ai/README.md`
- `research/physical-ai/evidence-tracker.json`
- `research/physical-ai/prediction-registry.json`
- `content/industry-signals/*.json`

The first two files govern Industry Signals publication and risk control.
The three files under `research/physical-ai/` govern evidence selection, prediction integrity and publication gating.

## 3. System architecture

```text
Taiwan supplier / product monitoring ───────┐
                                            │
Canada Physical AI / industry monitoring ──┼──> Industry Signal event pools
                                            │
Global strategic monitoring ────────────────┘
                                                   │
                                                   ▼
                                          Source verification
                                                   │
                                                   ▼
                                         Dedup + relevance gate
                                                   │
                   ┌───────────────────────────────┴───────────────────────────────┐
                   │                                                               │
                   ▼                                                               ▼
         Industry Signals publishing                                   Thesis significance test
                   │                                                               │
                   ▼                                                               ▼
      `content/industry-signals/*.json`                           `evidence-tracker.json`
                   │                                                               │
                   ▼                                                               ▼
          Pre/post publication audit                               `prediction-registry.json`
                   │                                                               │
                   ▼                                                               ▼
           flypigai.ca/signals/*                                Confidence / status update
                                                                                  │
                                                                                  ▼
                                                                     Insights publication gate
                                                                                  │
                                                                                  ▼
                                                              Physical AI Goes Modular series
```

## 4. Existing evidence collectors

### 4.1 Taiwan collector

Purpose:
- Monitor Taiwan Edge AI and consumer-electronics source suppliers.
- Prioritize new chips, modules, sensors, development boards, SDKs, production announcements and product launches.
- Exclude duplicates and old news.

Current Google Sheet workbook:
- `台灣 Edge AI 消費性電子產品創新雷達 v1`

Important tabs currently referenced by automation:
- `供應商來源庫`
- `新品事件庫`

Rules:
- Prefer official supplier sources.
- Record source, date, model/product, supply status and significance.
- Only reviewed rows may progress to public publishing.

### 4.2 Canada collector

Purpose:
- Monitor Canadian Physical AI, robotics, autonomous systems, drones, AI hardware, Edge AI, advanced manufacturing, AI vision, embedded software, procurement and commercialization.
- Prefer events with concrete commercial implications: launches, deployment, production readiness, design wins, supplier/technology partnerships, manufacturing expansion, named procurement demand, RFP/RFSA, funded commercialization, SDK/BSP/security certification and roadmap changes.

Current Google Sheet workbook:
- `台灣 Edge AI 消費性電子產品創新雷達 v1`

Important tabs currently referenced by automation:
- `加拿大 Industry Signals 來源庫`
- `加拿大 Industry Signals 事件庫`

The Canadian collector may also mark high-value Taiwan/Canada intersections as `Cross-border Match Candidate`.

### 4.3 Global Strategic Signals

This is not a third general-purpose news desk.

Only add a global event when it materially affects one or more of:
- Physical AI stack architecture
- platform control points
- reference robots / reference designs
- robot OS / middleware / runtime
- robot foundation models
- edge compute architecture
- robot skills / capability interfaces
- ODM / reference robot supply chain
- a registered FlyPig prediction

Examples that currently qualify include NVIDIA reference humanoid architecture, Arm Robotics Capability Framework, Qualcomm/NEURA runtime plans, AmbiOS skill licensing and Skild generalist robot intelligence.

## 5. Industry Signals eligibility and publishing logic

The repo policy is authoritative.

Current requirements:
- Source row must be reviewed.
- Required review status: `已初審`.
- Official source URL is mandatory.
- Duplicate article must not already exist under `content/industry-signals`.
- Article is written in `en-CA`.
- Editorial mode is independent industry reporting, not translated PR copy.
- Pre-publish risk audit is mandatory.

### Article content must answer

- What changed?
- Why does it matter to Edge AI / Physical AI / advanced manufacturing?
- What is the commercial or design-in implication?
- What remains unresolved?
- What is the concise FlyPig take?

### Never invent

- pricing
- MOQ
- lead time
- availability
- benchmark results
- partnerships
- customers
- shipment status
- commercial maturity

Roadmap, preview, sample, demonstration and production status must remain distinct.

## 6. Industry Signals article schema

Canonical storage:

`content/industry-signals/<slug>.json`

A current article normally contains fields such as:

- `eventId`
- `slug`
- `publicationStatus`
- `audit`
- `sourcePublishedAt`
- `publishedAt`
- `modifiedAt`
- `supplier`
- `category`
- `title`
- `seoTitle`
- `socialTitle`
- `seoDescription`
- `dek`
- `summary`
- `keyFacts`
- `whyItMatters`
- `reporting`
- `flypigTake`
- `productStatus`
- `openQuestions`
- `canadaRelevance`
- `author`
- `relatedSignals`
- `relatedTechnologies`
- `corrections`
- `sourceName`
- `sourceUrl`
- optional supporting source URLs
- `sourceNote`
- `heroVisual`

Do not change the schema casually. Inspect current published files first and preserve renderer compatibility.

## 7. Risk and audit policy

Risk levels:

### Low
Claims are supported by official sources, uncertainty is preserved, media rights are documented and no misleading commercial implication is created.

Action:
- Keep public.
- Record audit metadata when audited.

### Medium
Examples:
- vendor-only benchmark claim
- source conflict
- incomplete availability data
- ambiguity that can be managed with explicit attribution

Action:
- May remain public only when attribution and uncertainty are explicit.
- Set audit action to `highlight` when applicable.

### High
Examples:
- materially unsupported factual claim
- fabricated or broken source provenance
- false price / availability / partnership / customer / benchmark claim
- misleading endorsement or affiliation
- unauthorized media use
- close press-release paraphrase creating copyright/reputation risk

Action:
- Immediately set `publicationStatus=hold`.
- Add high-risk audit metadata and concise findings.
- Do not publicly render until corrected.

## 8. Evidence Tracker rules

File:

`research/physical-ai/evidence-tracker.json`

The Evidence Tracker is not a mirror of all Industry Signals.

Only promote a signal into this tracker when it adds meaningful information to a registered prediction or the Physical AI platform thesis.

Required concepts per evidence record:
- stable evidence ID
- event date
- optional tracker-added date
- geography
- category
- subject
- source type
- official/primary source URL
- concise factual summary
- linked prediction IDs
- direction: `supports`, `weakens`, `neutral`, or `invalidates`
- strength, separate from direction
- publication status

### Deduplication

If the event already exists as a Taiwan or Canada Industry Signal, do not create a second global news article.
Reference the existing signal as evidence.

Global Strategic Signals may create a new tracker item directly when no regional collector already represents the event.

## 9. Prediction Registry rules

File:

`research/physical-ai/prediction-registry.json`

Current core prediction family includes:
- Physical AI develops an Android-like common layer.
- Reference robots / ODM-like platforms reduce the entry barrier.
- Differentiation migrates upward as hardware modularizes.
- Robot skills/capability primitives become reusable application units.

Non-negotiable integrity rule:

> Never rewrite the original prediction text or original prediction date after evidence arrives.

Instead update:
- linked evidence
- confidence
- status
- rationale

Every prediction must have at least one falsifier.
A statement without a plausible failure condition is commentary, not a tracked forecast.

## 10. Evidence interpretation protocol

Every weekly iteration must explicitly separate:

### Confirmed evidence
What first-party or high-quality evidence directly establishes.

### FlyPig interpretation
What the evidence suggests about market structure, platform control, business model or architecture.

### FlyPig prediction
What FlyPig expects to happen next and what would falsify it.

Counter-evidence is mandatory.
The engine must actively search for evidence that weakens existing FlyPig views rather than only collecting confirmation.

## 11. Insights publication gate

Do not create or update an Insights article merely because a news event exists.

A publication or substantial article update is justified only if new evidence:

1. changes an existing thesis;
2. resolves an important uncertainty;
3. reveals a structural pattern;
4. creates a defensible new falsifiable prediction.

Before publication verify:
- source-to-claim fit
- factual accuracy
- primary-source quality
- copyright / close-paraphrase risk
- image/media rights
- trademark/endorsement ambiguity
- uncertainty wording
- counter-evidence
- substantive depth beyond prior articles

Flagship series public route:

`https://flypigai.ca/insights/physical-ai-modularization`

A normal product/news update belongs in Industry Signals, not automatically in the Insights series.

## 12. Current ChatGPT scheduled tasks related to this system

Important: these schedules are currently ChatGPT Scheduled Tasks and are external runtime state. They are not defined by the Git repository.

### A. Taiwan Hardware New Product Radar

Task title:
- `台灣硬體新品雷達`

Task ID:
- `6a74bda96c4c81919936013a323ea6ad`

Current mode:
- condition watch
- recurring daily

Responsibility:
- populate/update Taiwan supplier/event evidence in the Google Sheet
- notify only on substantive changes

### B. Canada Industry Signals Radar

Task title:
- `加拿大 Industry Signals 雷達`

Task ID:
- `6a95d00933b08191ae80225b8374e0e3`

Current mode:
- condition watch
- recurring daily

Responsibility:
- monitor Canadian official sources
- write validated events into `加拿大 Industry Signals 事件庫`
- identify cross-border match candidates

### C. Taiwan Industry Signals publisher

Task title:
- `FlyPig Industry Signals`

Task ID:
- `6a8dd75d2eec81919e0ca01518fb4d95`

Current mode:
- condition watch
- weekly Monday cadence

Responsibility:
- read reviewed Taiwan rows
- verify official sources
- perform pre-publish risk audit
- generate original English reporting
- create structured JSON under `content/industry-signals`
- commit eligible output to `main`

### D. Canada Signals publisher

Task title:
- `Canada Signals Publish`

Task ID:
- `6a95d4192b7481918f21fec7d0f541da`

Current mode:
- flexible schedule
- daily, current nominal start time 09:00
- exactly one eligible Canadian Industry Signal per run

Responsibility:
- publish the oldest eligible reviewed Canadian event not already represented in repo
- verify official sources
- run risk audit
- publish one English article to `main`
- verify live rendering

### E. Industry Signals recurring audit

Task title:
- `Industry Signals Audit`

Task ID:
- `6a95be6718308191afcb7bdc26d6b47c`

Current mode:
- condition watch
- daily around 08:00

Responsibility:
- audit newly added/materially changed `content/industry-signals/*.json`
- verify official sources
- detect factual, provenance, copyright, media-rights, trademark and misleading-claim risks
- automatically set `publicationStatus=hold` on high risk

### F. Physical AI Prediction Engine

Task title:
- `Physical AI Prediction Engine`

Task ID:
- `6a9c8a415dfc8191bf7605f2cb42373e`

Current schedule state recorded by ChatGPT:

```ics
BEGIN:VEVENT
DTSTART:20260907T130000Z
RRULE:FREQ=WEEKLY;BYDAY=SA;BYHOUR=6;BYMINUTE=0;BYSECOND=0
END:VEVENT
```

Timezone metadata:
- `America/Vancouver`

Current responsibility:
1. inspect Taiwan and Canada collectors first;
2. avoid duplicate collection/publication;
3. add only material Global Strategic Signals;
4. update `evidence-tracker.json`;
5. update prediction confidence/status without rewriting original prediction text/date;
6. inspect counter-evidence and falsifiers;
7. update the Physical AI Insights series only when the publication gate is met;
8. report new evidence, prediction changes, article changes and watchlist items.

## 13. Recommended execution order

For a full cycle, IDE/Codex should conceptually run in this order:

```text
1. Taiwan collector
2. Canada collector
3. Dedup / normalize event pools
4. Taiwan + Canada publication eligibility
5. Industry Signals pre-publish audit
6. Publish eligible English Industry Signals
7. Post-publication audit
8. Thesis significance filter
9. Global Strategic Signals supplement
10. Evidence Tracker update
11. Prediction Registry update
12. Counter-evidence / falsifier review
13. Insights publication gate
14. Insights update only if gate passes
15. Build / validation / live verification
16. Final run report
```

## 14. Suggested idempotency rules for IDE implementation

Every automated step should be safe to rerun.

Use stable keys:
- Industry Signal: `eventId` + normalized official source URL + event date
- Evidence Tracker: evidence ID + subject/date/source
- Prediction links: prediction ID + evidence ID
- Insights update: article slug + evidence review date

Before write:
- fetch current `main`
- verify item is not already represented
- preserve existing audit/corrections metadata
- avoid rewriting unrelated files

After write:
- run repo validation/build commands discovered from package scripts/README
- verify generated route
- verify canonical/metadata/source disclosure
- only then consider the run complete

## 15. Failure behavior

Do not force publication when any of the following occurs:
- source unavailable or contradictory on a material fact
- review status missing
- duplicate event uncertain
- high-risk audit finding
- article schema validation failure
- build failure
- live page verification failure
- insufficient evidence to justify Prediction confidence change
- insufficient thesis significance to justify an Insights update

Prefer safe no-op plus a precise blocker.

## 16. Scheduler ownership and migration note

The repo currently stores policies, content and research state, but the active schedules listed above live in ChatGPT Scheduled Tasks.

This creates a split source of truth:

```text
Repo = policy + data + content + prediction state
ChatGPT Scheduled Tasks = timing + runtime prompts
```

For IDE/Codex takeover, the preferred long-term architecture is to migrate scheduling into a version-controlled execution layer, for example:

- Codex automations, if the workflow is intended to run inside Codex; or
- GitHub Actions / another cron runner calling repo scripts and approved APIs/connectors.

Do not run duplicate schedulers in parallel during migration.

Recommended migration sequence:
1. implement each pipeline stage as repo scripts/config;
2. add dry-run mode and idempotency tests;
3. recreate one scheduler at a time in the target runtime;
4. verify one full cycle;
5. pause the corresponding ChatGPT Scheduled Task;
6. record scheduler ownership in this document or a machine-readable scheduler manifest.

## 17. Codex and current ChatGPT schedules

The current schedules are ChatGPT Scheduled Tasks.
They should be treated as a separate automation system from Codex automations.

Therefore the IDE/Codex handoff must not assume that editing this repo will edit, pause or reschedule the existing ChatGPT tasks.

If the goal is full IDE ownership, recreate equivalent schedules in Codex or move them to repo-native scheduling, validate them, then pause the corresponding ChatGPT tasks to prevent duplicate writes/publications.

## 18. Definition of done for IDE takeover

The handoff is complete only when IDE/Codex can demonstrate:

- Taiwan and Canada collection runs are reproducible.
- Google Sheet event selection is deterministic.
- duplicate detection works.
- article generation follows repo policy.
- risk audit can hold high-risk content.
- one-run-one-Canada-article rule is enforced.
- Evidence Tracker accepts only thesis-significant evidence.
- Prediction Registry never mutates original predictions retrospectively.
- counter-evidence/falsifier checks run.
- Insights updates obey the publication gate.
- build and live verification succeed.
- scheduler ownership is explicit and only one active scheduler controls each workflow.

## 19. Immediate next implementation task for IDE

Create a machine-readable scheduler/pipeline manifest under `automation/` that maps each logical job to:

- owner/runtime
- cadence
- source inputs
- output files/tabs
- required policy files
- write permissions
- idempotency key
- failure/hold behavior
- live verification route

Then migrate the six ChatGPT-run jobs above one by one rather than rebuilding the whole system at once.
