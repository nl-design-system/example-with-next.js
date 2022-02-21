import { FormFieldDefinition } from '../state/FormFieldDefinition.model';
import { FormValidationFunction } from './FormValidationFunction.model';
import {
  createMaxLengthValidator,
  createMaxValidator,
  createMinLengthValidator,
  createMinValidator,
  createPatternValidator,
  createStepValidator,
} from './create';

export const createValidators = (def: FormFieldDefinition): FormValidationFunction[] => {
  const validators: FormValidationFunction[] = [];

  if (typeof def.maxLength === 'number') {
    validators.push(createMaxLengthValidator(def.maxLength));
  }
  if (typeof def.minLength === 'number') {
    validators.push(createMinLengthValidator(def.minLength));
  }
  if (typeof def.min === 'number') {
    validators.push(createMinValidator(def.min));
  }
  if (typeof def.max === 'number') {
    validators.push(createMaxValidator(def.max));
  }
  if (typeof def.step === 'number') {
    validators.push(createStepValidator(def.step, def.min));
  }
  if (typeof def.pattern === 'string') {
    validators.push(createPatternValidator(def.pattern));
  }

  return validators;
};
