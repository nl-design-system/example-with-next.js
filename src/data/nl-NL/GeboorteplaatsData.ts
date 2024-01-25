import { teletex } from './TeletexData';
import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';

export const placeOfBirthValidation: FormFieldDefinition = {
  maxLength: 40,
  minLength: 1,
  normalizers: ['normalize-whitespace', 'trim-whitespace', 'normalize-unicode'],
  pattern: teletex,
  preserveWhitespace: false,
  spellCheck: false,
};
