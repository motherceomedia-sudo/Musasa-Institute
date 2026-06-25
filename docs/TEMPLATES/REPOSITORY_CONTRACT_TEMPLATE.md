# Repository Contract Template

This template is a short, per-repository contract that declares the repository's canonical responsibility, owners, interfaces, and governance pointers. Keep this file small — 1–2 pages. Link to the canonical Builder Bible rather than duplicating it.

Name: <repository-name>

Responsibility
--------------
One-sentence statement of the repository's single responsibility. Example: "Provide the public archive of canonical architecture documents for the Vins OS ecosystem." Keep it focused.

Owners
------
- Repository owner(s):
- Contact (email / GitHub handles):
- Engine owners (if the repository hosts or coordinates engines used here):

Interfaces & Contracts
----------------------
- External APIs provided (brief):
- Consumed shared engines (list engine names and owner as in docs/ENGINE_OWNERS.md):
- Expected inputs and outputs (brief):

Repository structure
--------------------
List of main folders and their purpose (brief):
- /docs — documentation (link to canonical docs)
- /src — implementation
- /engines — local engine integration adapters (should be thin)
- /contracts — repository and engine contracts

Governance Links
----------------
- Canonical Builder Bible: https://github.com/motherceomedia-sudo/Musasa-Institute/blob/main/docs/BUILDER_BIBLE.md
- Engine Owners registry: https://github.com/motherceomedia-sudo/Musasa-Institute/blob/main/docs/ENGINE_OWNERS.md
- ADRs (repository-specific ADRs should live under docs/ADRs/): docs/ADRs/

Local Exceptions
----------------
List any approved exceptions to the Builder Bible that apply to this repository, with links to ADRs that authorize them.

Pre-merge Checklist (add to PR template or require confirmation in PRs)
--------------------------------------------------------------------
- [ ] Repository ownership declared and correct
- [ ] Engine ownership declared and correct (if applicable)
- [ ] PR references ADR(s) for architectural decisions that affect this repository
- [ ] No duplicate engines or functionality is introduced without explicit engine owner approval
- [ ] Canonical documents consulted: list which (Builder Bible, Engine Owners, Roadmap, AI Governance)
- [ ] .pora compatibility considered (or deferred with reason)
- [ ] Sensitive/proprietary content excluded from public PR

Acceptance Criteria
-------------------
Provide one or two bullet points that define when a change to this repository is considered complete and acceptable under governance (e.g., "All new components are backed by an ADR or referenced canonical doc").

Change Log / History
--------------------
Record links to the Builder Bible releases and important ADRs that affected this repository. Example:
- v1.0-constitution — https://github.com/motherceomedia-sudo/Musasa-Institute/releases/tag/v1.0-constitution

Notes
-----
- Keep this file concise and link-heavy. Avoid copying governance text into each repo. Use ADRs for decisions and the Builder Bible for canonical rules.

