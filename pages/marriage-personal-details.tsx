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

type LegalWitness = { name: string; email: string };

export default function Form() {
  const { t } = useTranslation(["form", "marriage"]);

  const data = {
    bsn: "123456789",
    salutation: "De heer",
    "given-name": "Anne Nicolas Johannes",
    "family-name-prefix": "",
    "family-name": "Deursen",
    "marital-status": "Ongehuwd en nooit geweest",
    bday: "1988-06-10",
    "place-of-birth": "Arnhem",
    "registered-guardianship": "",
    street: "Rubenslaan",
    "house-number": "127",
    "house-number-suffix": "",
    "postal-code": "3582JH",
    "place-of-residence": "Utrecht",
  };

  const WitnessSection = ({
    headingId,
    data,
    number = 0,
  }: {
    headingId: string;
    data: LegalWitness;
    number: number;
  }) => {
    return (
      <>
        <Heading2 id={headingId}>{`${t("marriage:legal-witness")} ${number}`}</Heading2>
        <dl aria-describedby={headingId}>
          <dt>{t("name")}</dt>
          <DataListValue value={data["name"]} emptyDescription="">
            <span className="notranslate">{data["name"]}</span>
          </DataListValue>
          <dt>{t("email")}</dt>
          <DataListValue value={data["email"]} emptyDescription="">
            <URL className="notranslate">{data["email"]}</URL>
          </DataListValue>
        </dl>
      </>
    );
  };

  const NumericData = ({ children }) => <span className="numeric-data">{children}</span>;

  const NoTranslateData = ({ children }) => <span className="notranslate">{children}</span>;

  const OptionalIndicator = () => <span>{`(${t("optional")})`}</span>;

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
      <Heading2 id="personal-details">Persoonsgegevens</Heading2>
      <dl aria-describedby="personal-details">
        <div>
          <dt>{t("bsn")}</dt>
          <DataListValue value={data.bsn} emptyDescription={t("data-item-unknown")}>
            <NumericData>{data.bsn}</NumericData>
          </DataListValue>
        </div>
        <div>
          <dt>{t("salutation")}</dt>
          <DataListValue value={data.salutation} emptyDescription={t("data-item-unknown")}>
            {data.salutation}
          </DataListValue>
        </div>
        <div>
          <dt>{t("given-name")}</dt>
          <DataListValue value={data["given-name"]} emptyDescription={t("data-item-unknown")}>
            <NoTranslateData>{data["given-name"]}</NoTranslateData>
          </DataListValue>
        </div>
        <div>
          <dt>{t("family-name-prefix")}</dt>
          <DataListValue value={data["family-name-prefix"]} emptyDescription={t("data-item-empty")}>
            <NoTranslateData>{data["family-name-prefix"]}</NoTranslateData>
          </DataListValue>
        </div>
        <div>
          <dt>{t("family-name")}</dt>
          <DataListValue value={data["family-name"]} emptyDescription={t("data-item-unknown")}>
            <NoTranslateData>{data["family-name"]}</NoTranslateData>
          </DataListValue>
        </div>
        <div>
          <dt>{t("marital-status")}</dt>
          <DataListValue value={data["marital-status"]} emptyDescription={t("data-item-unknown")}>
            {data["marital-status"]}
          </DataListValue>
        </div>
        <div>
          <dt>{t("bday")}</dt>
          <DataListValue value={data["bday"]} emptyDescription={t("data-item-unknown")}>
            {data["bday"]}
          </DataListValue>
        </div>
        <div>
          <dt>{t("place-of-birth")}</dt>
          <DataListValue value={data["place-of-birth"]} emptyDescription={t("data-item-unknown")}>
            <NoTranslateData>{data["place-of-birth"]}</NoTranslateData>
          </DataListValue>
        </div>
        <div>
          <dt>{t("registered-guardianship")}</dt>
          <DataListValue value={data["registered-guardianship"]} emptyDescription={t("data-item-unknown")}>
            {data["registered-guardianship"]}
          </DataListValue>
        </div>
      </dl>
      <Heading2 id="address">Adresgegevens</Heading2>
      <dl aria-describedby="address">
        <div>
          <dt>{t("street")}</dt>
          <DataListValue value={data.street} emptyDescription={t("data-item-unknown")}>
            <NumericData>{data.street}</NumericData>
          </DataListValue>
        </div>
        <div>
          <dt>{t("house-number")}</dt>
          <DataListValue value={data["house-number"]} emptyDescription={t("data-item-unknown")}>
            {data["house-number"]}
          </DataListValue>
        </div>
        <div>
          <dt>{t("house-number-suffix")}</dt>
          <DataListValue value={data["house-number-suffix"]} emptyDescription={t("data-item-empty")}>
            <NoTranslateData>{data["house-number-suffix"]}</NoTranslateData>
          </DataListValue>
        </div>
        <div>
          <dt>{t("postal-code")}</dt>
          <DataListValue value={data["postal-code"]} emptyDescription={t("data-item-unknown")}>
            {data["postal-code"]}
          </DataListValue>
        </div>
        <div>
          <dt>{t("place-of-residence")}</dt>
          <DataListValue value={data["place-of-residence"]} emptyDescription={t("data-item-unknown")}>
            <NoTranslateData>{data["place-of-residence"]}</NoTranslateData>
          </DataListValue>
        </div>
      </dl>
      <h2 id="contact">Contactgegevens</h2>
      <dl>
        <p>Deze gegevens kun je zelf invullen of wijzigen.</p>
        <FormField>
          <FormLabel htmlFor="tel">
            {t("tel")} <OptionalIndicator />
          </FormLabel>
          <TextInput id="tel" type="tel" />
        </FormField>
        <FormField>
          <FormLabel htmlFor="email">
            {t("email")} <OptionalIndicator />
          </FormLabel>
          <TextInput id="email" type="email" />
        </FormField>
      </dl>
    </Document>
  );
}
