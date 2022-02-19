import { TooShortError } from './TooShortError';

describe('Form validation error', () => {
  describe('too short', () => {
    it('can be customized with a message', () => {
      const customMessage = 'Hello, world';
      const error = TooShortError(customMessage);

      expect(error.message).toBe(customMessage);
    });

    it('can be identified by the name', () => {
      const error = TooShortError('');

      expect(error.name).toBe('TooShortError');
    });

    it('can be identified with a validity flag', () => {
      const error = TooShortError('');

      expect(error.tooShort).toBe(true);
    });
  });
});
