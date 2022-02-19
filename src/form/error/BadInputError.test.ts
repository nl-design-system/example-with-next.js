import { BadInputError } from './BadInputError';

describe('Form validation error', () => {
  describe('bad input', () => {
    it('can be customized with a message', () => {
      const customMessage = 'Hello, world';
      const error = BadInputError(customMessage);

      expect(error.message).toBe(customMessage);
    });

    it('can be identified by the name', () => {
      const error = BadInputError('');

      expect(error.name).toBe('BadInputError');
    });

    it('can be identified with a validity flag', () => {
      const error = BadInputError('');

      expect(error.badInput).toBe(true);
    });
  });
});
