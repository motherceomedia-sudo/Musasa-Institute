/**
 *  * @file runtime/schemas/identity/device.ts
  * Root structural anchor for cross-mesh verification.
   */

   export interface DeviceFingerprint {
     readonly uuid: string;          // Persistent cross-mesh hardware identifier
       readonly hardwareModel: string;  // e.g., "Samsung-A05s"
         readonly initializedAt: number;  // Unix epoch timestamp
         }

         export interface UserSession {
           readonly username: string;
             readonly email: string;
               readonly activeNodeId: string;   // Current node execution boundary context
                 readonly tokenSignature?: string; // Cryptographic validation proof
                 }

 