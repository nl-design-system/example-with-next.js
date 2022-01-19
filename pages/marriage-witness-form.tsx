/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { UtrechtButton } from "@utrecht/web-component-library-react";
import { Note } from "../src/components/demo/Note";
import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import {
  Article,
  Checkbox,
  DateInput,
  Document,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormLabel,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  OrderedList,
  OrderedListItem,
  Paragraph,
  RadioButton,
  Separator,
  Surface,
  Textarea,
  TextInput,
  UnorderedList,
  UnorderedListItem,
  URL,
} from "../src/components";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LanguageToggle } from "../src/components/LanguageToggle";
import { DemoForm } from "../types/DemoForm";
import { EmptyIndicator } from "../src/components/EmptyIndicator";
import { DataListValue } from "../src/components/DataListValue";

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
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/component-library-css/dist/bem.css" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@gemeente-denhaag/design-tokens-components/dist/theme/index.css"
        />
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
