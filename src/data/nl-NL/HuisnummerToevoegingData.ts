import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';
import { teletex } from './TeletexData';

/**
 * Huisnummertoevoeging
 *
 * Logisch Ontwerp GBA 3.14:
 *
 * - elementnummer 11.40
 * - lengte 1-4
 * - alfanumeriek
 */
export const huisnummertoevoegingValidation: FormFieldDefinition = {
  maxLength: 4,
  minLength: 1,
  pattern: teletex,
};
