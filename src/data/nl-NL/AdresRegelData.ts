import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';
import { teletex } from './TeletexData';

/**
 * Regel 1 adres buitenland
 *
 * Logisch Ontwerp GBA 3.14:
 *
 * - elementnummer 13.30
 * - lengte 1-35
 */
export const adresRegel1Validation: FormFieldDefinition = {
  autoComplete: 'address-line1',
  maxLength: 35,
  minLength: 1,
  normalizers: ['normalize-whitespace', 'trim-whitespace', 'normalize-unicode'],
  pattern: teletex,
};

/**
 * Regel 2 adres buitenland
 *
 * Logisch Ontwerp GBA 3.14:
 *
 * - elementnummer 13.30
 * - lengte 1-35
 */
export const adresRegel2Validation: FormFieldDefinition = {
  autoComplete: 'address-line2',
  maxLength: 35,
  minLength: 1,
  normalizers: ['normalize-whitespace', 'trim-whitespace', 'normalize-unicode'],
  pattern: teletex,
};

/**
 * Regel 3 adres buitenland
 *
 * Logisch Ontwerp GBA 3.14:
 *
 * - elementnummer 13.30
 * - lengte 1-35
 */
export const adresRegel3Validation: FormFieldDefinition = {
  autoComplete: 'address-line3',
  maxLength: 35,
  minLength: 1,
  normalizers: ['normalize-whitespace', 'trim-whitespace', 'normalize-unicode'],
  pattern: teletex,
};
