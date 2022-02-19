import { RangeUnderflowError } from './RangeUnderflowError';

describe('Form validation error', () => {
  describe('range underflow', () => {
    it('can be customized with a message', () => {
      const customMessage = 'Hello, world';
      const error = RangeUnderflowError(customMessage);

      expect(error.message).toBe(customMessage);
    });

    it('can be identified by the name', () => {
      const error = RangeUnderflowError('');

      expect(error.name).toBe('RangeUnderflowError');
    });

    it('can be identified with a validity flag', () => {
      const error = RangeUnderflowError('');

      expect(error.rangeUnderflow).toBe(true);
    });
  });
});
