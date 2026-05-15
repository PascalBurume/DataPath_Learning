# ADR 002 — Contract surface types (PromptRecord, CellMeta, DisclosureDoc, AIPolicy)

**Status:** Accepted
**Date:** 2026-05-14

## Decision

All four contract types live in `packages/types` and carry a `schemaVersion` literal. Key design constraints driven by the product rules:

1. `PromptRecord.decision` is `'pending' | 'accept' | 'edit' | 'reject'` — not a three-way union — because design rule #2 requires auto-write at prompt time, before the student has made a decision. `'pending'` is the initial state; consumers that pattern-match and omit `'pending'` will fail the TypeScript exhaustiveness check at compile time.

2. `PromptRecord.verification` and `PromptRecord.confidence` are nullable because they are filled during disclosure, not at auto-write time.

3. `DisclosureDoc.score` is nullable and never gates submission (design rule #3). It is logged, not enforced.

4. `AIPolicy.antiPatterns` does not include embeddings — those are an implementation detail of `packages/policy` (Opus-owned). Embedding storage and cosine-sim computation happen server-side only and are never exposed to the client.

5. All fields added in future schema versions must be additive and backward-compatible. Breaking changes require a `schemaVersion` bump and a migration in `db/migrations`.

## Reasoning

Making `decision` default to `'pending'` is the only design that satisfies auto-write without a two-step insert that could fail silently or leave a dangling draft. `schemaVersion` as a literal field allows migration detection at runtime without a separate manifest file. Additive-only field changes preserve backward compatibility for in-flight drafts stored in S3.

## Trade-offs

The `'pending'` variant adds a state to every consumer that pattern-matches on `decision`. This is intentional: it makes omissions visible at compile time. The alternative (nullable `decision`) loses the exhaustiveness signal.
