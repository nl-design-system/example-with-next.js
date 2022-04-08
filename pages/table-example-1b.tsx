import Head from "next/head";
import { ValueCurrency } from "../src/components/ValueCurrency";
import { Document } from "../src/components/utrecht/Document";
import { Heading1 } from "../src/components/utrecht/Heading1";
import { Heading2 } from "../src/components/utrecht/Heading2";
import { Page } from "../src/components/utrecht/Page";
import { PageContent } from "../src/components/utrecht/PageContent";
import { Table } from "../src/components/utrecht/Table";
import { TableBody } from "../src/components/utrecht/TableBody";
import { TableCaption } from "../src/components/utrecht/TableCaption";
import { TableCell } from "../src/components/utrecht/TableCell";
import { TableHeader } from "../src/components/utrecht/TableHeader";
import { TableHeaderCell } from "../src/components/utrecht/TableHeaderCell";
import { TableRow } from "../src/components/utrecht/TableRow";

export default function TableExample1b() {
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
              <Heading2>Tabel gemaakt met extra opmaak</Heading2>
              <Table>
                <TableCaption>Kosten paspoort en ID-kaart</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell scope="column">Aanvraag</TableHeaderCell>
                    <TableHeaderCell scope="column">Geldigheid</TableHeaderCell>
                    <TableHeaderCell scope="column">Kosten normaal</TableHeaderCell>
                    <TableHeaderCell scope="column">
                      Kosten spoedaanvraag
                      <br />
                      <ValueCurrency currency="EUR" amount="51.60" /> extra
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableHeaderCell scope="row">paspoort tot 18 jaar</TableHeaderCell>
                    <TableCell>5 jaar</TableCell>
                    <TableCell>
                      <ValueCurrency currency="EUR" amount="57.30" />
                    </TableCell>
                    <TableCell>
                      <ValueCurrency currency="EUR" amount="108.90" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell scope="row">paspoort vanaf 18 jaar</TableHeaderCell>
                    <TableCell>10 jaar</TableCell>
                    <TableCell>
                      <ValueCurrency currency="EUR" amount="75.80" />
                    </TableCell>
                    <TableCell>
                      <ValueCurrency currency="EUR" amount="127.40" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell scope="row">ID-kaart tot 18 jaar</TableHeaderCell>
                    <TableCell>5 jaar</TableCell>
                    <TableCell>
                      <ValueCurrency currency="EUR" amount="36.95" />
                    </TableCell>
                    <TableCell>
                      <ValueCurrency currency="EUR" amount="88.55" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell scope="row">ID-kaart vanaf 18 jaar</TableHeaderCell>
                    <TableCell>10 jaar</TableCell>
                    <TableCell>
                      <ValueCurrency currency="EUR" amount="68.50" />
                    </TableCell>
                    <TableCell>
                      <ValueCurrency currency="EUR" amount="120.10" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell scope="row">Bezorgkosten per document</TableHeaderCell>
                    <TableCell />
                    <TableCell>
                      <ValueCurrency currency="EUR" amount="4.95" />
                    </TableCell>
                    <TableCell>niet mogelijk met spoedaanvraag</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </main>
          </PageContent>
        </Page>
      </Document>
    </>
  );
}
