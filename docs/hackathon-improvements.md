# DataPath — Improvement Report (USAII Global AI Hackathon 2026)

*Prepared alongside a notebook-verification + AI-fix pass. This is the prioritized, judge-aligned to-do list to maximize the score. Read top to bottom — it's ordered by impact.*

---

## 0. What was already fixed in this pass (done)

| Fix | Why it matters |
|---|---|
| **Standardized the Gemma model tag → `gemma4:e2b`** across notebooks + Makefile (app/docs already matched) | The notebooks called `gemma4n` and the Makefile pulled `gemma3:4b`; neither is installed. The host Ollama has `gemma4:e2b`. This was why AI cells errored and the app could fall back. **Now the tutor returns real replies** (verified: 645-char `<think>/<answer>`, `fallback:false`). |
| **All 13 lab notebooks run clean** (M1–M9, M12, M13 + solutions). M10/M11 errors are the intentional `[AI-OFF]`/TODO exercises, left blank by design. | The core deliverable: "run every cell, fix errors." Genuine bugs fixed in M6 (unimported `json`), M12 (`df`→`synth`, schema/gen mismatch, over-indented RAG cell), M13 (over-indented cell + missing `run_agent`, restored corrected & async). |
| **`[AI-VERIFY]` cells made graceful** (M6/M12 wrap validation in try/except) | Synthetic-data validation now reports failures instead of crashing — pedagogically correct *and* clean runs. Verified: M6 caught a real out-of-range value; M12 passed. |
| **Persist the reasoning trace** (new `PromptLog.reasoning` column + API + disclosure UI) | The `<think>` trace was parsed then discarded. Now it's stored and shown in the AI-Disclosure ledger — strengthens the responsible-AI differentiator. Verified persisted to DB. |
| **Server-side `[AI-OFF]` enforcement** in `/api/gemma/chat` | The guardrail was UI-only; now the server refuses AI-OFF lessons even if the UI is bypassed. Verified: `aiOff:true` refusal returned, no model call. |
| **`Dockerfile.jupyter` deps** added: `requests, plotly, pandera, joblib, faiss-cpu, sentence-transformers` | The image was missing libs the labs import — the intended env would have failed M6/M10/M12. |

**Also done in this pass:**
- **Rebuilt JupyterLite** (`pnpm jupyterlite:build`) so the in-browser copies carry the fixes — verified 0 built `lab.ipynb` contain `gemma4n`, M1 uses `gemma4:e2b`, M13 has the restored `run_agent`. This also fixed a broken `.venv-jupyterlite` (its shebang still pointed at the pre-move path `/Users/pascal/Search/DataPath_Learning/...` — the same folder-move landmine as the old git worktrees; recreating the venv resolved it).
- **Confirmed `gemma4:e2b` is registry-pullable** on a clean machine (`docker compose exec ollama ollama pull gemma4:e2b` → manifest resolved, 7.2 GB downloaded, `success`). So `make pull-gemma` and a fresh `docker compose up` are reproducible for judges. The model is now cached in the `ollama-models` volume.

