import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useReducer } from "react";
import { Input } from "../src/components";
import { FormDemoPage } from "../src/components/examples/FormDemoPage";
import { voornaamValidation } from "../src/data/nl-NL/VoornaamData";
import { useInput } from "../src/form/action/hooks";
import { createInitialFormState, formReducer } from "../src/form/action/reducer";
import { createFormField } from "../src/form/state/FormField";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form-error", "form", "form-error", "common"])),
  },
});

export default function Home() {
  const voornaam = createFormField({
    declaration: {
      id: "382bf249-fafa-426d-baef-6aeb692b4ce6",
      fieldType: "input",
      label: "Voornaam",
      labelKey: "given-name",
    },
    definition: {
      ...voornaamValidation,
      required: true,
    },
  });

  const [state, dispatch] = useReducer(
    formReducer,
    createInitialFormState({
      fields: [voornaam],
    })
  );

  return (
    <>
      <FormDemoPage label={"voornaam"}>
        <Input state={state.fields[0]} {...useInput(voornaam, dispatch)} />
      </FormDemoPage>
    </>
  );
}
