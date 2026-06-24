# ENGINE_OWNERS — DRAFT

Version: v1.0
Author: Evans Musasa
Contact: musasainstitute@gmail.com
Date: 2026-06-24

Status: Draft — Architecture Governance

Purpose
-------
This registry lists canonical engines, their assigned owners, and minimal expectations for consumers. It does not contain implementation details; instead it names owners and the contract-level expectations: API surface, versioning policy, contact points, and acceptance tests.

Engine Ownership Registry
-------------------------
- Matter — Owner: Ark
  - Responsibilities: core matter simulation, deterministic data model
  - Expectations: published API contract, versioned releases, conformance tests

- Ecology — Owner: Ark
  - Responsibilities: environmental simulation, state transitions
  - Expectations: stable contract, event schema, replayability guarantees

- Temporal — Owner: Ark
  - Responsibilities: chronology, timestamps, event ordering
  - Expectations: canonical time model, provenance headers

- Camera — Owner: Ark
  - Responsibilities: camera model, view transforms

- Story — Owner: Ark
  - Responsibilities: narrative composition

- Character — Owner: Ark
  - Responsibilities: character models, behavior primitives

- Rendering — Owner: Moya Maru
  - Responsibilities: optics mapping, material simulation

- Translation — Owner: ITL
  - Responsibilities: ITL translation pipelines, format mediation

- Memory — Owner: DURA
  - Responsibilities: chronology-backed memory store, retrieval semantics

- Navigation — Owner: Mawuya
  - Responsibilities: routing, discovery, network topologies

- Research — Owner: Soko
  - Responsibilities: research indexing, retrieval, library orchestration

- Creation — Owner: Marember
  - Responsibilities: content creation, sintering, .pora generation

Owner Expectations
------------------
- Each engine owner is expected to publish an Engine Contract referenced by name and semantic version. The Engine Contract MUST include:
  - API surface (endpoints / messages)
  - Input/output schemas
  - Versioning and deprecation policy
  - Conformance test suite or acceptance criteria
  - Contact or team identifier for review

Consumer Guidance
-----------------
- Consumers MUST not reimplement engine internals. If an engine is unavailable, open a repository-level issue requesting the engine owner to publish a compatibility shim or contract.
- All consumption must reference the Engine Contract version used.

