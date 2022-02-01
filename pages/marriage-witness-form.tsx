import Head from "next/head";
import { UtrechtButton } from "@utrecht/web-component-library-react";
import {
  Document,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormLabel,
  Heading1,
  TextInput,
} from "../src/components/utrecht";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LanguageToggle } from "../src/components/LanguageToggle";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "marriage"])),
  },
});

export default function Form() {
  const { t } = useTranslation(["form", "marriage"]);

  return (
    <Document>
      <Head>
        <title>{t("marriage:page-title")}</title>
      </Head>
      <LanguageToggle />
      <Heading1>{t("marriage:page-title")}</Heading1>
      <form method="post" action="/api/getuige">
        <Fieldset>
          <FieldsetLegend>{t("marriage:legal-witness")} 1</FieldsetLegend>
          <FormField>
            <FormLabel htmlFor="getuige-1-naam">{t("name")}</FormLabel>
            <TextInput id="getuige-1-naam" type="text" autoComplete="name section-getuige-1" required></TextInput>
          </FormField>
          <FormField>
            <FormLabel htmlFor="getuige-1-email">{t("email")}</FormLabel>
            <TextInput id="getuige-1-email" type="email" autoComplete="email section-getuige-1" required></TextInput>
          </FormField>
        </Fieldset>
        <Fieldset>
          <FieldsetLegend>{t("marriage:legal-witness")} 2</FieldsetLegend>
          <FormField>
            <FormLabel htmlFor="getuige-2-naam">{t("name")}</FormLabel>
            <TextInput id="getuige-2-naam" type="text" autoComplete="name section-getuige-2" required></TextInput>
          </FormField>
          <FormField>
            <FormLabel htmlFor="getuige-2-email">{t("email")}</FormLabel>
            <TextInput id="getuige-2-email" type="email" autoComplete="email section-getuige-2" required></TextInput>
          </FormField>
        </Fieldset>
        <Fieldset>
          <FieldsetLegend>{t("marriage:legal-witness")} 3</FieldsetLegend>
          <FormField>
            <FormLabel htmlFor="getuige-3-naam">{t("name")}</FormLabel>
            <TextInput id="getuige-3-naam" type="text" autoComplete="name section-getuige-3"></TextInput>
          </FormField>
          <FormField>
            <FormLabel htmlFor="getuige-3-email">{t("email")}</FormLabel>
            <TextInput id="getuige-3-email" type="email" autoComplete="email section-getuige-3"></TextInput>
          </FormField>
        </Fieldset>
        <Fieldset>
          <FieldsetLegend>{t("marriage:legal-witness")} 4</FieldsetLegend>
          <FormField>
            <FormLabel htmlFor="getuige-4-naam">{t("name")}</FormLabel>
            <TextInput id="getuige-4-naam" type="text" autoComplete="name section-getuige-4"></TextInput>
          </FormField>
          <FormField>
            <FormLabel htmlFor="getuige-4-email">{t("email")}</FormLabel>
            <TextInput id="getuige-4-email" type="email" autoComplete="email section-getuige-4"></TextInput>
          </FormField>
        </Fieldset>
        <div>
          <UtrechtButton type="submit">{t("submit")}</UtrechtButton>
        </div>
      </form>
    </Document>
  );
}
