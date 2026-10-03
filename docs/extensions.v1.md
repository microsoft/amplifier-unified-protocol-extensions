# Unified extension contract — v1

Status: local entry point for inherited approved obligations and existing v1
schemas. It does not self-ratify new protocol semantics, scope or acceptance.
Parent: [local vision](VISION.md). Wire definitions: [registry](../registry.json),
[schemas](../schemas/) and referenced native owner schemas. Upstream
[AHP](https://microsoft.github.io/agent-host-protocol/specification/overview.html)
and [ACP](https://github.com/agentclientprotocol/agent-client-protocol/blob/main/docs/protocol/v1/overview.mdx)
remain authoritative. Existing [conformance documentation](conformance.md)
provides operation-specific boundaries and reproduction instructions.

## Inherited direction

The linked family revision records the approved direction, rather than a claim
that these promises are completely qualified:

| Family contract | Relevant clauses and responsibility here |
| --- | --- |
| [Host protocol](https://github.com/microsoft/amplifier-unified/blob/625af2f2832fafc8152f6078061d626f160362a4/contracts/host-protocol.v1.md) | HP1, HP2, HP3, HP5, HP6: upstream semantics, resource scope, optional limits and independently recoverable admission identity. |
| [Agent protocol](https://github.com/microsoft/amplifier-unified/blob/625af2f2832fafc8152f6078061d626f160362a4/contracts/agent-protocol.v1.md) | AP1, AP3, AP5: retain ACP as the execution seam, native identity and optional extensions; reference the native owner. |
| [Working set](https://github.com/microsoft/amplifier-unified/blob/625af2f2832fafc8152f6078061d626f160362a4/contracts/working-set.v1.md) | WS1, WS3–WS5: preserve durable history, request bounded detail and charge updates to actual dependencies. |
| [Component boundaries](https://github.com/microsoft/amplifier-unified/blob/625af2f2832fafc8152f6078061d626f160362a4/contracts/component-boundaries.v1.md) | CB1–CB6: independent fixture development, one schema owner, qualified substitutions, composable versions and isolated lanes. CB7: actual maintenance coverage belongs to effect owners. |
| [Client state](https://github.com/microsoft/amplifier-unified/blob/625af2f2832fafc8152f6078061d626f160362a4/contracts/client-state.v1.md) | CS1–CS4, CS7–CS9: authenticated target, private drafts, scoped updates, no replay and scoped optional failure. |
| [Client experience](https://github.com/microsoft/amplifier-unified/blob/625af2f2832fafc8152f6078061d626f160362a4/contracts/client-experience.v1.md) | CX3, CX6, CX7: consistent operation meaning, truthful progress and explicit optional availability; rendering stays client-owned. |
| [Client development](https://github.com/microsoft/amplifier-unified/blob/625af2f2832fafc8152f6078061d626f160362a4/contracts/client-development.v1.md) | CD1–CD6: declare shared semantic impact, mixed-version behavior, ownership and exact evidence; distinguish merge, release and adoption. |

## Promises, consumers and falsifiers

| Public promise | Consumer obligation | Falsifier and acceptance boundary |
| --- | --- | --- |
| One definition owner; generated bindings match published shapes. | Consume this registry and schemas for product shapes; use upstream SDKs for core protocols and the native owner for native ACP. Regenerate bindings after schema changes. | A declaration differs from a schema or native definitions are copied here. [Schema tests](../tests/schemas.test.mjs), [binding drift/compiled consumer checks](../tests/bindings.test.mjs). |
| Optional v1 capabilities are explicit and preserve ordinary chat. | Invoke only negotiated actions/versions and registered parts. Unknown or absent capabilities refuse visibly without private API fallback. | Missing reset owners still advertise reset, or unavailable optional controls block core chat. [Recovery definition qualifier](../scripts/verify-recovery.mjs) covers absence/subsets; actual chat fallback remains peer integration acceptance. |
| Authenticated scope owns actions, topics and original receipts. | Bind account, actor and native identity from trusted context; validate returned topic/scope against the request. JSON review assertions do not authorize effects. | Another account can inspect a job, a selected channel can redirect native authority, or returned scope differs. [Envelope rejection fixtures](../fixtures/conformance/envelopes.v1.json) cover shapes only; runtime isolation and effect authorization require host/product qualification. |
| Small scoped invalidations and bounded reads preserve private and durable state. | Use standard AHP resource/watch methods, explicit scope and owner page/chunk limits. Keep private drafts local; do not turn invalidation into history deletion or full-app reload. | A scalar update serializes unrelated histories, or a list starts a dormant agent. [Official schema qualifier](../scripts/verify-peers.mjs) covers method shapes; cold-load, memory and dependency cost remain measured peer acceptance. |
| Recovery preserves original identity and uncertain outcomes. | Inspect exact original account-owned command/job receipts; require fresh immutable reviews and held owner authority for effects. Never replay accepted/unknown effects under a new identity. | An interrupted reset/purge is resent, canonical history is deleted, or a receipt is treated as permission. [Native-owner fixture references](../fixtures/conformance/peers.v1.json) and recovery shape comparison cover arguments; effect/no-replay safety requires owner and assembled checks. |
| Compatibility evidence names exact source and artifact boundaries. | Record schema/package versions and hashes, configured negotiated subsets, actual peers and skipped cases. Review cross-owner changes before altering wire semantics. | Source fixture results are reported as installed/runtime/browser/account/deployed acceptance. [Conformance evidence boundaries](conformance.md) and independent installed artifact receipts are separate. |

## Qualified evidence and remaining acceptance

Implementation revision `5b778da9c8a8433ddc643a9b159eac2dd1225c40` produced the
sealed `@amplifier/unified-protocol-extensions@0.1.1` candidate. Its source and
independent installed suites passed 42 checks each; official AHP/ACP plus native
schema fixtures passed 21 each; actual recovery definition checks passed 22 each,
with zero skips on Node25/macOS. Those receipts apply to that implementation
revision. This documentation successor does not replace the archive or imply a
new package qualification.

Runtime authorization, no-replay effects, cold/bounded behavior, actual running
peer substitution, browser, device, account, Node22/Linux and deployed-worker
adoption remain separate checks; the desired promises above are not weakened by
those gaps. Historical cross-owner findings and the sealed three-part/current
four-part recovery difference remain in [conformance](conformance.md).

No novel obligations are ratified here. Any proposal to change wire schemes,
versions, capability meaning, native schema identity or product scope must name
the producer, affected consumers, reviewed compatibility and falsifiable
acceptance. Pending family decisions remain pending.
