import {
  createMaxLengthValidator,
  createMaxValidator,
  createMinLengthValidator,
  createMinValidator,
  createPatternValidator,
  createStepValidator,
} from './create';

describe('Form validation', () => {
  describe('maximum length', () => {
    it('should create an error for values that are too long', () => {
      const validator = createMaxLengthValidator(3);
      const error = validator('--|+');

      expect(error).not.toBeUndefined();
    });

    it('should not create an error for values are at the maximum length', () => {
      const validator = createMaxLengthValidator(3);
      const error = validator('--|');

      expect(error).toBeUndefined();
    });

    it('should not create an error for values that are too short', () => {
      const validator = createMaxLengthValidator(3);
      const error = validator('--');

      expect(error).toBeUndefined();
    });

    it('should create an error with a validity flag', () => {
      const validator = createMaxLengthValidator(3);
      const error = validator('--|+');

      expect(error?.tooLong).toBe(true);
    });
  });

  describe('maximum value', () => {
    it('should create an error for values that are greater than the maximum', () => {
      const validator = createMaxValidator(42);
      const error = validator('43');

      expect(error).not.toBeUndefined();
    });

    it('should not create an error for values that equal the maximum', () => {
      const validator = createMaxValidator(42);
      const error = validator('42');

      expect(error).toBeUndefined();
    });

    it('should not create an error for values that are less than the maximum', () => {
      const validator = createMaxValidator(42);
      const error = validator('41');

      expect(error).toBeUndefined();
    });

    it('should create an error with a validity flag', () => {
      const validator = createMaxValidator(42);
      const error = validator('43');

      expect(error?.rangeOverflow).toBe(true);
    });
  });

  describe('minimum length', () => {
    it('should create an error for values that are too short', () => {
      const validator = createMinLengthValidator(3);
      const error = validator('--');

      expect(error).not.toBeUndefined();
    });

    it('should not create an error for values are at the minimum length', () => {
      const validator = createMinLengthValidator(3);
      const error = validator('--|');

      expect(error).toBeUndefined();
    });

    it('should not create an error for values that are too long', () => {
      const validator = createMinLengthValidator(3);
      const error = validator('--|+');

      expect(error).toBeUndefined();
    });

    it('should create an error with a validity flag', () => {
      const validator = createMinLengthValidator(3);
      const error = validator('--');

      expect(error?.tooShort).toBe(true);
    });
  });

  describe('minimum value', () => {
    it('should create an error for values that are less than the minimum', () => {
      const validator = createMinValidator(42);
      const error = validator('41');

      expect(error).not.toBeUndefined();
    });

    it('should not create an error for values that equal the minimum', () => {
      const validator = createMinValidator(42);
      const error = validator('42');

      expect(error).toBeUndefined();
    });

    it('should not create an error for values that are greater than the minimum', () => {
      const validator = createMinValidator(42);
      const error = validator('43');

      expect(error).toBeUndefined();
    });

    it('should create an error with a validity flag', () => {
      const validator = createMinValidator(42);
      const error = validator('41');

      expect(error?.rangeUnderflow).toBe(true);
    });
  });

  describe('pattern', () => {
    it('should create an error for values that do not match the pattern', () => {
      const validator = createPatternValidator('[a-z]+');
      const error = validator('0123456789');

      expect(error).not.toBeUndefined();
    });

    it('should not create an error for values that match the pattern', () => {
      const validator = createPatternValidator('[a-z]+');
      const error = validator('abcdefghi');

      expect(error).toBeUndefined();
    });

    it('should create an error with a validity flag', () => {
      const validator = createPatternValidator('[a-z]+');
      const error = validator('0123456789');

      expect(error?.patternMismatch).toBe(true);
    });
  });

  describe('step', () => {
    it('should create an error for values that do not match the step', () => {
      const validator = createStepValidator(42);
      const error = validator('43');

      expect(error).not.toBeUndefined();
    });

    it('should not create an error for values that match the step', () => {
      const validator = createStepValidator(42);
      const error = validator('84');

      expect(error).toBeUndefined();
    });

    it('should create an error for values that do not match the step based on a minimum value offset', () => {
      const validator = createStepValidator(42, -2);
      const error = validator('42');

      expect(error).not.toBeUndefined();
    });

    it('should not create an error for values that match the step based on a minimum value offset', () => {
      const validator = createStepValidator(42, -2);
      const error = validator('40');

      expect(error).toBeUndefined();
    });

    it('should create an error with a validity flag', () => {
      const validator = createStepValidator(42);
      const error = validator('43');

      expect(error?.stepMismatch).toBe(true);
    });
  });
});
