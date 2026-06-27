# DOMBO — Repository Contract

Name: Dombo

Purpose
-------
Dombo is the personal habitat: an offline-first repository focused on local storage, personal vaults, synchronization, and local rendering capabilities. Dombo prioritizes user sovereignty, local memory, and offline operation.

Public responsibilities
-----------------------
- Provide patterns and reference implementations for offline-first storage and synchronization.
- Host adapters for local rendering and local engines that operate within a user’s personal environment.
- Provide guidance for personal data management, export, and import workflows.

Connected nodes
---------------
- Musasa Institute (governance and ADRs)
- Ark (engine primitives and runtime guidance)
- Cradle (optional local authoring)
- Tsoro (optional syncing and distribution)

What it may do
--------------
- Offer local rendering pipelines and personal vaults for users.
- Provide synchronization adapters to upstream services when connectivity is available.
- Maintain privacy-preserving defaults and local-first capabilities.

What it must never do
---------------------
- Depend on central services for core functionality (Dombo must degrade gracefully offline).
- Leak private user data into public repositories or publishing channels.
- Assume ownership of published artifacts or marketplace functions.

Publishing rights
-----------------
- May publish tooling and reference implementations for local operation.
- May provide export tools that stage content for publishing (Tsoro) but must not auto-publish without user and governance consent.

Dependencies
------------
- Relies on Ark for engine primitives and guidance for local engine implementations.
- Relies on Musasa Institute for governance and ADR references.

Owners & Contacts
-----------------
- Repository owner(s): Dombo maintainers (listed in repo metadata)

Pre-merge checklist (for Dombo changes)
--------------------------------------
- [ ] Offline-first behavior verified
- [ ] No unintended external dependencies introduced
- [ ] Privacy and data protection guidance included

Notes
-----
- Dombo embodies local sovereignty. Design for low-bandwidth and offline resilience; keep synchronization optional and privacy-first.
