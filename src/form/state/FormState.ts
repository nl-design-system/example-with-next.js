import { FormState } from './FormState.model';

export const createFormState = ({ dirty, invalid }: Partial<FormState>) => ({
  dirty: dirty || false,
  invalid: invalid || false,
});
