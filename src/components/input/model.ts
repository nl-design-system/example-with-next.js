import { FormValidationError as ValidationError } from '../../data/validate/error/model';

export type FormValidationError = ValidationError;

export type NormalizerId = 'trim-whitespace' | 'normalize-whitespace' | 'normalize-unicode';

export interface FormFieldOption {
  label?: string;
  labelKey?: string;
  value?: string;
  id: string;
  disabled: boolean; // TODO: Should `disabled` be state instead of the definition?
}

export interface FormFieldDefinition {
  maxLength?: number;
  minLength?: number;
  min?: number;
  max?: number;
  step?: number;
  integer?: boolean;
  numeric?: boolean;
  pattern?: string;
  spellCheck?: boolean;
  autoComplete?: string | string[];
  caseInsensitive?: boolean;
  multiline?: boolean;
  translate?: boolean;
  preserveWhitespace?: boolean;
  maskInput?: boolean;
  maskOutput?: boolean;
  normalizers?: NormalizerId[];
}

export interface FormFieldDefaultState {
  value: string;
  invalid?: boolean;
  errors?: FormValidationError[];
}

export interface FormFieldInputState {
  dirty: boolean;
  // name could also be `deferValueMissing` after `element.validity.valueMissing` in HTML
  // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api
  deferValueMissing: boolean;
  // name could also be `deferBadInput` after `element.validity.badInput` in HTML
  deferInvalid: boolean;
  deferTooLong: boolean;
  deferTooShort: boolean;
  deferPatternMismatch: boolean;
  value: string;
  invalid: boolean;
  errors: FormValidationError[];
}

export interface FormFieldSingleOptionDeclaration {
  definition: FormFieldDefinition & {
    options: FormFieldOption[];
  };
  defaultState: FormFieldDefaultState & {
    selectedOption: string;
  };
  inputState: FormFieldInputState & {
    selectedOption: string;
  };
}

export interface FormFieldMultipleOptionsDeclaration {
  definition: FormFieldDefinition & {
    options: FormFieldOption[];
  };
  defaultState: FormFieldDefaultState & {
    selectedOptions: string[];
  };
  inputState: FormFieldInputState & {
    selectedOptions: string[];
  };
}

// Based on HTML:
// https://html.spec.whatwg.org/multipage/custom-elements.html#validitystateflags
export interface ValidityState {
  valueMissing: boolean;
  typeMismatch: boolean;
  patternMismatch: boolean;
  tooLong: boolean;
  tooShort: boolean;
  rangeUnderflow: boolean;
  rangeOverflow: boolean;
  stepMismatch: boolean;
  badInput: boolean;
  // customError: boolean;
}

export type FormValidationFunction = (value: string) => FormValidationError[];

export type FormNormalizeFunction = (value: string) => string;

export interface FormFieldDeclaration {
  id: string;
  name?: string;
  labelKey: string;
  required?: boolean;
  disabled?: boolean;
  fieldType?: 'checkbox' | 'checkboxgroup' | 'date' | 'datetime' | 'file' | 'input' | 'radiogroup' | 'select' | 'time';
  inputSubtype?: 'text' | 'email' | 'number' | 'range';
  definition: FormFieldDefinition | FormFieldSingleOptionDeclaration | FormFieldMultipleOptionsDeclaration;
  validators?: FormValidationFunction[];
  normalizers?: FormNormalizeFunction[];
  defaultState?: FormFieldDefaultState;
}

export interface FormFieldState<T = any> extends FormFieldDeclaration {
  validators: FormValidationFunction[];
  normalizers: FormNormalizeFunction[];
  noscript: boolean; // Enable server side rendering
  defaultState: FormFieldDefaultState;
  inputState: FormFieldInputState;
  outputState: {
    value: T;
  };
}

export interface FormValidationResult {
  invalid: boolean;
  errors: FormValidationError[];
}

export interface FormState {
  dirty: boolean;
  invalid: boolean;
}
