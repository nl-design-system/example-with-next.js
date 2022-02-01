import Head from "next/head";
import { Document, Heading1, Heading2, URL } from "../src/components/utrecht";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LanguageToggle } from "../src/components/LanguageToggle";
import { DataListValue } from "../src/components/DataListValue";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "marriage"])),
  },
});

type LegalWitness = { name: string; email: string };

export default function Form() {
  const { t } = useTranslation(["form", "marriage"]);

  const state: LegalWitness[] = [
    {
      name: "Jane Doe",
      email: "jane@example.com",
    },
    {
      name: "John Doe",
      email: "john@example.com",
    },
    {
      name: "",
      email: "",
    },
    {
      name: "",
      email: "",
    },
  ];

  const WitnessSection = ({
    headingId,
    data,
    number = 0,
  }: {
    headingId: string;
    data: LegalWitness;
    number: number;
  }) => {
    return (
      <>
        <Heading2 id={headingId}>{`${t("marriage:legal-witness")} ${number}`}</Heading2>
        <dl aria-describedby={headingId}>
          <dt>{t("name")}</dt>
          <DataListValue value={data["name"]} emptyDescription="">
            <span className="notranslate">{data["name"]}</span>
          </DataListValue>
          <dt>{t("email")}</dt>
          <DataListValue value={data["email"]} emptyDescription="">
            <URL className="notranslate">{data["email"]}</URL>
          </DataListValue>
        </dl>
      </>
    );
  };

  return (
    <Document>
      <Head>
        <title>{t("marriage:page-title")}</title>
      </Head>
      <LanguageToggle />
      <Heading1>{t("marriage:page-title")}</Heading1>
      <WitnessSection headingId="witness-1" data={state[0]} number={1} />
      <WitnessSection headingId="witness-2" data={state[1]} number={2} />
      <WitnessSection headingId="witness-3" data={state[2]} number={3} />
      <WitnessSection headingId="witness-4" data={state[3]} number={4} />
    </Document>
  );
}
