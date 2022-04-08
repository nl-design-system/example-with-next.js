import Head from "next/head";
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

export default function TableExample1() {
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
              <Heading2>Tabel gemaakt met CMS</Heading2>
              <Table>
                <TableCaption>Kosten paspoort en ID-kaart</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Aanvraag</TableHeaderCell>
                    <TableHeaderCell>Geldigheid</TableHeaderCell>
                    <TableHeaderCell>Kosten normaal</TableHeaderCell>
                    <TableHeaderCell>
                      Kosten spoedaanvraag
                      <br />€ 51,60 extra
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>paspoort tot 18 jaar</TableCell>
                    <TableCell>5 jaar</TableCell>
                    <TableCell>€ 57,30</TableCell>
                    <TableCell>€ 108,90</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>paspoort vanaf 18 jaar</TableCell>
                    <TableCell>10 jaar</TableCell>
                    <TableCell>€ 75,80</TableCell>
                    <TableCell>€ 127,40</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ID-kaart tot 18 jaar</TableCell>
                    <TableCell>5 jaar</TableCell>
                    <TableCell>€ 36,95</TableCell>
                    <TableCell>€ 88,55</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ID-kaart vanaf 18 jaar</TableCell>
                    <TableCell>10 jaar</TableCell>
                    <TableCell>€ 68,50</TableCell>
                    <TableCell>€ 120,10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bezorgkosten per document</TableCell>
                    <TableCell />
                    <TableCell>€ 4,95</TableCell>
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
