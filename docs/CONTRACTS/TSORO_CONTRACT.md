# TSORO — Repository Contract

Name: Tsoro

Purpose
-------
Tsoro is the economic and publishing layer for the Vins OS ecosystem. Its primary responsibilities are marketplace operations, publishing and distribution of finalized artifacts, and downstream archival coordination. Tsoro is focused on commerce, distribution, templates for publication, and ensuring discoverability and provenance for published artifacts.

Public responsibilities
-----------------------
- Host marketplace listings and publishing workflows for finalized artifacts.
- Manage distribution channels, licensing metadata, and purchase/transfer flows (where applicable).
- Provide publication templates, metadata schemas, and discoverability interfaces for published content.

Connected nodes
---------------
- Musasa Institute (governance and ADRs)
- Cradle (source content and staging)
- Ark (runtime and engine support where needed)
- Dombo (user sync and distribution to local habitats)

What it may do
--------------
- Publish finalized HTML, assets, and metadata to public or private channels.
- Offer monetization and distribution tooling for creators and organizations.
- Provide archival pointers back to Musasa Institute for canonical governance references.

What it must never do
---------------------
- Assume responsibility for engine implementations or runtime orchestration (Ark owns that).
- Publish content without required governance sign-offs and provenance documentation.
- Hold private secrets or proprietary data in public repositories without approved exceptions.

Publishing rights
-----------------
- Authorized to publish finalized artifacts, marketplace listings, and distribution metadata once governance checks and owner approvals are met.

Dependencies
------------
- Relies on Cradle for source artifacts and staging PRs.
- Relies on Musasa Institute for governance, ADRs, and release references.
- Relies on Ark for rendering primitives or engine behaviour if rendering is executed server-side.

Owners & Contacts
-----------------
- Repository owner(s): Tsoro maintainers (listed in repo CONTACTS and Engine Owners registry)

Pre-merge checklist (for publication PRs)
----------------------------------------
- [ ] Provenance and .pora metadata attached (if available)
- [ ] Governance ADRs referenced and sign-offs attached
- [ ] Engine owners (if rendering required) have reviewed
- [ ] Licensing and distribution metadata included

Notes
-----
- Tsoro is the gate for public distribution: keep publication rules strict, require provenance, and ensure discoverability links back to the Musasa Canon.
