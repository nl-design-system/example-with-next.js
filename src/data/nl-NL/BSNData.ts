import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';

/**
 * Burgerservicenummer (BSN)
 *
 * Logisch Ontwerp GBA 3.14:
 *
 * - elementnummer: 01.20
 * - numeriek
 * - lengte 9
 * - "Burgerservicenummer"
 * - "(9*s0)+(8*s1)+(7*s2)+...+(2*s7)-(1*s8) is deelbaar door 11.
 */
export const bsnValidation: FormFieldDefinition = {
  integer: true,
  maxLength: 9,
  minLength: 9,
  normalizers: ['normalize-whitespace', 'trim-whitespace', 'normalize-unicode'],
  pattern: '[0-9]{9}',
};

export const validateBSN = (str: string) => {
  if (/^[0-9]{9}$/.test(str)) {
    const n = String(str)
      .split('')
      .map((str) => parseInt(str, 10));
    return (9 * n[0] + 8 * n[1] + 7 * n[2] + 6 * n[3] + 5 * n[4] + 4 * n[5] + 3 * n[6] + 2 * n[7] - n[8]) % 11 === 0;
  }
  return false;
};
