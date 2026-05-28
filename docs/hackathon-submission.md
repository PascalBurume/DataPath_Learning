# DataPath Learning — USAII Global AI Hackathon 2026

Submission-prep workbook. Drop sections into the Devpost form, pitch video script, and README as marked. Targets the **Undergraduate — AI for Life & Work** track.

---

## 1. One-sentence pitch

> DataPath is the first offline-first data-science curriculum where the AI tutor, the notebooks, and the assessments all run on the learner's laptop — in English, French, and Swahili — so a career on-ramp into DS no longer depends on bandwidth, a credit card, or a cloud account.

Use as Devpost **tagline**.

---

## 2. Problem (Criterion 1 — reframe)

**Open with a person, not a statistic.**

> Aïcha is a second-year computer-science student in Kinshasa. She wants to learn data science. Coursera buffers, ChatGPT charges in USD she can't easily pay, and the campus Wi-Fi drops twice an hour during load-shedding. Her textbook is in English; she reasons in French and Lingala. Every existing path assumes a learner who is online, English-fluent, and has a tutor she can ask when she gets stuck.
>
> Aïcha is not an edge case. The World Bank estimates 2.6 billion people are still offline or on intermittent connections, and the largest growing pools of CS students are in Francophone and Swahili-speaking Africa, South Asia, and Latin America. The "AI tutor" boom of 2024–2026 has been built almost entirely on hosted cloud models — the exact failure mode for learners like her.
>
> DataPath exists because the data-science career on-ramp should not depend on bandwidth, a credit card, or a cloud account.

**Devpost long-description opener.** Cite the World Bank figure if you can confirm a current source; otherwise drop it and lead with Aïcha alone.

---

## 3. AI reasoning (Criterion 2 — articulate the AI's job)

**The tutor's job, in one sentence:**

> The tutor's job is to surface *misconceptions* before they harden into wrong intuition — not to grade, not to do the homework, and not to replace the textbook.

**Why Gemma 4n specifically:**

- **Small enough** to run on a 16 GB laptop (`gemma4:e2b` ≈ 2.6 GB quantised) — the floor for "fits in a Kinshasa cybercafé"
- **Open-weight** — ships inside our Docker image; no API key, no ToS clickwrap, no usage cap
- **Multilingual** — handles EN/FR/SW out of the box; we steer it with language-specific system headers (see `apps/web/app/api/gemma/chat/route.ts:11`)
- **Big enough for pedagogy** — coherent enough to explain a confidence interval, hold a Socratic exchange, and emit structured `<think>/<answer>` reasoning

**What the AI actually does** (not what it "could"):

| Function | Where in the code |
|---|---|
| Flags 10 named statistical misconceptions inline | `gemma_system_prompt.md` — misconceptions table |
| Refuses help on 14 assessed cells | `[AI-OFF]` table in system prompt |
| Emits visible reasoning trace before answer | `<think>/<answer>` envelope in `gemma/chat/route.ts:50–62` |
| Streams multilingual replies (EN/FR/SW) | `LANG_HEADERS` in `gemma/chat/route.ts:11–14` |
| Degrades gracefully when Ollama is down | Deterministic fallback at `gemma/chat/route.ts:106–125` |
| Logs every interaction for learner reflection | `AI_USE.md` reminder + Prisma audit table |

Use this table inside the Devpost long description, *not* the architecture answer.

---

## 4. Solution design (Criterion 3 — architecture diagram + narrative)

### 4.1 ASCII diagram (paste into README and Devpost)

