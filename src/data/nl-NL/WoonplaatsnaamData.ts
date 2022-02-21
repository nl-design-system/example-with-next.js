import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';
import { teletex } from './TeletexData';

/**
 * Woonplaatsnaam
 *
 * Logisch Ontwerp GBA 3.14:
 *
 * - elementnummer 11.70
 * - lengte 1-80
 * - alfanumeriek
 */
export const woonplaatsnaamValidation: FormFieldDefinition = {
  maxLength: 80,
  minLength: 1,
  pattern: teletex,
};
