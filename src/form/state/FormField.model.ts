import { FormFieldDeclaration } from './FormFieldDeclaration.model';
import { FormFieldDefaultState } from './FormFieldDefaultState.model';
import { FormFieldDefinition } from './FormFieldDefinition.model';
import { FormFieldInputState } from './FormFieldInputState.model';
import { FormValidationFunction } from '../validate/FormValidationFunction.model';

export interface FormField {
  declaration: FormFieldDeclaration;
  defaultState: FormFieldDefaultState;
  definition: FormFieldDefinition;
  inputState: FormFieldInputState;
  validators: FormValidationFunction[];
}
