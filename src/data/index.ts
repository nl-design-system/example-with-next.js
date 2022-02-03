import { FormFieldDefinition } from '../components/input/model';
import { createDefinition } from './create';
export { adresRegel1Validation, adresRegel2Validation, adresRegel3Validation } from './AdresRegelData';
export { bsnValidation } from './BSNData';
export { placeOfBirthValidation } from './GeboorteplaatsData';
export { geslachtsnaamValidation } from './GeslachtsnaamData';
export { huisletterValidation } from './HuisletterData';
export { huisnummerValidation } from './HuisnummerData';
export { huisnummertoevoegingValidation } from './HuisnummerToevoegingData';
export { kvkValidation } from './KvkData';
export { locatiebeschrijvingValidation } from './LocatiebeschrijvingData';
export { postcodeValidation } from './PostcodeData';
export { reisdocumentValidation } from './ReisdocumentData';
export { voornaamValidation } from './VoornaamData';
export { voornamenValidation } from './VoornamenData';
export { voorvoegselGeslachtsnaamValidation } from './VoorvoegselGeslachtsnaamData';
export { woonplaatsnaamValidation } from './WoonplaatsnaamData';

export type BSNType = string;

export type VoornaamType = string;

/*
The following info is obtained from Logisch Ontwerp GBA 3.14:
- elementnummer: 03.10
- elementnaam: "Geboortedatum"
- lengte: 8 (jjjjmmdd)
- mag niet in de toekomst liggen
- niet iedereen weet de geboortedatum, sommige mensen weten het alleen op het jaar of maand nauwkeurig. Dan wordt 0000 of 00 gebruikt voor dat gedeelte.

Opmerkingen:
- is er een edge case dat iemand is geboren in een andere tijdzone waar het al "de volgende dag is" ten op zichte van Nederland, en daardoor de datum in de toekomst ligt
*/
export const bdayValidation: FormFieldDefinition = createDefinition({
  //
});

export type GeslachtsaanduidingType = 'M' | 'O' | 'V';

export const GeslachtsaanduidingDefault = 'O';

/*
The following info is obtained from Logisch Ontwerp GBA 3.14:
- elementnummer "05.10"
- elementnaam "Nationaliteit"
- landcode uit "Tabel 32, Nationaliteitentabel"
*/

/*

Indicatie curateleregister

- elementnummer 33.10
- Numeriek
- 1 = er is een curator

effectief dus `boolean`, maar met mogelijkheden tot uitbreiding

*/

export const indicatieCurateleregisterValidation: FormFieldDefinition = createDefinition({
  maxLength: 1,
  minLength: 1,
  numeric: true,
});
