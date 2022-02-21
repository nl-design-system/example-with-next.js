import { FormValidationError } from '../error/FormValidationError.model';

/**
 * After validation this result will be added to the form field state
 */
export interface FormValidationResult {
  invalid: boolean;
  errors: FormValidationError[];
}
