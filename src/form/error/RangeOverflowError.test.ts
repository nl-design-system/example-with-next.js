import { RangeOverflowError } from './RangeOverflowError';

describe('Form validation error', () => {
  describe('range overflow', () => {
    it('can be customized with a message', () => {
      const customMessage = 'Hello, world';
      const error = RangeOverflowError(customMessage);

      expect(error.message).toBe(customMessage);
    });

    it('can be identified by the name', () => {
      const error = RangeOverflowError('');

      expect(error.name).toBe('RangeOverflowError');
    });

    it('can be identified with a validity flag', () => {
      const error = RangeOverflowError('');

      expect(error.rangeOverflow).toBe(true);
    });
  });
});
