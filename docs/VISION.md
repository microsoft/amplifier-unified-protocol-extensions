# Protocol extensions vision

Status: local statement of the approved family direction, inherited from the
[2026-10-02 family vision](https://github.com/microsoft/amplifier-unified/blob/625af2f2832fafc8152f6078061d626f160362a4/docs/architecture/VISION.md).
This document adds no ratified scope or runtime authority. It describes desired
outcomes; executable evidence and its limits live in [conformance](conformance.md).

Amplifier Unified protocol extensions gives independently built clients, hosts
and capability owners one public home for Unified-specific negotiated shapes,
versions, ownership references and generated bindings. People should be able to
use ordinary conversation when an optional capability is absent, and implementers
should be able to review a contract without loading a client or native runtime.

The desired outcomes are compatible mixed versions, explicit capability absence,
authenticated scope, bounded resource reads and truthful recovery of original
commands. A tiny resource update should require work only for that resource and
its subscribers. Schema validity must never be presented as permission, successful
execution or deployed adoption.

This repository owns the product extension registry, published JSON Schemas,
synthetic fixtures and generated TypeScript bindings. Standard AHP/ACP semantics
remain upstream-owned. Native ACP schemas belong to `amplifier-app-acp`; the host
and product owners enforce authorization, durable admission, reviews, receipts
and effect lifetimes. Clients own private drafts and presentation. The approved
[repository map](https://github.com/microsoft/amplifier-unified/blob/625af2f2832fafc8152f6078061d626f160362a4/docs/architecture/repositories.md) defines those boundaries.

Protocol forks, UI implementations, a second native history authority, execution
engines, automatic replay, deployment and resolution of pending product decisions
are outside this repository's scope. Cross-owner semantic changes require the
owning producer and consumers to agree on compatibility and acceptance before
integration; this document cannot approve them.

[Extension contract v1](extensions.v1.md) maps these inherited promises to consumer
obligations, falsifiers and existing checks. Unqualified runtime and adoption
boundaries stay visible even when every schema fixture passes.
