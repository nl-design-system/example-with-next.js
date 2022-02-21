import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';
import { teletex } from './TeletexData';

export const placeOfBirthValidation: FormFieldDefinition = {
  maxLength: 40,
  minLength: 1,
  normalizers: ['normalize-unicode'],
  pattern: teletex,
  preserveWhitespace: false,
  spellCheck: false,
};
