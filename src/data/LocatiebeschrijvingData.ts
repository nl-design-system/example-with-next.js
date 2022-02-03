import { FormFieldDefinition } from '../components/input/model';
import { teletexMultiline } from './TeletexData';
import { createDefinition } from './create';

/*

Locatiebeschrijving

- elementnummer 12.10
- lengte 1-35
*/
export const locatiebeschrijvingValidation: FormFieldDefinition = createDefinition({
  maxLength: 35,
  minLength: 1,
  multiline: true,
  pattern: teletexMultiline,
});
