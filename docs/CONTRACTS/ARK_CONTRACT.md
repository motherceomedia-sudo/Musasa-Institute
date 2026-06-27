# ARK — Repository Contract

Name: Ark

Purpose
-------
Ark is the trusted infrastructure repository for the Vins OS ecosystem. Ark owns the runtime, the canonical engine implementations, core security primitives, memory primitives, and the rendering engine implementations. Ark is infrastructure — not an application or marketplace.

Public responsibilities
-----------------------
- Implement, version, and maintain core Engines (Matter, Ecology, Temporal, Camera, Story, Character, Rendering primitives) and runtime orchestration.
- Maintain security and memory primitives, including secure storage patterns and credentials handling guidelines.
- Publish engine releases and interface documentation for engine consumers.
- Provide stable runtime libraries and adapters for other repositories to consume shared engines.

Owns
-----
- Engines (canonical implementations)
- Runtime orchestration and integration
- Core security primitives and policies
- Memory implementations and storage adapters
- Rendering primitives (low-level rendering engine code)

Does Not Own
------------
- Marketplace, distribution, or publishing (Tsoro)
- Research and exploratory models/experiments (Musasa Institute or research repos)
- End-user content or published HTML artifacts (Tsoro / Cradle)
- Application-level UX, templates, or business logic — these belong to Cradle, Tsoro, or other app repos

Connected nodes
---------------
- Musasa Institute (governance and ADRs)
- Cradle (creation and authoring)
- Tsoro (publishing and marketplace)
- Dombo (local/offline runtime adaptations)

What it may do
--------------
- Expose engine APIs and SDKs for consumption by other repositories.
- Publish engine versioned releases and changelogs.
- Provide secure runtime deployment guidance and reference implementations.

What it must never do
---------------------
- Host or operate a public marketplace or perform publishing of third-party user content.
- Contain repository-specific business logic or application content intended for direct public consumption.
- Merge breaking API changes without ADR and owner approval.

Publishing rights
-----------------
- May publish engine releases and artifacts (with semantic versioning and release notes).
- May publish security guidance and runtime reference materials.

Dependencies
------------
- Relies on Musasa Institute for governance/ADR decisions impacting engine ownership and interfaces.
- Relies on engine owners and downstream repos to accept and integrate engine versions.

Owners & Contacts
-----------------
- Repository owner(s): Ark team (owners listed in docs/ENGINE_OWNERS.md)
- Security contact: (listed in repository security/contact file)

Pre-merge checklist (for engine or runtime changes)
--------------------------------------------------
- [ ] ADR created for any breaking change in engine contracts
- [ ] Engine owners and downstream consumers notified
- [ ] Compatibility tests and migration guidance provided
- [ ] Human sign-off from engine owners before merge

Notes
-----
- Ark is infrastructure. Keep implementation code focused, well-tested, and versioned. Treat any change to engine interfaces as an architecture-level event that requires an ADR and coordinated migration plan.
