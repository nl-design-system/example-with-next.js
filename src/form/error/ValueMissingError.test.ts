import { ValueMissingError } from './ValueMissingError';

describe('Form validation error', () => {
  describe('value missing', () => {
    it('can be customized with a message', () => {
      const customMessage = 'Hello, world';
      const error = ValueMissingError(customMessage);

      expect(error.message).toBe(customMessage);
    });

    it('can be identified by the name', () => {
      const error = ValueMissingError('');

      expect(error.name).toBe('ValueMissingError');
    });

    it('can be identified with a validity flag', () => {
      const error = ValueMissingError('');

      expect(error.valueMissing).toBe(true);
    });
  });
});
