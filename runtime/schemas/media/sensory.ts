/**
 *  * @file runtime/schemas/media/sensory.ts
  * Structural payloads emitted by ingestion devices into the ITL layer.
   */
   import { SemanticSeed } from '../semantic/seed';

   export type MediaSourceType = 'CAMERA_STREAM' | 'AUDIO_PULSE' | 'STRUCTURAL_DOC';

   export interface SensoryFrame {
     readonly sourceId: string;
       readonly type: MediaSourceType;
         readonly capturedAt: number;
           readonly resolutionDimensions?: [number, number]; // Optimized tracking metrics
             readonly coreFrequencies?: number[];             // e.g., checking audio constants against 31.7Hz
             }

             export interface MediaTranslationMatrix {
               readonly inputFrame: SensoryFrame;
                 readonly projectedSeed: SemanticSeed; // Media transforms into universal Semantic Seeds
                 }

 