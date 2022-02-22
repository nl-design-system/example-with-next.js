import { FormValidationFunction } from '../validate/FormValidationFunction.model';
import { FormField } from './FormField.model';
import { FormFieldDeclaration } from './FormFieldDeclaration.model';
import { createDefaultState } from './FormFieldDefaultState';
import { FormFieldDefaultState } from './FormFieldDefaultState.model';
import { FormFieldDefinition } from './FormFieldDefinition.model';
import { createInputState } from './FormFieldInputState';
import { FormFieldInputState } from './FormFieldInputState.model';

type PartialFormField = {
  declaration: FormFieldDeclaration;
  defaultState?: Partial<FormFieldDefaultState>;
  definition?: FormFieldDefinition;
  inputState?: Partial<FormFieldInputState>;
  validators?: FormValidationFunction[];
};

export const createFormField = (partial: PartialFormField): FormField => {
  const defaultState = createDefaultState(partial.defaultState);
  return {
    declaration: partial.declaration,
    defaultState,
    definition: partial.definition || {},
    inputState: createInputState(defaultState),
    validators: partial.validators || [],
  };
};
