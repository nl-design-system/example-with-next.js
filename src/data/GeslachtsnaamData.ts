import { FormFieldDefinition } from '../components/input/model';
import { teletex } from './TeletexData';
import { createDefinition } from './create';

/*
The following info is obtained from Logisch Ontwerp GBA 3.14:
- elementnummer: 02.40
- elementnaam: "Geslachtsnaam"
- lengte: 1-200
- alfanumeriek
*/

export const geslachtsnaamValidation: FormFieldDefinition = createDefinition({
  autoComplete: 'family-name',
  maxLength: 200,
  minLength: 1,
  normalizers: ['normalize-unicode'],
  pattern: teletex,
  preserveWhitespace: false,
  spellCheck: false,
});
