# MUSASA INSTITUTE — Repository Contract

Name: Musasa Institute

Purpose
-------
The Musasa Institute is the canonical public constitutional archive and governance hub for the Vins OS ecosystem. Its role is to hold, version, and publish the Builder Bible, ADRs, governance policies, engine ownership registries, and high-level architectural artifacts. It is the single source of truth for repository-level governance and architectural history.

Public responsibilities
-----------------------
- Maintain canonical governance documents (Builder Bible, AI Governance, Engine Owners, Roadmap).
- Author and store Architecture Decision Records (ADRs) for cross-repository and ecosystem-level decisions.
- Publish governance releases and canonical historical artifacts (RELEASES/ entries, annotated tags).
- Provide templates, policies, and guidance (Repository Contract template, PR templates, Governance Sync Policy).
- Act as the coordination point for governance sync activities and notifications to repository and engine owners.

Connected nodes
---------------
- Ark (infrastructure & engines)
- Cradle (authoring / creation workspaces)
- Tsoro (publishing / economic layer)
- Dombo (offline / personal habitat)
- All other repositories in the Vins OS ecosystem that reference canonical governance

What it may do
--------------
- Host and version canonical documents and templates.
- Publish governance releases (tags, release notes) that repositories reference.
- Open coordination PRs for governance-driven changes across repositories.
- Provide example contracts and recommended PR checklists.
- Propose Engine Contracts and higher-level specifications (subject to governance process and ADRs).

What it must never do
---------------------
- Serve as a runtime, marketplace, or engine host.
- Contain production implementation code intended to run as part of runtime engines.
- Store proprietary or secret implementation details that are not approved for public publishing.
- Automatically merge repository-level changes without human owner sign-off.

Publishing rights
-----------------
- May publish canonical governance releases and annotated tags (e.g., v1.0-constitution).
- May publish governance documentation and templates.
- May request repository owners to accept Repository Contract updates via Draft PRs; merges remain the responsibility of repository owners.

Dependencies
------------
- Relies on repository owners and engine owners to apply governance changes in their repositories.
- Relies on an authoritative contact list in docs/ENGINE_OWNERS.md and per-repo Repository Contracts for reviewer/owner contact points.

Owners & Contacts
-----------------
- Repository owner(s): Evans Musasa (musasainstitute@gmail.com / @motherceomedia-sudo)
- Governance Board: (TBD — list engine and repository owners in docs/ENGINE_OWNERS.md)

Pre-merge checklist (for governance changes)
--------------------------------------------
- [ ] ADR created and linked
- [ ] Governance release prepared (if accepting)
- [ ] Affected repositories identified and Draft PRs proposed (if applicable)
- [ ] Owners and reviewers notified

Notes
-----
- The Musasa Institute is intentionally governance-only. Implementation and runtime artifacts belong in their respective repositories (Ark, Cradle, Tsoro, Dombo, etc.).
