import { FormValidationError } from './model';

export const REQUIRED_ERROR_ID = 'ac5e6569-5fd1-4c37-bd80-13bd1835f002';

export function ValueMissingError(): FormValidationError {
  return {
    id: REQUIRED_ERROR_ID,
    message: 'form:invalid-value-missing',
    valueMissing: true,
  };
}
