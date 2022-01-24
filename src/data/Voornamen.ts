export type VoornaamType = string;

/*
The following info is obtained from Logisch Ontwerp GBA 3.14:
- elementnummer: 02.10
- alfanumeriek
- lengte 1-200
- "Voornamen"
*/

export const validation = {
  minLength: 1,
  maxLength: 200,
};
