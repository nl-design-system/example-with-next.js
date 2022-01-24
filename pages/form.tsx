/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LanguageToggle } from "../src/components/LanguageToggle";
import { DemoForm } from "../types/DemoForm";

import { Button, Checkbox, Document, FormField, FormLabel, Heading1 } from "../src/components/utrecht";

import { FormDetails } from "../src/components/demo/FormDetails";
import { BasicForm } from "../src/components/demo/BasicForm";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form"])),
  },
});

export default function Form() {
  const [data, setData] = useState<DemoForm>();

  const { t } = useTranslation("form");

  return (
    <Document>
      <Head>
        <title>{t("page-title")}</title>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/component-library-css/dist/bem.css" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@gemeente-denhaag/design-tokens-components/dist/theme/index.css"
        />
      </Head>
      <Heading1>{t("page-title")}</Heading1>
      <LanguageToggle />
      {data ? (
        <>
          <FormDetails {...data} />
          <Button onClick={() => setData(undefined)}>Back</Button>
        </>
      ) : (
        <>
          <BasicForm setDetails={setData} />
        </>
      )}
    </Document>
  );
}
