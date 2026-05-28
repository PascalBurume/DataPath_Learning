# DataPath × USAII Hackathon 2026 — Team Pack

A single page for the team. Bookmark it. Everything you need to coordinate, register, and recruit pilot users lives here.

Companion doc: [`docs/hackathon-submission.md`](./hackathon-submission.md) — the deep workbook (problem narrative, architecture, design answers, pitch script).

---

## 1. The 30-second pitch (memorise this; everyone should be able to say it)

> DataPath is the first offline-first data-science curriculum where the AI tutor, the notebooks, and the assessments all run on the learner's laptop — in English, French, and Swahili. The career on-ramp into data science no longer depends on bandwidth, a credit card, or a cloud account.

When in doubt, say: *"DataPath is for Aïcha — a second-year CS student in Kinshasa whose Wi-Fi drops twice an hour."*

---

## 2. Who does what

We have **24 days to submit (June 21, 11:59 PM ET)** and a **9-day registration window (June 6 cutoff)**. Roles below are a starting split — swap freely.

| Owner | Owns | Time estimate |
|---|---|---|
| **Pascal (technical)** | Hosted demo (Vercel + Fly.io Ollama), pitch video filming, code freeze by June 19, fixing any bugs surfaced in pilots | ~30 hrs |
| **Teammate A (outreach + evidence)** | Pilot recruitment (templates in §5 below), capturing pilot screen recordings, collecting 3 written quotes | ~12 hrs |
| **Teammate B (writing + submission)** | Drafting the 3 design answers (using `hackathon-submission.md §7` as the start), Devpost long description, "What it does" / "How we built it" / "Challenges" / "What we learned" sections | ~10 hrs |
| **Optional Teammate C/D** | Demo testing, pitch video B-roll (clips of the app in EN/FR/SW), translation review of FR/SW lesson cache | ~6 hrs |

**Weekly standup suggestion:** 20-min sync every Saturday at a fixed time. Status format: *what shipped this week, what's blocking, what I'll close by next Saturday.*

---

## 3. Hard deadlines (ET — set calendar reminders today)

| Date | Event | Owner |
|---|---|---|
| **June 6 (Sat)** | Devpost registration closes — **every teammate must register individually**, then we form/join the team | Everyone (individual action) |
| **June 7–10** | AI Readiness Qualifier — 8-char approval code required | One of us takes it, code goes in shared notes |
| **June 14** | Build window opens | Pascal |
| **June 17 (Wed)** | First three pilots completed + recorded | Teammate A |
| **June 19 (Fri)** | Code freeze · pitch video filmed · design answers final | All |
| **June 20 (Sat)** | Submission dry run | All |
| **June 21, 11:59 PM ET** | **Submit** (target morning of June 20) | Pascal hits the button |

---

## 4. Devpost registration — paste-ready copy

Use these verbatim or close to it. Title and tagline are the most space-constrained — every word fights for room.

### Project title (≤ 70 chars)
```
DataPath — offline-first data science, in EN/FR/SW, runs on your laptop
```

### Tagline (≤ 100 chars)
```
The first AI-tutored data-science course that runs without internet, in three languages.
```

### Track
```
Undergraduate — AI for Life & Work
```

### What it does (Devpost long description — paste as-is, tweak voice if you want)
```
DataPath teaches data science to learners who don't have reliable internet, a credit card, or English fluency. The whole stack — Next.js web app, JupyterLab notebooks, and a local Gemma 4n tutor via Ollama — runs in a single `docker compose up` on the learner's machine, available offline in English, French, and Swahili.

It's built around a deliberate pedagogy:
- 13 modules of structured DS lessons, anchored to the McKinney and Géron textbooks
- An AI tutor (Gemma 4n, local) that scaffolds rather than answers — refusing to help on assessed cells, flagging statistical misconceptions, citing textbook page anchors
- A per-prompt AI Disclosure ledger where the learner marks every AI interaction as accepted / edited / rejected, verifies their reasoning, and signs off with a reflection
- A streaming on-demand translation of lesson bodies into French and Swahili using the local model

The result is a portfolio-grade audit trail of what the learner actually did themselves vs. what they accepted from AI — exportable as a single `AI_USE.md` file the learner can attach to a job application.
```

### How we built it
```
- Next.js 15 (App Router) for the web app, Prisma + SQLite for state, JupyterLab in a sibling container for notebooks
- Ollama running Gemma 4n locally; NDJSON streaming with a `<think>/<answer>` envelope so the learner sees the tutor's reasoning before its answer
- A versioned 130-line system prompt encoding the curriculum, the 14 AI-OFF cells, 10 misconceptions, and 27 prompt templates
- A translation route that splits markdown around fenced code blocks (code passes through verbatim, prose is translated), caches in a LessonTranslation table keyed (lessonId, lang)
- AI Disclosure: a 3-step audit ledger with per-prompt decisions, verify flags, and a downloadable AI_USE.md receipt — privacy is architectural, not promised (zero outbound network calls)
- Pre-translated M1–M3 × FR+SW seeded in the demo DB so judges get instant results from the first click
```

