# ADR 004 — Gemma on-device vs Cloud Run strategy

**Status:** Accepted
**Date:** 2026-05-14

## Decision

On-device Gemma (WebLLM + WebGPU) is the primary inference path. Cloud Run hosted Gemma is the fallback. The `packages/gemma` client selects the path at runtime based on a `detectWebGPU()` capability check, not on browser identity.

**Capability routing:**
- WebGPU available + adequate GPU memory → load Gemma 3 4B via WebLLM; Cloud Run not called.
- WebGPU unavailable or below memory threshold → proxy all inference through Cloud Run; no local model download.

**Implication for browser support:** Firefox (stable) has no WebGPU as of 2026-05-14 and will always route to Cloud Run. Safari 17+ has partial WebGPU (no compute shaders in some versions); `detectWebGPU()` must test shader capability, not just `navigator.gpu` presence. Chrome 113+ is the only browser where on-device is reliably primary.

## Reasoning

Capability detection is more robust than user-agent sniffing and will automatically benefit Firefox users if they enable WebGPU in nightly builds. Cloud Run as fallback means the platform works identically for all three browsers — on-device is a performance and privacy improvement, not a prerequisite for using the product.

The user requested on-device as primary. Given Firefox's lack of WebGPU, "primary" means: the preferred path when available, used by the majority of target-device sessions (institutional Chromebooks). Cloud Run is not a degraded mode — it is a fully supported path.

## Trade-offs

First-session Chrome users will download ~2.5 GB before Gemma responds. Mitigate with a progress bar and the option to skip to Cloud Run. Cloud Run adds per-inference server cost and a network dependency; budget and timeout handling required. The `detectWebGPU()` check adds ~50 ms on page load; acceptable. This decision locks the team into maintaining two inference paths indefinitely. If Cloud Run cost becomes prohibitive, revisit; if WebGPU ships in Firefox, the fallback path shrinks automatically.
