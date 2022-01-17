export interface Address {
  'postal-code'?: string;
  'house-number'?: number;
  'house-number-letter'?: string;
  'house-number-suffix'?: string;
  street?: string;
  'place-of-residence'?: string;
  municipality?: string;
  country?: string;
}
export type ContactPreference = 'letter' | 'phone' | 'email';

export interface ContactDetails extends Address {
  email?: string;
  tel?: string;
  'tel-mobile'?: string;
  'tel-daytime'?: string;
  'tel-evening'?: string;
  'location-description'?: string;
  'contact-preference': ContactPreference;
}
