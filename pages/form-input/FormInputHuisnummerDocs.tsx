import { Heading2, HTML } from "../../src/components/utrecht";
import { ExampleBox } from "../../src/components";
import { useState } from "react";
import { InputHouseNumber } from "../../src/components/input";

interface Props {
  html: string;
}

export const HouseNumberExample = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <InputHouseNumber
        id="house-number"
        name="house-number"
        maxLength={5}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      ></InputHouseNumber>
    </>
  );
};

export default function FormInputHuisnummerDocs({ html }: Props) {
  return (
    <>
      <HTML dangerouslySetInnerHTML={{ __html: html }} />
      <Heading2>Voorbeeld</Heading2>
      <ExampleBox>
        <HouseNumberExample />
      </ExampleBox>
    </>
  );
}

FormInputHuisnummerDocs.slug = "huisnummer";
FormInputHuisnummerDocs.title = "Huisnummer";
FormInputHuisnummerDocs.markdown = "./public/docs/huisnummer.md";
