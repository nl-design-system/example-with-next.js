import { FormFieldDefinition, FormValidationFunction, FormValidationError } from '../../components/input/model';
import { PatternMismatchError } from './error/PatternMismatchError';
import { RangeOverflowError } from './error/RangeOverflowError';
import { RangeUnderflowError } from './error/RangeUnderflowError';
import { StepMismatchError } from './error/StepMismatchError';
import { TooLongError } from './error/TooLongError';
import { TooShortError } from './error/TooShortError';

export const createValidators = (def: FormFieldDefinition): FormValidationFunction[] => {
  const validators: FormValidationFunction[] = [];
  if (typeof def.maxLength === 'number') {
    validators.push((value: string): FormValidationError[] => {
      if (typeof def.maxLength === 'number' && value.length > def.maxLength) {
        return [TooLongError()];
      } else {
        return [];
      }
    });
  }
  if (typeof def.minLength === 'number') {
    validators.push((value: string): FormValidationError[] => {
      if (typeof def.minLength === 'number' && value.length < def.minLength) {
        return [TooShortError()];
      } else {
        return [];
      }
    });
  }
  if (typeof def.min === 'number') {
    validators.push((value: string): FormValidationError[] => {
      const numberValue = parseFloat(value);
      if (typeof def.min === 'number' && numberValue < def.min) {
        return [RangeUnderflowError({ min: def.min, value: numberValue })];
      } else {
        return [];
      }
    });
  }
  if (typeof def.max === 'number') {
    validators.push((value: string): FormValidationError[] => {
      const numberValue = parseFloat(value);
      if (typeof def.max === 'number' && numberValue > def.max) {
        return [RangeOverflowError({ max: def.max, value: numberValue })];
      } else {
        return [];
      }
    });
  }
  if (typeof def.step === 'number') {
    validators.push((value: string): FormValidationError[] => {
      const min = typeof def.min === 'number' ? def.min : 0;
      if (typeof def.step === 'number' && (parseFloat(value) - min) % def.step !== 0) {
        return [StepMismatchError()];
      } else {
        return [];
      }
    });
  }
  if (typeof def.pattern === 'string') {
    const regexp = typeof def.pattern === 'string' ? new RegExp('^(?:' + def.pattern + ')$') : null;

    validators.push((value: string): FormValidationError[] => {
      if (regexp && !regexp.test(value)) {
        return [PatternMismatchError()];
      } else {
        return [];
      }
    });
  }
  return validators;
};
