import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';
import { teletexMultiline } from './TeletexData';

/**
 * Locatiebeschrijving
 *
 * Logisch Ontwerp GBA 3.14:
 *
 * - elementnummer 12.10
 * - lengte 1-35
 */
export const locatiebeschrijvingValidation: FormFieldDefinition = {
  maxLength: 35,
  minLength: 1,
  multiline: true,
  normalizers: ['normalize-whitespace', 'trim-whitespace', 'normalize-unicode'],
  pattern: teletexMultiline,
  patternKey: 'teletex-pattern',
};
