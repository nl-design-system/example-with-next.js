import { FormFieldDefinition } from '../components/input/model';
import { teletex } from './TeletexData';
import { createDefinition } from './create';
/*

Huisnummertoevoeging

- elementnummer 11.40
- lengte 1-4
- alfanumeriek
*/

export const huisnummertoevoegingValidation: FormFieldDefinition = createDefinition({
  maxLength: 4,
  minLength: 1,
  pattern: teletex,
});
