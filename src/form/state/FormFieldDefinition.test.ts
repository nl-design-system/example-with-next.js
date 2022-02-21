import { FormFieldDefinition } from './FormFieldDefinition.model';

describe('form field description', () => {
  describe('display and interaction with value', () => {
    it.todo('can define the value may be treated as case insensitive');

    it.todo('can define the value must be treated as case sensitive');

    it('can define the value may contain multiple lines of text', () => {
      const state: FormFieldDefinition = {
        multiline: true,
      };

      expect(state.multiline).toBe(true);
    });

    it('can define the value should not receive spell checking suggestions', () => {
      const state: FormFieldDefinition = {
        spellCheck: false,
      };

      expect(state.spellCheck).toBe(false);
    });

    it('can define the value may contain significant whitespace that must be preserved', () => {
      const state: FormFieldDefinition = {
        preserveWhitespace: true,
      };

      expect(state.preserveWhitespace).toBe(true);
    });

    it('can define the value should not be translated and should be displayed in original language and script', () => {
      const state: FormFieldDefinition = {
        translate: false,
      };

      expect(state.translate).toBe(false);
    });

    it.todo('can define the value should be displayed as a numeric value');

    it('can define the value contains sensitive data and should be masked while typing', () => {
      const state: FormFieldDefinition = {
        maskInput: true,
      };

      expect(state.maskInput).toBe(true);
    });

    it('can define the value contains sensitive data and should be masked when displayed', () => {
      const state: FormFieldDefinition = {
        maskOutput: true,
      };

      expect(state.maskOutput).toBe(true);
    });
  });

  describe('input hints', () => {
    it('can define what type of autocomplete hints should be provided', () => {
      const autoComplete = 'new-password';
      const state: FormFieldDefinition = {
        autoComplete,
      };

      expect(state.autoComplete).toBe(autoComplete);
    });
  });

  // TODO: integer,normalizers

  describe('validation', () => {
    it('can define a minimum value to be valid', () => {
      const min = 42;
      const state: FormFieldDefinition = {
        min,
      };

      expect(state.min).toBe(min);
    });

    it('can define a maximum value to be valid', () => {
      const max = 42;
      const state: FormFieldDefinition = {
        max,
      };

      expect(state.max).toBe(max);
    });

    it('can define a minimum length of the value to be valid', () => {
      const minLength = 42;
      const state: FormFieldDefinition = {
        minLength,
      };

      expect(state.minLength).toBe(minLength);
    });

    it('can define a maximum length of the value to be valid', () => {
      const maxLength = 42;
      const state: FormFieldDefinition = {
        maxLength,
      };

      expect(state.maxLength).toBe(maxLength);
    });

    it('can define a pattern the value must match to be valid', () => {
      const pattern = '[0-9]';
      const state: FormFieldDefinition = {
        pattern,
      };

      expect(state.pattern).toBe(pattern);
    });
  });
});
