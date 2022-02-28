import { ValueMissingError } from '../error/ValueMissingError';
import { FormField } from '../state/FormField.model';
import { createInputState } from '../state/FormFieldInputState';
import { FormFieldInputState } from '../state/FormFieldInputState.model';
import { FormState } from '../state/FormState.model';
import { createSubmitState } from '../state/FormSubmitState';
import { FormSubmitState } from '../state/FormSubmitState.model';
import { formSelectOption, formUnselectOption } from '../state/options';
import { formCheckValidity } from '../validate/validate-field';
import { validateField } from '../validate/validate-field';
import { FormAction } from './FormAction.model';

export const resetField = (field: FormField): FormField => ({
  ...field,
  inputState: createInputState(field.defaultState),
});

export const resetForm = (fields: FormField[]): FormField[] => fields.map(resetField);

export const setFieldValue = (field: FormField, value: string): FormField => {
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

export const setField = (fields: FormField[], id: string, value: any): FormField[] =>
  fields.map((field) => {
    return field.declaration.id === id ? setFieldValue(field, value) : field;
  });

export const enableValidation = (field: FormField): FormField => ({
  ...field,
  inputState: {
    ...field.inputState,
    deferInvalid: false,
  },
});

export const formEnableValidation = (fields: FormField[]): FormField[] => fields.map(enableValidation);

export const formFieldEnableValidation = (fields: FormField[], id: string): FormField[] =>
  fields.map((field) => (field.declaration.id === id ? enableValidation(field) : field));

export const enableRequiredValidation = (field: FormField): FormField => ({
  ...field,
  inputState: {
    ...field.inputState,
    deferValueMissing: false,
  },
});

export const formEnableRequiredValidation = (fields: FormField[]): FormField[] => fields.map(enableRequiredValidation);

export const formFieldEnableRequiredValidation = (fields: FormField[], id: string): FormField[] =>
  fields.map((field) => (field.declaration.id === id ? enableRequiredValidation(field) : field));

export const completeSubmit = (submit: FormSubmitState): FormSubmitState => ({
  ...submit,
  busy: false,
  errors: [],
  validityErrors: [],
});

export const failSubmit = (
  submit: FormSubmitState,
  data?: Pick<FormSubmitState, 'errors' | 'validityErrors'>,
): FormSubmitState => ({
  ...submit,
  busy: false,
  errors: data?.errors || [],
  validityErrors: data?.validityErrors || [],
});

export interface State {
  form: FormState;
  fields: FormField[];
  submit: FormSubmitState;
}

const getFormState = (states: FormFieldInputState[]): FormState =>
  states.reduce(
    (state: FormState, { dirty = false, invalid = false }): FormState => ({
      ...state,
      dirty: state.dirty || dirty,
      invalid: state.invalid || invalid,
    }),
    { dirty: false, invalid: false },
  );

export const createInitialFormState = ({ fields }: { fields: FormField[] }): State => ({
  fields,
  form: getFormState(fields.map(({ inputState }) => inputState)),
  submit: createSubmitState({}),
});

export const formReducer = (state: State, action: FormAction): State => {
  let newState = state;
  if (action.type === 'change') {
    const fields = setField(state.fields, action.id, action.value);
    newState = {
      ...newState,
      fields,
    };
  } else if (action.type === 'reset') {
    newState = {
      ...newState,
      fields: resetForm(newState.fields),
    };
  } else if (action.type === 'select-option') {
    newState = {
      ...newState,
      fields: formSelectOption(newState.fields, action.id, action.optionId),
    };
  } else if (action.type === 'unselect-option') {
    newState = {
      ...newState,
      fields: formUnselectOption(newState.fields, action.id, action.optionId),
    };
  } else if (action.type === 'touch-input') {
    newState = {
      ...newState,
      fields: formFieldEnableValidation(newState.fields, action.id),
    };
  } else if (action.type === 'submit') {
    newState = {
      ...newState,
      fields: formEnableRequiredValidation(newState.fields),
    };
    newState = {
      ...newState,
      fields: newState.fields.map((field) => {
        if (field.definition.required && !field.inputState.value) {
          // First only show the required error, only validate after that
          return {
            ...field,
            inputState: {
              ...field.inputState,
              deferInvalid: true,
            },
          };
        } else {
          return {
            ...field,
            inputState: {
              ...field.inputState,
              deferInvalid: false,
              deferTooShort: false,
              deferTooLong: false,
              deferValueMissing: false,
              deferPatternMismatch: false,
            },
          };
        }
      }),
    };

    // TODO:
    // Normalize before validation
    /*
    newState = {
      ...newState,
      fields: newState.fields.map(normalizerField),
    };
    */

    newState = {
      ...newState,
      fields: formCheckValidity(newState.fields),
    };

    if (state.form.invalid) {
      // In addition to errors at form field level,
      // display an error for the form as a whole.
      newState = {
        ...newState,
        submit: {
          ...state.submit,
          validityErrors: [ValueMissingError('Cannot submit form until all fields are correct.')],
        },
      };
    } else {
      // In addition to validation errors,
      // display errors that relate to the submission process.
      // Some errors might be recoverable (HTTP status 500, server has issues, but likely temporarily)
      // and warrant a retry.
      newState = {
        ...newState,
        submit: {
          ...state.submit,
          busy: true,
          errors: [],
        },
      };
    }
  } else if (action.type === 'submit-success') {
    newState = {
      ...newState,
      submit: completeSubmit(newState.submit),
    };
  } else if (action.type === 'submit-failure') {
    newState = {
      ...newState,
      submit: failSubmit(newState.submit),
    };
  }

  newState = {
    ...newState,
    form: getFormState(newState.fields.map(({ inputState }) => inputState)),
  };

  return newState;
};
