import { FormFieldDefinition } from '../components/input/model';
import { createDefinition } from './create';

/*

Postcode

- elementnummer 11.60
- lengte 6
- alfanumeriek
*/
export const postcodeValidation: FormFieldDefinition = createDefinition({
  caseInsensitive: true,
  maxLength: 6,
  minLength: 6,
  pattern: '[0-9]{4}[A-Za-z]{2}',
});
