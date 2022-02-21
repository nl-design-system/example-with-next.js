import { createFormState } from './FormState';
import { FormState } from './FormState.model';

describe('Form state (collection of form fields)', () => {
  describe('change', () => {
    it('is not dirty by default', () => {
      const form: FormState = createFormState({});

      expect(form.dirty).toBe(false);
    });

    it('can state the form contains only pristine form controls', () => {
      const form: FormState = createFormState({
        dirty: false,
      });

      expect(form.dirty).toBe(false);
    });

    it('can state the form contains one or more dirty form controls', () => {
      const form: FormState = createFormState({
        dirty: true,
      });

      expect(form.dirty).toBe(true);
    });
  });

  describe('validation', () => {
    it('is not invalid initally', () => {
      const form: FormState = createFormState({});

      expect(form.invalid).toBe(false);
    });

    it('can state the form contains no invalid values', () => {
      const form: FormState = createFormState({
        invalid: false,
      });

      expect(form.invalid).toBe(false);
    });

    it('can state the form contains one or more invalid values', () => {
      const form: FormState = createFormState({
        invalid: true,
      });

      expect(form.invalid).toBe(true);
    });
  });
});
