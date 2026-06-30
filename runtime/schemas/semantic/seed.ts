/**
 *  * @file runtime/schemas/semantic/seed.ts
  * The universal runtime substrate shared across every ecosystem engine.
   */
   import { NodeAuthorization } from '../governance/tier';

   export interface SemanticSeed {
     readonly id: string;               // IFS fractal addressing string (e.g., "IFS:MUSE-001°")
       readonly epoch: number;            // Creation timeline marker
         readonly originAxis: string;       // Geographic or system axis anchor (e.g., "Gweru-Shurugwi")
           readonly semanticVector: number[]; // Meaning density matrix components
             readonly contextualTags: string[]; // Native concepts or ancestral terminology markers
               readonly governanceScope: NodeAuthorization;
               }

 