### Challenges we ran into
```
- Keeping Gemma 4n on-rails for technical content in three languages without losing the markdown formatting — solved by splitting the body around code fences and never sending code blocks to the model
- Making the offline story demoable without judges needing to install Docker — solved by hosting a small Gemma instance on a Fly.io VM with a clear banner explaining the local-first design
- Designing the AI Disclosure flow so that the act of marking each prompt was the learning moment, not an admin chore — three-step structure (review · decide · reflect) emerged from this constraint
```

### Accomplishments we're proud of
```
- Privacy is architectural, not promised: no outbound network call exists from the learner's machine
- The AI Disclosure feature — per-prompt audit + signed reflection + downloadable receipt — is, to our knowledge, the first of its kind in AI-tutoring products
- Multilingual lesson body translation runs entirely on-device via the local Gemma; the EN/FR/SW story is real, not stub data
- The whole stack ships as `docker compose up` — a learner in a low-bandwidth region can install once and never need internet again
```

### What we learned
```
- A small local model + strong pedagogical scaffolding outperforms a large cloud model + weak scaffolding for learning outcomes
- "Responsible AI" is most credible when it's a verifiable mechanism (no network call, refusal-on-AI-OFF cells, signed disclosure) rather than a policy statement
- The hardest part of multilingual AI tutoring isn't the translation — it's getting the model to preserve technical structure (code, math, lesson anchors) across languages
```

### What's next for DataPath
```
- Tauri desktop wrapper so the install is a single .dmg / .exe instead of Docker
- React Native companion for mobile-first learners in low-bandwidth regions
- Instructor view: cohort-level disclosure summaries for school-district pilots
- M12 (Local LLM Mastery) and M13 (Agentic DS Workflows) — already specced, deferred until post-hackathon
```

### Tools & data disclosure (Devpost requires this)
```
AI tools used in development:
- Claude Code (Anthropic) for code generation and refactoring
- Gemma 4n via Ollama for in-product AI tutoring (the product itself)

Data:
- Public datasets (sales_monthly.csv, titanic, housing_prices, air_quality_daily) — links in the repo README
- No personal data collected; the platform is offline by design

Libraries: Next.js 15, Prisma, NextAuth, JupyterLab 4, Ollama, gemma4:e2b, pandas, numpy, scikit-learn, statsmodels, faiss-cpu, sentence-transformers
```

### Demo materials (Devpost form)
```
- Live demo URL: https://<your-vercel-deployment>.vercel.app
  Pre-seeded login: judge@datapath.local / judge2026
- Pitch video: https://<youtube-or-loom-link>
- Source: https://github.com/PascalBurume/DataPath_Learning
- Local install: `docker compose up` — see README
```

### Design questions (these are the three from `hackathon-submission.md §7` — paste as-is)

**AI Architecture Explanation (≤600 chars):**
```
DataPath runs Gemma 4n locally via Ollama — no cloud API. A Next.js 15 backend authenticates the learner, loads a versioned system prompt (13 modules, 27 prompt templates, 10 misconception flags, 14 AI-OFF cells), injects lesson context + language (EN/FR/SW), and streams Ollama's reply as NDJSON in a <think>/<answer> envelope the client renders as a reasoning pill + markdown answer. JupyterLab runs in a sibling Docker container so notebooks and AI share one offline stack. If Ollama is unreachable, a deterministic fallback keeps the UI alive. Prisma/SQLite stores progress and AI-use logs.
```

**Human-in-the-Loop Design (≤500 chars):**
```
Every AI reply opens with a visible <think> trace so the learner sees the tutor's reasoning before accepting the answer. 14 lessons across M3–M13 are marked [AI-OFF] — the tutor refuses help on CLT sims, CI interpretation, Cohen's d, pipeline assembly, time-zone reasoning, privacy design, and agent-output verification, forcing the learner to reason unaided. Every substantive answer ends with a prompt to log what was kept or changed in AI_USE.md. 10 misconceptions are flagged inline.
```

**Responsible AI Guardrail (≤500 chars):**
```
Offline by design: Gemma runs on the learner's machine — no data leaves the device, so privacy is architectural, not promised. The system prompt whitelists 14 open-source libraries and forbids cloud-tool suggestions. 10 misconceptions (p-value, CI, data leakage, look-ahead bias, RAG retrieval, agent verification) are flagged inline. The tutor refuses [AI-OFF] cells, cites the textbook as the authority, and never invents page numbers — falling back to chapter-only when a page can't be verified.
```

