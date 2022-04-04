import { FormValidationError } from '../error/FormValidationError.model';
import { ValueMissingError } from '../error/ValueMissingError';
import { FormField } from '../state/FormField.model';
import { FormValidationResult } from '../state/FormValidationResult.model';

export const validateField = (
  { definition: { required }, validators, inputState }: FormField,
  value: string,
): FormValidationResult => {
  // TODO: Avoid `FormValidationError | undefined` type in errors, and avoid `as` typecast
  let errors = validators?.flatMap((validator) => validator(value)).filter(Boolean) as FormValidationError[];

  let deferTooShort = inputState.deferTooShort;
  let deferPatternMismatch = false;

  // Validate that required fields are filled out
  if (required && !value) {
    errors.push(ValueMissingError(''));

    deferTooShort = true;
    deferPatternMismatch = true;
  }

  if (!required && !value) {
    // If the field is optional, empty values should not be considered too short, but simply absent
    deferTooShort = true;

    // If the field is optional, pattern doesn't apply to fields left empty
    deferPatternMismatch = true;
  }

  if (errors.some((error) => error?.tooShort || error?.tooLong)) {
    // Only validate the pattern once minLength and maxLength are okay,
    // otherwise the user will be confronted with two errors caused by the same mistake.
    deferPatternMismatch = true;
  }

  if (deferTooShort) {
    // Replace the "minimum length" with "this field is required" message for empty required fields
    errors = errors.filter((error) => !error?.tooShort);
  }

  if (deferPatternMismatch) {
    // Replace the "pattern mismatch" with "this field is required" message for empty required fields
    errors = errors.filter((error) => !error?.patternMismatch);
  }

  return {
    errors,
    invalid: !!errors && errors.length >= 1,
  };
};

export const formCheckValidity = (fields: FormField[]): FormField[] =>
  fields.map((field) => {
    const validity = validateField(field, field.inputState.value);
    return {
      ...field,
      inputState: {
        ...field.inputState,
        ...validity,
      },
    };
  });
