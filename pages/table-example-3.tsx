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

export default function TableExample3() {
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
                <Heading2>Persoonsgegevens</Heading2>
                <Paragraph>
                  Dit voorbeeld is gemaakt met een <code>Table</code> component:
                </Paragraph>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableHeaderCell>Aanhef:</TableHeaderCell>
                      <TableCell>De heer</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>Voorletters:</TableHeaderCell>
                      <TableCell>Y.Y.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>Voorvoegsel:</TableHeaderCell>
                      <TableCell>du</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>Achternaam:</TableHeaderCell>
                      <TableCell>Tourbillon</TableCell>
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
