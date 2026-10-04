# v1 conformance and ownership

Contract entry: [extensions v1](extensions.v1.md); purpose: [local vision](VISION.md).
The findings below are the recorded baseline audit, not a current deployment claim.

These schemas describe negotiated Unified extensions. They grant no permission.
The original four envelope schemas, URI spelling, methods, field bounds and v1
version are unchanged. The three product appReset argument schemas are additive.

## Authority and recovery

| Seam | Shape owner | Runtime checks beyond JSON Schema |
| --- | --- | --- |
| Account and selected session | Authenticated distribution/host and capability owner | Bind actor/account and native identity from trusted connection/session context; never authorize from payload identity. Account-bound original job/receipt lookup must refuse another account. |
| Capability topic read/watch | This registry plus standard AHP resource methods | Send `resourceRead`/`createResourceWatch` on `ahp-root://`, with an explicit scope in the resource URI. Validate returned topic and scope against the request. Host topics use `scope=host`. Watch only when advertised. |
| Cache invalidation | Topic owner plus upstream AHP watch/reconciliation | Invalidation is advisory and resource-specific. Array strings name topics at the action's scope; `updates` carry their own scopes. Never interpret invalidation as history deletion, replay permission or a full-app reload. Partition caches by authenticated host/account, and resource scope. |
| Resource/history windows | Upstream AHP and the native/history/resource owner | Keep standard retention, snapshots and window semantics. Read only requested pages/chunks; validate immutable hash, offsets, revisions and byte/count budgets. Schema validity does not establish cold history or bounded memory. |
| App-local reset | This registry's argument shapes; recovery product owner implements negotiation/reviews/jobs | Only advertised actions and registered part IDs are eligible. Fresh original account-owned job, preview hash, owner revisions, credential review and held maintenance authority remain required. Restore uses a fresh prepare and exact post-reset revision. |
| Managed files and retired copies | `microsoft/amplifier-app-acp` schemas; generic host supplies selected authority | Distinct optional markers, immutable reviewed proof, held dependent-owner protection and passive exact receipt inspection. No arbitrary caller paths. Preserve canonical histories, events, unique files and all unknown outcomes. |

AppReset part IDs currently are `native.app-bundle-default`,
`notifications.settings`, `notifications.credentials` and `updates.preferences`.
The public schema gives the current v1 maximum set. A configured peer's exact
advertised action schema and marker restrict it further; unadvertised IDs remain
unavailable. Private credentials and before-images stay at their owners. These
argument schemas do not describe native ACP administration or a complete app reset.
`privateContentReviewed` and `credentialsReviewed` are review assertions; neither
replaces trusted authorization. Ordinary chat works without these capabilities.

Unknown methods/versions refuse visibly. An absent optional capability never
falls back to private REST, native files, a repeated effect or fabricated success.
Unknown/interrupted results retain the original command/job identity for passive
inspection; do not retry effects under a new identity. Client drafts stay local.

## Evidence and reproduction

`npm test` validates the seven schemas, rejection fixtures and generated bindings,
including a compiled consumer of the existing generic interfaces. It does not
start a host, native runtime or model. `npm run check:generated` detects drift.
Bindings embed each schema's SHA256 and regenerate with `npm run generate`.
TypeScript cannot enforce safe integers, lengths, permissions, hashes or CAS.

Run the explicit public-schema qualifier with read-only peer checkouts:

```sh
npm run verify:peers -- --ahp=/path/to/agent-host-protocol --acp=/path/to/agent-client-protocol --native=/path/to/amplifier-app-acp
node scripts/verify-recovery.mjs /path/to/components/recovery-capability
```

The peer qualifier reads official schemas and hashes them, validates ordinary AHP
initialize/resource/watch and ACP v1 initialize fixtures, and validates native
managed/retired argument fixtures at their owner. It requires every peer; missing
schemas fail rather than silently skip. `fixtures/conformance/peers.v1.json` holds
synthetic wire examples, not captured account traffic. Upstream schemas are never
copied into this package. Native schemas remain references in `registry.json`.
The recovery qualifier compares the three argument shapes against the actual
owner's source or installed `dist/schemas.js`, plus advertised absence/subset cases.
No qualifier establishes effect authorization or runtime interoperability.

Reviewed 2026-10-03: extensions baseline `396c0aa0b28a`, host `30f512949137`,
native `f530e541d6e6`, distribution source `cf398db177c7`, AHP `ea432973fcd4`
(version0.9.0), ACP `2bc773bc77d2` (v1 schema, separate v2 left untouched).
The registry's original upstream revisions remain historical baseline references,
not a latest-qualified claim. Exact artifact hashes and command logs are in the
owner handoff, separate from this public contract.

## Open cross-owner findings

| Finding | Evidence | Owner / disposition |
| --- | --- | --- |
| Host accepts command IDs up to512; published v1 envelope permits256 | host `src/host.ts` `invokeCapability` | Host owner must decide/enforce existing registry bounds; no widening here. Recovery/native owner operation bounds can be narrower still. |
| Omitted capability resource scope defaults to host | host `capability` URI parser | Host owner; send explicit scope, never infer account authority from URI. |
| Host does not enforce topic's host-only scope at admission | host `invokeCapability` | Host/capability owner; individual owner rejection remains necessary. Source inspection is not an exploit or real-account test. |
| Existing custom resource URI schemes do not use upstream reserved `x-` prefix | `amplifier-capability://` and native export/resource references | Coordinated host/client/product migration required. Preserve current wire spelling; schema validation accepts URI strings but does not establish this naming conformance. |
| Native schema `$id` values still name `amplifier-acp` | native owner18 schemas including retired-copy; some schemas omit `$id` | Native owner owns ID/alias compatibility. Registry repository correction does not rewrite schema identity. |
| Sealed c496 recovery uses fixed prepare.maxItems3; current source uses registered part count4 | actual executable owner-definition comparison | Distribution/recovery owner; source and installed qualifiers remain separate. c496 was qualified for three parts. Seal a new artifact for four-part support; this is not a failure of its claimed three-part scope. |

