import { FormFieldDefinition } from '../components/input/model';
import { teletex } from './TeletexData';
import { createDefinition } from './create';

/*
The following info is obtained from Logisch Ontwerp GBA 3.14:
- elementnummer "03.30"
- elementnaam "Geboorteland"
- landcode uit "Tabel 34, Landentabel"
 */

export const placeOfBirthValidation: FormFieldDefinition = createDefinition({
  maxLength: 40,
  minLength: 1,
  normalizers: ['normalize-unicode'],
  pattern: teletex,
  preserveWhitespace: false,
  spellCheck: false,
});
