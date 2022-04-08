import Head from "next/head";
import { default as NextLink } from "next/link";
import { Document } from "../src/components/utrecht/Document";
import { Heading1 } from "../src/components/utrecht/Heading1";
import { Link } from "../src/components/utrecht/Link";
import { UnorderedList } from "../src/components/utrecht/UnorderedList";
import { UnorderedListItem } from "../src/components/utrecht/UnorderedListItem";
export default function Index() {
  return (
    <>
      <Document>
        <Head>
          <title>Experimenten met NL Design System</title>
        </Head>

        <main>
          <Heading1>Experimenten met NL Design System</Heading1>
          <UnorderedList>
            <UnorderedListItem>
              <NextLink href="/table-example-1" passHref>
                <Link>Tabel: Kosten paspoort en ID-kaart — variant A</Link>
              </NextLink>
            </UnorderedListItem>
            <UnorderedListItem>
              <NextLink href="/table-example-1b" passHref>
                <Link>Tabel: Kosten paspoort en ID-kaart — variant B</Link>
              </NextLink>
            </UnorderedListItem>
            <UnorderedListItem>
              <NextLink href="/table-example-2" passHref>
                <Link>Tabel: Openingstijden — variant A</Link>
              </NextLink>
            </UnorderedListItem>
            <UnorderedListItem>
              <NextLink href="/table-example-2" passHref>
                <Link>Tabel: Openingstijden — variant B</Link>
              </NextLink>
            </UnorderedListItem>
            <UnorderedListItem>
              <NextLink href="/table-example-3" passHref>
                <Link>Tabel: Persoonsgegevens — variant A</Link>
              </NextLink>
            </UnorderedListItem>
            <UnorderedListItem>
              <NextLink href="/table-example-3b" passHref>
                <Link>Tabel: Persoonsgegevens — variant B</Link>
              </NextLink>
            </UnorderedListItem>
            <UnorderedListItem>
              <NextLink href="/table-example-4" passHref>
                <Link>Tabel: Zaakgegevens — variant A</Link>
              </NextLink>
            </UnorderedListItem>
            <UnorderedListItem>
              <NextLink href="/table-example-4b" passHref>
                <Link>Tabel: Zaakgegevens — variant B</Link>
              </NextLink>
            </UnorderedListItem>
          </UnorderedList>
        </main>
      </Document>
    </>
  );
}
