import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';

/**
 * Nummer Nederlands reisdocument
 *
 * Logisch Ontwerp GBA 3.14:
 *
 * - elementnummer 35.20
 * - lengte 9
 * - alfanumeriek
 */
export const reisdocumentValidation: FormFieldDefinition = {
  maxLength: 9,
  minLength: 9,
  normalizers: ['normalize-whitespace', 'trim-whitespace', 'normalize-unicode'],
  pattern: '[A-Za-z0-9]{9}',
  patternKey: 'alpha-numeric-pattern',
};
