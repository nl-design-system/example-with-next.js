import { FormValidationError } from '../error/FormValidationError.model';

export interface FormSubmitState {
  disabled: boolean;
  busy: boolean;
  errors: Error[];
  validityErrors: FormValidationError[];
}