**One follow-up still recommended (not load-bearing):**
1. **Update model-tag references in course docs** (`datapath/M1/instructor.md` "ollama pull gemma4n", `datapath/INTEGRATION_GUIDE.md` `FROM gemma4n`, etc.). *Leave M12's model-selection teaching content as-is* — there `gemma4n` is a hypothetical option in an exercise, not a real call.
2. **Docs accuracy nit:** `gemma4:e2b` is **7.2 GB**, but `docs/hackathon-submission.md` claims "≈2.6 GB quantised". Correct the size claim (or note it's the full, not quantised, tag).

---

## 1. Competition strategy — align to how you're actually judged

These come straight from the USAII rules and reshape priorities:

- **Judging is asynchronous on a 3–5 min pitch video + Devpost write-up. There is NO live demo.** → The single highest-leverage artifact is the **video**. The "live demo runbook" in `docs/hackathon-team-pack.md §8` should be **rewritten as a video script/shot-list** (the same beats, but recorded). Polish the recording, not a live presentation.
- **Required submission items include a responsible-AI statement + a tool/data disclosure.** → This is DataPath's home turf. Lead the write-up with the **AI-Disclosure ledger / `AI_USE.md`** — it literally *is* a tool/AI-use disclosure mechanism.
- **Two side awards you're built to win:** **Responsible AI** ($250) and **Social Impact** ($250). Explicitly frame the submission for both (offline-by-architecture = responsible; access for the next-billion learners = social impact).
- **College track = "AI for Life & Work"**, mission lanes *Productivity ("second brain for real life")* and *Public Services ("fix systems people depend on")*. → Pick one and frame to it. Education-access fits **Public Services** best ("fix the broken on-ramp into a data-science career"); a "personal learning second brain" framing fits Productivity. Decide and commit.
- **The real challenge prompt drops at the June 14 kickoff** → keep framing adaptable; don't hard-code to a guess.
- **Qualifier (June 7–10, ~8 Qs, one attempt, AI-scored on problem/AI-reasoning/responsible-AI/communication)** → choose the **Community** topic (closest to your education-access mission) and reuse the canvas content. *One attempt, no retakes — do it deliberately.*

---

## 2. AI improvements (ranked)

1. **(DONE) Model tag, reasoning persistence, AI-OFF enforcement** — see §0.
2. **Centralize model config** — the canonical tag still lives as a hardcoded fallback in 4 routes + scripts. Move to a single shared constant/env so it can never drift again.
3. **Context-window management** — the chat sends full history every turn; long conversations degrade latency and can OOM a small local model. Add a sliding window (last ~10 turns + system).
4. **Retry/back-off on Ollama timeout** — currently a single 60s timeout → fallback. A short retry before falling back improves perceived reliability in the demo.
5. **Per-chunk translation progress** — `LessonRenderer` shows one spinner for the whole translation; stream "chunk N of M" so long lessons feel responsive.
6. **Make notebook Ollama URL env-aware** — notebooks hardcode `http://localhost:11434`; in the Dockerized JupyterLab container that won't reach Ollama. Read `OLLAMA_URL` (the compose `jupyterlab` service already sets `OLLAMA_BASE_URL`). Low effort, removes a latent "AI cells don't work in Docker" trap.

## 3. UI improvements (ranked, triaged)

**Quick wins (high polish / low effort):**
- **Active-route highlight in `NavSidebar`** — no current indicator of which page you're on.
- **Copy buttons on code blocks inside Gemma chat answers** (lesson body has them; chat doesn't).
- **Dark mode: finish or remove** — the settings toggle exists but there's no evidence of dark CSS overrides; either define them in `tokens.css` or drop the toggle so it isn't a visible dead control in the demo.
- **Lesson search** — no way to jump to a topic; add a simple filter over the module/lesson list.

**Medium:**
- **Disclosure draft persistence** — switching modules mid-disclosure loses unsaved accept/edit/reject marks; autosave to a draft or `sessionStorage`.
- **Nepskin "usefulness" feedback** — visualization entries are locked to `decision='nepskin'`; let the learner mark a diagram helpful/not-helpful so the ledger captures it.
- **Empty/loading states** — a few pages show a bare "Loading…"; small skeletons read as more finished on camera.

**Larger (only if time allows):**
- Responsive/mobile passes on the two-column grids (rigid `1.4fr 1fr` layouts).
- Mermaid integration cleanup (there's a defensive orphan-node sweep in `MarkdownView` indicating fragility).

## 4. Robustness / responsible-AI (credibility for judges)

- **Rate-limit the AI routes** (`/api/gemma/chat`, `/api/nepskin/generate`) — currently unbounded; one user can starve the local model.
- **Validate/cache the system-prompt file at startup** — it's read from disk per request with a generic fallback; warm it once and assert it exists.
- **Surface the stored reasoning trace** is now in the disclosure ledger — consider also showing "verified vs. accepted" counts per reasoning to reinforce the human-in-the-loop story in the video.

---

## 5. Suggested order for the remaining 2 weeks

1. **This week:** pass the Qualifier (Community topic); rebuild JupyterLite; fix the doc model-tag references; pick the mission lane.
2. **Pilots (by June 17):** the lowest-scoring criterion is *impact evidence* — get 3–5 real learners + one "decision-value" sentence (see team-pack §7). This matters more than any further code polish.
3. **Video (by June 19):** record the rewritten §8 beats — offline boot, real Gemma reply, **switch to Swahili live**, hit an `[AI-OFF]` cell and show the refusal, then download `AI_USE.md`. Now that the model works, every beat is real footage.
4. **Submit (target June 20):** lead the Devpost write-up with the responsible-AI statement + disclosure feature; target the Responsible-AI and Social-Impact awards explicitly.
