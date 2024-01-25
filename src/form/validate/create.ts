import { FormValidationFunction } from './FormValidationFunction.model';
import { FormValidationError } from '../error/FormValidationError.model';
import { PatternMismatchError } from '../error/PatternMismatchError';
import { RangeOverflowError } from '../error/RangeOverflowError';
import { RangeUnderflowError } from '../error/RangeUnderflowError';
import { StepMismatchError } from '../error/StepMismatchError';
import { TooLongError } from '../error/TooLongError';
import { TooShortError } from '../error/TooShortError';

export const createMaxLengthValidator =
  (maxLength: number): FormValidationFunction =>
  (value: string): FormValidationError | undefined =>
    value.length > maxLength ? TooLongError('') : undefined;

export const createMinLengthValidator =
  (minLength: number): FormValidationFunction =>
  (value: string): FormValidationError | undefined =>
    value.length < minLength ? TooShortError('') : undefined;

export const createMinValidator =
  (min: number): FormValidationFunction =>
  (value: string): FormValidationError | undefined => {
    const numberValue = parseFloat(value);
    return numberValue < min ? RangeUnderflowError('', { min, value: numberValue }) : undefined;
  };

export const createMaxValidator =
  (max: number): FormValidationFunction =>
  (value: string): FormValidationError | undefined => {
    const numberValue = parseFloat(value);
    return numberValue > max ? RangeOverflowError('', { max, value: numberValue }) : undefined;
  };

export const createStepValidator =
  (step: number, min?: number): FormValidationFunction =>
  (value: string): FormValidationError | undefined => {
    const minValue = typeof min === 'number' ? min : 0;
    return (parseFloat(value) - minValue) % step !== 0 ? StepMismatchError('') : undefined;
  };

export const createPatternValidator = (pattern: string): FormValidationFunction => {
  const regexp = new RegExp('^(?:' + pattern + ')$');
  return (value: string): FormValidationError | undefined =>
    regexp && !regexp.test(value) ? PatternMismatchError('') : undefined;
};
