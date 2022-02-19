import { PatternMismatch } from './PatternMismatchError.model';

export function PatternMismatchError(message: string): PatternMismatch {
  return {
    message,
    name: 'PatternMismatchError',
    patternMismatch: true,
  };
}
