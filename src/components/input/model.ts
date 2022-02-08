import { FormValidationError as ValidationError } from '../../data/validate/error/model';

export type FormValidationError = ValidationError;

export type NormalizerId = 'trim-whitespace' | 'normalize-whitespace' | 'normalize-unicode';

export interface FormFieldDefinition {
  maxLength?: number;
  minLength?: number;
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
  fieldType?: 'input';
  inputSubtype?: 'text';
  definition: FormFieldDefinition;
  validators?: FormValidationFunction[];
  normalizers?: FormNormalizeFunction[];
  defaultState?: {
    value: string;
    invalid?: boolean;
    errors?: FormValidationError[];
  };
}

export interface FormFieldState<T = any> extends FormFieldDeclaration {
  validators: FormValidationFunction[];
  normalizers: FormNormalizeFunction[];
  defaultState: {
    value: string;
    invalid: boolean;
    errors: FormValidationError[];
  };
  inputState: {
    dirty: boolean;
    // name could also be `deferValueMissing` after `element.validity.valueMissing` in HTML
    // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api
    deferValueMissing: boolean;
    // name could also be `deferBadInput` after `element.validity.badInput` in HTML
    deferInvalid: boolean;
    deferTooLong: boolean;
    deferTooShort: boolean;
    value: string;
    invalid: boolean;
    errors: FormValidationError[];
  };
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
