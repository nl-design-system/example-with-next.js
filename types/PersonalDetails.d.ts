export type Gender = 'female' | 'male' | 'unknown';

export interface PersonalDetails {
  'given-name': string;
  'family-name': string;
  'given-name-initials'?: string;
  'family-name-prefix'?: string;
  'name-original-writing'?: string;
  'manner-of-address'?: string;
  'adelijke-titel-predicaat'?: string;
  gender: Gender;
  bday?: string;
  bsn?: number;
  'place-of-birth'?: string;
  'country-of-birth'?: string;
}
