import { createDefaultState } from './FormFieldDefaultState';
import { FormFieldDefaultState } from './FormFieldDefaultState.model';

describe('Form field default state', () => {
  describe('value', () => {
    it('is empty by default', () => {
      const defaultState: FormFieldDefaultState = createDefaultState({});

      expect(defaultState.value).toBe('');
    });

    it('can have a predefined value', () => {
      const value = 'Example';
      const defaultState: FormFieldDefaultState = createDefaultState({
        value,
      });

      expect(defaultState.value).toBe(value);
    });
  });

  describe('validation state', () => {
    it('is valid by default', () => {
      const defaultState: FormFieldDefaultState = createDefaultState({});

      expect(defaultState.invalid).toBe(false);
    });

    it('has no validation errors by default', () => {
      const defaultState: FormFieldDefaultState = createDefaultState({});

      expect(defaultState.errors).toStrictEqual([]);
    });

    it('can be invalid', () => {
      const invalid = true;
      const defaultState: FormFieldDefaultState = createDefaultState({ invalid });

      expect(defaultState.invalid).toBe(invalid);
    });

    it('can have validation errors', () => {
      const error = new Error('Example');
      const defaultState: FormFieldDefaultState = createDefaultState({ errors: [error] });

      expect(defaultState.errors).toStrictEqual([error]);
    });
  });
});
