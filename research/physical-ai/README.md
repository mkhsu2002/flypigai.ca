# FlyPig AI Physical AI Thesis & Prediction Engine

## Purpose

This layer sits above the existing Taiwan Industry Signals and Canada Physical AI research. It does not create a third general-purpose news desk.

Its job is to turn accumulated evidence into falsifiable FlyPig AI theses and long-lived Insights research.

## Pipeline

1. Taiwan Industry Signals collects Taiwan supply-side and commercialization evidence.
2. Canada Atlas and Canada-facing monitoring collect Canadian capability, demand and deployment evidence.
3. Global Strategic Signals adds only high-impact global events that materially change the Physical AI stack or a registered prediction.
4. `evidence-tracker.json` deduplicates and links evidence to predictions.
5. `prediction-registry.json` preserves the original prediction, date, confidence, falsifiers and current status.
6. Strong evidence can trigger an update or new article in `Physical AI Goes Modular` after editorial review.

## Evidence rules

Every tracker item should identify geography, date, category, primary source, concise factual summary, prediction effect and publication status.

Effects are `supports`, `weakens`, `neutral`, or `invalidates`. Strength is separate from direction.

Prefer primary official sources. Secondary reporting may be used to discover or contextualize an event, but a major prediction update should seek primary evidence.

Do not treat vendor positioning, forecasts, product roadmaps or market-size estimates as established fact.

## Prediction integrity

Never rewrite an original prediction after evidence arrives. Add evidence and change status or confidence instead.

Every prediction must include at least one falsifier. Predictions without a plausible failure condition are commentary, not tracked forecasts.

Public writing must distinguish:

- Confirmed evidence
- FlyPig interpretation
- FlyPig prediction

## Publication gate

Do not publish an article merely because a new event exists. Publish or materially update an Insights article only when evidence changes a thesis, resolves an important uncertainty, reveals a structural pattern, or creates a defensible new prediction.

Before publication verify factual claims, source-to-claim fit, copyright and media rights, uncertainty language, counter-evidence, and whether the article adds substantive information beyond the existing series.

## Current flagship question

Who becomes the Android of Physical AI?

This question is intentionally broader than a literal operating system. The potential control point could emerge as an OS, middleware/runtime, capability interface, model-plus-runtime stack, skill ecosystem, or another abstraction that makes heterogeneous robot hardware easier to build applications for.
