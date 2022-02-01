import { useRef, useEffect, FormEvent } from "react";
import Head from "next/head";
import {
  Document,
  Paragraph,
  Heading1,
  Page,
  PageContent,
  PageContentMain,
  PageHeader,
  PageFooter,
  Button,
} from "../src/components/utrecht";
import { PageHeaderTemplate } from "../src/components/huwelijksplanner/PageHeaderTemplate";
import { PageFooterTemplate } from "../src/components/huwelijksplanner/PageFooterTemplate";
import { useRouter } from "next/router";

export default function FormStep1() {
  const router = useRouter();
  const main = useRef<HTMLFormElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/form-step-2");
  };
  useEffect(() => {
    if (main.current) {
      main.current.focus();
      console.log("Focus main content");
    }
  });
  return (
    <Document>
      <Head>
        <title>Step 1</title>
      </Head>
      <Page>
        <PageHeader>
          <PageHeaderTemplate />
        </PageHeader>
        <PageContent>
          <PageContentMain>
            <form onSubmit={handleSubmit} ref={main}>
              <Heading1>Step 1</Heading1>
              <Paragraph>
                <Button type="submit">Next</Button>
              </Paragraph>
            </form>
          </PageContentMain>
        </PageContent>{" "}
        <PageFooter>
          <PageFooterTemplate />
        </PageFooter>
      </Page>
    </Document>
  );
}
