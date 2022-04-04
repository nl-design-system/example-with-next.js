import { FormFieldOption } from './FormFieldOption.model';

export interface FormFieldDefinition {
  autoComplete?: string | string[];
  caseInsensitive?: boolean;
  example?: string;
  integer?: boolean;
  maskInput?: boolean;
  maskOutput?: boolean;
  max?: number;
  maxLength?: number;
  min?: number;
  minLength?: number;
  multiline?: boolean;
  normalizers?: (string | ((_: string) => string))[];
  numeric?: boolean;
  options?: FormFieldOption[];
  pattern?: string;
  patternKey?: string;
  preserveWhitespace?: boolean;
  required?: boolean;
  spellCheck?: boolean;
  step?: number;
  translate?: boolean;
}
