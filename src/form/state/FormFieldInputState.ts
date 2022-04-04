import { FormFieldDefaultState } from './FormFieldDefaultState.model';
import { FormFieldDefinition } from './FormFieldDefinition.model';
import { FormFieldInputState } from './FormFieldInputState.model';

export const createInputState = (
  defaultState?: FormFieldDefaultState,
  definition?: FormFieldDefinition,
): FormFieldInputState => ({
  deferInvalid: defaultState?.invalid ? false : true,
  deferPatternMismatch: false,
  deferTooLong: false,
  deferTooShort: definition && defaultState ? String(defaultState.value).length < (definition.minLength || 0) : false,
  deferValueMissing: defaultState?.value ? false : true,
  dirty: false,
  errors: defaultState?.errors || [],
  invalid: defaultState?.invalid || false,
  value: defaultState?.value || '',
});
