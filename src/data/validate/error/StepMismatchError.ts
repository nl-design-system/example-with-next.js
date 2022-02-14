import { FormValidationError } from './model';

export const PATTERN_ERROR_ID = '03325979-196a-4925-ac93-720b15f0943e';

export function StepMismatchError(): FormValidationError {
  return {
    id: PATTERN_ERROR_ID,
    message: 'invalid-step-mismatch',
    stepMismatch: true,
  };
}
