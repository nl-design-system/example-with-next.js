/* eslint-disable react/no-unescaped-entities */
import { FormEvent } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
import { FormFieldGroup } from "../src/components/FormFieldGroup";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form"])),
  },
});

export default function CommonFormStep2() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit common form");
    router.push("/common-form-step-3");
  };

  const { t } = useTranslation("form");

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
            <Paragraph>
              <Link href="/common-form-step-1">← Vorige</Link>{" "}
            </Paragraph>
            <Paragraph lead>Stap 2 van 3 — Zakelijke gegevens</Paragraph>
            <form onSubmit={handleSubmit}>
              <Fieldset distanced>
                <FieldsetLegend distanced>Bedrijfsgegevens</FieldsetLegend>
                <FormField>
                  <FormLabel htmlFor="organization">{t("organization")}</FormLabel>
                  <TextInput id="organization" autoComplete="organization" />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="kvk-number">{t("kvk-number")}</FormLabel>
                  <TextInput id="kvk-number" name="kvk-number" spellCheck={false} inputMode="numeric" />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="website">{t("website")}</FormLabel>
                  <TextInput type="url" id="website" name="website" autoComplete="url" spellCheck={false} />
                </FormField>
              </Fieldset>
              <Fieldset distanced>
                <FieldsetLegend distanced>Bankgegevens</FieldsetLegend>
                <FormField>
                  <FormLabel htmlFor="iban">{t("iban")}</FormLabel>
                  <TextInput id="iban" name="iban" spellCheck={false} />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="bic">{t("bic")}</FormLabel>
                  <TextInput id="bic" name="bic" spellCheck={false} />
                </FormField>
              </Fieldset>
              {/* <Fieldset distanced>
                <FieldsetLegend distanced>Creditcard gegevens</FieldsetLegend>
                <FormField>
                  <FormLabel htmlFor="cc-name">{t("cc-name")}</FormLabel>
                  <TextInput id="cc-name" name="cc-name" autoComplete="cc-name" spellCheck={false} />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="cc-number">{t("cc-number")}</FormLabel>
                  <TextInput id="cc-number" name="cc-number" inputMode="numeric" autoComplete="cc-number" />
                </FormField>
                <FormFieldGroup inline>
                  <FormField>
                    <FormLabel htmlFor="cc-exp-month">{t("cc-exp-month")}</FormLabel>
                    <TextInput
                      id="cc-exp-month"
                      name="cc-exp-month"
                      inputMode="numeric"
                      min="1"
                      max="12"
                      autoComplete="cc-exp-month"
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="cc-exp-year">{t("cc-exp-year")}</FormLabel>
                    <TextInput
                      id="cc-exp-year"
                      name="cc-exp-year"
                      inputMode="numeric"
                      min="2022"
                      autoComplete="cc-exp-year"
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="cc-csc">{t("cc-csc")}</FormLabel>
                    <TextInput type="password" id="cc-csc" name="cc-csc" inputMode="numeric" autoComplete="cc-csc" />
                  </FormField>
                </FormFieldGroup>
              </Fieldset> */}

              <Button type="submit" distanced>
                Volgende
              </Button>
            </form>
          </PageContentMain>
        </PageContent>
        <PageFooter>
          <PageFooterTemplate />
        </PageFooter>
        <ThemeSwitcher />
      </Page>
    </Document>
  );
}
