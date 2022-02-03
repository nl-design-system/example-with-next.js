import { FormFieldDefinition } from '../components/input/model';
import { teletex } from './TeletexData';
import { createDefinition } from './create';

/*
The following info is obtained from Logisch Ontwerp GBA 3.14:
- elementnummer: 02.10
- alfanumeriek
- lengte 1-200
- "Voornamen"

Wat alfanumeriek betekent vraag ik me af: waarom numeriek in voornamen, en welke letters zijn allemaal toegestaan? Ook IJslandse karakters? Koppelstreepje?
*/

export const voornamenValidation: FormFieldDefinition = createDefinition({
  autoComplete: 'given-name', // "given-name" is not completely accurate, because "Voornamen" constists of both autocomplete="given-name" and autocomplete="additional-names"
  maxLength: 200,
  minLength: 1,
  normalizers: ['normalize-unicode'],
  pattern: teletex,
  preserveWhitespace: false,
  spellCheck: false,
});
