/**
 * AccessCtrl — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { TrustAssertionOrchestrator } from "@webwaka/organelle-trust-assertion";
import { PolicyDefinitionOrchestrator } from "@webwaka/organelle-policy-definition";
import { SubjectRegistryOrchestrator } from "@webwaka/organelle-subject-registry";

export { TrustAssertionOrchestrator } from '@webwaka/organelle-trust-assertion';
export { PolicyDefinitionOrchestrator } from '@webwaka/organelle-policy-definition';
export { SubjectRegistryOrchestrator } from '@webwaka/organelle-subject-registry';

/**
 * AccessCtrl Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class AccessCtrlComposition {
  private trustAssertionOrchestrator: TrustAssertionOrchestrator;
  private policyDefinitionOrchestrator: PolicyDefinitionOrchestrator;
  private subjectRegistryOrchestrator: SubjectRegistryOrchestrator;

  constructor() {
    this.trustAssertionOrchestrator = new TrustAssertionOrchestrator();
    this.policyDefinitionOrchestrator = new PolicyDefinitionOrchestrator();
    this.subjectRegistryOrchestrator = new SubjectRegistryOrchestrator();
  }
}

export * from "./types";
