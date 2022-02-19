import { BadInput } from './BadInputError.model';
import { CustomError } from './CustomError.model';
import { PatternMismatch } from './PatternMismatchError.model';
import { RangeOverflow } from './RangeOverflowError.model';
import { RangeUnderflow } from './RangeUnderflowError.model';
import { StepMismatch } from './StepMismatchError.model';
import { TooLong } from './TooLongError.model';
import { TooShort } from './TooShortError.model';
import { ValueMissing } from './ValueMissingError.model';

export type FormValidationError =
  | BadInput
  | CustomError
  | PatternMismatch
  | RangeOverflow
  | RangeUnderflow
  | StepMismatch
  | TooLong
  | TooShort
  | ValueMissing;
