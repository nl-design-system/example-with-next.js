import { FormFieldDeclaration } from "../src/components/input/model";
import { FormBuilder } from "../src/components/input/FormBuilder";
import { voornaamValidation, voorvoegselGeslachtsnaamValidation, geslachtsnaamValidation } from "../src/data/index";
import { chooseNormalizers, lookupNormalizers } from "../src/data/normalize";
import { createValidators } from "../src/data/validate";

export default function FormBuilderPage() {
  let formFields: FormFieldDeclaration[] = [
    {
      id: "516a5fb3-ed7d-4045-97ef-42016a1f8740",
      labelKey: "given-name",
      name: "given-name",
      required: true,
      fieldType: "input",
      inputSubtype: "text",
      definition: voornaamValidation,
      validators: createValidators(voornaamValidation),
      normalizers: lookupNormalizers(chooseNormalizers(voornaamValidation)),
      defaultState: {
        invalid: true,
        value: "🍺",
        errors: [
          {
            id: "4147d27d-3eea-462f-bb1e-6a7db71f5db9",
            message: "Voornaam mag geen ‘🍺’ hebben.",
          },
        ],
      },
    },
    {
      id: "42f867b9-415f-478e-9b6b-e2a05c729a1b",
      labelKey: "family-name-prefix",
      name: "family-name-prefix",
      required: false,
      fieldType: "input",
      inputSubtype: "text",
      definition: voorvoegselGeslachtsnaamValidation,
      validators: createValidators(voorvoegselGeslachtsnaamValidation),
      normalizers: lookupNormalizers(voorvoegselGeslachtsnaamValidation.normalizers),
      defaultState: {
        value: "",
        invalid: true,
        errors: [
          {
            id: "5fe3dcc9-8b23-4c13-a3d5-8388d4c52c4a",
            message: "bad!",
          },
        ],
      },
    },
    {
      id: "4fc72917-2fa2-4e4d-9967-374a103802d9",
      labelKey: "family-name",
      name: "family-name",
      required: true,
      fieldType: "input",
      inputSubtype: "text",
      definition: geslachtsnaamValidation,
      validators: createValidators(geslachtsnaamValidation),
      normalizers: lookupNormalizers(geslachtsnaamValidation.normalizers),
      defaultState: {
        value: "",
        invalid: false,
        errors: [],
      },
    },
    {
      id: "04361bcc-839f-47dc-8f30-d697002a78e0",
      labelKey: "email",
      required: false,
      inputSubtype: "text", // TODO: email
      definition: {
        pattern: ".+@.+",
      },
      defaultState: {
        value: "",
      },
    },
  ];

  return (
    <>
      <FormBuilder fields={formFields} />
    </>
  );
}
