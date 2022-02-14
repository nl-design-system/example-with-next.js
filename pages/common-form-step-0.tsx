/* eslint-disable react/no-unescaped-entities */
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
  Button,
} from "../src/components/utrecht";

import { PageHeaderTemplate } from "../src/components/huwelijksplanner/PageHeaderTemplate";
import { PageFooterTemplate } from "../src/components/huwelijksplanner/PageFooterTemplate";
import Head from "next/head";
import { ThemeSwitcher } from "../src/components/ThemeSwitcher";

import { useRouter } from "next/router";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form"])),
  },
});

export default function CommonFormStep0() {
  const { t } = useTranslation("form");
  const router = useRouter();

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
            <p>Wat is dit formulier?</p>
            <p>Welke gegevens heb je nodig?</p>
            <Button
              onClick={() => {
                router.push("/common-form-step-1");
              }}
              distanced
            >
              {t("Start")}
            </Button>
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
