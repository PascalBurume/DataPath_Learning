# ADR 003 — Server-authoritative AI-OFF state machine

**Status:** Accepted
**Date:** 2026-05-14

## Decision

AI-OFF state lives in two Postgres tables (managed by Opus via `db/migrations`):

- `cell_state (cell_id TEXT PK, module_id TEXT, ai_off BOOLEAN NOT NULL DEFAULT false, locked BOOLEAN NOT NULL DEFAULT false, updated_at TIMESTAMPTZ NOT NULL DEFAULT now())`
- `module_state (module_id TEXT PK, ai_off BOOLEAN NOT NULL DEFAULT false, updated_at TIMESTAMPTZ NOT NULL DEFAULT now())` — governs whole-quiz lockout

**States:** `AI_ON` · `AI_OFF` · `LOADING` (initial, no input allowed until RSC hydration completes)

**Transitions:**
- Page load → RSC embeds current `cell_state` + `module_state` rows into HTML; client mirror initialises from this snapshot.
- Instructor/system writes `cell_state.ai_off = true` → DB row updates → SSE broadcast to all subscribers on `GET /api/sse/module/[moduleId]` → client mirror updates, Gemma panel slides shut.
- Student submits prompt → `server/guards/ai-off.ts` re-reads `cell_state` from DB → if `ai_off = true`, return HTTP 403; client mirror state is irrelevant to this check.
- Reverse transition: instructor sets `ai_off = false` → SSE broadcast → client mirror updates.

**Client mirror:** React context, read-only. Source is RSC HTML on load; updates arrive via SSE. The mirror drives UI only (panel show/hide, paste-detection toggle). It has zero write authority.

## Reasoning

A database row as source of truth means state survives client refreshes, network partitions, and instructor changes made outside the student's browser session. SSE is one-directional, requires no persistent WebSocket infrastructure, and is sufficient for state that changes at instructor pace (not sub-second). Re-reading `cell_state` in `server/guards` on every prompt submission is deliberate redundancy: client UI may be stale, manipulated, or buggy.

## Trade-offs

Re-reading `cell_state` per prompt adds one DB round-trip per Gemma call. This is acceptable because Gemma inference latency (hundreds of ms to seconds) dominates. If DB round-trip becomes a bottleneck, add a 1-second TTL in-process cache in `server/guards`. SSE requires a fallback long-poll for environments that terminate SSE connections (some older proxies); add it in P2 if pilot feedback surfaces the issue.
