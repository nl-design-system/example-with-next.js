import { FormValidationError } from '../error/FormValidationError.model';

export type FormValidationFunction = (_value: string) => FormValidationError | undefined;
