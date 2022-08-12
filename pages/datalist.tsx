import Head from "next/head";
import Link from "next/link";
import { DataList } from "../src/components/DataList";
import { DataListItem } from "../src/components/DataListItem";
import { DataListLabel } from "../src/components/DataListLabel";
import { DataListValue } from "../src/components/DataListValue";

const Example = ({ className }: { className?: string }) => (
  <DataList className={className} aria-labelledby="header">
    <DataListItem>
      <DataListLabel>Zaaknummer</DataListLabel>
      <DataListValue value={true} className="example-data-list__value--numeric">
        9919905
      </DataListValue>
    </DataListItem>
    <DataListItem>
      <DataListLabel>Zaaktype</DataListLabel>
      <DataListValue value={true}>Klacht behandelen</DataListValue>
    </DataListItem>
    <DataListItem>
      <DataListLabel>Omschrijving</DataListLabel>
      <DataListValue value={true}></DataListValue>
    </DataListItem>
    <DataListItem>
      <DataListLabel>Toelichting:</DataListLabel>
      <DataListValue value={true} className="example-data-list__value--email">
        tourbillon@example.com
      </DataListValue>
    </DataListItem>
    <DataListItem>
      <DataListLabel>Registratiedatum:</DataListLabel>
      <DataListValue value={true}>29-03-2022</DataListValue>
    </DataListItem>
  </DataList>
);

export default function TableExample4() {
  return (
    <div className="utrecht-document">
      <h1>Datalijst voorbeeld</h1>
      <h2 id="header">Zaakdetails</h2>
      <Example className="example-data-list--small" />
      <h2 id="header">Zaakdetails</h2>
      <Example className="example-data-list--wide" />
    </div>
  );
}
