import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';
import { teletex } from './TeletexData';

/**
 * Voornamen
 *
 * In GBA komt "voornamen" alleen als veld voor alle voornamen, terwijl in HTML
 * `autoComplete` is onderverdeeld in `given-name` en `additional-name`.
 * De `autoComplete` waarde is klopt dus niet precies voor dit veld,
 * maar het is een goed begin en werkt voor personen met één voornaam.
 *
 * Logisch Ontwerp GBA 3.14:
 *
 * - elementnummer: 02.10
 * - alfanumeriek
 * - lengte 1-200
 * - "Voornamen"
 */
export const voornamenValidation: FormFieldDefinition = {
  autoComplete: 'given-name',
  maxLength: 200,
  minLength: 1,
  normalizers: ['normalize-unicode'],
  pattern: teletex,
  preserveWhitespace: false,
  spellCheck: false,
};
