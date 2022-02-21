import { FormSubmitState } from './FormSubmitState.model';

export const createSubmitState = (state: Partial<FormSubmitState>): FormSubmitState => ({
  disabled: false,
  busy: false,
  errors: [],
  validityErrors: [],
  ...state,
});
