import { FormFieldDefinition } from '../components/input/model';
import { teletex } from './TeletexData';
import { createDefinition } from './create';

/*

Regel 1 adres buitenland

- elementnummer 13.30
- lengte 1-35
*/
export const adresRegel1Validation: FormFieldDefinition = createDefinition({
  maxLength: 35,
  minLength: 1,
  pattern: teletex,
});

/*

Regel 2 adres buitenland

- elementnummer 13.40
- lengte 1-35
*/
export const adresRegel2Validation: FormFieldDefinition = createDefinition({
  maxLength: 35,
  minLength: 1,
  pattern: teletex,
});

/*

Regel 3 adres buitenland

- elementnummer 13.50
- lengte 1-35
*/
export const adresRegel3Validation: FormFieldDefinition = createDefinition({
  maxLength: 35,
  minLength: 1,
  pattern: teletex,
});
