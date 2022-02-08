import { FormFieldDeclaration } from "../src/components/input/model";
import { FormBuilder } from "../src/components/input/FormBuilder";
import { voornaamValidation, voorvoegselGeslachtsnaamValidation, geslachtsnaamValidation } from "../src/data/index";
import { chooseNormalizers, lookupNormalizers } from "../src/data/normalize";
import { createValidators } from "../src/data/validate";
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
      validators: createValidators(voorvoegselGeslachtsnaamValidation),
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
