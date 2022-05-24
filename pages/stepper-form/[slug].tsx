import { PageContentMain } from "@utrecht/component-library-react/PageContent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { useReducer } from "react";
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
import { useThemeComponents } from "../../src/hooks/useThemeComponents";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["stepper-form", "form", "form-error", "theme-switcher"])),
  },
});

const FORM_STEPS = ["step-1", "step-2", "step-3", "step-4", "summary"];

const FormStep = ({ dispatch, step, state }: { dispatch: FormStateDispatch; step: number; state: State }) => {
  if (FORM_STEPS[step - 1] === "step-1") {
    return <PersonalDetails dispatch={dispatch} state={state} />;
  }
  if (FORM_STEPS[step - 1] === "step-2") {
    return <Address dispatch={dispatch} state={state} />;
  }
  if (FORM_STEPS[step - 1] === "step-3") {
    return <ContactDetails dispatch={dispatch} state={state} />;
  }
  if (FORM_STEPS[step - 1] === "step-4") {
    return <LastStep dispatch={dispatch} state={state} />;
  }
  return null;
};

export default function StepperForm() {
  const { t } = useTranslation(["stepper-form", "form"]);
  const router = useRouter();
  const formData = {}; //TODO keep track of state
  const { slug } = router.query;
  const step = slug && typeof slug === "string" ? parseInt(slug, 10) : 1;

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
      if (step < FORM_STEPS.length) {
        router.push(`${step + 1}`);
      }
    });
  };

  const previousStep = () => {
    submit().then(() => {
      if (step > 1) {
        router.push(`${step - 1}`);
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

  const {
    Button,
    Document,
    FormProgress,
    Page,
    PageContent,
    PageFooter,
    PageFooterContent,
    PageFooterTemplate,
    PageHeader,
    PageHeaderTemplate,
    PrimaryActionButton,
  } = useThemeComponents();

  return (
    <Document>
      <Head>
        <title>{t("page-title")}</title>
      </Head>
      <Page>
        <PageHeader>
          <PageHeaderTemplate>
            <ThemeSwitcher />
            <LanguageToggle />
          </PageHeaderTemplate>
        </PageHeader>
        <PageContent>
          {step <= FORM_STEPS.length - 1 && (
            <FormProgress
              value={step}
              label={t("stepper", { step, total: FORM_STEPS.length })}
              max={FORM_STEPS.length - 1}
              previousHref={router.asPath.replace(`${step}`, `${step - 1}`)}
            ></FormProgress>
          )}
          {FORM_STEPS[step - 1]?.includes("step") ? (
            <>
              <PageContentMain>
                <form onSubmit={handleSubmit} id="stepper-form" className="todo-form todo-form--distanced">
                  <FormStep dispatch={dispatch} step={step} state={state} />
                  <div className="todo-button-group todo-button-group--reverse">
                    {FORM_STEPS.length > step && (
                      <PrimaryActionButton type="submit" form="stepper-form">
                        {FORM_STEPS[step] === "summary" ? t("to-summary") : t("next-step")} →
                      </PrimaryActionButton>
                    )}
                    {step > 1 && <Button onClick={previousStep}>{t("previous-step")}</Button>}
                  </div>
                </form>
              </PageContentMain>
            </>
          ) : FORM_STEPS[step - 1] === "summary" ? (
            <>
              <PageContentMain>
                <Summary state={state} />
              </PageContentMain>
              <div className="todo-button-group todo-button-group--reverse">
                <PrimaryActionButton onClick={sendForm}>{t("send-form")}</PrimaryActionButton>
                <Button onClick={previousStep}>{t("previous-step")}</Button>
              </div>
            </>
          ) : (
            <>
              <PageContentMain>
                <Complete />
              </PageContentMain>
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
        <PageFooter>
          <PageFooterContent>
            <PageFooterTemplate />
          </PageFooterContent>
        </PageFooter>
      </Page>
    </Document>
  );
}
