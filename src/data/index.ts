export type BSNType = string;

/*
The following info is obtained from Logisch Ontwerp GBA 3.14:
- elementnummer: 01.20
- numeric
- fixed length of 9
- "Burgerservicenummer"
- "(9*s0)+(8*s1)+(7*s2)+...+(2*s7)-(1*s8) is deelbaar door 11.
*/

export const validationBSN = {
  minLength: 9,
  maxLength: 9,
  numeric: true,
  pattern: '^[0-9]{9}$',
};

/*
export const validate = (str: string) =>
  /^[0-9]{9}$/.test(str) &&
  String(str)
    .split('')
    .map((str) => parseInt(str, 10))
    .reverse()
    .map((n, index) => n * (index + 1))
    .reduce((a, b, index) => (index === 0 ? a - b : a + b), 0) %
    11 ===
    0;
*/
export const validateBSN = (str: string) => {
  if (/^[0-9]{9}$/.test(str)) {
    const n = String(str)
      .split('')
      .map((str) => parseInt(str, 10));
    return (9 * n[0] + 8 * n[1] + 7 * n[2] + 6 * n[3] + 5 * n[4] + 4 * n[5] + 3 * n[6] + 2 * n[7] - n[8]) % 11 === 0;
  }
  return false;
};

export type VoornaamType = string;

/*
The following info is obtained from Logisch Ontwerp GBA 3.14:
- elementnummer: 02.10
- alfanumeriek
- lengte 1-200
- "Voornamen"

Wat alfanumeriek betekent vraag ik me af: waarom numeriek in voornamen, en welke letters zijn allemaal toegestaan? Ook IJslandse karakters? Koppelstreepje?
*/

export const voornaamValidation = {
  minLength: 1,
  maxLength: 200,
};

/*
The following info is obtained from Logisch Ontwerp GBA 3.14:
- elementnummer: 02.30
- alfanumeriek
- lengte 1-200
- "Voornamen"

Er is een lijst "Tabel 36 Voorvoegseltabel" waarin alle mogelijk voorvoegsels staan genoemd.
Gebaseerd op die lijst kun je een regexp maken waaraan elk voorvoegsel voldoet.
*/

export const voorvoegselGeslachtsnaamValidation = {
  minLength: 1,
  maxLength: 10,
  pattern: "^[A-Za-z' ]{0,10}$",
};

/*
The following info is obtained from Logisch Ontwerp GBA 3.14:
- elementnummer: 02.40
- elementnaam: "Geslachtsnaam"
- lengte: 1-200
- alfanumeriek
*/
export const geslachtsnaamValidation = {
  minLength: 1,
  maxLength: 200,
};

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
export const bdayValidation = {
  //
};

/*
The following info is obtained from Logisch Ontwerp GBA 3.14:
- elementnummer "03.30"
- elementnaam "Geboorteland"
- landcode uit "Tabel 34, Landentabel"
 */
export const placeOfBirthValidation = {
  minLength: 1,
  maxLength: 40,
};

export const GeslachtsaanduidingType = 'M' | 'O' | 'V';

export const GeslachtsaanduidingDefault = 'O';

/*
The following info is obtained from Logisch Ontwerp GBA 3.14:
- elementnummer "05.10"
- elementnaam "Nationaliteit"
- landcode uit "Tabel 32, Nationaliteitentabel"
*/

/*
Huisnummer

https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/stelsel-van-basisregistraties/schrijfwijze-registreren-en-presenteren-adressen-stelsel-basisregistraties/

*/
