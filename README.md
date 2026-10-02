# Amplifier Unified protocol extensions

A small public owner for the Amplifier Unified capability seams used with AHP0.9. Install the package or consume the shipped JSON Schemas directly;
no client, host, model or native runtime is a dependency. Upstream schemas and
reducers remain authoritative and are not copied here.

`registry.json` names the extension namespaces, methods and schema versions.
`schemas/` provides JSON Schema2020-12, `fixtures/` independent wire examples,
and `types/` TypeScript declarations. `npm test` validates all fixtures plus
rejection cases. Compatibility tests validate ordinary protocol objects using upstream schemas.

## Capability topics

AHP initialize advertises `_meta['amplifier.dev/capabilities']` only when installed.
Each version1 topic names a URI. Standard `resourceRead` retrieves its JSON
representation with an explicit `scope` query: an AHP session URI or `host`.
`resourceWatch` invalidation is supported when `watch:true` is advertised.
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

The independent `microsoft/amplifier-acp` repository owns native ACP extension
schemas and fixtures, including `_amplifier/native`, `_amplifier/history` and the
negotiated host callback. Those contracts can be used without Amplifier Unified.
This repository owns only the product-specific capability representations and
operations. Standard AHP client-provided tools and bidirectional resource access
serve targeted client interaction; local drafts and editing state are not mirrored.