The six pending F18 decisions are not resolved here. No history, production stores,
service ports, shared installed environment, package publication or deployment is
changed by this package work. Browser, physical device, account, actual running
peer substitution, effect safety and fresh deployed-worker adoption are separate
acceptance boundaries.

Upstream rules: [AHP extension overview](https://microsoft.github.io/agent-host-protocol/specification/overview.html)
and [ACP v1 overview](https://github.com/agentclientprotocol/agent-client-protocol/blob/main/docs/protocol/v1/overview.mdx).

## Preview gap decisions — 2026-10-03

These clarify existing HP1/HP5/HP6, AP4/AP5 and CS2/CS4/CS6/CS9 obligations;
they add no wire fields, new method or ratified scope. Runtime owners retain
implementation and acceptance. The reviewed family source for this follow-up is
[bf86788](https://github.com/microsoft/amplifier-unified/blob/bf86788b7cf46d5b529eaf07d4187e4c142c141b/contracts/host-protocol.v1.md).

- **Advertised versus usable:** the manifest names negotiated topic/action shapes,
  not account permission, credentials, connectedness or mounted runtime state.
  Do not show a successful capability read as proof that a mutation is usable.
  Required behavior remains a qualification gap when absent; a UI affordance
  alone is not evidence, and hiding it does not complete the requirement.
- **Model selection:** use the selected peer's standard ACP `configOptions` and
  `session/set_config_option`; preserve its supplied `configId`, choice values,
  current value and returned full option set. `category:model` aids presentation;
  it does not require the option ID to be `model`. The host projects standard AHP
  configuration and applies `session/configChanged` only to properties marked
  `sessionMutable:true` and not read-only. Do not invent a product model action or
  advertise successful mounting from an unconfirmed saved choice.
- **Definite refusal versus unknown:** extension `accepted` reports action
  handling/admission, not completion of a downstream effect. For example, accepted
  handling may return an authoritative downstream refusal with `executed:false`.
  A standard correlated AHP rejection or an authoritative owner pre-effect refusal
  is definite for the rejected action. An arbitrary RPC code/message, a timeout,
  `accepted:false` alone, or a missing terminal receipt is not proof of no effect.
  Preserve and inspect the original command; never infer replay permission. Show
  confirmation only for an explicit current review/confirmation requirement, not
  as the generic label for a disabled feature or definite refusal. User-facing
  summaries should explain the available next step without internal RPC names.
- **Replies and reactions:** choosing or clearing a quote is private client drafting
  under CS2 and causes no backend mutation; it does not require an advertised
  `message.reply` action. Explicit send admits the reply through the existing
  conversation-send path. Any accepted reference must bind the authorized stable
  target message and original conversation, with bounded owner-validated data;
  arbitrary quoted text/native paths cannot grant access. Reactions are explicit
  shared mutations with an advertised owner, authenticated actor and stable target.
  Publish only to interested authorized subscribers; neither reactions nor late
  quote reads may overwrite another conversation's unsent draft. Standard AHP
  file-anchored annotations are not an interchangeable message-reaction fallback.

The added official-schema fixtures validate model control wire shapes and an
arbitrary configuration identity. They do not prove runtime mutability, offered
model entitlement or model calls. The result fixtures deliberately permit both
accepted handling with a downstream refusal and an unknown asynchronous job;
JSON shape alone cannot classify effect outcomes. Operations owns message semantics,
native ACP/bridge owns model semantics, host owns admission/publication and the
client kit owns transport. The live preview's original unknown bundle/Smart Tool
commands are not executed or replayed by this audit.

### Approved native message-owner alignment

The coordinator approved a bounded, lazily opened per-selected-session adjunct
SQLite annotation/receipt sidecar. Passive reads create no database. It does not
rewrite canonical transcripts or become a new native history/resume authority.
The native message owner supplies the actual schema and implementation; this
registry does not introduce a general message protocol or duplicate that schema.

Native references use `{messageId, position, historyEpoch}` with an optional
verified digest. Appending history preserves an existing reference; a reset or
incompatible history epoch makes it stale. Trusted actor identity is injected by
the authenticated host/native bridge, never taken from caller arguments. Reaction
changes set the desired `present` value for that actor rather than toggle another
actor's aggregate state. Explicit send validates and freezes a quote bounded to
4,000 characters; selecting or clearing it locally makes zero RPC calls.

Native `_amplifier/message/{reaction,read,receipt}` remains native-owner namespace.
The bridge advertises product `message.reaction`, `message.read` and
`message.receipt` only after their actual implementation is negotiated. There is
no backend `message.reply` action. A generic ACP/AHP peer without this optional
support keeps ordinary chat; clients retain local quote drafting and expose the
missing shared mutation explicitly. Exact receipt lookup is passive and never
replays a reaction or prompt. Handshake markers describe support, not permission
or successful account/runtime qualification. Native/bridge installed tests and
two-client/browser privacy checks still supply the behavior evidence.
