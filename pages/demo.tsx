import { UtrechtButton, UtrechtDocument, UtrechtPageFooter } from "@utrecht/web-component-library-react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useReducer } from "react";
import { Input } from "../src/components/Input";
import { createDemoForm } from "../src/demo/demo-form";
import { useInput } from "../src/form/action/hooks";
import { createInitialFormState, formReducer } from "../src/form/action/reducer";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form-error", "form", "common"])),
  },
});

export default function Home() {
  const {
    geslacht,
    voornaam,
    achternaam,
    straatnaam,
    huisnummer,
    huisnummerToevoeging,
    postcode,
    email,
    telephone,
    telephoneMobile,
    bericht,
    dataverwerking,
  } = createDemoForm();

  const [state, dispatch] = useReducer(
    formReducer,
    createInitialFormState({
      fields: [
        geslacht,
        voornaam,
        achternaam,
        straatnaam,
        huisnummer,
        huisnummerToevoeging,
        postcode,
        email,
        telephone,
        telephoneMobile,
        bericht,
        dataverwerking,
      ],
    })
  );

  return (
    <>
      <UtrechtDocument>
        <Head>
          <title>Create Next App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <form>
          <div>
            <Input state={state.fields[0]} {...useInput(geslacht, dispatch)} />
            <Input state={state.fields[1]} {...useInput(voornaam, dispatch)} />
            <Input state={state.fields[2]} {...useInput(achternaam, dispatch)} />
          </div>
          <div>
            <Input state={state.fields[3]} {...useInput(straatnaam, dispatch)} />
            <div>
              <Input state={state.fields[4]} {...useInput(huisnummer, dispatch)} />
              <Input state={state.fields[5]} {...useInput(huisnummerToevoeging, dispatch)} />
              <Input state={state.fields[6]} {...useInput(postcode, dispatch)} />
            </div>
          </div>
          <div>
            <Input state={state.fields[7]} {...useInput(email, dispatch)} />
            <Input state={state.fields[8]} {...useInput(telephone, dispatch)} />
            <Input state={state.fields[9]} {...useInput(telephoneMobile, dispatch)} />
          </div>
          <div>
            <Input state={state.fields[10]} {...useInput(bericht, dispatch)} />
            <Input state={state.fields[11]} {...useInput(dataverwerking, dispatch)} />
          </div>
          <UtrechtButton>Click me</UtrechtButton>
        </form>
        <UtrechtPageFooter>Made with NL Design System</UtrechtPageFooter>
      </UtrechtDocument>
    </>
  );
}
