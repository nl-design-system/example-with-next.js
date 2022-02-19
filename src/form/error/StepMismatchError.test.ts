import { StepMismatchError } from './StepMismatchError';

describe('Form validation error', () => {
  describe('step mismatch', () => {
    it('can be customized with a message', () => {
      const customMessage = 'Hello, world';
      const error = StepMismatchError(customMessage);

      expect(error.message).toBe(customMessage);
    });

    it('can be identified by the name', () => {
      const error = StepMismatchError('');

      expect(error.name).toBe('StepMismatchError');
    });

    it('can be identified with a validity flag', () => {
      const error = StepMismatchError('');

      expect(error.stepMismatch).toBe(true);
    });
  });
});