```
┌──────────────────────── learner's laptop (offline boundary) ────────────────────────┐
│                                                                                     │
│   ┌──────────────┐   HTTPS    ┌──────────────────┐   NDJSON   ┌──────────────────┐  │
│   │   Browser    │ ─────────▶ │  Next.js 15      │ ─────────▶ │  Ollama          │  │
│   │  (React UI)  │ ◀───────── │  /api/gemma/chat │ ◀───────── │  gemma4:e2b      │  │
│   └──────┬───────┘   stream   └────────┬─────────┘   stream   └──────────────────┘  │
│          │                             │                                            │
│          │ iframe                      │ Prisma                                     │
│          ▼                             ▼                                            │
│   ┌──────────────┐              ┌──────────────┐                                    │
│   │ JupyterLab 4 │              │ SQLite       │   progress, AI-use logs,           │
│   │ (notebooks)  │              │ (Prisma)     │   misconception flags              │
│   └──────────────┘              └──────────────┘                                    │
│                                                                                     │
│   System prompt v3 (13 modules · 27 templates · 10 misconceptions · 14 AI-OFF)      │
│   loaded from disk, language header injected (EN/FR/SW), streamed in                │
│   <think>/<answer> envelope; client renders reasoning pill + markdown answer.       │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘

   No outbound network calls. Privacy is architectural, not promised.
```

### 4.2 Design choices worth defending

- **Containers over pip.** One `docker compose up` instead of debugging Python on a Chromebook in a cybercafé.
- **Two-phase reasoning (`<think>/<answer>`).** The learner sees *why* the tutor said what it said before reading the answer — surfaced as a visible "Thinking…" pill.
- **System prompt as source of truth.** All pedagogical rules (misconceptions, AI-OFF cells, library whitelist) live in one versioned markdown file, not scattered through code.
- **Deterministic fallback path.** If Ollama is down the UI still functions — the learner is told what's wrong and how to fix it, not given a spinner.

---

## 5. Impact (Criterion 4 — the bottleneck, plan to fix)

**This is the lowest-scoring criterion today.** Plan for the next 24 days:

### 5.1 Pilot recruitment (DO THIS WEEK)

Send the message below to two of: a university CS Discord, a WhatsApp group of African DS students, a Twitter/X thread tagging African ML communities (Deep Learning Indaba, Zindi, Masakhane).

> **Hi — quick ask.** I'm submitting an offline-first data-science learning tool to the USAII Global AI Hackathon (judging June 22–25). It runs locally on a laptop with a small AI tutor in EN/FR/SW — no internet needed once installed. I need **5 learners** to try one lesson before June 18 and tell me what broke. 30–45 minutes of your time, screen recording optional, attribution optional. DM me if interested. — Pascal

### 5.2 Evidence to capture from each pilot

- One screen recording (Loom, OBS, or phone-pointed-at-laptop is fine)
- One written quote: *what they tried to learn, what worked, what broke*
- One before/after artefact: a quiz answer or a misconception caught by the tutor
- Language used (EN/FR/SW) and connectivity context ("4G dropped twice during the session")

### 5.3 The "decision value" sentence

After pilots, write one sentence of the form:

> *"After M5, N of 5 learners correctly identified effect size as the right metric instead of p-value — a misconception 4 of 5 held before the lesson."*

That single sentence is worth more than a paragraph of claims.

---

## 6. Responsibility (Criterion 5 — already strong, polish the framing)

**Lead with architecture, not aspiration.**

> Privacy is architectural, not promised. There is no outbound network call from the learner's machine — Gemma runs locally via Ollama, notebooks run locally in JupyterLab, the database is SQLite on disk. Even if we wanted to exfiltrate data, the architecture wouldn't let us.

**Honest limits to disclose** (judges reward calibrated honesty):

