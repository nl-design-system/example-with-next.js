import { FormFieldDeclaration, FormState, FormFieldState, FormValidationResult } from "./model";
import { MIN_LENGTH_ERROR_ID } from "../../data/validate/error/MinLengthError";
import { RequiredError } from "../../data/validate/error/RequiredError";

export const resetField = (field: FormFieldState): FormFieldState => ({
  ...field,
  inputState: {
    dirty: false,
    deferInvalid: true,
    deferValueMissing: true,
    errors: field.defaultState?.errors || [],
    invalid: field.defaultState?.invalid || false,
    value: field.defaultState?.value || "",
  },
});

export const createFieldState = (field: FormFieldDeclaration): FormFieldState => {
  return resetField({
    ...field,
    validators: field.validators || [],
    normalizers: field.normalizers || [],
    defaultState: {
      value: field.defaultState?.value || "",
      invalid: field.defaultState?.invalid || false,
      errors: field.defaultState?.errors || [],
    },
    inputState: {
      dirty: false,
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

export const validateField = ({ required, validators }: FormFieldState, value: string): FormValidationResult => {
  let errors = validators?.flatMap((validator) => validator(value));

  // Validate that required fields are filled out
  if (required && !value) {
    errors.push(RequiredError());
    // Replace the "minimum length" with "this field is required" message for empty required fields
    errors = errors.filter((error) => error.id !== MIN_LENGTH_ERROR_ID);
  }

  return {
    errors,
    invalid: !!errors && errors.length >= 1,
  };
};

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
