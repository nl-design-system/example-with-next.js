import { ValidationError } from './ValidationError.model';

export interface TooShort extends ValidationError {
  name: 'TooShortError';
  tooShort: true;
}
