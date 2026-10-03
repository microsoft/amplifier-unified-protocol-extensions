# Repository entry point

Read [local vision](docs/VISION.md), [extension contract v1](docs/extensions.v1.md)
and [conformance boundaries](docs/conformance.md) before changing public shapes.
These inherit the approved family direction; they do not authorize new scope.

This repository owns product registry/schemas/fixtures/generated bindings only.
Upstream AHP/ACP and native ACP owners remain authoritative. Review cross-owner
semantic changes with their producers/consumers; preserve existing wire
compatibility and unknown outcomes. Do not infer runtime permission or adoption
from passing JSON Schema fixtures.

Regenerate bindings after schema edits and run the existing scoped checks listed
in the contract. Documentation-only edits need link/diff verification, not a
runtime test rerun. Keep source, installed artifact, runtime, browser/device/account
and deployed acceptance separate. Preserve sealed package receipts and identify
documentation successors by their own source revision.
