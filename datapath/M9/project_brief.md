# Final Project — Capstone

## What you'll build

Choose a real-world dataset and frame an **actionable question** a stakeholder could act on. Build a reproducible, end-to-end analysis notebook that walks from raw data to justified conclusions. Present it in a 15-minute oral defense.

---

## The five questions you must answer before writing a single line of code

Write down your answers before touching any data:

1. **What decision** will this analysis support?
2. **Who is the stakeholder** or end user?
3. **What is the target** and what counts as one unit of analysis?
4. **Which metric** will determine success, and why?
5. **What action** will be taken if the result is strong enough?

If you cannot answer one of these, you are not ready to model.

---

## Problem statement template

Copy this into your notebook's first markdown cell and fill it in:

```text
We are helping [stakeholder] make the decision of [decision].
The analytical objective is to [predict / estimate / rank / describe] [target].
Each row represents [unit of analysis].
Success will be measured with [metric] because [business reason].
If the project succeeds, the stakeholder will use the result to [action].
Key constraints include [timing, fairness, cost, data availability].
```

---

## Required sections

| Section | What it must contain |
|---------|----------------------|
| **Problem statement** | Stakeholder, decision, target, metric, action |
| **Baseline model** | `DummyClassifier` or `DummyRegressor` — report before any tuning |
| **EDA** | At least 3 charts; each slide title is a *claim*, not a topic |
| **Final model** | Explicit improvement over baseline (∆ value and % gain) |
| **Limitations** | 2–3 specific limits: boundary → consequence → next step |
| **Reproducibility** | Clean kernel rerun succeeds; relative paths only; seed fixed |
| **AI Disclosure** | `AI_USE.md` with every Gemma interaction; AI-OFF cells written by you |

---

## Scoring rubric

| Area | Weight |
|------|--------|
| Problem framing — question, metric, baseline | 25 % |
| Analysis quality — EDA, modelling, limitations | 35 % |
| Communication — story structure, chart titles, README | 20 % |
| AI disclosure and academic honesty | 20 % |

---

## Example questions (pick one or bring your own)

- **Bus delays** — predict whether a route-stop-hour is likely to be delayed > 10 min; output a daily risk list for dispatchers
- **Student performance** — identify the features that most predict final exam score; give the tutoring centre a prioritisation rule
- **Air quality** — build a 7-day rolling forecast for PM2.5 in one city; alert the health team when a threshold will be crossed
- **E-commerce returns** — predict which orders will be returned; flag them before shipping for intervention

Any dataset works. Prefer one you can explain and defend in 15 minutes.

---

## AI Disclosure expectations

- Every Gemma prompt must be logged in `AI_USE.md` with the question, the response summary, and whether you accepted or changed it
- Your **AI-OFF cells** must be written entirely by you — Gemma may not draft or revise them
- Oral defense question 8 asks you to walk through your most important AI interaction — be ready

---

## Oral defense structure (15 min)

| Time | What you cover |
|------|----------------|
| 0:00 – 0:02 | Problem + key finding (one sentence each) |
| 0:02 – 0:05 | Key EDA chart — title is a claim, not a topic |
| 0:05 – 0:08 | Baseline vs. final model — explicit improvement number |
| 0:08 – 0:10 | One limitation — boundary, consequence, next step |
| 0:10 – 0:12 | AI use — show `AI_USE.md`, explain one interaction |
| 0:12 – 0:15 | Q&A (instructor questions from the defense guide) |

---

## Checklist before you submit

- [ ] Problem statement uses the template above
- [ ] Baseline model is in the notebook and reported in a table
- [ ] All charts have takeaway titles (not topic titles)
- [ ] Limitations section follows boundary → consequence → next step
- [ ] Notebook reruns clean from a fresh kernel
- [ ] `AI_USE.md` is complete and honest
- [ ] AI-OFF cells are clearly marked and contain your own writing
- [ ] README follows the portfolio template from L9.8
