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

This codebase is yours: what it's for and how it's built are your call, and you'll keep building on it.

## Ecosystem maps

Keep this repository's README and product-page maps aligned with the
[Constellation map guide](https://github.com/microsoft/amplifier-constellation/blob/main/docs/ecosystem-maps.md)
and its canonical registry; start with this repository's
`docs/ecosystem-map.json`. When creating, renaming, splitting, retiring, or
changing a role, interface, parent, or dependency, inspect incoming and outgoing
relationships and update every affected parent/consumer map and link, including
the centralized product pages. Regenerate from source data and synchronize local
records/images rather than hand-editing generated images. Describe actual
boundaries and optional choices; a role highlight is not a compatibility claim.
Documentation work does not authorize deployment or resume paused product work.
