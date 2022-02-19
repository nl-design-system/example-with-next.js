import { ValueMissing } from './ValueMissingError.model';

export function ValueMissingError(message: string): ValueMissing {
  return {
    message,
    name: 'ValueMissingError',
    valueMissing: true,
  };
}
