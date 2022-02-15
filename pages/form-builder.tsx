import { FormFieldDeclaration } from "../src/components/input/model";
import { FormBuilder } from "../src/components/input/FormBuilder";
import { voornaamValidation, voorvoegselGeslachtsnaamValidation, geslachtsnaamValidation } from "../src/data/index";
import { chooseNormalizers, lookupNormalizers } from "../src/data/normalize";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { DocumentationPage } from "../src/components/DocumentationPage";
import { Heading1 } from "../src/components/utrecht";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "common"])),
  },
});

export default function FormBuilderPage() {
  const { t } = useTranslation(["form", "common"]);

  let formFields: FormFieldDeclaration[] = [
    {
      id: "bc830edd-9cf5-4861-bdae-199c74b6eae5",
      labelKey: "agree-with-terms-of-usage",
      name: "agree-with-terms-of-usage",
      required: true,
      fieldType: "checkbox",
      definition: {},
      defaultState: {
        value: "agree",
        errors: [],
      },
    },
    {
      id: "fff54ab9-429e-4fc6-a76c-24a2692f6495",
      labelKey: "nationality",
      name: "nationality",
      required: true,
      fieldType: "select",
      definition: {
        options: [
          { id: "87a2f0e3-af20-40c6-a722-126ee986084d", value: "NL", label: "Nederlandse", labelKey: "nationality_nl" },
          { id: "cac4ee26-fb9b-4e5e-869c-07011d3e7ea2", value: "US", label: "Amerikaanse", labelKey: "nationality_us" },
          {
            id: "e5c47c32-a7b4-44bc-ab37-98b93ea6bbc4",
            value: "XX",
            label: "Onbekend",
            labelKey: "nationality_xx",
            disabled: true,
          },
        ],
      },
      defaultState: {
        value: "agree",
        errors: [],
      },
    },
    {
      id: "47a7a088-fada-4a83-9479-bcbf69b789d4",
      labelKey: "nationality",
      name: "nationality",
      required: true,
      fieldType: "checkboxgroup",
      definition: {
        options: [
          { id: "a644cc4a-055f-498d-b563-47de60f91cff", value: "NL", label: "Nederlandse", labelKey: "nationality_nl" },
          { id: "272d8719-d337-481e-9f97-f541f138d30d", value: "US", label: "Amerikaanse", labelKey: "nationality_us" },
          {
            id: "8f4d870c-f7c1-4c25-b651-92b113a66344",
            value: "XX",
            label: "Onbekend",
            labelKey: "nationality_xx",
            disabled: false,
          },
        ],
      },
      defaultState: {
        value: "agree",
        errors: [],
      },
    },
    {
      id: "77669b80-d197-46e7-a00a-5ca815974573",
      labelKey: "time-of-delivery",
      name: "time-of-delivery",
      required: true,
      fieldType: "radiogroup",
      definition: {
        options: [
          { id: "0e3fe934-e074-4993-82b9-2f0fce15bb6a", value: "09:00", label: "Ochtend", labelKey: "time_morning" },
          { id: "ff460d4b-4200-4b13-bc8a-3dd3a1b74e00", value: "12:00", label: "Middag", labelKey: "time_afternoon" },
          {
            id: "dea06da7-04f7-4afd-8f61-7ab125547d92",
            value: "",
            label: "Maakt niet uit",
            labelKey: "time_unspecified",
            disabled: false,
          },
        ],
      },
      defaultState: {
        value: "agree",
        errors: [],
        selectedOptions: ["0e3fe934-e074-4993-82b9-2f0fce15bb6a"],
      },
    },
    {
      id: "fcc835b9-307f-4564-b47e-bad73eb2ff72",
      labelKey: "amount",
      name: "amount",
      required: true,
      fieldType: "input",
      inputSubtype: "number",
      definition: voornaamValidation,
      normalizers: lookupNormalizers(chooseNormalizers(voornaamValidation)),
      defaultState: {
        value: "42",
        errors: [],
      },
    },
    {
      id: "a5bee2ba-dbfa-4646-a1c6-5c18b1cfe86c",
      labelKey: "getal tussen 37 en 42",
      required: false,
      fieldType: "input",
      inputSubtype: "number",
      definition: {
        min: 37,
        max: 42,
        step: 1,
        numeric: true,
      },
      defaultState: {
        value: "40",
      },
    },
    {
      id: "956ec64f-09a3-4026-921b-abf5d679be48",
      labelKey: "getal tussen 37 en 42",
      required: false,
      fieldType: "input",
      inputSubtype: "range",
      definition: {
        min: 37,
        max: 42,
        step: 1,
        numeric: true,
      },
      defaultState: {
        value: "40",
      },
    },
    {
      id: "516a5fb3-ed7d-4045-97ef-42016a1f8740",
      labelKey: "given-name",
      name: "given-name",
      required: true,
      fieldType: "input",
      inputSubtype: "text",
      definition: voornaamValidation,
      normalizers: lookupNormalizers(chooseNormalizers(voornaamValidation)),
      defaultState: {
        invalid: true,
        value: "Herman—Jan",
        errors: [
          {
            id: "4147d27d-3eea-462f-bb1e-6a7db71f5db9",
            message: "Voornaam mag geen ‘—’ hebben.",
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
      normalizers: lookupNormalizers(voorvoegselGeslachtsnaamValidation.normalizers),
      defaultState: {
        value: "",
        invalid: true,
        errors: [],
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
      fieldType: "input",
      inputSubtype: "text", // TODO: email
      definition: {
        pattern: ".+@.+",
      },
      defaultState: {
        value: "",
      },
    },
    {
      id: "f76fddac-57fc-4bcb-b7a7-1f940879318f",
      labelKey: "minimaal 5 tekens",
      required: false,
      fieldType: "input",
      inputSubtype: "text", // TODO: email
      definition: {
        minLength: 5,
      },
      defaultState: {
        value: "1234",
      },
    },
    {
      id: "8c6b0791-70df-4eec-8938-64e0394c32d6",
      labelKey: "maximaal 5 tekens",
      required: false,
      fieldType: "input",
      inputSubtype: "text", // TODO: email
      definition: {
        maxLength: 5,
      },
      defaultState: {
        value: "123456",
      },
    },
    {
      id: "10bce566-5e71-4c27-8f85-ff6e3554503e",
      labelKey: "patroon zonder spaties",
      required: false,
      fieldType: "input",
      inputSubtype: "text", // TODO: email
      definition: {
        pattern: "[^\\s]*",
      },
      defaultState: {
        value: "[    ]",
      },
    },
  ];

  return (
    <DocumentationPage title={t("page-title")} t={t}>
      <Heading1>{t("page-title")}</Heading1>
      <FormBuilder
        t={t}
        fields={formFields}
        customSubmit={() => {
          return new Promise<void>((resolve, reject) => {
            const success = Math.random() >= 0.5;
            const latency = 1500;

            if (success) {
              setTimeout(() => {
                resolve();
              }, latency);
            } else {
              setTimeout(() => {
                reject({
                  id: "6a889eab-85b3-4211-8f93-2f3a2a15d32c",
                  message: "HTTP 500: Internal Server Error",
                });
              }, latency);
            }
          });
        }}
      />
    </DocumentationPage>
  );
}
