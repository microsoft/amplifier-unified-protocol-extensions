# Amplifier protocol extensions

A small public owner for the Amplifier-specific seams used with AHP 0.9 and ACP
wire version1. Install the package or consume the shipped JSON Schemas directly;
no client, host, model or native runtime is a dependency. Upstream schemas and
reducers remain authoritative and are not copied here.

`registry.json` names the extension namespaces, methods and schema versions.
`schemas/` provides JSON Schema2020-12, `fixtures/` independent wire examples,
and `types/` TypeScript declarations. `npm test` validates all fixtures plus
rejection cases. Compatibility tests must also validate nested ACP SessionUpdate
objects with the upstream ACP schema; this package intentionally does not fork it.

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

## Native ACP

Both sides negotiate `_meta['amplifier.dev/native']:{version:1}` in their ACP
capabilities before `_amplifier/native`, `_amplifier/history` or native event use.
`_amplifier/native` preserves native composition/control operations that cannot
be expressed through standard configOptions. Its capabilities operation describes
the controls currently supported by that adapter; no arbitrary reflection occurs.

`_amplifier/history` is a passive read of complete native user-turn groups, with
bounded pages and opaque revision-bound cursors. It does not call session/resume,
load a worker, acquire execution ownership or replay work. Revision changes
invalidate the cursor; a client refetches. Missing, malformed or unsupported
content is diagnosed explicitly and preserved on disk. Standard ACP session/load
still replays the full visible history and prepares the execution context as ACP
requires; it is not silently replaced with this extension.

Native `_meta['amplifier.dev/command']` carries a negotiated stable command ID to
preserve host/native turn identity, not a guarantee of exactly-once tool effects.
`_amplifier/event` conveys native diagnostics and post-durable-save discovery
hints. Filesystem locators in these hints stay between the trusted adapter, host
and catalog; the host validates configured native roots before acting.

ACP `_meta['amplifier.dev/host']:{version:1}` negotiates `_amplifier/host` callbacks.
The host binds them to the admitted executing native session. Targeted UI/device
operations additionally require an attached and authorized client target; a
session does not grant authority over every connected browser. Private local UI
state is read only for such an explicit, permitted request, never mirrored.

Ordinary ACP-compatible clients need none of these extensions for native chat,
standard tools/permissions, cancellation and session lifecycle. The native runtime
remains Amplifier Core plus Foundation, not the separate amplifier-agent product.
