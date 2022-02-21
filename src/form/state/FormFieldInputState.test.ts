import { createDefaultState } from './FormFieldDefaultState';
import { createInputState } from './FormFieldInputState';
import { FormFieldInputState } from './FormFieldInputState.model';

describe('Form field input state', () => {
  describe('value', () => {
    it('is empty by default', () => {
      const inputState: FormFieldInputState = createInputState(createDefaultState({}));

      expect(inputState.value).toBe('');
    });

    it('can have a predefined value', () => {
      const value = 'Example';
      const inputState: FormFieldInputState = createInputState(
        createDefaultState({
          value,
        }),
      );

      expect(inputState.value).toBe(value);
    });
  });

  describe('validation state', () => {
    it('is valid by default', () => {
      const inputState: FormFieldInputState = createInputState(createDefaultState({}));

      expect(inputState.invalid).toBe(false);
    });

    it('has no validation errors by default', () => {
      const inputState: FormFieldInputState = createInputState(createDefaultState({}));

      expect(inputState.errors).toStrictEqual([]);
    });

    it('can be invalid', () => {
      const invalid = true;
      const inputState: FormFieldInputState = createInputState(createDefaultState({ invalid }));

      expect(inputState.invalid).toBe(invalid);
    });

    it('can have validation errors', () => {
      const error = new Error('Example');
      const inputState: FormFieldInputState = createInputState(createDefaultState({ errors: [error] }));

      expect(inputState.errors).toStrictEqual([error]);
    });
  });

  describe('prioritizing validation feedback', () => {
    it('can be configured to defer "too short" errors until the user has had a chance to provide their complete input', () => {
      const inputState: FormFieldInputState = createInputState(createDefaultState({}));

      inputState.deferTooShort = true;

      expect(inputState.deferTooShort).toBe(true);
    });

    it('can be configured to defer "too long" errors until the user has had a chance to rephrase their input', () => {
      const inputState: FormFieldInputState = createInputState(createDefaultState({}));

      inputState.deferTooLong = true;

      expect(inputState.deferTooLong).toBe(true);
    });

    it('can be configured to defer "pattern mismatch" errors until the user has had a chance to complete their input', () => {
      const inputState: FormFieldInputState = createInputState(createDefaultState({}));

      inputState.deferPatternMismatch = true;

      expect(inputState.deferPatternMismatch).toBe(true);
    });

    it('can be configured to defer "pattern mismatch" errors until the user has had a chance to complete their input', () => {
      const inputState: FormFieldInputState = createInputState(createDefaultState({}));

      inputState.deferValueMissing = true;

      expect(inputState.deferValueMissing).toBe(true);
    });

    it('can be configured to defer validation errors until the user has had a chance to complete their input', () => {
      const inputState: FormFieldInputState = createInputState(createDefaultState({}));

      inputState.deferInvalid = true;

      expect(inputState.deferInvalid).toBe(true);
    });
  });
});
