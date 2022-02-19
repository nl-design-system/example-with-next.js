import { StepMismatch } from './StepMismatchError.model';

export function StepMismatchError(message: string): StepMismatch {
  return {
    message,
    name: 'StepMismatchError',
    stepMismatch: true,
  };
}
