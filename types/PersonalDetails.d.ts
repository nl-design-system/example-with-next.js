export type Gender = 'female' | 'male' | 'unknown';

export interface PersonalDetails {
  'given-name': string;
  'family-name': string;
  'given-name-initials'?: string;
  'family-name-prefix'?: string;
  'name-original-writing'?: string;
  'manner-of-address'?: string;
  gender: Gender;
  bday?: string;
  bsn?: number;
}
