export interface ValidationTypeFlag {
  valueMissing?: boolean;
  typeMismatch?: boolean;
  patternMismatch?: boolean;
  tooLong?: boolean;
  tooShort?: boolean;
  rangeUnderflow?: boolean;
  rangeOverflow?: boolean;
  stepMismatch?: boolean;
  badInput?: boolean;
  customError?: boolean;
}

export interface FormValidationError extends ValidationTypeFlag {
  id: string;
  message: string;
}

export interface RangeOverflow<Value> extends FormValidationError {
  data: {
    max: Value;
    value: Value;
  };
}

export interface RangeUnderflow<Value> extends FormValidationError {
  data: {
    min: Value;
    value: Value;
  };
}
