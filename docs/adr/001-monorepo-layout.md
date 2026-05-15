# ADR 001 — Monorepo layout with Turborepo + pnpm workspaces

**Status:** Accepted
**Date:** 2026-05-14

## Decision

Use a Turborepo monorepo with pnpm workspaces. Directory layout:

```
apps/web/           Next.js 15 app
packages/types/     Shared TypeScript contract types
packages/ui/        shadcn/ui primitives + Tailwind v4 design tokens
packages/policy/    AIPolicy enforcement, template guardrail, cosine-sim filter [Opus-owned]
packages/notebook/  JupyterLite worker wrapper + CodeMirror 6 cell registry
packages/gemma/     WebLLM bootstrap + Cloud Run fallback client
packages/analytics/ Tinybird client wrappers + Recharts data adapters
server/guards/      RSC server actions, AI-OFF middleware, prompt re-validation [Opus-owned]
db/schema/          Drizzle ORM schema definitions
db/migrations/      Drizzle migrations [Opus-owned]
docs/adr/           Architecture Decision Records
datapath/           Existing curriculum content (M1–M11, AI_SYSTEM) — read-only during build
```

Ownership is enforced with CODEOWNERS: Opus 4.7 has write access to `packages/policy`, `server/guards`, and `db/migrations`. Sonnet 4.6 has read-only access to those three paths.

`server/guards` is a top-level directory (not a package) for P0 simplicity — no internal package.json overhead. Promote to `packages/guards` if it needs to be imported by other packages later.

## Reasoning

Shared `packages/types` ensures one canonical version of contract surfaces (PromptRecord, CellMeta, DisclosureDoc, AIPolicy) across the web app and server guards. Turborepo's build cache is the standard toolchain for Next.js 15 monorepos and avoids cross-package import resolution issues. pnpm workspaces are the de facto standard with Turborepo.

The agent-ownership split maps to directory boundaries rather than runtime boundaries. CODEOWNERS enforces it as a code-review gate, not just a convention.

## Trade-offs

This layout locks `server/guards` as a directory-level convention rather than an enforced package boundary. If the team grows beyond two agents or if other packages need to import guard logic directly, promote it to a proper package. Turborepo adds ~200 ms to cold CI runs; the build-cache benefit on warm runs exceeds this cost at any team size.
