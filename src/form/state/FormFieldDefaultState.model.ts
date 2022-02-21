import { FormValidationError } from '../error/FormValidationError.model';

/**
 * Default state has the initial state of a pristine (non-dirty) form field.
 *
 * It contains both the value and the validity of the value.
 *
 * The default state can contain validation errors that are determined by server side validation.
 */
export interface FormFieldDefaultState {
  errors?: FormValidationError[];
  invalid?: boolean;
  selectedOptions?: string[];
  value: string;
}
