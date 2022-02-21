import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';

/**
 * Huisnummer
 *
 * Wikipedia zegt dat er huisnummers zijn die in de tienduizenden lopen in
 * Nederland, daarmee is maxLength 5 nodig.
 *
 * Logisch Ontwerp GBA 3.14:
 *
 * - elementnummer 11.20
 *
 * @see https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/stelsel-van-basisregistraties/schrijfwijze-registreren-en-presenteren-adressen-stelsel-basisregistraties/
 * @see https://nl.wikipedia.org/wiki/Huisnummer
 */
export const huisnummerValidation: FormFieldDefinition = {
  maxLength: 5,
  integer: true,
};
