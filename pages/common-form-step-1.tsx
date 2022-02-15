/* eslint-disable react/no-unescaped-entities */
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FormBuilder } from "../src/components/input/FormBuilder";
import { voornaamValidation } from "../src/data/index";
import { chooseNormalizers, lookupNormalizers } from "../src/data/normalize";

import {
  Document,
  Heading1,
  Page,
  PageHeader,
  PageContent,
  PageContentMain,
  PageFooter,
  FormField,
  FormLabel,
  RadioButton,
  TextInput,
  Fieldset,
  FieldsetLegend,
  Paragraph,
  Button,
} from "../src/components/utrecht";

import { PageHeaderTemplate } from "../src/components/huwelijksplanner/PageHeaderTemplate";
import { PageFooterTemplate } from "../src/components/huwelijksplanner/PageFooterTemplate";
import Head from "next/head";
import { ThemeSwitcher } from "../src/components/ThemeSwitcher";
import { RadioGroup } from "../src/components/RadioGroup";
import { FormFieldGroup } from "../src/components/FormFieldGroup";
import { DateInput } from "../src/components";
import { useRouter } from "next/router";
import { DemoFormInput } from "../types/DemoForm";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form"])),
  },
});

export default function CommonFormStep1() {
  const router = useRouter();
  const [formData, setFormData] = useState<Partial<DemoFormInput>>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = { [e.target.name]: e.target.value };
    setFormData((current) => (current ? { ...current, ...input } : input));
    console.log("formData", formData);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit common form step 1", JSON.stringify(formData));

    const request = new Request("/api/form", { method: "POST", body: JSON.stringify(formData) });

    fetch(request).then((res) => {
      console.log("RES", res, "formData", formData);
      router.push("/common-form-step-2");
    });
  };

  const { t } = useTranslation("form");

  const wieBenJeFields = [
    {
      id: "e4e5dee0-f4fc-4d8e-9d40-5e871566f8c4",
      labelKey: "given-name",
      name: "given-name",
      required: true,
      fieldType: "input",
      inputSubtype: "text",
      definition: voornaamValidation,
      normalizers: lookupNormalizers(chooseNormalizers(voornaamValidation)),
      defaultState: {
        invalid: false,
        value: "",
        errors: [],
      },
    },
  ];

  useEffect(() => {
    fetch("api/form")
      .then((res) => res.json())
      .then((data) => setFormData(data));
  }, []);

  return (
    <Document>
      <Head>
        <title>{t("page-title")}</title>
      </Head>
      <Page>
        <PageHeader>
          <PageHeaderTemplate />
        </PageHeader>
        <PageContent>
          <PageContentMain>
            <Heading1>{t("page-title")}</Heading1>
            {/*TODO: Step indicator component */}
            <Paragraph lead>Stap 1 van 3 — Persoonlijke gegevens</Paragraph>
            <form onSubmit={handleSubmit} method="POST" action="/api/form">
              <Fieldset>
                <FieldsetLegend>Wie ben je</FieldsetLegend>
                <FormBuilder t={t} fields={wieBenJeFields} />
                {/* GIVEN NAME */}
                <FormField>
                  <FormLabel htmlFor="given-name">{t("given-name")}</FormLabel>
                  <TextInput
                    id="given-name"
                    autoComplete="given-name"
                    value={formData?.["given-name"]}
                    name="given-name"
                    onChange={handleInputChange}
                    invalid
                  />
                </FormField>
                {/* FAMILY NAME */}
                <FormField>
                  <FormLabel htmlFor="family-name" disabled>
                    {t("family-name")}
                  </FormLabel>
                  <TextInput
                    id="family-name"
                    autoComplete="family-name"
                    value={formData?.["family-name"]}
                    name="family-name"
                    onChange={handleInputChange}
                    disabled
                  />
                </FormField>
              </Fieldset>

              <Fieldset>
                <FieldsetLegend>Waar woon je?</FieldsetLegend>
                <FormField>
                  <FormLabel htmlFor="street">{t("street")}</FormLabel>
                  <TextInput
                    id="street"
                    name="street"
                    spellCheck={false}
                    value={formData?.["street"]}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormFieldGroup inline>
                  <FormField>
                    <FormLabel htmlFor="house-number">{t("house-number")}</FormLabel>
                    <TextInput
                      id="house-number"
                      name="house-number"
                      autoComplete="house-number"
                      inputMode={"numeric"}
                      value={formData?.["house-number"]}
                      onChange={handleInputChange}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="house-number-suffix">{t("house-number-suffix")}</FormLabel>
                    <TextInput
                      id="house-number-suffix"
                      name="house-number-suffix"
                      spellCheck={false}
                      value={formData?.["house-number-suffix"]}
                      onChange={handleInputChange}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="postal-code">{t("postal-code")}</FormLabel>
                    <TextInput
                      id="postal-code"
                      name="postal-code"
                      autoComplete="postal-code"
                      spellCheck={false}
                      value={formData?.["postal-code"]}
                      onChange={handleInputChange}
                    />
                  </FormField>
                </FormFieldGroup>
                <FormField>
                  <FormLabel htmlFor="place-of-residence">{t("place-of-residence")}</FormLabel>
                  <TextInput
                    id="place-of-residence"
                    name="place-of-residence"
                    spellCheck={false}
                    value={formData?.["place-of-residence"]}
                    onChange={handleInputChange}
                  />
                </FormField>
              </Fieldset>

              <Fieldset>
                <FieldsetLegend>Hoe kunnen we je bereiken?</FieldsetLegend>
                <FormField>
                  <FormLabel htmlFor="email">{t("email")}</FormLabel>
                  <TextInput
                    id="email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    spellCheck={false}
                    value={formData?.["email"]}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="tel">{t("tel")}</FormLabel>
                  <TextInput
                    id="tel"
                    name="tel"
                    autoComplete="tel"
                    type="tel"
                    value={formData?.["tel"]}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="tel-mobile">{t("tel-mobile")}</FormLabel>
                  <TextInput
                    id="tel-mobile"
                    name="tel-mobile"
                    autoComplete="tel mobile"
                    type="tel"
                    value={formData?.["tel-mobile"]}
                    onChange={handleInputChange}
                  />
                </FormField>
              </Fieldset>

              <Fieldset>
                <FieldsetLegend>Overige persoonlijke gegevens</FieldsetLegend>
                <RadioGroup label={t("gender")} inline distanced>
                  <FormField>
                    <FormLabel type="radio" htmlFor="female">
                      {t("gender-female")}
                    </FormLabel>
                    <RadioButton id="female" name="gender" value="female" />
                  </FormField>
                  <FormField>
                    <FormLabel type="radio" htmlFor="male">
                      {t("gender-male")}
                    </FormLabel>
                    <RadioButton id="male" name="gender" value="male" />
                  </FormField>
                  <FormField>
                    <FormLabel type="radio" htmlFor="unknown">
                      {t("gender-unknown")}
                    </FormLabel>
                    <RadioButton id="unknown" name="gender" value="unknown" />
                  </FormField>
                </RadioGroup>
                <FormField>
                  <FormLabel htmlFor="bday">{t("bday")}</FormLabel>
                  <DateInput id="bday" autoComplete="bday" name="bday" />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="nationality">{t("nationality")}</FormLabel>
                  <TextInput id="nationality" name="nationality" />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="bsn">{t("bsn")}</FormLabel>
                  <TextInput id="bsn" name="bsn" inputMode="numeric" />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="document-number">{t("document-number")}</FormLabel>
                  <TextInput id="document-number" name="document-number" />
                </FormField>
              </Fieldset>
              <Button type="submit">Volgende stap</Button>
            </form>
          </PageContentMain>
        </PageContent>
        <PageFooter>
          <PageFooterTemplate />
          <ThemeSwitcher />
        </PageFooter>
      </Page>
    </Document>
  );
}
