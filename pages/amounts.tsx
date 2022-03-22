import { UtrechtDocument } from "@utrecht/web-component-library-react";
import Head from "next/head";
import { ValueCurrency } from "../src/components/ValueCurrency";
import { Table } from "../src/components/utrecht/Table";
import { TableBody } from "../src/components/utrecht/TableBody";
import { TableCell } from "../src/components/utrecht/TableCell";
import { TableHeader } from "../src/components/utrecht/TableHeader";
import { TableHeaderCell } from "../src/components/utrecht/TableHeaderCell";
import { TableRow } from "../src/components/utrecht/TableRow";

export default function AmountsDemo() {
  return (
    <>
      <UtrechtDocument lang="nl">
        <Head>
          <title>Voorbeeld met bedragen</title>
        </Head>

        <main>
          <h1>Voorbeeld met bedragen</h1>
          <p>Dit is een tijdelijke pagina.</p>
          <p>Lijst met eerst het bedrag uitgeschreven in tekst, daarna volgt de versie met speciale opmaak.</p>
          <section>
            <h2>Nederlands</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Type bedrag</TableHeaderCell>
                  <TableHeaderCell>Uitgeschreven</TableHeaderCell>
                  <TableHeaderCell>Toegankelijk label</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>rond bedrag</TableCell>
                  <TableCell>honderddrieëntwintig euro</TableCell>
                  <TableCell>
                    <ValueCurrency locale="nl-NL" currency="EUR" amount="123"></ValueCurrency>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>bedrag met centen</TableCell>
                  <TableCell>drie euro en vijfennegentig cent</TableCell>
                  <TableCell>
                    <ValueCurrency locale="nl-NL" currency="EUR" amount="3.95"></ValueCurrency>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>bedrag met alleen centen</TableCell>
                  <TableCell>negenennegentig eurocent</TableCell>
                  <TableCell>
                    <ValueCurrency locale="nl-NL" currency="EUR" amount="0.99"></ValueCurrency>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>negatief bedrag</TableCell>
                  <TableCell>minus drie euro en vijfennegentig cent</TableCell>
                  <TableCell>
                    <ValueCurrency locale="nl-NL" currency="EUR" amount="-3.95"></ValueCurrency>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>groot bedrag</TableCell>
                  <TableCell>vierhonderdvijfendertigduizend euro</TableCell>
                  <TableCell>
                    <ValueCurrency locale="nl-NL" currency="EUR" amount="435000"></ValueCurrency>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>bedrag in buitenlandse valuta</TableCell>
                  <TableCell>honderd Amerikaanse dollar</TableCell>
                  <TableCell>
                    <ValueCurrency locale="nl-NL" currency="USD" amount="100"></ValueCurrency>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>bedrag in buitenlandse valuta</TableCell>
                  <TableCell>honderd Canadese dollar</TableCell>
                  <TableCell>
                    <ValueCurrency locale="nl-NL" currency="CAD" amount="100"></ValueCurrency>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>bedrag in buitenlandse valuta</TableCell>
                  <TableCell>honderd Britse pond</TableCell>
                  <TableCell>
                    <ValueCurrency locale="nl-NL" currency="GBP" amount="100"></ValueCurrency>
                  </TableCell>
                </TableRow>
                <TableRow></TableRow>
              </TableBody>
            </Table>
          </section>
          <section lang="en-US">
            <h2>American English</h2>
            <Table>
              <thead>
                <TableRow>
                  <TableHeaderCell>Type of amount</TableHeaderCell>
                  <TableHeaderCell>Written in full</TableHeaderCell>
                  <TableHeaderCell>Accessible label</TableHeaderCell>
                </TableRow>
              </thead>
              <TableBody>
                <TableRow>
                  <TableCell>simple amount</TableCell>
                  <TableCell>one hundred twenty-three dollars</TableCell>
                  <TableCell>
                    <ValueCurrency locale="en-US" currency="USD" amount="123"></ValueCurrency>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>amount with cents</TableCell>
                  <TableCell>three dollars ninety-five</TableCell>
                  <TableCell>
                    <ValueCurrency locale="en-US" currency="USD" amount="3.95"></ValueCurrency>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>only cents</TableCell>
                  <TableCell>ninety-nine cents</TableCell>
                  <TableCell>
                    <ValueCurrency locale="en-US" currency="USD" amount="0.99"></ValueCurrency>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>negative amount</TableCell>
                  <TableCell>minus three dollars and ninety-five cents</TableCell>
                  <TableCell>
                    <ValueCurrency locale="en-US" currency="USD" amount="-3.95"></ValueCurrency>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>large amount</TableCell>
                  <TableCell>four hundred thirty-five thousand dollars</TableCell>
                  <TableCell>
                    <ValueCurrency locale="en-US" currency="USD" amount="435000"></ValueCurrency>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>amount with foreign currency</TableCell>
                  <TableCell>one hundred Euros</TableCell>
                  <TableCell>
                    <ValueCurrency locale="nl-NL" currency="EUR" amount="100"></ValueCurrency>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>amount with foreign currency</TableCell>
                  <TableCell>one hundred Canadian dollars</TableCell>
                  <TableCell>
                    <ValueCurrency locale="nl-NL" currency="CAD" amount="100"></ValueCurrency>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>amount with foreign currency</TableCell>
                  <TableCell>one hundred pound sterling</TableCell>
                  <TableCell>
                    <ValueCurrency locale="nl-NL" currency="GBP" amount="100"></ValueCurrency>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
        </main>
      </UtrechtDocument>
    </>
  );
}
