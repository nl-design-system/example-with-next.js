import Head from "next/head";
import { PropsWithChildren } from "react";
import { Document, Heading1, Page, PageContent, PageHeader, ThemeSwitcher } from "../index";

export const FormDemoPage = ({ label, children }: PropsWithChildren<{ label: string }>) => (
  <>
    <Head>
      <title>Form field example: {label}</title>
    </Head>
    <Document>
      <Page>
        <PageHeader>
          <ThemeSwitcher />
        </PageHeader>
        <PageContent>
          <Heading1>Form field example: {label}</Heading1>
          <form>{children}</form>
        </PageContent>
      </Page>
    </Document>
  </>
);
