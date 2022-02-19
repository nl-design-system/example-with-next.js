import { PatternMismatchError } from './PatternMismatchError';

describe('Form validation error', () => {
  describe('pattern mismatch', () => {
    it('can be customized with a message', () => {
      const customMessage = 'Hello, world';
      const error = PatternMismatchError(customMessage);

      expect(error.message).toBe(customMessage);
    });

    it('can be identified by the name', () => {
      const error = PatternMismatchError('');

      expect(error.name).toBe('PatternMismatchError');
    });

    it('can be identified with a validity flag', () => {
      const error = PatternMismatchError('');

      expect(error.patternMismatch).toBe(true);
    });
  });
});
