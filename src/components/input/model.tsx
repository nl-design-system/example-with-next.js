export type NormalizerId = "trim-whitespace" | "normalize-whitespace" | "normalize-unicode";

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
  normalizers?: NormalizerId[];
}

export type FormValidationError = {
  id: string;
  message: string;
};

export type FormValidationFunction = (value: string) => FormValidationError[];

export type FormNormalizeFunction = (value: string) => string | number;

export interface FormFieldState<T = any> {
  id: string;
  name?: string;
  labelKey: string;
  required?: boolean;
  fieldType?: "input";
  inputSubtype?: "text";
  definition: FormFieldDefinition;
  validators: FormValidationFunction[];
  normalizers: FormNormalizeFunction[];
  defaultState: {
    value: string;
    invalid: boolean;
    errors: FormValidationError[];
  };
  inputState: {
    dirty: boolean;
    value: string;
    invalid: boolean;
    errors: FormValidationError[];
  };
  outputState: {
    value: T;
  };
}