---

## 5. Pilot recruitment messages

**The ask:** 5 learners by June 17. Each one gives us 30–45 minutes of their time on a lesson; we capture a screen recording (optional) and one written quote.

Send these to: university CS Discords, African ML/DS WhatsApp groups, Twitter/X with `@`s to Deep Learning Indaba / Zindi / Masakhane, LinkedIn DS-student groups.

### English (Discord / Twitter / international groups)

```
Hi everyone — quick ask.

I'm part of a 5-person student team building an *offline-first* data-science learning tool: the AI tutor, the notebooks, and the lessons all run on your laptop in English, French, or Swahili. No internet needed once installed.

We're submitting to the USAII Global AI Hackathon (judging June 22–25) and need 5 learners to try one lesson before **June 17**.

What we're asking:
- 30–45 min of your time
- Walk through one lesson with us watching (Zoom / screen-share)
- One short written quote on what worked / what broke

What you get:
- A free run of the curriculum (M1–M13)
- Your name in our README (optional)
- A real picture of what learning DS feels like without the ChatGPT bill

DM me if you're in. We'd love students from anywhere with low or unreliable internet — that's exactly who DataPath is for.
```

### French (Francophone Africa: Discord CS, WhatsApp universitaires, LinkedIn)

```
Salut tout le monde,

Je fais partie d'une équipe étudiante de 5 personnes qui développe un outil d'apprentissage en science des données *qui fonctionne hors ligne* : le tuteur IA, les notebooks et les leçons tournent entièrement sur votre ordinateur, en français, anglais ou swahili. Pas besoin de connexion une fois installé.

On soumet le projet au USAII Global AI Hackathon (jury du 22 au 25 juin) et il nous faut **5 testeurs avant le 17 juin**.

Ce qu'on demande :
- 30 à 45 minutes de votre temps
- Faire une leçon pendant qu'on observe (Zoom / partage d'écran)
- Une citation écrite — ce qui a marché, ce qui a bloqué

Ce que vous obtenez :
- L'accès complet au cursus (M1 à M13)
- Votre nom dans notre README (si vous voulez)
- Une vraie expérience d'apprentissage de la data science *sans* dépendre de ChatGPT

DM si ça vous intéresse. On cherche surtout des étudiant·e·s dans des zones à faible débit — c'est exactement pour vous qu'on a construit DataPath.
```

### Swahili (East Africa: WhatsApp, Twitter, LinkedIn)

```
Habari za leo,

Mimi ni sehemu ya timu ya wanafunzi watano tunaojenga zana ya kujifunza *Data Science* inayofanya kazi *bila intaneti*: mwalimu wa AI, daftari za Jupyter, na masomo yote yanaendeshwa kwenye laptop yako mwenyewe — kwa Kiingereza, Kifaransa, au Kiswahili. Mara baada ya ufungaji, hauhitaji intaneti.

Tunawasilisha mradi huu kwenye USAII Global AI Hackathon (uhakimu Juni 22–25), na tunahitaji **wanafunzi watano kujaribu somo moja kabla ya Juni 17**.

Tunachoomba:
- Dakika 30 hadi 45 za muda wako
- Kupitia somo moja wakati tunaangalia (kupitia Zoom au screen-share)
- Maoni mafupi kwa maandishi — kilichofanya kazi na kilichokwama

Utakachopata:
- Ufikiaji kamili wa mtaala wote (M1 hadi M13)
- Jina lako kwenye README yetu (kama ukipenda)
- Uzoefu wa kweli wa kujifunza Data Science bila kutegemea ChatGPT

Tuma ujumbe kama una nia. Tunatafuta hasa wanafunzi kutoka maeneo yenye intaneti dhaifu — ni kwa ajili yenu hasa DataPath imejengwa.
```

---

## 6. Quick reference

| What | Where |
|---|---|
| The deep submission workbook (problem, architecture, video script) | `docs/hackathon-submission.md` |
| The repo | https://github.com/PascalBurume/DataPath_Learning |
| Local install command | `docker compose up` |
| Pre-seeded login | `sofia@datapath.local` / `datapath123` |
| Pre-cached translation modules (instant FR/SW demo) | M1, M2, M3 |
| Hackathon Devpost page | https://usaii-global-ai-hackathon-2026.devpost.com/ |
| Final submission deadline | **June 21, 2026 — 11:59 PM ET** |

---

## 7. One commitment we should make to each other

If the hackathon doesn't go our way, **what we've built is still real**. Don't throw it away on July 1. The product has value as a portfolio piece, as a basis for a grant application (education technology grants in low-resource settings are very fundable), and as a foundation for v2 (Tauri desktop, instructor view, M12/M13).

The hackathon is the deadline, not the destination.
