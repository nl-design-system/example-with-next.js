import { FormFieldDefinition } from '../components/input/model';
import { createDefinition } from './create';

/*

Huisletter

- elementnummer 11.30
lijkt maxLength 1 te zijn
pattern "^[A-Za-z]?$"
*/

export const huisletterValidation: FormFieldDefinition = createDefinition({
  maxLength: 1,
  pattern: '[A-Za-z]?',
});
