import { FormFieldOption } from './FormFieldOption.model';

export interface FormFieldDefinition {
  autoComplete?: string | string[];
  caseInsensitive?: boolean;
  integer?: boolean;
  maskInput?: boolean;
  maskOutput?: boolean;
  max?: number;
  maxLength?: number;
  min?: number;
  minLength?: number;
  multiline?: boolean;
  normalizers?: string[];
  numeric?: boolean;
  options?: FormFieldOption[];
  pattern?: string;
  preserveWhitespace?: boolean;
  required?: boolean;
  spellCheck?: boolean;
  step?: number;
  translate?: boolean;
}
