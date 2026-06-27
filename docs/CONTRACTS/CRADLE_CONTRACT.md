# CRADLE — Repository Contract

Name: Cradle

Purpose
-------
Cradle is the creation and editing environment: the workspace where authors, Marember, and creation tools craft source artifacts that will become .pora stones and subsequent published outputs. Cradle focuses on authoring, editing workflows, media processing, and generating canonical source artifacts.

Public responsibilities
-----------------------
- Provide tools, templates, and interfaces for content creation and editing.
- Host authoring workflows and UX guidelines for Marember and other creation agents.
- Export canonical source artifacts (intended to become .pora) and metadata for downstream rendering and publishing.
- Maintain content provenance and reversible edit histories.

Connected nodes
---------------
- Musasa Institute (governance and ADRs)
- Ark (engines and runtime primitives)
- Tsoro (publishing pipeline)
- Dombo (local editing / personal vault synchronization)

What it may do
--------------
- Provide local and collaborative editing features and media processing pipelines.
- Offer export/import adapters to and from shared engines (via Ark) for analytics, translation, and other transformations.
- Maintain a staged publishing queue for content intended for Tsoro.

What it must never do
---------------------
- Publish final public artifacts directly without passing through publishing governance and owner review for Tsoro (or other publish repos).
- Assume responsibility for execution runtime concerns (Ark owns runtime and engine implementations).
- Store secrets or proprietary engine internals in public areas.

Publishing rights
-----------------
- May stage content and open Draft PRs for publishing repos (e.g., Tsoro). Final publishing decisions and public release remain under Tsoro / repository owner control.

Dependencies
------------
- Relies on Ark for canonical engines and rendering primitives.
- Relies on Musasa Institute for governance, templates, and ADRs.

Owners & Contacts
-----------------
- Repository owner(s): Cradle maintainers (listed in docs/REPOSITORY_CONTRACT.md and engine registry)

Pre-merge checklist (for content/export PRs)
-------------------------------------------
- [ ] Source provenance included and hash attached
- [ ] Engine owners informed if exports rely on engine behaviour
- [ ] PR references relevant ADRs and Builder Bible sections
- [ ] No proprietary data included in public export

Notes
-----
- Cradle's key value is authoring fidelity and reversible edits. Keep edit histories intact and prioritize provenance and export fidelity over premature publishing.
