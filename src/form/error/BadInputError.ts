import { BadInput } from './BadInputError.model';

export function BadInputError(message: string): BadInput {
  return {
    message,
    name: 'BadInputError',
    badInput: true,
  };
}
