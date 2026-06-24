# CONTRIBUTING — DRAFT

Version: v1.0
Author: Evans Musasa
Contact: musasainstitute@gmail.com
Date: 2026-06-24

Status: Draft — Architecture Governance

Purpose
-------
This document guides contributors (human and AI) on how to propose changes to the Musasa Institute's architecture repository. It focuses on governance-first workflows and ensures that proposals respect repository responsibilities and engine ownership.

Key Rules
---------
1. Governance First: Every PR must reference the dependency chain and identify which layer(s) it touches.
2. No Implementation: Do not add code, algorithms, pipelines, or engine internals to this repository. Keep proposals to policy and architecture.
3. Draft PRs: Use draft pull requests for initial discussion. Mark all architecture files with "Status: Draft — Architecture Governance".
4. No CODEOWNERS yet: Do not add CODEOWNERS or enforce rigid review rules at this stage. That will come after repository and engine contracts are finalized.
5. PR Checklist: Include these items in PR descriptions for architecture changes:
   - Which constitutional documents are referenced?
   - Which repository owns the responsibility?
   - Which engine (if any) is affected and has been notified?
   - Definition of Done mapping (architectural checklist)
   - Any sensitive details that must remain private (listed as external private appendix with a reference ID)

Proposing Changes
-----------------
- Step 1: Create or update the draft document(s) on the builder-bible/initial branch.
- Step 2: Open a Draft PR describing the change and complete the PR Checklist above.
- Step 3: Engage engine owners and Ark representatives for review.

Communication & Notifications
-----------------------------
- Notify engine owners listed in ENGINE_OWNERS.md when proposals affect their engine contracts.
- Maintain an ADR (architecture decision record) folder for important decisions.

Testing & Validation
--------------------
- This repository will not host implementation tests. Instead, proposals should include a testing strategy describing how consumers will validate conformance once implementation begins.

