import { ValidationTypeFlag } from './ValidationError.model';

export type CustomError = Error & Partial<ValidationTypeFlag>;
