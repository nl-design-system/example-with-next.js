import Head from "next/head";
import { Document } from "../src/components/utrecht/Document";
import { Heading1 } from "../src/components/utrecht/Heading1";
import { Heading2 } from "../src/components/utrecht/Heading2";
import { Page } from "../src/components/utrecht/Page";
import { PageContent } from "../src/components/utrecht/PageContent";
import { Paragraph } from "../src/components/utrecht/Paragraph";

export default function TableExample3b() {
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
                  Dit voorbeeld is gemaakt met een <code>dl</code> component:
                </Paragraph>
                <dl>
                  <div>
                    <dt>Aanhef:</dt>
                    <dd>De heer</dd>
                  </div>
                  <div>
                    <dt>Voorletters:</dt>
                    <dd>Y.Y.</dd>
                  </div>
                  <div>
                    <dt>Voorvoegsel:</dt>
                    <dd>du</dd>
                  </div>
                  <div>
                    <dt>Achternaam:</dt>
                    <dd>Tourbillon</dd>
                  </div>
                </dl>
              </section>
            </main>
          </PageContent>
        </Page>
      </Document>
    </>
  );
}
