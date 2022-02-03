import { FormFieldDefinition } from '../components/input/model';
import { createDefinition } from './create';

/*
Huisnummer
-elementnummer 11.20
https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/stelsel-van-basisregistraties/schrijfwijze-registreren-en-presenteren-adressen-stelsel-basisregistraties/
https://nl.wikipedia.org/wiki/Huisnummer

Wikipedia zegt dat er huisnummers zijn die in de tienduizenden lopen in Nederland, daarmee is maxLength 5 nodig
*/
export const huisnummerValidation: FormFieldDefinition = createDefinition({
  maxLength: 5,
  integer: true,
});
