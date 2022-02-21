import { FormState } from './FormState.model';

export const createFormState = ({ dirty = false, invalid = false }: Partial<FormState>) => ({
  dirty,
  invalid,
});
