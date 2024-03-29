import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { useReducer } from "react";
import { Button, Document, Page, PageContent, PageHeader, PrimaryActionButton } from "../../src/components";
import { LanguageToggle } from "../../src/components/LanguageToggle";
import { ThemeSwitcher } from "../../src/components/ThemeSwitcher";
import { Address } from "../../src/components/stepper-form/Address";
import { Complete } from "../../src/components/stepper-form/Complete";
import { ContactDetails } from "../../src/components/stepper-form/ContactDetails";
import { LastStep } from "../../src/components/stepper-form/LastStep";
import { PersonalDetails } from "../../src/components/stepper-form/PersonalDetails";
import { Summary } from "../../src/components/stepper-form/Summary";
import { createDemoForm } from "../../src/demo/demo-form";
import { FormStateDispatch } from "../../src/form/action/hooks";
import { createInitialFormState, formReducer, State } from "../../src/form/action/reducer";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["stepper-form", "form", "form-error", "theme-switcher"])),
  },
});

const FORM_STEPS = 4;

const PreviousStep: { [key: string]: string } = {
  "step-2": "step-1",
  "step-3": "step-2",
  "step-4": "step-3",
  summary: "step-4",
};

const NextStep: { [key: string]: string } = {
  "step-1": "step-2",
  "step-2": "step-3",
  "step-3": "step-4",
  "step-4": "summary",
};

const FormStep = ({
  dispatch,
  step,
  state,
}: {
  dispatch: FormStateDispatch;
  step?: string | string[];
  state: State;
}) => {
  if (step === "step-1") {
    return <PersonalDetails dispatch={dispatch} state={state} />;
  }
  if (step === "step-2") {
    return <Address dispatch={dispatch} state={state} />;
  }
  if (step === "step-3") {
    return <ContactDetails dispatch={dispatch} state={state} />;
  }
  if (step === "step-4") {
    return <LastStep dispatch={dispatch} state={state} />;
  }
  return null;
};

export default function StepperForm() {
  const { t } = useTranslation(["stepper-form", "form"]);
  const router = useRouter();
  const formData = {}; //TODO keep track of state
  const { slug } = router.query;
  const step = slug && typeof slug === "string" ? slug : "step-1";

  const {
    geslacht,
    voornaam,
    tussenvoegsel,
    achternaam,
    straatnaam,
    huisnummer,
    huisnummerToevoeging,
    postcode,
    woonplaatsnaam,
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
        woonplaatsnaam,
        email,
        telephone,
        telephoneMobile,
        bericht,
        dataverwerking,
        tussenvoegsel,
      ],
    })
  );
  // console.log("initial state", state);
  const submit = () => {
    const request = new Request("/api/stepper-form", { method: "POST", body: JSON.stringify({ formData, step }) });

    return fetch(request);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submit().then(() => {
      const next = NextStep[step];
      if (next) {
        console.log("NEXT", next);
        router.push(next);
      }
    });
  };

  const previousStep = () => {
    submit().then(() => {
      if (PreviousStep[step]) {
        router.push(PreviousStep[step]);
      }
    });
  };

  const sendForm = () => {
    submit().then(() => {
      router.push("complete");
    });
  };

  const closeForm = () => {
    router.push("/");
  };

  return (
    <Document>
      <Head>
        <title>{t("page-title")}</title>
      </Head>
      <Page>
        <PageHeader>
          <ThemeSwitcher />
          <LanguageToggle />
        </PageHeader>
        <main>
          <PageContent>
            {step.includes("step") ? (
              <>
                <div className="todo-form-stepper todo-form-stepper--distanced">
                  <p>{t("stepper", { step: step.replace("step-", ""), total: FORM_STEPS })}</p>
                </div>
                <form onSubmit={handleSubmit} id="stepper-form" className="todo-form">
                  <FormStep dispatch={dispatch} step={step} state={state} />
                  <div className="todo-button-group todo-button-group--reverse">
                    {NextStep[step] && (
                      <PrimaryActionButton type="submit" form="stepper-form">
                        {NextStep[step] === "summary" ? t("to-summary") : t("next-step")} →
                      </PrimaryActionButton>
                    )}
                    {PreviousStep[step] && <Button onClick={previousStep}>{t("previous-step")}</Button>}
                  </div>
                </form>
              </>
            ) : step === "summary" ? (
              <>
                <Summary state={state} />
                <div className="todo-button-group todo-button-group--reverse">
                  <PrimaryActionButton onClick={sendForm}>{t("send-form")}</PrimaryActionButton>
                  <Button onClick={previousStep}>{t("previous-step")}</Button>
                </div>
              </>
            ) : (
              <>
                <Complete />
                <div className="todo-button-group">
                  <PrimaryActionButton onClick={closeForm}>{t("close-form")}</PrimaryActionButton>
                  <Button
                    onClick={() => {
                      /**TODO print form */
                    }}
                  >
                    🗳 {t("download-form")}
                  </Button>
                </div>
              </>
            )}
          </PageContent>
        </main>
      </Page>
    </Document>
  );
}
