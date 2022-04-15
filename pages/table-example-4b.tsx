import Head from "next/head";
import Link from "next/link";
import {
  Document,
  Heading1,
  Heading2,
  Page,
  PageContent,
  Paragraph,
  Separator,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "../src/components";
import { DataList } from "../src/components/DataList";
import { DataListItem } from "../src/components/DataListItem";
import { DataListLabel } from "../src/components/DataListLabel";
import { DataListValue } from "../src/components/DataListValue";
import "./table-example-4b.css";

export default function TableExample4() {
  return (
    <>
      <Document lang="nl">
        <Head>
          <title>Voorbeeld met tabel</title>
        </Head>
        <Page>
          <PageContent>
            <main>
              <Heading1>Voorbeeld met tabel</Heading1>
              <section>
                <Heading2>Zaakdetails</Heading2>
                <DataList>
                  <DataListItem>
                    <DataListLabel>Zaaknummer</DataListLabel>
                    <DataListValue>9919905</DataListValue>
                  </DataListItem>
                  <DataListItem>
                    <DataListLabel>Zaaktype</DataListLabel>
                    <DataListValue>Klacht behandelen</DataListValue>
                  </DataListItem>
                  <DataListItem>
                    <DataListLabel>Omschrijving</DataListLabel>
                    <DataListValue></DataListValue>
                  </DataListItem>
                  <DataListItem>
                    <DataListLabel>Toelichting:</DataListLabel>
                    <DataListValue>tourbillon@example.com</DataListValue>
                  </DataListItem>
                  <DataListItem>
                    <DataListLabel>Registratiedatum:</DataListLabel>
                    <DataListValue>29-03-2022</DataListValue>
                  </DataListItem>
                </DataList>
                <Heading2>Doorlooptijd</Heading2>
                <DataList>
                  <DataListItem>
                    <DataListLabel>Startdatum</DataListLabel>
                    <DataListValue>30-03-2022</DataListValue>
                  </DataListItem>
                  <DataListItem>
                    <DataListLabel>Geplande einddatum</DataListLabel>
                    <DataListValue>16-05-2022</DataListValue>
                  </DataListItem>
                  <DataListItem>
                    <DataListLabel>Einddatum</DataListLabel>
                    <DataListValue></DataListValue>
                  </DataListItem>
                </DataList>
                <Paragraph>
                  <Link href="/">Bekijk de documenten</Link>
                </Paragraph>
                <Separator />
                <Heading2>Statussen</Heading2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHeaderCell>Tijdstip</TableHeaderCell>
                      <TableHeaderCell>Status</TableHeaderCell>
                      <TableHeaderCell>Toelichting</TableHeaderCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>29-03-2022 16:02:10</TableCell>
                      <TableCell>Ontvangen</TableCell>
                      <TableCell>Aanvraaggegevens succesvol verstuurd</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </section>
            </main>
          </PageContent>
        </Page>
      </Document>
    </>
  );
}
