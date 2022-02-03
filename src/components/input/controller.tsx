import { FormFieldState } from "./model";

export const resetField = (field: FormFieldState): FormFieldState => ({
  ...field,
  inputState: {
    dirty: false,
    errors: field.defaultState?.errors || [],
    invalid: field.defaultState?.invalid || false,
    value: field.defaultState?.value || "",
  },
});

export const createField = (field: Omit<FormFieldState, "inputState" | "outputState">): FormFieldState => {
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
