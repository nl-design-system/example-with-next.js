import {
  UtrechtButton,
  UtrechtDocument,
  UtrechtHeading,
  UtrechtPageFooter,
  UtrechtParagraph,
  UtrechtSeparator,
} from "@utrecht/web-component-library-react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { LanguageToggle } from "../src/components/LanguageToggle";
import { ThemeSwitcher } from "../src/components/ThemeSwitcher";
import { Link } from "../src/components/utrecht/Link";
import { PageContent } from "../src/components/utrecht/PageContent";
import { PageFooter } from "../src/components/utrecht/PageFooter";
import { PageHeader } from "../src/components/utrecht/PageHeader";
import { UnorderedList } from "../src/components/utrecht/UnorderedList";
import { UnorderedListItem } from "../src/components/utrecht/UnorderedListItem";
import cityScape from "../src/img/amersfoort-koppelpoort.jpg";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "stepper-form", "theme-switcher"])),
  },
});

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <UtrechtDocument>
        <Head>
          <title>Demo</title>
          <meta name="description" content="NL Design System demo's" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageHeader>
          <ThemeSwitcher />
          <nav>
            <LanguageToggle />
          </nav>
        </PageHeader>
        <main>
          <PageContent>
            <UtrechtHeading level={1}>NL Design System demo's</UtrechtHeading>

            <UnorderedList>
              <UnorderedListItem>
                <NextLink href="/stepper-form/step-1">
                  <Link>{t("stepper-form:page-title")}</Link>
                </NextLink>
              </UnorderedListItem>
            </UnorderedList>
          </PageContent>
        </main>
      </UtrechtDocument>
    </>
  );
}
