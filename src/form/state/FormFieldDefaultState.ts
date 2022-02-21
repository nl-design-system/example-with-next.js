import { FormFieldDefaultState } from './FormFieldDefaultState.model';

export const createDefaultState = (defaultState?: Partial<FormFieldDefaultState>): FormFieldDefaultState => ({
  value: defaultState?.value || '',
  invalid: defaultState?.invalid || false,
  errors: defaultState?.errors || [],
});
