import { adresRegel1Validation, adresRegel2Validation, adresRegel3Validation } from '../data/nl-NL/AdresRegelData';
import { bsnValidation } from '../data/nl-NL/BSNData';
import { placeOfBirthValidation } from '../data/nl-NL/GeboorteplaatsData';
import { geslachtsnaamValidation } from '../data/nl-NL/GeslachtsnaamData';
import { huisletterValidation } from '../data/nl-NL/HuisletterData';
import { huisnummerValidation } from '../data/nl-NL/HuisnummerData';
import { huisnummertoevoegingValidation } from '../data/nl-NL/HuisnummerToevoegingData';
import { kvkValidation } from '../data/nl-NL/KvkData';
import { locatiebeschrijvingValidation } from '../data/nl-NL/LocatiebeschrijvingData';
import { postcodeValidation } from '../data/nl-NL/PostcodeData';
import { reisdocumentValidation } from '../data/nl-NL/ReisdocumentData';
import { voornaamValidation } from '../data/nl-NL/VoornaamData';
import { voornamenValidation } from '../data/nl-NL/VoornamenData';
import { voorvoegselGeslachtsnaamValidation } from '../data/nl-NL/VoorvoegselGeslachtsnaamData';
import { woonplaatsnaamValidation } from '../data/nl-NL/WoonplaatsnaamData';
import { createFormField } from './state/FormField';

const id = 'c4141c8b-7b76-4d8b-8935-a5e6efcfb61c';

describe('frequently used Dutch form fields', () => {
  describe('voornaam', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Voornaam',
          labelKey: 'given-name',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...voornaamValidation,
        },
      });

      expect(def).not.toBeUndefined();
    });
  });

  describe('voornamen', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Voornamen',
          labelKey: 'give-name',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...voornamenValidation,
        },
      });

      expect(def).not.toBeUndefined();
    });
  });

  describe('voorvoegsel', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Voorvoegsel',
          labelKey: 'family-name-prefix',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...voorvoegselGeslachtsnaamValidation,
        },
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('achternaam', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Achternaam',
          labelKey: 'family-name',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...geslachtsnaamValidation,
        },
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('straatnaam', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Straatnaam',
          labelKey: 'street',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {},
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('huisnummer', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Huisnummer',
          labelKey: 'house-number',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...huisnummerValidation,
        },
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('huisletter', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Huisletter',
          labelKey: 'house-number-letter-suffix',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...huisletterValidation,
        },
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('huisnummertoevoeging', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Huisnummertoevoeging',
          labelKey: 'house-number-suffix',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...huisnummertoevoegingValidation,
        },
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('postcode', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Postcode',
          labelKey: 'postal-code',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...postcodeValidation,
        },
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('woonplaatsnaam', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Woontplaatsnaam',
          labelKey: 'place-of-residence',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...woonplaatsnaamValidation,
        },
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('locatiebeschrijving', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Locatiebeschrijving',
          labelKey: 'location-description',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...locatiebeschrijvingValidation,
        },
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('buitenlands adres - regel 1', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Adres, regel 1',
          labelKey: 'address-line-1',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...adresRegel1Validation,
        },
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('buitenlands adres - regel 2', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Adres, regel 2',
          labelKey: 'address-line-2',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...adresRegel2Validation,
        },
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('buitenlands adres - regel 3', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Adres, regel 3',
          labelKey: 'address-line-3',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...adresRegel3Validation,
        },
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('e-mailadres', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'E-mailadres',
          labelKey: 'email',
          fieldType: 'input',
          inputSubtype: 'email',
        },
        definition: {
          autoComplete: 'email',
        },
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('burgerservicenummer (BSN)', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Burgerservicenummer',
          labelKey: 'bsn',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...bsnValidation,
        },
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('geboorteplaats', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Geboorteplaats',
          labelKey: 'place-of-birth',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...placeOfBirthValidation,
        },
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('nummer reisdocument', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'Nummer Nederlands reisdocument',
          labelKey: 'document-number',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...reisdocumentValidation,
        },
      });
      expect(def).not.toBeUndefined();
    });
  });

  describe('KVK-nummer', () => {
    it('should support its definition', () => {
      const def = createFormField({
        declaration: {
          id,
          label: 'KVK-nummer',
          labelKey: 'kvk',
          fieldType: 'input',
          inputSubtype: 'text',
        },
        definition: {
          ...kvkValidation,
        },
      });
      expect(def).not.toBeUndefined();
    });
  });
});
