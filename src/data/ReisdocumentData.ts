import { FormFieldDefinition } from '../components/input/model';
import { createDefinition } from './create';

/*

Nummer Nederlands reisdocument

- elementnummer 35.20
- lengte 9
- alfanumeriek
*/

export const reisdocumentValidation: FormFieldDefinition = createDefinition({
  maxLength: 9,
  minLength: 9,
  pattern: '[A-Za-z0-9]{9}',
});
