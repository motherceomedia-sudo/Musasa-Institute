# BUILDER_BIBLE — DRAFT

Version: v1.0
Author: Evans Musasa
Contact: musasainstitute@gmail.com
Date: 2026-06-24

Status: DRAFT — This document is an initial repository-level draft of the VINS OS Builder Bible. It is intended for internal review. Do not treat as final.

---

Overview
========

Purpose
-------
This Builder Bible defines implementation rules for AI agents and contributors within the Vins OS ecosystem. It is a prescriptive guide that ensures architectural consistency, shared engine usage, chronology preservation, and .pora compatibility.

Scope
-----
This document applies to all repositories under the Musasa Institute umbrella and to interactions with the ARK runtime and other engines defined in the Engine Ownership registry. It is not an operational specification for runtime code, but a governance and design contract.

Rule Zero
---------
An AI is not building applications. An AI is cultivating a living ecosystem. Every feature must strengthen the organism rather than merely add functionality. If a proposed feature does not reinforce the ecosystem, it should not be built.

System Hierarchy
----------------
The topology of the ecosystem (informational):

ARK Runtime
    │
    ▼
Musasa Institute
    │
 ┌──────┼─────────┐
 │      │         │
 ▼      ▼         ▼
Cradle  Tsoro   Dombo

No repository owns another. The Ark powers them all. The Musasa Institute introduces them all.

Repository Responsibilities
---------------------------
Every repository has exactly one responsibility.

Ark
- Never build public pages here.
- Contains: Runtime, Engines, Rendering, ITL, Memory, Security.

Musasa Institute
- Never become an IDE. Never become a marketplace.
- Responsibilities: Research, Documentation, Learning, Public Archive, Community, Gateway into the ecosystem.

Cradle Hub
- Never become a library. Never become the marketplace.
- Responsibilities: Creation, Editing, Translation, Media, Publishing Workspace.

Tsoro
- Never generate media. Never edit documents.
- Responsibilities: Publishing, Commerce, Templates, Applications, Businesses, Distribution.

Dombo
- Never become cloud dependent.
- Responsibilities: Offline Computing, Personal Vault, Local AI, Synchronization.

Node Communication Rules
------------------------
Repositories communicate through defined interfaces. Never duplicate logic.

Example flow:
Musasa → Open Cradle → Create .pora → Publish to Tsoro → Archive in Musasa

Engine Ownership
----------------
Every engine has exactly one owner. No repository may recreate an engine locally — always consume shared engines.

| Engine | Owner |
|--------|-------|
| Matter | Ark |
| Ecology | Ark |
| Temporal | Ark |
| Camera | Ark |
| Story | Ark |
| Character | Ark |
| Rendering | Moya Maru |
| Translation | ITL |
| Memory | DURA |
| Navigation | Mawuya |
| Research | Soko |
| Creation | Marember |

Folder Structure
----------------
Every repository follows the same structure (canonical):

/docs
/public
/src
/components
/engines
/services
/assets
/contracts
/tests
/pora
/publish

Consistency is more valuable than cleverness.

Component Rules
---------------
Components are living material.
Avoid:
- Floating cards
- Flat gradients
- Sharp containers

Prefer:
- Material surfaces
- Velvet transitions
- Biological layering
- Continuous depth
- Responsive light

The interface should feel cultivated rather than assembled.

Rendering Rules
---------------
The renderer never draws UI. The renderer simulates matter.
Rendering pipeline:
Matter → Ecology → Optics → Time → Interaction → Camera → User Perception
Never reverse this order.

Interaction Rules
-----------------
Buttons are a fallback. Preferred interactions: Touch, Pressure, Motion, Proximity, Voice, Chronology.

Marember Rules
--------------
Marember never edits files directly.
Workflow: Upload → ITL Translation → .pora → Conversation → Live IDE → Chronology → Publish
Every edit remains reversible. Every artifact retains complete history.

ITL Rules
---------
Everything becomes .pora.
Supported inputs: Images, Video, Audio, PDF, Office Documents, HTML, Scientific Data, Medical Reports, CAD, Research
Output: One universal representation — .pora

Memory Rules
------------
Nothing disappears. Everything records chronology. Never reset living systems without explicit user instruction.

Publishing Rules
----------------
One artifact. Many destinations. Possible destinations: Musasa Institute, Tsoro, Cradle Library, Dombo.
Publishing changes visibility. It never changes identity.

AI Behaviour Rules
------------------
An AI should never invent architecture. If uncertain: Read the Constitution, Read the Repository Contract, Read the Engine Contract. Only then generate implementation.

Definition of Done
------------------
A feature is complete only when:
- Architecture remains consistent
- Shared engines are reused
- Chronology is preserved
- .pora compatibility exists
- Offline support maintained
- Material philosophy preserved
- Ecosystem strengthened

Final Builder Directive
-----------------------
Build as though every component will still be evolving fifty years from now. Do not optimize for novelty. Optimize for continuity.

---

Appendix: Draft Notes & Next Steps
=================================
This draft was created to capture the initial Builder Bible text provided by the Institute custodian and to begin the operationalization process. The following low-risk actions are recommended as follow-ups:

- Create ENGINE_OWNERS.md to formalize engine contacts and API expectations.
- Create CONTRIBUTING.md describing reviewer flows and CODEOWNERS guidance.
- Create CI_POLICY.md with concrete checks and example pipeline YAML (kept minimal and non-invasive).

