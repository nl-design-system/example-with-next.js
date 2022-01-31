/* eslint-disable react/no-unescaped-entities */
import { useRef, useEffect, useState, FormEvent } from "react";
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
  FormField,
  FormLabel,
  TextInput,
} from "../src/components/utrecht";
import { PageHeaderTemplate } from "../src/components/huwelijksplanner/PageHeaderTemplate";
import { PageFooterTemplate } from "../src/components/huwelijksplanner/PageFooterTemplate";
import { useRouter } from "next/router";

export default function FormStep2() {
  const main = useRef<HTMLFormElement>(null);
  const [rel, setRel] = useState<string>();
  const router = useRouter();
  useEffect(() => {
    if (main.current) {
      main.current.focus();
    }
  });
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // debugger;
    if (rel === "prev") {
      router.push("/form-step-1");
      console.log(1);
    } else {
      router.push("/form-step-3");
      console.log(3);
    }
  };
  return (
    <Document>
      <Head>
        <title>Step 2</title>
      </Head>
      <Page>
        <PageHeader>
          <PageHeaderTemplate />
        </PageHeader>
        <PageContent>
          <PageContentMain>
            <form onSubmit={handleSubmit} ref={main}>
              <Heading1>Step 2</Heading1>
              <Paragraph lead>Important text, giving context for form inputs.</Paragraph>
              <Paragraph>More text, giving context for form inputs.</Paragraph>
              <FormField>
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <TextInput id="email" />
              </FormField>
              <Paragraph>
                <Button
                  type="submit"
                  name="rel"
                  value="back"
                  onClick={() => {
                    setRel("prev");
                  }}
                >
                  Back
                </Button>
              </Paragraph>
              <Paragraph>
                <Button
                  type="submit"
                  name="rel"
                  value="next"
                  onClick={() => {
                    setRel("next");
                  }}
                >
                  Next
                </Button>
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
