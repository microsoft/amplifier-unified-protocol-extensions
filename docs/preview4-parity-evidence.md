# Preview 4 parity evidence — October 3, 2026

This checkpoint records delivered behavior and its acceptance limits. It changes
no wire schema, capability permission, upstream AHP/ACP semantics or native schema
ownership. The [extension contract](extensions.v1.md) and
[conformance boundaries](conformance.md) remain authoritative. Post-checkpoint
owner fixes need successor evidence; they are not silently credited to Preview 4.

## Exact checkpoint and evidence levels

Root reported Preview 4 active and settled after normal integration
[PR334](https://github.com/microsoft/amplifier-unified/pull/334), merge
`621d1e057e6cf5a111f02b73640d5471f145bcbe`, release digest
`de178d73c8372682ce4a167e47c1d4c6ea14ecadc530291102abdb17ff23e977`.
This documentation lane read the Root handoff; it did not inspect the live
supervisor or rerun browser/account calls. The exact 21 component entries and
hashed owner/independent receipts are in [the evidence index](preview4-evidence.json).
The [source component graph](https://github.com/microsoft/amplifier-unified/blob/6fd808cd28a531fc4dbee69f70dbeb643d9d1080/distribution/components.json)
provides source/package identity, not a functional qualification for every row.

| Evidence | What it establishes | Limit |
| --- | --- | --- |
| Source/schema checks | Declared shapes, source regressions and generated bindings | Does not establish authorization, installed code or a rendered control |
| Exact installed owner packages | Named package bytes and the tested producer/consumer behavior | Does not establish all configured owners or the live graph |
| Installed web browser fixture | Explicit controls through exact web `ed9596e`, native `ab35c1c`, host `5d469`, bridge `86bdb4a` | Root fixture `fbb7046` predates final Preview4; offline provider, no physical device/account |
| Public payload/cold runtime receipts | Exact root graph, component bytes and bounded named runtime launches | Does not qualify every provider, future launch or every legacy control; retained source-currency exceptions remain explicit |
| Root-reported live Preview4 observations | OpenAI inference, saved model selection, a saved reaction, configured voice key, nine installed tools | Anthropic quoted inference failed; voice audio, tool connections and broad controls remain unqualified |

Receipt IDs below identify the hashed records, not new tests run by this docs
change. Sealed archives remain unchanged; this document is a source successor.

## Message rows and residual boundaries

| Ledger row | Proposed status | Evidence and remaining acceptance |
| --- | --- | --- |
| F26.01 private quote select/clear | `qualified-offline-browser` | `web-installed-browser` proves zero protocol frames, quote/text reload after committed private storage, and no quote exposure in the second browser. Source scope guards retain the original conversation. Only messages with native canonical references are actionable; archived/unreferenced history stays viewing-only. Immediate reload before the existing storage debounce commits is outside the receipt. |
| F26.02 explicit retained reply send | `partial` | `web-installed-browser` and `host-final-native-consumer` prove reference-only explicit send, native-frozen quote, original input and passive original receipt inspection in offline fixtures. `bridge-independent-installed` proves corrected uncertain composition behavior. Root selected Anthropic, but quoted inference failed thinking-signature validation. Older selected history lacks canonical references/settled marker; backfill and provider successor acceptance remain open. |
| F26.03 authenticated shared reactions | `partial` | Exact installed browser fixture proves two viewers sharing account counts/choice, desired-present no-op, bounded reads and lost-ack recovery without replay. Native/host consumer binds trusted principal and passive effects. Root reports one saved thumbs-up. Older selected history, broader live multi-actor removal and TUI controls remain separate acceptance. |

Selecting/clearing a quote remains private. Explicit send preserves the original
conversation and input identity; the native owner validates and freezes the
bounded canonical quote. Product `message.*` calls require actual negotiation;
native `_amplifier/message/*` remains native-owned. No backend `message.reply`
method is introduced. `accepted` is not execution; a failure is a known no-effect
refusal only with authoritative correlated proof. Unknown inputs/receipts remain
inspectable under their original identities without replay.

Historical reference backfill must be selected and bounded, preserve canonical
history, drafts and original receipts, and start no dormant worker or prompt.
No global scan, polling inventory or second history authority is required by this
checkpoint. A completed refresh implementation is not deployed acceptance until
its exact package and selected old-history browser case are qualified.

## Other delivered controls do not erase missing cases

| Rows | Preview4 evidence | Remaining functional controls / owner |
| --- | --- | --- |
| F04.12, F04.14, F04.27 | Standard ACP `configOptions`/`session/set_config_option` supports actual model selection; Root confirmed saved Anthropic selection and OpenAI baseline inference | Provider editor refresh/loading/manual fallback remains distinct. Native owner repairs foreign thinking transport; Root must qualify the exact installed successor and real inference. Arbitrary advertised config IDs remain opaque. |
| F02.01–F02.04 | Exact media `d08ade3` Node/Python artifacts and six independent installed cases preserve honest post-save uncertainty; Root reports key configured | Configured key is not validated audio. Preferred/fallback defaults are future-call preferences; automatic fallback, active-call guards, microphone/audio and real provider call require media/Root/device acceptance. |
| F11.12–F11.24 | Root reports nine installed packages; exact MCP `209bc85`/archive `794cea9` corrects descriptor dispatch | Installed is not connected or ready. All nine currently show setup information needed; no supported author-provided MCP setup is inferred when the catalog supplies none. This does not imply a tool lacks a CLI or another adapter. Catalog/MCP own source-exact setup guidance; web owns explicit configure/connect forms. Form/schema/disconnect/account variants remain unqualified. |
| F16.01, F16.05 | Native archive coverage includes message metadata storage | Operations and each storage owner must complete full-product coverage and private-data disclosure. A native database inclusion or green owner suite is not a complete backup. |
| F21.04 | Agent selection and host defaults are available | Bundle/provider/model CLI override flags remain unimplemented. TUI owner decides/implements explicit advertised support; protocol docs do not invent flags. |
| F23.10 and related draft controls | Existing private draft fixtures establish specific saved controls | New draft alias/capture repair needs an exact successor receipt. Preserve per-conversation private text, quote and uncertain input through navigation/reload. Client kit/web own the implementation. |

The broader 331-row ledger still contains individual UI states, validation,
scoped module editors, setup/attention, import/export, reset and update controls
without exact acceptance. These retain their prior status and owner. Root's
performance, cold-fork projection, selected catalog keyset and historical refresh
work are separately owned successors, not completed by this registry document.

## Minimal hot state and the six F18 decisions

F18.01–F18.06 remain `decision-pending`, unchanged. Current bounded capacity/idle
policy is not legacy writable warm-count, idle-hours or prewarm settings. The
approved direction favors minimal hot state, selected bounded detail and dormant
workers. Reintroducing automatic prewarm merely to satisfy legacy checkboxes is
not authorized. Retiring these controls is also a product decision: the morning
review must choose whether each remains optional, is replaced by current policy,
or is explicitly retired, with its owner and acceptance boundary. No overnight
question or assumed retirement is needed to continue other work.

## Ledger update accounting

The candidate preserves all 331 IDs, requirements, legacy locations and proposed
owners. It changes three status cells: F26.01 from gap to offline browser
qualified, F26.02/F26.03 from gap to partial. Fourteen other rows gain evidence
limits without status promotion. Counts become 113 `qualified-offline-browser`,
136 `implemented-unqualified`, 76 `partial`, 6 `decision-pending`, 0 `gap`.
Zero rows labeled gap does not mean parity: 218 rows retain partial, unqualified
or pending status, and qualified rows retain their explicit limits.

The separate Root CSV patch is based on baseline SHA256
`d0c6a0e01aab94375ae8767a87d9fdcdc61758e635dd4b5a18fa54ec52d5fcc0`.
Root must inspect changes against its current ledger and apply only without
clobbering concurrent owner updates. Local CSV/link/diff checks qualify this
documentation update; runtime suites were not rerun because runtime is unchanged.
