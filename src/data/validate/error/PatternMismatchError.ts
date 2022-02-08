import { FormValidationError } from './model';

export const PATTERN_ERROR_ID = '3249dd09-baa8-498e-9709-af3062737f50';

export function PatternMismatchError(): FormValidationError {
  return {
    id: PATTERN_ERROR_ID,
    message: 'invalid-pattern',
    patternMismatch: true,
  };
}
