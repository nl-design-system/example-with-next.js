/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Document, Page, PageContent, PageContentMain, PageHeader, PageFooter } from "./utrecht";
import { PageHeaderTemplate } from "./huwelijksplanner/PageHeaderTemplate";
import { PageFooterTemplate } from "./huwelijksplanner/PageFooterTemplate";

import { PropsWithChildren } from "react";

interface DocumentationPageProps {
  title: string;
}

export const DocumentationPage = ({ children, title }: PropsWithChildren<DocumentationPageProps>) => (
  <Document>
    <Head>
      <title>{title}</title>
    </Head>
    <Page>
      <PageHeader>
        <PageHeaderTemplate />
      </PageHeader>
      <PageContent>
        <PageContentMain>{children}</PageContentMain>
      </PageContent>
      <PageFooter>
        <PageFooterTemplate />
      </PageFooter>
    </Page>
  </Document>
);
