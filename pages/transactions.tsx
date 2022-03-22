/* eslint-disable react/no-unescaped-entities */

import { UtrechtDocument } from "@utrecht/web-component-library-react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AlternateLangNavComponent } from "../src/AlternateLangNavComponent";
import { ValueCurrency } from "../src/components/ValueCurrency";
import { ValueDate } from "../src/components/ValueDate";
import { Heading1 } from "../src/components/utrecht/Heading1";
import { Heading2 } from "../src/components/utrecht/Heading2";
import { Paragraph } from "../src/components/utrecht/Paragraph";
import { Table } from "../src/components/utrecht/Table";
import { TableBody } from "../src/components/utrecht/TableBody";
import { TableCell } from "../src/components/utrecht/TableCell";
import { TableHeader } from "../src/components/utrecht/TableHeader";
import { TableHeaderCell } from "../src/components/utrecht/TableHeaderCell";
import { TableRow } from "../src/components/utrecht/TableRow";
import { UnorderedList } from "../src/components/utrecht/UnorderedList";
import { UnorderedListItem } from "../src/components/utrecht/UnorderedListItem";

export default function Home() {
  const locale = useRouter().locale || "en";

  const locales = [
    {
      lang: "en",
      hrefLang: "en",
      title: "This page in English",
      textContent: "EN",
    },
    {
      lang: "nl",
      hrefLang: "nl",
      title: "Deze pagina in Nederlands",
      textContent: "NL",
    },
  ];

  return (
    <>
      <UtrechtDocument lang="nl">
        <Head>
          <title>Voorbeeld met banktransacties</title>
        </Head>
        <header>
          <nav>
            <AlternateLangNavComponent locales={locales} />
          </nav>
        </header>

        <main>
          <Heading1>Voorbeeld met banktransacties</Heading1>
          <Paragraph>Dit is een tijdelijke pagina.</Paragraph>
          <UnorderedList>
            <UnorderedListItem>
              Voor de tabel is geen <code>caption</code> gebruikt maar een heading element (<code>h2</code> in dit
              geval), zodat je de sneltoetsen voor "volgende heading" en "vorige heading" snel de goede tabel kan
              vinden.
            </UnorderedListItem>
            <UnorderedListItem>
              De heading is gekoppeld aan de tabel met <code>aria-labelledby</code>, zodat wanneer de tabel wordt
              weergegeven door een screenreader wel de heading het effect heeft van een table caption. Zonder deze
              koppeling, wanneer je achteruit door het document gaat, zou je een tabel tegenkomen zonder de context waar
              het over gaat.
            </UnorderedListItem>
            <UnorderedListItem>
              De bedragen in de tabel zijn voorzien van een <code>aria-label</code> waar de notatie van het bedrag is
              geoptimaliseerd voor onder andere screen readers (zodat de waarde{" "}
              <q lang="en">programmatically determined</q> kan worden).
            </UnorderedListItem>
          </UnorderedList>
          <Heading2 id="8b19a39d-cdbb-4c97-bbeb-b1a8e568b7bd">januari 2022</Heading2>
          <Table aria-labelledby="8b19a39d-cdbb-4c97-bbeb-b1a8e568b7bd">
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Icoon</TableHeaderCell>
                <TableHeaderCell>
                  <div className="sr-only">Datum</div>
                </TableHeaderCell>
                <TableHeaderCell>Onderwerp</TableHeaderCell>
                <TableHeaderCell>Bedrag</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>
                  <ValueDate date="2022-01-20" className="sr-only" />
                </TableCell>
                <TableCell>
                  <div className="reverse">
                    <div aria-hidden="true">
                      <ValueDate date="2022-01-20" />
                    </div>
                    <div>Leefgeld</div>
                  </div>
                </TableCell>
                <TableCell className="utrecht-table__cell--numeric-column utrecht-table__cell--numeric-data">
                  <ValueCurrency locale={locale} currency="EUR" amount="-456" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>
                  <ValueDate date="2022-01-20" className="sr-only" />
                </TableCell>
                <TableCell>
                  <div className="reverse">
                    <div aria-hidden="true">
                      <ValueDate date="2022-01-20" />
                    </div>
                    <div>Belastingdienst</div>
                  </div>
                </TableCell>
                <TableCell hidden>
                  <ValueDate date="2022-01-20" />
                </TableCell>
                <TableCell className="utrecht-table__cell--numeric-column utrecht-table__cell--numeric-data">
                  <ValueCurrency locale={locale} currency="EUR" amount="123" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </main>
      </UtrechtDocument>
    </>
  );
}
