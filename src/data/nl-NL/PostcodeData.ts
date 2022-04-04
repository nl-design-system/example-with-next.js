import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';

/**
 * Postcode
 *
 * Logisch Ontwerp GBA 3.14:
 *
 * - elementnummer 11.60
 * - lengte 6
 * - alfanumeriek
 */
export const postcodeValidation: FormFieldDefinition = {
  caseInsensitive: true,
  maxLength: 6,
  minLength: 6,
  normalizers: ['remove-whitespace', 'normalize-unicode'],
  pattern: '[0-9]{4}[A-Za-z]{2}',
};
