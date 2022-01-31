/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DemoForm } from "../types/DemoForm";

import {
  Button,
  Document,
  Heading1,
  Page,
  PageHeader,
  PageContent,
  PageContentMain,
  PageFooter,
} from "../src/components/utrecht";

import { FormDetails } from "../src/components/demo/FormDetails";
import { BasicForm } from "../src/components/demo/BasicForm";
import { PageHeaderTemplate } from "../src/components/huwelijksplanner/PageHeaderTemplate";
import { PageFooterTemplate } from "../src/components/huwelijksplanner/PageFooterTemplate";
import Head from "next/head";
import { ThemeSwitcher } from "../src/components/ThemeSwitcher";

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
      </Head>
      <Page>
        <PageHeader>
          <PageHeaderTemplate />
        </PageHeader>
        <PageContent>
          <PageContentMain>
            <Heading1>{t("page-title")}</Heading1>
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
