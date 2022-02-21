import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';

/**
 * Huisletter
 *
 * Lijkt maxLength 1 te moeten zijn.
 *
 * Logisch Ontwerp GBA 3.14:
 *
 * - elementnummer 11.30
 */
export const huisletterValidation: FormFieldDefinition = {
  maxLength: 1,
  pattern: '[A-Za-z]?',
};
