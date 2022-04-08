import Head from "next/head";
import Link from "next/link";
import { Document } from "../src/components/utrecht/Document";
import { Heading1 } from "../src/components/utrecht/Heading1";
import { Heading2 } from "../src/components/utrecht/Heading2";
import { Page } from "../src/components/utrecht/Page";
import { PageContent } from "../src/components/utrecht/PageContent";
import { Paragraph } from "../src/components/utrecht/Paragraph";
import { Separator } from "../src/components/utrecht/Separator";
import { Table } from "../src/components/utrecht/Table";
import { TableBody } from "../src/components/utrecht/TableBody";
import { TableCell } from "../src/components/utrecht/TableCell";
import { TableHeader } from "../src/components/utrecht/TableHeader";
import { TableHeaderCell } from "../src/components/utrecht/TableHeaderCell";
import { TableRow } from "../src/components/utrecht/TableRow";

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
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableHeaderCell>Zaaknummer</TableHeaderCell>
                      <TableCell>9919905</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>Zaaktype</TableHeaderCell>
                      <TableCell>Klacht behandelen</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>Omschrijving</TableHeaderCell>
                      <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>Toelichting:</TableHeaderCell>
                      <TableCell>tourbillon@example.com</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>Registratiedatum:</TableHeaderCell>
                      <TableCell>29-03-2022</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Heading2>Doorlooptijd</Heading2>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableHeaderCell>Startdatum</TableHeaderCell>
                      <TableCell>30-03-2022</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>Geplande einddatum</TableHeaderCell>
                      <TableCell>16-05-2022</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>Einddatum</TableHeaderCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
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
