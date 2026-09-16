# MUSASA π∞ Q∞ INSTITUTE - BUILDER BIBLE EXTENSION

**Public Gateway UX, Accessibility & Anti-Hallucination Constitution**

**Status:** Mandatory Builder Specification  
**Scope:** Musasa Institute Public Gateway / Path A  
**Architecture:** Cradle / Tsoro / Dura / Dombo / VINS OS ARK  
**Epoch:** 2076  

> **Prime Directive:** "A person should not need to understand the machine in order to use the machine."

## I. SOURCE OF TRUTH

**The actual repository is the source of truth.**

Agent memory, previous summaries, and previous chat messages are NOT authoritative.

**Before modifying:** Inspect actual files. Verify features exist.

If not found: Report as "NOT FOUND" — do not fabricate.

## II. ANTI-HALLUCINATION RULES (MANDATORY)

**01 — INSPECT BEFORE EDIT**
- Inspect existing implementation before changing
- Determine if equivalent already exists

**02 — NO INVENTED IMPLEMENTATION**
Never invent: files, functions, APIs, dependencies, test results, accessibility claims, browser capabilities.

**03 — IMPLEMENTED ≠ VERIFIED**

Status levels:
- REQUIRED
- IMPLEMENTED
- VERIFIED ← Only this = complete
- FAILED / BLOCKED / NOT IMPLEMENTED / UNVERIFIED

**04 — EVIDENCE FOR CLAIMS**
Every claim must cite: file path + verification method + result.

**05 — BUILD AFTER CHANGES**
Run build → inspect output → fix errors → rerun.
Never claim success without actual build passing.

**06 — FAIL HONESTLY**
Report: what changed, what verified, what remains, what failed.

**07 — MINIMAL CHANGE**
Modify existing, don't create parallels. Preserve functionality.

## III. PUBLIC GATEWAY PRINCIPLE

**Deep architecture underneath. Simple doorway above.**

The gateway is the front door. It is NOT the entire system.

Behind it exist: π∞, Q∞, Uremu, Tsapi, Hakata, .pora, Cradle, Tsoro, Dura, Dombo, VINS OS ARK.

First-time visitors MUST NOT understand these concepts.

## IV. INFORMATION HIERARCHY

First contact should answer:
1. Where am I?
2. What can I do?
3. How do I communicate?
4. How do I change language?
5. How do I make it accessible?

**Entry points:** TAURA (Speak) / TSVAGA (Search) / DZIDZA (Learn) / VAKA (Build)

**Secondary:** MUTAURO (Language) / ACCESSIBILITY

Do not expose full ontology on first screen.

## V. PROGRESSIVE DISCLOSURE

Introduce Musasa like a growing terrarium:

```
ENTRY → FAMILIARITY → PERSONAL INTEREST → TOOLS → LEXICON → CONTRIBUTION → DURA
```

No forced complexity. No unexplained terminology for beginners.

## VI. ACCESSIBILITY IS CORE ARCHITECTURE

**VISUAL:** Scalable fonts (125%+), high contrast, 44px+ buttons, visible focus, no color-only info

**AUDIO:** Never mandatory. Always text alternative. Optional enrichment only.

**HAPTIC:** Optional. Failure never breaks functionality.

**KEYBOARD:** All actions reachable via keyboard. Logical tab order.

**SCREEN READERS:** Native HTML buttons, nav, main, header. No clickable divs. ARIA labels when needed.

**VOICE:** Where platform supports.

## VII. ELDERLY-FIRST TEST

Usable by older first-time visitors.

**Avoid:** Tiny text, unexplained abbreviations, rapid animations, timed interactions, modal chains.

**Provide:** Adjustable text (120-200%), plain language, 4.5:1 contrast, 44px targets, predictable nav, voice options.

Do not infantilise. Simplify without being childish.

## VIII. BLIND / LOW-VISION TEST

Every visual state must have text equivalent. Decorative elements must not confuse screen readers.

## IX. DEAF / HARD-OF-HEARING TEST

No critical function depends on audio. If audio signals state: provide visual + text + optional haptic alternatives.

## X. USERS WITHOUT ARMS / MOTOR IMPAIRMENTS

