import { createValidators } from './field';

describe('Form field validation', () => {
  const constraint = {
    min: 98,
    minLength: 2,
    max: 198,
    maxLength: 3,
    step: 2,
    pattern: '1?[0-9][02468]',
  };

  const tooShort = Math.round(constraint.min / 100);
  const tooLong = constraint.max * 100;
  const underflow = constraint.min - 42;
  const overflow = constraint.max + 42;
  const stepMistmach = constraint.min + constraint.step / 2;
  const patternMismatch = 'Text';

  const validators = createValidators(constraint);

  it('can validate using minimum value constraint', () => {
    const rangeUnderflowError = validators
      .map((validate) => validate(String(underflow)))
      .find((error) => error?.rangeUnderflow);

    expect(rangeUnderflowError).not.toBeUndefined();
  });

  it('can validate using maximum value constraint', () => {
    const rangeOverflowError = validators
      .map((validate) => validate(String(overflow)))
      .find((error) => error?.rangeOverflow);

    expect(rangeOverflowError).not.toBeUndefined();
  });

  it('can validate using minimum length constraint', () => {
    const tooShortError = validators.map((validate) => validate(String(tooShort))).find((error) => error?.tooShort);

    expect(tooShortError).not.toBeUndefined();
  });

  it('can validate using maximum length constraint', () => {
    const tooLongError = validators.map((validate) => validate(String(tooLong))).find((error) => error?.tooLong);

    expect(tooLongError).not.toBeUndefined();
  });

  it('can validate using step constraint', () => {
    const stepMistmachError = validators
      .map((validate) => validate(String(stepMistmach)))
      .find((error) => error?.stepMismatch);

    expect(stepMistmachError).not.toBeUndefined();
  });

  it('can validate using pattern constraint', () => {
    const patternMismatchError = validators
      .map((validate) => validate(patternMismatch))
      .find((error) => error?.patternMismatch);

    expect(patternMismatchError).not.toBeUndefined();
  });
});
