import { FormValidationError } from '../error/FormValidationError.model';

// TODO: `deferInvalid` could also be named `deferBadInput` after `element.validity.badInput` in HTML
export interface FormFieldInputState {
  deferInvalid: boolean;
  deferPatternMismatch: boolean;
  deferTooLong: boolean;
  deferTooShort: boolean;
  deferValueMissing: boolean;
  dirty: boolean;
  errors: FormValidationError[];
  invalid: boolean;
  selectedOptions?: string[];
  value: string;
}
