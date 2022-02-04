import { FormFieldDefinition, FormValidationFunction, FormValidationError } from '../../components/input/model';
import { MinLengthError } from './error/MinLengthError';
import { MaxLengthError } from './error/MaxLengthError';
import { PatternError } from './error/PatternError';

export const createValidators = (def: FormFieldDefinition): FormValidationFunction[] => {
  const validators: FormValidationFunction[] = [];
  if (typeof def.maxLength === 'number') {
    validators.push((value: string): FormValidationError[] => {
      if (typeof def.maxLength === 'number' && value.length > def.maxLength) {
        return [MaxLengthError()];
      } else {
        return [];
      }
    });
  }
  if (typeof def.minLength === 'number') {
    validators.push((value: string): FormValidationError[] => {
      if (typeof def.minLength === 'number' && value.length < def.minLength) {
        return [MinLengthError()];
      } else {
        return [];
      }
    });
  }
  if (typeof def.pattern === 'string') {
    validators.push((value: string): FormValidationError[] => {
      if (typeof def.pattern === 'string' && !new RegExp('^(?:' + def.pattern + ')$').test(value)) {
        return [PatternError()];
      } else {
        return [];
      }
    });
  }
  return validators;
};
