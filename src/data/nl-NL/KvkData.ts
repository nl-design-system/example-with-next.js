import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';

/**
 * KVK-nummer
 *
 * @see https://www.kvk.nl/informatiebank/kvk-nummer-alles-wat-je-moet-weten/
 */
export const kvkValidation: FormFieldDefinition = {
  maxLength: 8,
  minLength: 8,
  integer: true,
  pattern: '[0-9]{8}',
};
