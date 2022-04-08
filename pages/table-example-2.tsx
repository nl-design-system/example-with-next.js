import Head from "next/head";
import { Document } from "../src/components/utrecht/Document";
import { Heading1 } from "../src/components/utrecht/Heading1";
import { Heading2 } from "../src/components/utrecht/Heading2";
import { Page } from "../src/components/utrecht/Page";
import { PageContent } from "../src/components/utrecht/PageContent";
import { Paragraph } from "../src/components/utrecht/Paragraph";
import { Table } from "../src/components/utrecht/Table";
import { TableBody } from "../src/components/utrecht/TableBody";
import { TableCell } from "../src/components/utrecht/TableCell";
import { TableHeaderCell } from "../src/components/utrecht/TableHeaderCell";
import { TableRow } from "../src/components/utrecht/TableRow";

export default function TableExample2() {
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
                <Heading2>Openingstijden</Heading2>
                <Paragraph>Deze tabel is gemaakt binnen de mogelijkheden van een CMS.</Paragraph>
                <Paragraph>We zijn alleen geopend op afspraak</Paragraph>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableHeaderCell>Maandag:</TableHeaderCell>
                      <TableCell>09.00 tot 17.00 uur</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>Dinsdag:</TableHeaderCell>
                      <TableCell>08.00 tot 20.00 uur</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>Woensdag:</TableHeaderCell>
                      <TableCell>09.00 tot 17.00 uur</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>Donderdag:</TableHeaderCell>
                      <TableCell>12.00 tot 20.00 uur</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>Vrijdag:</TableHeaderCell>
                      <TableCell>09.00 tot 17.00 uur</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Paragraph>
                  <a href="#">afspraak maken</a>
                </Paragraph>
              </section>
            </main>
          </PageContent>
        </Page>
      </Document>
    </>
  );
}
