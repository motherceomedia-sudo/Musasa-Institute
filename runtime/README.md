# Ark Runtime Substrate

Portable runtime modules for the Musasa Institute ecosystem. These modules implement the Constitutional Architecture and will eventually migrate to the dedicated Ark runtime repository.

## Architecture

The runtime is organized around four core capabilities:

### Semantic Seed Vault
Knowledge representation layer. Stores canonical semantic entities, relationships, and meaning representations.

```
semantic-seed-vault/
├── entities/          # Semantic entity definitions
├── relationships/     # Relationship types and constraints
├── vault.ts          # Core vault implementation
└── index.ts
```

### ITL (Intermediate Template Language)
Canonical internal representation for all content. ITL is language-agnostic and serves as the bridge between input formats and the Canonical Library.

```
itl/
├── schema.ts         # ITL schema definition
├── parser.ts         # Parse various inputs into ITL
├── generator.ts      # Generate ITL from semantic data
└── index.ts
```

### .pora Serialization
Library persistence format. .pora is the canonical binary representation of content stored in the Canonical Library.

```
pora/
├── serializer.ts     # ITL → .pora
├── deserializer.ts   # .pora → ITL
├── schema.ts         # .pora format specification
└── index.ts
```

### Canonical Library Model
Dura: the single source of truth for all institutional knowledge.

```
library/
├── dura.ts           # Library core implementation
├── index.ts          # Storage and query interface
├── models/           # Library data models
└── queries/          # Query builder
```

### Marember
Constitutional Interpretation Layer for translation, localization, and semantic rendering.

```
marember/
├── translation/      # Zero-pivot translation pipeline
├── localization/     # Language-specific rendering
├── accessibility/    # Accessibility layer
├── semantic-vault/   # Semantic Seed Vault integration
└── index.ts
```

## Workflow

```
Upload
  ↓
ITL Generation (from input)
  ↓
Semantic Seed Vault Integration
  ↓
.pora Serialization
  ↓
Canonical Library Storage (Dura)
  ↓
Render → Translate → Publish
```

## Module Separation Strategy

Each module is designed as an independent capability that can:
1. Be consumed by any application (Musasa, Cradle, Tsoro, Dombo)
2. Be tested in isolation
3. Migrate to the dedicated Ark repository with minimal changes
4. Export clear TypeScript interfaces for external consumption

## Governance Alignment

Implementation follows these constitutional documents:
- **BUILDER_BIBLE.md** — Foundational design principles
- **ENGINE_CONSTITUTIONS** — Runtime specifications
- **REPOSITORY_CONTRACTS** — Module boundaries and dependencies
- **AI_GOVERNANCE.md** — Implementation standards

Changes that affect runtime architecture require ADR review.

## Current Implementation Phase

**Stage 1: Runtime Foundation** (In Progress)
- Semantic Seed Vault
- ITL pipeline
- .pora serialization
- Canonical Library model

**Stage 2: Marember Integration** (Planned)
- Translation pipeline implementation
- Integration into Cradle authoring interface

**Stage 3: Camera Engine** (Planned)
- Image ingestion
- Scene understanding
- Structured observations export to ITL → .pora

**Stage 4: Library Consumers** (Planned)
- Musasa public interface
- Tsoro publishing
- Dombo personal library
