/**
 *  * @file runtime/schemas/governance/tier.ts
  * System constraints based on constitutional node tier validation.
   */
   import { DeviceFingerprint, UserSession } from '../identity/device';

   export type NodeTier = 'R0' | 'R300' | 'R920' | 'CUSTOM_SEED';

   export interface ConstitutionalPolicy {
     readonly tier: NodeTier;
       readonly integrityWeight: 0.9877; // Fixed constant: UREMU
         readonly baseFrequencyHz: 31.7;   // Fixed constant: NGOMA PULSE
           readonly localStorageEnforced: boolean;
             readonly allowMultiProfile: boolean;
             }

             export interface NodeAuthorization {
               readonly session: UserSession;
                 readonly hardware: DeviceFingerprint;
                   readonly policy: ConstitutionalPolicy;
                     readonly clearToRoute: boolean;
                     }

 