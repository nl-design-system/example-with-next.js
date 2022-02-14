/* eslint-disable react/no-unescaped-entities */
import { FormEvent, useEffect, useState } from "react";
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
  FormField,
  FormLabel,
  Paragraph,
  Button,
  Heading2,
  Heading3,
  Checkbox,
} from "../src/components/utrecht";

import { PageHeaderTemplate } from "../src/components/huwelijksplanner/PageHeaderTemplate";
import { PageFooterTemplate } from "../src/components/huwelijksplanner/PageFooterTemplate";
import Head from "next/head";
import { ThemeSwitcher } from "../src/components/ThemeSwitcher";
import { DataListValue } from "../src/components";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form"])),
  },
});

export default function CommonFormStep3() {
  const router = useRouter();
  const [formDetails, setFormDetails] = useState();

  useEffect(() => {
    fetch("/api/form")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setFormDetails(data);
      });
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit common form");
    router.push("/common-form-step-3");
  };

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
            {/*TODO: Step indicator component */}
            <Paragraph>
              <Link href="/common-form-step-2">← Vorige</Link>{" "}
            </Paragraph>
            <Paragraph lead>Stap 3 van 3 — Controleren, betalen en opsturen</Paragraph>
            <div>
              <Heading2>Kloppen deze gegevens?</Heading2>
              <Heading3 id="personal-details">{t("personal-details")}</Heading3>
              <dl aria-describedby="personal-details">
                <div>
                  <dt>{t("given-name")}</dt>
                  <DataListValue value={formDetails?.["given-name"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["given-name"]}</span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{t("family-name")}</dt>
                  <DataListValue value={formDetails?.["family-name"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["family-name"]}</span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{`${t("address")}`}</dt>
                  <DataListValue value={formDetails?.["street"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">
                      {[formDetails?.["street"], formDetails?.["house-number"], formDetails?.["house-number-suffix"]]
                        .filter(Boolean)
                        .join(" ")}
                    </span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{`${t("postal-code")}`}</dt>
                  <DataListValue value={formDetails?.["postal-code"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["postal-code"]}</span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{`${t("place-of-residence")}`}</dt>
                  <DataListValue
                    value={formDetails?.["place-of-residence"]}
                    emptyDescription={t("data-item-input-empty")}
                  >
                    <span className="notranslate">{formDetails?.["place-of-residence"]}</span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{`${t("email")}`}</dt>
                  <DataListValue value={formDetails?.["email"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["email"]}</span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{`${t("tel")}`}</dt>
                  <DataListValue value={formDetails?.["tel"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["tel"]}</span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{`${t("tel-mobile")}`}</dt>
                  <DataListValue value={formDetails?.["tel-mobile"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["tel-mobile"]}</span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{`${t("gender")}`}</dt>
                  <DataListValue value="" emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["gender"]}</span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{`${t("bday")}`}</dt>
                  <DataListValue value={formDetails?.["bday"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["bday"]}</span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{`${t("nationality")}`}</dt>
                  <DataListValue value={formDetails?.["nationality"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["nationality"]}</span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{`${t("bsn")}`}</dt>
                  <DataListValue value={formDetails?.["bsn"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["bsn"]}</span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{`${t("document-number")}`}</dt>
                  <DataListValue value={formDetails?.["document-number"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["document-number"]}</span>
                  </DataListValue>
                </div>
              </dl>
              <Heading3 id="organization-details">Zakelijke gegevens</Heading3>
              <dl aria-describedby="organization-details">
                <div>
                  <dt>{t("organization")}</dt>
                  <DataListValue value={formDetails?.["organization"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["organization"]}</span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{t("kvk")}</dt>
                  <DataListValue value={formDetails?.["kvk"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["kvk"]}</span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{t("website")}</dt>
                  <DataListValue value={formDetails?.["website"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["website"]}</span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{t("iban")}</dt>
                  <DataListValue value={formDetails?.["iban"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["iban"]}</span>
                  </DataListValue>
                </div>
                <div>
                  <dt>{t("bic")}</dt>
                  <DataListValue value={formDetails?.["bic"]} emptyDescription={t("data-item-input-empty")}>
                    <span className="notranslate">{formDetails?.["bic"]}</span>
                  </DataListValue>
                </div>
              </dl>
            </div>
            <form onSubmit={handleSubmit}>
              <FormField>
                <Checkbox id="accept-terms" name="accept-terms" />
                <FormLabel type="checkbox" htmlFor="accept-terms">
                  Ik ga akkoord met het verwerken van bovenstaande gegevens
                </FormLabel>
              </FormField>
              <Button type="submit" distanced>
                Versturen
              </Button>
            </form>
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
