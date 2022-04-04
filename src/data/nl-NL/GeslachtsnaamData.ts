import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';
import { teletex } from './TeletexData';

/**
 * Achternaam / Geslachtsnaam
 *
 * Logisch Ontwerp GBA 3.14:
 *
 * - elementnummer: 02.40
 * - elementnaam: "Geslachtsnaam"
 * - lengte: 1-200
 * - alfanumeriek
 */
export const geslachtsnaamValidation: FormFieldDefinition = {
  autoComplete: 'family-name',
  maxLength: 200,
  minLength: 1,
  normalizers: ['normalize-whitespace', 'trim-whitespace', 'normalize-unicode'],
  pattern: teletex,
  preserveWhitespace: false,
  spellCheck: false,
};
