import { createDefaultState } from './FormFieldDefaultState';
import { FormFieldDefaultState } from './FormFieldDefaultState.model';

describe('Form field default state', () => {
  describe('value', () => {
    it('is initially empty', () => {
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
    it('is initially valid', () => {
      const defaultState: FormFieldDefaultState = createDefaultState({});

      expect(defaultState.invalid).toBe(false);
    });

    it('initially has no validation errors', () => {
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
