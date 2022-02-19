import { TooShort } from './TooShortError.model';

export function TooShortError(message: string): TooShort {
  return {
    message,
    name: 'TooShortError',
    tooShort: true,
  };
}
