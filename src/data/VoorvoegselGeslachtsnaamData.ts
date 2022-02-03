import { FormFieldDefinition } from '../components/input/model';
import { createDefinition } from './create';

/*
The following info is obtained from Logisch Ontwerp GBA 3.14:
- elementnummer: 02.30
- alfanumeriek

Er is een lijst "Tabel 36 Voorvoegseltabel" waarin alle mogelijk voorvoegsels staan genoemd.
Gebaseerd op die lijst kun je een regexp maken waaraan elk voorvoegsel voldoet.

De maxLength is gebaseerd op de voorvoegseltabel
*/

export const voorvoegselGeslachtsnaamValidation: FormFieldDefinition = createDefinition({
  maxLength: 10,
  minLength: 1,
  normalizers: ['normalize-unicode'],
  pattern: "[A-Za-z' ]{0,10}",
  preserveWhitespace: false,
  spellCheck: false,
});