1. **Gemma 4n hallucinates.** Defence: 10 named misconceptions are flagged inline; 14 `[AI-OFF]` cells refuse AI help on the assessments that matter most; textbook page anchors are cited and **never invented** (system-prompt rule: fall back to chapter-only when page can't be verified).
2. **Local AI can be slow on low-end hardware.** Defence: `gemma4:e2b` quantised runs on 8 GB RAM; we ship a smaller-model variant for older machines.
3. **The tutor is not a teacher.** Defence: every substantive answer ends with a Socratic prompt and a reminder to log the interaction in `AI_USE.md`. The textbook is the authority; the tutor is the navigator.
4. **English-language bias in the base model.** Defence: explicit language-priority system headers force full FR/SW output including reasoning trace; pilots cover all three languages.

---

## 7. The three required design answers (final, character-budgeted)

### 7.1 AI Architecture Explanation (≤600 chars)

> DataPath runs Gemma 4n locally via Ollama — no cloud API. A Next.js 15 backend authenticates the learner, loads a versioned system prompt (13 modules, 27 prompt templates, 10 misconception flags, 14 AI-OFF cells), injects lesson context + language (EN/FR/SW), and streams Ollama's reply as NDJSON in a `<think>/<answer>` envelope the client renders as a reasoning pill + markdown answer. JupyterLab runs in a sibling Docker container so notebooks and AI share one offline stack. If Ollama is unreachable, a deterministic fallback keeps the UI alive. Prisma/SQLite stores progress and AI-use logs.

### 7.2 Human-in-the-Loop Design (≤500 chars)

> Every AI reply opens with a visible `<think>` trace so the learner sees the tutor's reasoning before accepting the answer. 14 lessons across M3–M13 are marked `[AI-OFF]` — the tutor refuses help on CLT sims, CI interpretation, Cohen's d, pipeline assembly, time-zone reasoning, privacy design, and agent-output verification, forcing the learner to reason unaided. Every substantive answer ends with a prompt to log what was kept or changed in `AI_USE.md`. 10 misconceptions are flagged inline.

### 7.3 Responsible AI Guardrail (≤500 chars)

> Offline by design: Gemma runs on the learner's machine — no data leaves the device, so privacy is architectural, not promised. The system prompt whitelists 14 open-source libraries and forbids cloud-tool suggestions. 10 misconceptions (p-value, CI, data leakage, look-ahead bias, RAG retrieval, agent verification) are flagged inline. The tutor refuses `[AI-OFF]` cells, cites the textbook as the authority, and never invents page numbers — falling back to chapter-only when a page can't be verified.

---

## 8. Pitch video script (3–5 min)

**0:00 – 0:30 · Aïcha** — open with the narrative from §2. End with: *"DataPath is for Aïcha."*

**0:30 – 1:00 · Problem in numbers** — 2.6B offline, growing CS-student population in low-bandwidth regions, hosted-LLM dependency. Cite source if you have one.

**1:00 – 3:00 · Live demo** *(screen recording, no slides)*:
- Show the app loaded with no internet
- Ask a question about confidence intervals — show the `<think>` pill and the answer
- Switch language to Swahili, ask the same question — show the answer in Swahili
- Open an `[AI-OFF]` cell, ask the tutor, show it refusing
- Trigger the misconception flag (paste "p-value means probability H0 is true")
- Open Ollama logs in a corner to prove it's local

**3:00 – 4:00 · Architecture + responsibility** — show the ASCII diagram from §4.1, narrate the offline boundary, name the AI-OFF + misconception guardrails.

**4:00 – 4:30 · Impact** — pilot quotes, the "decision value" sentence from §5.3.

**4:30 – 5:00 · Roadmap** — Tauri desktop wrapper (v2), React Native companion (v3), school-district pilot. End on Aïcha's name.

---

## 9. Pre-submission checklist (hard gates first)

- [ ] **Team of 2–5 students confirmed** (eligibility — hard block)
- [ ] **Devpost registration submitted by June 6**
- [ ] **AI Readiness Qualifier passed (June 7–10)** — 8-char approval code obtained
- [ ] **Hosted demo live** (Vercel + Fly.io Ollama, judge account seeded)
- [ ] **3 pilot recordings + quotes captured**
- [ ] **Pitch video uploaded** (3–5 min, public link)
- [ ] **Architecture diagram in README**
- [ ] **Three design answers pasted into Devpost form** (§7)
- [ ] **Full tool/data disclosure** completed in the form
- [ ] **Submission filed by June 21, 11:59 PM ET**

---

## 10. What I (Claude) cannot do for you

These are the items only you can execute:

1. Recruit teammates (eligibility blocker)
2. Pass the AI Readiness Qualifier
3. Run actual pilots with real learners
4. Record the pitch video
5. Push the hosted demo to production
6. File the Devpost submission

Everything in §1–§7 is drafted; §8 is a script you can read into a microphone today.
