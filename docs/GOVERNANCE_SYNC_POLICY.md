# Governance Sync Policy

Purpose
-------
This policy defines the workflow for keeping per-repository contracts and documentation in sync with the canonical Builder Bible and governance artifacts maintained in the Musasa Institute repository.

When to run this workflow
-------------------------
- When an ADR changes the Builder Bible in a way that affects repository responsibilities.
- When a new engine is introduced or an engine owner changes.
- When a governance release (e.g., v1.0-constitution) is published.

Workflow
--------
1. Create an ADR in Musasa Institute describing the governance change, its rationale, and affected artifacts.
2. Publish a governance release (annotated tag + GitHub Release) that bundles the acceptance and links the ADR(s).
3. Notify repository owners (listed in docs/ENGINE_OWNERS.md and repository contracts) with the ADR and release link.
4. For each affected repository, open a Draft PR that:
   - Updates docs/REPOSITORY_CONTRACT.md (or creates it) with the new references or changes.
   - Adds an entry to docs/ADRs/ describing repository-local consequences if needed.
   - Includes the PR template checklist items for reviewers to confirm compliance.
5. Assign engine owners and repository owners as required reviewers. Do not merge Repository Contract PRs without at least one owner sign-off.
6. Once PRs are merged, update the central RELEASES/ entry and ADR to list the updated repositories and PR URLs.

Responsibility
--------------
- Musasa Institute maintainers: author ADRs, publish governance releases, and coordinate the sync.
- Repository owners: apply contract updates in their repos and review PRs opened against their repositories.
- Engine owners: review changes that affect engine interfaces or require engine updates.

Exceptions & Fast-path
----------------------
For urgent security fixes or critical runtime patches that must be applied immediately, a fast-path exception may be used:
- Create a private incident ADR describing the fix and rationale.
- Apply the patch with minimal public disclosure and then open a follow-up Draft PR that documents the change and links the incident ADR.
- The fast-path must be reported to the governance board within 72 hours and reconciled with the canonical Builder Bible.

Tooling
-------
- Manual: preferred in early governance stages — humans open Draft PRs and review.
- Semi-automated: a bot can open Draft PRs with suggested changes, but humans must review and merge. Do not automate merges.

Versioning
----------
- Governance releases are versioned separately (e.g., v1.0-constitution). Per-repo code releases continue using normal semver.
- When a governance release is made, list the release tag in each affected repository's docs/REPOSITORY_CONTRACT.md for historical traceability.

