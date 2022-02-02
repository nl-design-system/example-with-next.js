/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Document, Page, PageContent, PageContentMain, PageHeader, PageFooter } from "./utrecht";
import { PageHeaderTemplate } from "./huwelijksplanner/PageHeaderTemplate";
import { PageFooterTemplate } from "./huwelijksplanner/PageFooterTemplate";
import { SkipLink } from "./SkipLink";
import { PropsWithChildren } from "react";

interface DocumentationPageProps {
  title: string;
  t: (key: string) => string;
}

export const DocumentationPage = ({ children, title, t = (str) => str }: PropsWithChildren<DocumentationPageProps>) => (
  <Document>
    <SkipLink href="#main">{t("common:skip-link-main")}</SkipLink>
    <Head>
      <title>{title}</title>
    </Head>
    <Page>
      <PageHeader>
        <PageHeaderTemplate />
      </PageHeader>
      <PageContent>
        <PageContentMain id="main">{children}</PageContentMain>
      </PageContent>
      <PageFooter>
        <PageFooterTemplate />
      </PageFooter>
    </Page>
  </Document>
);
