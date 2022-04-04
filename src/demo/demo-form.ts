import { geslachtsnaamValidation } from '../data/nl-NL/GeslachtsnaamData';
import { huisnummerValidation } from '../data/nl-NL/HuisnummerData';
import { huisnummertoevoegingValidation } from '../data/nl-NL/HuisnummerToevoegingData';
import { postcodeValidation } from '../data/nl-NL/PostcodeData';
import { voornaamValidation } from '../data/nl-NL/VoornaamData';
import { voorvoegselGeslachtsnaamValidation } from '../data/nl-NL/VoorvoegselGeslachtsnaamData';
import { woonplaatsnaamValidation } from '../data/nl-NL/WoonplaatsnaamData';
import { createFormField } from '../form/state/FormField';

export const createDemoForm = () => {
  const geslacht = createFormField({
    declaration: {
      id: '6c68547f-c29a-4ad6-a372-de38d184e334',
      fieldType: 'radiogroup',
      labelKey: 'form:gender',
      label: 'Geslacht',
    },
    definition: {
      options: [
        {
          id: 'e6e4059f-1a15-4bde-87e9-3bf7ffee3699',
          value: 'V',
          label: 'Vrouw',
          labelKey: 'form:gender-female',
        },
        {
          id: 'b45dd458-3af7-4414-b1ac-a430622f4946',
          value: 'M',
          label: 'Man',
          labelKey: 'form:gender-male',
        },
        {
          id: '5010af86-9e5d-482a-97ce-d9b093760910',
          value: 'O',
          label: 'Onbekend',
          labelKey: 'form:gender-unknown',
        },
      ],
    },
  });

  const voornaam = createFormField({
    declaration: {
      id: '0d2ae246-fd0f-458c-a7eb-1afb34ac934b',
      fieldType: 'input',
      labelKey: 'form:given-name',
      label: 'Voornaam',
    },
    definition: {
      ...voornaamValidation,
      required: true,
    },
  });

  const tussenvoegsel = createFormField({
    declaration: {
      id: 'cd40db1d-dfd5-4222-8342-5bd0fd6407b2',
      fieldType: 'input',
      labelKey: 'form:family-name-prefix',
      label: 'Tussenvoegsel',
    },
    definition: {
      ...voorvoegselGeslachtsnaamValidation,
      required: false,
    },
  });

  const achternaam = createFormField({
    declaration: {
      id: '7a50c629-3a0e-4769-adb3-41aa628d7077',
      fieldType: 'input',
      labelKey: 'form:family-name',
      label: 'Achternaam',
    },
    definition: {
      ...geslachtsnaamValidation,
      required: true,
    },
  });

  const straatnaam = createFormField({
    declaration: {
      id: 'f82bb987-a790-4fd0-9f50-bdd7da8b38dc',
      fieldType: 'input',
      labelKey: 'form:street',
      label: 'Straatnaam',
    },
    definition: {
      required: true,
    },
  });

  const huisnummer = createFormField({
    declaration: {
      id: 'efa07d7e-856c-46c3-a042-b25c8c29457c',
      fieldType: 'input',
      labelKey: 'form:house-number',
      label: 'huisnummer',
    },
    definition: {
      ...huisnummerValidation,
      required: true,
    },
  });

  const huisnummerToevoeging = createFormField({
    declaration: {
      id: '0528663b-3398-4af0-aaf8-90b79372c124',
      fieldType: 'input',
      labelKey: 'form:house-number-suffix',
      label: 'toevoeging',
    },
    definition: {
      ...huisnummertoevoegingValidation,
      required: false,
    },
  });

  const woonplaatsnaamToevoeging = createFormField({
    declaration: {
      id: '048b7737-2529-4977-9087-eda540235b8e',
      fieldType: 'input',
      labelKey: 'form:place-of-residence',
      label: 'Woonplaats',
    },
    definition: {
      ...woonplaatsnaamValidation,
      required: true,
    },
  });

  const postcode = createFormField({
    declaration: {
      id: 'f18f3c36-d73e-4035-8d0e-ea0be39a5115',
      fieldType: 'input',
      labelKey: 'form:postal-code',
      label: 'postcode',
    },
    definition: {
      ...postcodeValidation,
      required: true,
    },
  });

  const email = createFormField({
    declaration: {
      id: '26965f4b-f54c-43c1-9d07-0944d0a8ec2f',
      fieldType: 'input',
      inputSubtype: 'email',
      labelKey: 'form:email',
      label: 'E-mailadres',
    },
    definition: {
      autoComplete: 'email',
      required: true,
    },
  });

  const telephone = createFormField({
    declaration: {
      id: '6db347d9-52bb-4d73-85e1-17ab9b1d031c',
      fieldType: 'input',
      // TODO: Support 'tel`
      // inputSubtype: 'tel',
      labelKey: 'form:tel',
      label: 'Telefoonnummer',
    },
    definition: {
      autoComplete: 'tel home',
      required: false,
    },
  });

  const telephoneMobile = createFormField({
    declaration: {
      id: 'f8ec3430-e1e1-4750-82fd-07c8ebb5bdde',
      fieldType: 'input',
      // TODO: Support 'tel`
      // inputSubtype: 'tel',
      labelKey: 'form:tel-mobile',
      label: 'Mobiel nummer',
    },
    definition: {
      autoComplete: 'tel mobile',
      required: false,
    },
  });

  const bericht = createFormField({
    declaration: {
      id: 'b35faa7e-0f5d-4e8a-b3ef-611a2cd074ac',
      fieldType: 'textarea',
      labelKey: 'form:your-question',
      label: 'bericht',
    },
    definition: {
      multiline: true,
      required: false,
    },
  });

  const dataverwerking = createFormField({
    declaration: {
      id: '45f62f69-38c4-4f33-b001-6d46c8df8161',
      fieldType: 'checkbox',
      labelKey: 'form:data-processing-consent',
      label: 'Ik ga akkoord met de verwerking van mijn gegevens',
    },
    definition: {
      required: true,
    },
  });

  return {
    geslacht,
    voornaam,
    tussenvoegsel,
    achternaam,
    straatnaam,
    huisnummer,
    huisnummerToevoeging,
    postcode,
    woonplaatsnaamToevoeging,
    email,
    telephone,
    telephoneMobile,
    bericht,
    dataverwerking,
  };
};
