import { ValidationError } from './ValidationError.model';

export interface TooLong extends ValidationError {
  name: 'TooLongError';
  tooLong: true;
}
