import { FormFieldDeclaration, FormState, FormFieldState, FormValidationResult } from "./model";
import { ValueMissingError } from "../../data/validate/error/ValueMissingError";
import { createValidators } from "../../data/validate";

export const resetField = (field: FormFieldState): FormFieldState => ({
  ...field,
  inputState: {
    dirty: false,
    deferInvalid: field.defaultState?.invalid ? false : true,
    deferValueMissing: field.defaultState?.value ? false : true,
    deferTooLong: false,
    deferTooShort: String(field.defaultState.value).length < (field.definition.minLength || 0),
    deferPatternMismatch: false,
    errors: field.defaultState?.errors || [],
    invalid: field.defaultState?.invalid || false,
    value: field.defaultState?.value || "",
  },
});

export const createFieldState = (field: FormFieldDeclaration): FormFieldState => {
  return resetField({
    ...field,
    noscript: false,
    validators: [...(field.validators || []), ...createValidators(field.definition)],
    normalizers: field.normalizers || [],
    defaultState: {
      value: field.defaultState?.value || "",
      invalid: field.defaultState?.invalid || false,
      errors: field.defaultState?.errors || [],
    },
    inputState: {
      dirty: false,
      deferTooLong: false,
      deferTooShort: false,
      deferPatternMismatch: false,
      deferValueMissing: true,
      deferInvalid: true,
      value: "",
      invalid: false,
      errors: [],
    },
    outputState: {
      value: null,
    },
  });
};

export const normalizerField = (state: FormFieldState): FormFieldState => {
  const {
    normalizers,
    inputState: { value },
  } = state;

  return {
    ...state,
    inputState: {
      ...state.inputState,
      value: normalizers.reduce((current: string, normalize) => normalize(current), value),
    },
  };
};

export const validateField = (
  { required, validators, inputState }: FormFieldState,
  value: string
): FormValidationResult => {
  let errors = validators?.flatMap((validator) => validator(value));

  let deferTooShort = inputState.deferTooShort;
  let deferPatternMismatch = false;

  // Validate that required fields are filled out
  if (required && !value) {
    errors.push(ValueMissingError());

    deferTooShort = true;
    deferPatternMismatch = true;
  }

  if (!required && !value) {
    // If the field is optional, empty values should not be considered too short, but simply absent
    deferTooShort = true;
  }

  if (deferTooShort) {
    // Replace the "minimum length" with "this field is required" message for empty required fields
    errors = errors.filter((error) => !error.tooShort);
  }

  if (deferPatternMismatch) {
    // Replace the "pattern mismatch" with "this field is required" message for empty required fields
    errors = errors.filter((error) => !error.patternMismatch);
  }

  console.log(required, !value, errors);
  return {
    errors,
    invalid: !!errors && errors.length >= 1,
  };
};

export const formCheckValidity = (fields: FormFieldState[]): FormFieldState[] =>
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

export const setFieldValue = (field: FormFieldState, value: string): FormFieldState => {
  return {
    ...field,
    inputState: {
      ...field.inputState,
      dirty: true,
      value,
      ...validateField(field, value),
    },
  };
};

export const setField = (fields: FormFieldState[], id: string, value: any): FormFieldState[] =>
  fields.map((field) => {
    return field.id === id ? setFieldValue(field, value) : field;
  });

export const getFormState = (fields: FormFieldState[]): FormState => ({
  dirty: fields.some(({ inputState: { dirty } }) => dirty),
  invalid: fields.some(({ inputState: { invalid } }) => invalid),
});

export const resetForm = (fields: FormFieldState[]): FormFieldState[] => fields.map(resetField);

export const enableRequiredValidation = (field: FormFieldState): FormFieldState => ({
  ...field,
  inputState: {
    ...field.inputState,
    deferValueMissing: false,
  },
});

export const formEnableRequiredValidation = (fields: FormFieldState[]): FormFieldState[] =>
  fields.map(enableRequiredValidation);

export const formFieldEnableRequiredValidation = (fields: FormFieldState[], id: string): FormFieldState[] =>
  fields.map((field) => (field.id === id ? enableRequiredValidation(field) : field));

export const enableValidation = (field: FormFieldState): FormFieldState => ({
  ...field,
  inputState: {
    ...field.inputState,
    deferInvalid: false,
  },
});

export const formEnableValidation = (fields: FormFieldState[]): FormFieldState[] => fields.map(enableValidation);

export const formFieldEnableValidation = (fields: FormFieldState[], id: string): FormFieldState[] =>
  fields.map((field) => (field.id === id ? enableValidation(field) : field));
