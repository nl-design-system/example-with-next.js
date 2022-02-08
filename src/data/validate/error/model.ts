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
