import { TooLongError } from './TooLongError';

describe('Form validation error', () => {
  describe('too long', () => {
    it('can be customized with a message', () => {
      const customMessage = 'Hello, world';
      const error = TooLongError(customMessage);

      expect(error.message).toBe(customMessage);
    });

    it('can be identified by the name', () => {
      const error = TooLongError('');

      expect(error.name).toBe('TooLongError');
    });

    it('can be identified with a validity flag', () => {
      const error = TooLongError('');

      expect(error.tooLong).toBe(true);
    });
  });
});
