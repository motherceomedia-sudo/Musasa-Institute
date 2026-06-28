# Schemas

Shared type definitions and JSON schemas for all runtime modules and engines.

**Status:** Placeholder - implementation pending

## Responsibilities

- Define canonical TypeScript interfaces for all runtime types
- Provide JSON Schema validation contracts
- Document semantic structure standards
- Enable type-safe integration across all modules and engines

## Exports

- `SemanticSeed` — Semantic entity definition
- `SemanticRelationship` — Connection between semantic seeds
- `ITLDocument` — Intermediate Template Language structure
- `PoraDocument` — Binary serialization format
- `LibraryRecord` — Canonical Library entry
- `TranslationResult` — Multi-language rendering output
- Additional types as engines come online

## Dependencies

- None (foundational schemas)

## Consumers

- semantic-seed-vault (SemanticSeed, SemanticRelationship)
- itl (ITLDocument)
- pora (PoraDocument)
- library (LibraryRecord)
- marember (TranslationResult)
- Camera Engine (observation schemas)
- Audio Engine (acoustic schemas)
- Story Engine (narrative schemas)
- Publishing Engine (output schemas)
- All future engines

## Design Principles

1. **Interface-First** — All types defined before implementation
2. **Language-Agnostic** — Schemas represent meaning, not language
3. **Versioned** — Schema versions track evolution
4. **Documented** — Every type includes usage examples
5. **Extensible** — Engines can extend base schemas without modification

## Interface (TBD)

```typescript
// To be implemented
```
