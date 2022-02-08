import { FormFieldDefinition, FormValidationFunction, FormValidationError } from '../../components/input/model';
import { TooShortError } from './error/TooShortError';
import { TooLongError } from './error/TooLongError';
import { PatternMismatchError } from './error/PatternMismatchError';

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
  if (typeof def.pattern === 'string') {
    validators.push((value: string): FormValidationError[] => {
      if (typeof def.pattern === 'string' && !new RegExp('^(?:' + def.pattern + ')$').test(value)) {
        return [PatternMismatchError()];
      } else {
        return [];
      }
    });
  }
  return validators;
};
