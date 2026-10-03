# Amplifier Unified protocol extensions

A small public owner for the Amplifier Unified capability seams used with AHP0.9. Install the package or consume the shipped JSON Schemas directly;
no client, host, model or native runtime is a dependency. Upstream schemas and
reducers remain authoritative and are not copied here.

`registry.json` names the extension namespaces, methods and schema versions.
`schemas/` provides JSON Schema2020-12, `fixtures/` independent wire examples,
and `types/` TypeScript declarations. `npm test` validates all fixtures plus
rejection cases. The explicit `verify:peers` qualifier validates ordinary protocol objects using
read-only upstream schemas; it is separate from `npm test`. See
[conformance, owner checks and open findings](docs/conformance.md).

## Capability topics

AHP initialize advertises `_meta['amplifier.dev/capabilities']` only when installed.
Each version1 topic names a URI. Standard `resourceRead` retrieves its JSON
representation with an explicit `scope` query: an AHP session URI or `host`.
`resourceWatch` invalidation is supported when `watch:true` is advertised.
A topic may declare `scope:'host'`; clients then read/watch with `scope=host`
and send actions on `ahp-root://`, regardless of their selected conversation.
The default `scope:'context'` keeps the existing selected scope behavior. This
field is part of the initial pre-release v1 contract, not an upstream AHP field.
The provider must authorize both the topic and the scope. URI lookup never grants
arbitrary filesystem access. A client opens only visible topics and may discard
these derived caches on disconnect or at any time.

A record is `{topic,scope,revision,data}`. Its owner advances the safe integer
revision after committing an authoritative mutation. Same scope plus same
revision means the same representation. Owners define bounded fields and page
large catalogs separately. Global session arrays, full conversation histories,
private editor buffers, credentials and unrelated topic state are prohibited.
Clients reject records that change the requested scope or publish unowned fields.
No optional topics are loaded at client startup or while typing private drafts.

Mutations use the negotiated `x-amplifier/capabilityAction` method, with topic,
operation, version1, args, channel and a durable commandId. Admission records and
payload identity precede external effects. An interrupted/unknown result is not
permission to resend. A successful result includes only changed topic records,
explicit invalidations and an optional action-specific result. Context comes
from the authenticated connection and host session binding, never arbitrary
clientId, workspace or native identity fields inside args. Native agent requests
use the same authorized operation owner and receipt path as user actions.

Use standard AHP configuration, resources, tools, automation or other operations
where their actual semantics fit. Legacy HTTP paths and UI action names are
private client migration mappings, not new standard methods. Unknown extension
versions/methods fail visibly; missing optional capabilities leave ordinary chat
functional without a silent fallback to private host APIs.

## Native ACP ownership

The independent `microsoft/amplifier-app-acp` repository owns native ACP extension
schemas and fixtures, including `_amplifier/native`, `_amplifier/history` and the
negotiated host callback. Those contracts can be used without Amplifier Unified.
This repository owns only the product-specific capability representations and
operations. Standard AHP client-provided tools and bidirectional resource access
serve targeted client interaction; local drafts and editing state are not mirrored.

## Generated bindings and product recovery

Run `npm run generate` after schema changes; `npm run check:generated` and the
consumer type test detect drift. Existing generic interfaces remain available.
The additive `recovery-app-reset-*.v1.json` schemas describe current product
argument shapes only. Exact negotiated actions/parts and runtime review, account,
receipt and maintenance authority remain with the recovery owner. Native ACP
managed-file, retired-copy, cache and reset schemas remain at their public owner
referenced by `registry.json`.
