import { FormFieldState, FormValidationResult } from "./model";

export const resetField = (field: FormFieldState): FormFieldState => ({
  ...field,
  inputState: {
    dirty: false,
    errors: field.defaultState?.errors || [],
    invalid: field.defaultState?.invalid || false,
    value: field.defaultState?.value || "",
  },
});

export const createFieldState = (field: Omit<FormFieldState, "inputState" | "outputState">): FormFieldState => {
  return resetField({
    ...field,
    defaultState: {
      value: field.defaultState?.value || "",
      invalid: field.defaultState?.invalid || false,
      errors: field.defaultState?.errors || [],
    },
    inputState: {
      dirty: false,
      value: "",
      invalid: false,
      errors: [],
    },
    outputState: {
      value: null,
    },
  });
};

const validateField = ({ validators }: FormFieldState, value: string): FormValidationResult => {
  const errors = validators?.flatMap((validator) => validator(value));
  return {
    errors,
    invalid: errors.length >= 1,
  };
};

const _setField = (field: FormFieldState, value: string): FormFieldState => {
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
    console.log(id, field.id, field.id === id, value);
    return field.id === id ? _setField(field, value) : field;
  });
