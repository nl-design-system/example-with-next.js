import Head from "next/head";
import {
  Document,
  Paragraph,
  Heading1,
  Heading2,
  Link,
  Button,
  Page,
  PageContent,
  PageContentMain,
  PageHeader,
  PageFooter,
} from "../src/components/utrecht";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReservationCard } from "../src/components/huwelijksplanner/ReservationCard";
import { useRouter } from "next/router";
import { exampleState } from "../src/data/huwelijksplanner-state";
import { PageHeaderTemplate } from "../src/components/huwelijksplanner/PageHeaderTemplate";
import { PageFooterTemplate } from "../src/components/huwelijksplanner/PageFooterTemplate";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["huwelijksplanner-step-3"])),
  },
});

export default function MultistepForm1() {
  const { t } = useTranslation("huwelijksplanner-step-3");
  const locale = useRouter().locale || "en";
  const data = { ...exampleState };

  return (
    <Document>
      <Head>
        <title>
          {t("huwelijksplanner-step-3:title")}
          {" — "}
          {t("common:website-name")}
        </title>
      </Head>
      <Page>
        <PageHeader>
          <PageHeaderTemplate />
        </PageHeader>
        <PageContent>
          <PageContentMain>
            <form method="POST" action="/api/huwelijksplanner-step-3">
              <Heading1>{t("huwelijksplanner-step-3:heading-1")}</Heading1>
              {/*TODO: Previous button */}
              {/*TODO: Step indicator component */}
              {/*TODO: Banner / card */}
              {data["reservation"] ? <ReservationCard reservation={data["reservation"]} locale={locale} /> : ""}
              <section>
                <Heading2>Meld je voorgenomen huwelijk</Heading2>
                <Paragraph>
                  Je logt hier in met DigID. Zo geef je door aan de gemeente dat je wil gaan trouwen.
                </Paragraph>
                <Paragraph>Na deze stap vragen we ook aan je partner om in te loggen met DigID.</Paragraph>
                {/*TODO: DigiD button */}
                <Button type="submit" name="type">
                  Meld voorgenomen huwelijk
                </Button>
              </section>
              <section>
                <Heading2>Meer informatie</Heading2>
                <Paragraph>
                  <Link href="/" external target="_blank">
                    Vraag DigiD aan
                  </Link>
                </Paragraph>
              </section>
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
