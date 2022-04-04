import { FormFieldDefinition } from '../../form/state/FormFieldDefinition.model';

/**
 * Voornamen
 *
 * Er is een lijst "Tabel 36 Voorvoegseltabel" waarin alle mogelijke
 * voorvoegsels staan genoemd. Gebaseerd op die lijst kun je eventueel een
 * regexp maken waaraan elk voorvoegsel voldoet.
 *
 * De `maxLength` 10 is gebaseerd op de langste waarde in de voorvoegseltabel,
 * en de `pattern` bevat alle tekens die voorkomen in deze tabel.
 *
 * Logisch Ontwerp GBA 3.14:
 *
 * - elementnummer: 02.30
 * - alfanumeriek
 */
export const voorvoegselGeslachtsnaamValidation: FormFieldDefinition = {
  maxLength: 10,
  minLength: 1,
  normalizers: ['normalize-whitespace', 'trim-whitespace', 'normalize-unicode'],
  pattern: "[A-Za-z' ]{0,10}",
  patternKey: 'alphabet-whitespace-pattern',
  preserveWhitespace: false,
  spellCheck: false,
};