No mandatory: drag-drop, swipe-only, tiny buttons, timed gestures, rapid taps, hover-only.

Support: keyboard, switch control, voice, eye-gaze, assistive pointers.

Highly visible focus indicators.

## XI. PAN-AFRICAN LANGUAGE MATRIX

Language selector = first-class control.

Use accurate terminology: "Pan-African Language Matrix" (not "all languages").

Pursue zero-pivot principle: User language → semantic → response (not via English).

No technical NLP jargon in UI.

## XII. MUSASA ECOLOGY BOUNDARIES

| Layer | Purpose | Scope | Language |
|---|---|---|---|
| **PUBLIC GATEWAY** | Welcome, search, learn, contribute | First-time visitors | Plain |
| **CRADLE** | Hardware, compute, infrastructure | Hardware builders | Technical |
| **TSORO** | Hakata, economics, experimentation | Economists, researchers | Technical |
| **DURA** | Knowledge, archive, memory | All authenticated | Mixed |
| **DOMBO** | Offline vault, protection, durability | Private users | Technical + ceremonial |
| **VINS OS ARK** | Private, experimental, advanced | Founder + core team | Technical + esoteric |

**VINS OS ARK hidden from Public Gateway unless explicitly requested.**

## XIII. SCIENTIFIC CLAIM DISCIPLINE

Distinguish:
- **ESTABLISHED** — Accepted evidence
- **EXPERIMENTAL** — Currently testing
- **HYPOTHESIS** — Proposed, needs testing
- **DESIGN SPECIFICATION** — Intended architecture
- **SYMBOLIC / CULTURAL** — Cultural/artistic framework
- **UNVERIFIED** — No sufficient evidence

Never represent experimental as established physical law.

## XIV. AI AGENT WORKFLOW

**PHASE 1 — DISCOVER:** Inspect repo structure, configs, files, components, styles, tests, build scripts.

**PHASE 2 — PLAN:** Short plan. List files to modify. List files NOT to modify.

**PHASE 3 — IMPLEMENT:** Smallest coherent change.

**PHASE 4 — VERIFY:** Run build, tests, type checks, lint.

**PHASE 5 — AUDIT:** Check accessibility, responsive, regressions, errors, missing imports, broken routes, untranslated strings.

**PHASE 6 — REPORT:**

| Requirement | Status | Evidence |
|---|---|---|
| Feature A | VERIFIED | file + test |
| Feature B | IMPLEMENTED | file, not tested |
| Feature C | BLOCKED | reason |
| Feature D | NOT FOUND | inspection |

Never convert IMPLEMENTED → VERIFIED without evidence.

## XV. UI COMPLEXITY BUDGET

When adding feature, ask:
1. Does first-time visitor need this?
2. Does elderly visitor understand it?
3. Can screen reader understand it?
4. Can user operate without hands?
5. Can interface explain without Musasa vocab?
6. Can it move deeper into ecosystem?

If #1 = NO → prefer progressive disclosure.

Gateway becomes simpler as capability increases, never cluttered.

## XVI. DEFINITION OF DONE

Feature is DONE only when:

- ✅ Exists in actual repository
- ✅ Integrates with existing architecture
- ✅ No unnecessary duplication
- ✅ Project builds successfully after change
- ✅ Relevant tests pass
- ✅ Accessibility checked
- ✅ Responsive behaviour considered
- ✅ No unsupported claims presented as facts
- ✅ Agent can identify implementing files
- ✅ Agent can identify verification evidence

If ANY unknown: STATUS = UNVERIFIED

## XVII. BUILDER ACCOUNTABILITY

Every agent working on Musasa acknowledges:

- ✋ I will not invent features
- ✋ I will not misrepresent incomplete work
- ✋ I will not prioritise beauty over accessibility
- ✋ I will not expose complexity to first-time visitors
- ✋ I will not claim completion without verification
- ✋ I will test against elderly, blind, deaf, motor-impaired users
- ✋ I will report honestly when blocked
- ✋ I will preserve what already works

**This constitution protects the people using Musasa.**

**It also protects builders from making harmful mistakes.**

---

**Author:** Evans Musasa / Musasa Institute  
**Epoch:** 2076  
**Commitment:** Unhu, Uremu, Ubuntu
