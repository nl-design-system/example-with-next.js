import { TooLong } from './TooLongError.model';

export function TooLongError(message: string): TooLong {
  return {
    message,
    name: 'TooLongError',
    tooLong: true,
  };
}
