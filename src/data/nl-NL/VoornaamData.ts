import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';
import { teletex } from './TeletexData';

/**
 * Voornaam
 *
 * Logisch Ontwerp GBA 3.14:
 *
 * - elementnummer: 02.10
 * - alfanumeriek
 * - lengte 1-200
 * - "Voornamen"
 */
export const voornaamValidation: FormFieldDefinition = {
  autoComplete: 'given-name',
  maxLength: 200,
  minLength: 1,
  normalizers: ['normalize-whitespace', 'trim-whitespace', 'normalize-unicode'],
  pattern: teletex,
  patternKey: 'teletex-pattern',
  preserveWhitespace: false,
  spellCheck: false,
};
