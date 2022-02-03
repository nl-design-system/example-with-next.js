import { FormFieldDefinition } from '../components/input/model';
import { teletex } from './TeletexData';
import { createDefinition } from './create';

/*

Woonplaatsnaam

- elementnummer 11.70
- lengte 1-80
- alfanumeriek
*/

export const woonplaatsnaamValidation: FormFieldDefinition = createDefinition({
  maxLength: 80,
  minLength: 1,
  pattern: teletex,
});
