/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Note } from "../src/components/demo/Note";
import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { DateInput } from "../src/components/DateInput";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LanguageToggle } from "../src/components/LanguageToggle";
import { DemoForm, DemoFormChecked, DemoFormInput } from "../types/DemoForm";
import { EmptyIndicator } from "../src/components/EmptyIndicator";
import { DataListValue } from "../src/components/DataListValue";
import { SaveButton } from "../src/components/SaveButton";
import voorvoegsels from "../src/data/voorvoegsels.json";
import landen from "../src/data/landen.json";
import {
  bsnValidation,
  voornaamValidation,
  voorvoegselGeslachtsnaamValidation,
  geslachtsnaamValidation,
  placeOfBirthValidation,
  huisletterValidation,
  postcodeValidation,
  huisnummertoevoegingValidation,
  locatiebeschrijvingValidation,
  woonplaatsnaamValidation,
  adresRegel1Validation,
  adresRegel2Validation,
  adresRegel3Validation,
} from "../src/data";

import {
  Button,
  Checkbox,
  Document,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormLabel,
  Heading1,
  Heading2,
  Paragraph,
  RadioButton,
  Textarea,
  TextInput,
} from "../src/components/utrecht";

import {
  InputGivenName,
  InputFamilyName,
  InputBSN,
  InputGender,
  InputHouseNumber,
  InputEmail,
} from "../src/components/input";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form"])),
  },
});

const trimWhitespace = (value: string) => value.trim();
const normalizeWhitespace = (value: string) => value.replace(/\s+/g, " ");
const removeWhitespace = (value: string) => value.replace(/\s+/g, "");
const normalizeUnicode = (value: string) => value.normalize("NFC");
const toInteger = (value: string): number => parseInt(value, 10);

const normalizers: Partial<{ [Property in keyof DemoFormInput]: ((value: string) => string)[] }> = {
  "given-name": [trimWhitespace, normalizeWhitespace, normalizeUnicode],
  "family-name": [trimWhitespace, normalizeWhitespace, normalizeUnicode],
  iban: [removeWhitespace],
  "kvk-number": [removeWhitespace],
};

const convertTypes: Partial<{ [Property in keyof DemoFormInput]: (value: string) => number | boolean }> = {
  "kvk-number": toInteger,
};

type FormInput = { [Property in keyof DemoFormInput]: string };

export default function Form() {
  function normalizeInput(partial: Partial<FormInput>) {
    return Object.entries(partial).reduce((normalized, entry) => {
      const [key, value] = entry as [keyof DemoFormInput, string];
      const configuredNormalizers = normalizers[key] || [];
      const convertType = convertTypes[key];

      if (convertType) {
        return {
          ...normalized,
          [key]: convertType(configuredNormalizers.reduce((n, fn) => fn(n), value)),
        };
      }

      return { ...normalized, [key]: configuredNormalizers.reduce((n, fn) => fn(n), value) };
    }, {});
  }

  function handleFormInputChange(
    state: FormInput,
    { event, partial }: { event: "change" | "blur"; partial: Partial<FormInput> }
  ) {
    if (event === "blur") {
      return { ...state, ...normalizeInput(partial) };
    }

    return { ...state, ...partial };
  }

  function handleFormChecked(state: DemoFormChecked, partial: Partial<DemoFormChecked>) {
    return { ...state, ...partial };
  }

  const initialFormChecked: DemoFormChecked = {
    "accept-data-handling": false,
    "subscribe-newsletter": false,
  };

  const defaultFormInput: Omit<FormInput, "gender" | "contact-preference"> = {
    "given-name": "",
    "family-name": "",
    "given-name-initials": "",
    "family-name-prefix": "",
    "name-original-writing": "",
    "manner-of-address": "",
    bday: "",
    bsn: "",
    "postal-code": "",
    "house-number": "",
    "house-number-letter": "",
    "house-number-suffix": "",
    street: "",
    "place-of-residence": "",
    municipality: "",
    country: "",
    email: "",
    tel: "",
    "tel-mobile": "",
    "tel-daytime": "",
    "tel-evening": "",
    "location-description": "",
    iban: "",
    bic: "",
    "kvk-number": "",
    organization: "",
    website: "",
  };

  const [formCheckedState, dispatchFormCheck] = useReducer(handleFormChecked, initialFormChecked);
  const [formInputState, dispatchFormInputState] = useReducer(handleFormInputChange, defaultFormInput as FormInput);
  const [showNotes, setShowNotes] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DemoForm>();

  const { t } = useTranslation("form");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const res = await fetch("/api/form", {
      body: JSON.stringify(formInputState),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    console.log("RESULT", result);
    setData(result);
  };
  const demo1 = () => {
    clear();
    dispatchFormInputState({
      event: "blur",
      partial: {
        gender: "female",
        "given-name": "Pipa   Porretje",
        "family-name": "\u0041\u006d\u0065\u0301\u006c\u0069\u0065",
        "contact-preference": "letter",
      },
    });

    dispatchFormCheck({
      "accept-data-handling": true,
    });
  };

  const clear = () => {
    dispatchFormInputState({ event: "change", partial: defaultFormInput });
    dispatchFormCheck(initialFormChecked);
  };

  const demo2 = () => {
    clear();
    dispatchFormInputState({
      event: "blur",
      partial: {
        "given-name": "Bobby",
        "family-name": "Tables",
        "family-name-prefix": "on the",
        "given-name-initials": "B",
        "name-original-writing": "Robert'); DROP TABLE Students--",
        "manner-of-address": "little",
        gender: "male",
        bday: "2001-02-03",
        bsn: "123456789",
        email: "btables@hotcakes.com",
        tel: "02012345678",
        "tel-mobile": "06123456789",
        "tel-daytime": "06123456789",
        "tel-evening": "02012345678",
        "postal-code": "4242BT",
        "house-number": "21",
        "house-number-letter": "Z",
        "house-number-suffix": "achterste voren",
        street: "Wasstraat",
        "place-of-residence": "Groet",
        municipality: "Schoorl",
        country: "Fantasieland",
        "location-description": "",
        "contact-preference": "email",
      },
    });

    dispatchFormCheck({
      "accept-data-handling": true,
    });
  };

  const handleInputChange = (change: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    dispatchFormInputState({ event: "change", partial: { [change.target.name]: change.target.value } });
  };

  const handleInputBlur = (change: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatchFormInputState({ event: "blur", partial: { [change.target.name]: change.target.value } });
  };

  const handleCheckboxChange = (change: ChangeEvent<HTMLInputElement>) => {
    dispatchFormCheck({ [change.target.name]: change.target.checked });
  };

  return (
    <Document>
      <Head>
        <title>{t("page-title")}</title>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/component-library-css/dist/bem.css" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@gemeente-denhaag/design-tokens-components/dist/theme/index.css"
        />
      </Head>
      <Heading1>{t("page-title")}</Heading1>
      <LanguageToggle />
      {data ? (
        <>
          <section>
            <h2 id="h2">{t("personal-details")}</h2>
            {/* <!-- test <dl> met aria-describedby --> */}
            <dl aria-describedby="h2">
              {/* <!-- How annoying is it to have a screen reader repeat the name and say "heading level 2 Persoonsgegevens, definition list Persoonsgegevens"? --> */}
              <div>
                <dt>{t("manner-of-address")}</dt>
                <DataListValue value={data["manner-of-address"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data["manner-of-address"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("given-name-initials")}</dt>
                <DataListValue value={data["given-name-initials"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data["given-name-initials"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("given-name")}</dt>
                <DataListValue value={data["given-name"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data["given-name"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("family-name-prefix")}</dt>
                <DataListValue value={data["family-name-prefix"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data["family-name-prefix"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("family-name")}</dt>
                <DataListValue value={data["family-name"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data["family-name"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("name-original-writing")}</dt>
                <DataListValue value={data["name-original-writing"]} emptyDescription={t("data-item-input-empty")}>
                  <bdi className="notranslate">{data["name-original-writing"]}</bdi>
                </DataListValue>
              </div>
              <div>
                <dt>{t("gender")}</dt>
                <DataListValue value={data.gender} emptyDescription={t("data-item-input-empty")}>
                  {t(`gender-${data.gender}`)}
                </DataListValue>
              </div>
              <div>
                <dt>{t("bsn")}</dt>
                <DataListValue value={data.bsn} emptyDescription={t("data-item-input-empty")}>
                  {data.bsn}
                </DataListValue>
              </div>
              <div>
                <dt>{t("bday")}</dt>
                <DataListValue value={data.bday} emptyDescription={t("data-item-input-empty")}>
                  {/* TODO: Use library to display ISO8601 in human readable format */}
                  <time dateTime={data.bday}>{data.bday}</time>
                </DataListValue>
              </div>
            </dl>
          </section>
          <section>
            <h2 id="h2">{t("contact-details")}</h2>
            {/* <!-- test <dl> met aria-describedby --> */}
            <dl aria-describedby="h2">
              {/* <!-- How annoying is it to have a screen reader repeat the name and say "heading level 2 Persoonsgegevens, definition list Persoonsgegevens"? --> */}
              <div>
                <dt>{t("postal-code")}</dt>
              </div>
              <div>
                <dt>{t("house-number")}</dt>
                <DataListValue value={data["house-number"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data["house-number"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("house-number-letter")}</dt>
                <DataListValue value={data["house-number-letter"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data["house-number-letter"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("house-number-suffix")}</dt>
                <DataListValue value={data["house-number-suffix"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data["house-number-suffix"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("street")}</dt>
                <DataListValue value={data.street} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data.street}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("place-of-residence")}</dt>
                <DataListValue value={data["place-of-residence"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data["place-of-residence"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("municipality")}</dt>
                <DataListValue value={data.municipality} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data.municipality}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("country")}</dt>
                <DataListValue value={data.country} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data.country}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("email")}</dt>
                <DataListValue value={data.email} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data.email}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("tel")}</dt>
                <DataListValue value={data.tel} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data.tel}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("tel-mobile")}</dt>
                <DataListValue value={data["tel-mobile"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data["tel-mobile"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("tel-daytime")}</dt>
                <DataListValue value={data["tel-daytime"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data["tel-daytime"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("tel-evening")}</dt>
                <DataListValue value={data["tel-evening"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data["tel-evening"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("location-description")}</dt>
                <DataListValue value={data["location-description"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data["location-description"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("contact-preference")}</dt>
                <DataListValue value={data["contact-preference"]} emptyDescription={t("data-item-input-empty")}>
                  <span>
                    {t(`contact-${data["contact-preference"]}`) || (
                      <EmptyIndicator title={t("data-item-input-empty")} />
                    )}
                  </span>
                </DataListValue>
              </div>
            </dl>
          </section>
          <section>
            <h2 id="h2">{t("financial-details")}</h2>
            {/* <!-- test <dl> met aria-describedby --> */}
            <dl aria-describedby="h2">
              {/* <!-- How annoying is it to have a screen reader repeat the name and say "heading level 2 Persoonsgegevens, definition list Persoonsgegevens"? --> */}
              <div>
                <dt>{t("iban")}</dt>
                <DataListValue value={data.iban} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data.iban}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("bic")}</dt>
                <DataListValue value={data.bic} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data.bic}</span>
                </DataListValue>
              </div>
            </dl>
          </section>
          <section>
            <h2 id="h2">{t("commercial-details")}</h2>
            {/* <!-- test <dl> met aria-describedby --> */}
            <dl aria-describedby="h2">
              {/* <!-- How annoying is it to have a screen reader repeat the name and say "heading level 2 Persoonsgegevens, definition list Persoonsgegevens"? --> */}
              <div>
                <dt>{t("kvk-number")}</dt>
                <DataListValue value={data["kvk-number"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data["kvk-number"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("organization")}</dt>
                <DataListValue value={data.organization} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data.organization}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("website")}</dt>
                <DataListValue value={data.website} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{data.website}</span>
                </DataListValue>
              </div>
            </dl>
          </section>
          <Button onClick={() => setData(undefined)}>Back</Button>
        </>
      ) : (
        <>
          <FormField>
            <Checkbox
              id="hide-notes"
              name="hide-notes"
              onChange={(e) => setShowNotes(e.target.checked)}
              checked={showNotes}
            />
            <FormLabel type="checkbox" htmlFor="hide-notes">
              Toon notities
            </FormLabel>
          </FormField>
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <Heading2>{t("personal-details")}</Heading2>
              {showNotes && (
                <Note>
                  <Paragraph>
                    Voornaam (of "Voornam(en)" of "Voornaam (1 of meerdere)" of "Voornaam of voornamen"?) De "1 of
                    meerdere" variant werkt voor screenreaders, Nederlands B1 en Google Translate Opmerking: Is alleen
                    "Voornamen" onduidelijk voor mensen met maar 1 voornaam? Hoe zit het met mensen zonder voornaam?
                  </Paragraph>
                </Note>
              )}
              <InputGivenName
                id="given-name2"
                name="given-name"
                value={formInputState["given-name"]}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
                maxLength={voornaamValidation.maxLength}
                pattern={voornaamValidation.pattern}
                required
                errors={[
                  {
                    id: "38a70b93-a7b3-4f91-9725-8ee2871b335b",
                    message: t("given-name-required"),
                  },
                ]}
              ></InputGivenName>
              {showNotes && (
                <Note>
                  Achternaam (of "Achternaam of achternamen (of "Achternaam (1 of meerdere)" Mijn Overheid, basis
                  registratie personen: "De geslachtsnaam is hetzelfde als de achternaam. Heeft de geslachtsnaam een
                  voorvoegsel, zoals “de” of “van”? Dan is het voorvoegsel vermeld bij Voorvoegsels geslachtsnaam"
                </Note>
              )}
              <FormField>
                <FormLabel htmlFor="adelijke-titel-predicaat">{t("adelijke-titel-predicaat")}</FormLabel>
                <select
                  className="utrecht-select"
                  id="adelijke-titel-predicaat"
                  name="adelijke-titel-predicaat"
                  value={formInputState["adelijke-titel-predicaat"]}
                  onChange={handleInputChange}
                >
                  <option></option>
                  {[
                    { value: "B", label: "baron" },
                    { value: "BS", label: "barones" },
                    { value: "G", label: "graaf" },
                    { value: "GI", label: "graving" },
                    { value: "H", label: "hertog" },
                    { value: "HI", label: "hertogin" },
                    { value: "JH", label: "jonkheer" },
                    { value: "JV", label: "jonkvrouw" },
                    { value: "M", label: "markies" },
                    { value: "MI", label: "markiezin" },
                    { value: "P", label: "prins" },
                    { value: "PS", label: "prinses" },
                    { value: "R", label: "ridder" },
                  ].map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </FormField>
              <InputFamilyName
                id="family-name"
                name="family-name"
                value={formInputState["family-name"]}
                onBlur={handleInputBlur}
                maxLength={geslachtsnaamValidation.maxLength}
                pattern={geslachtsnaamValidation.pattern}
                onChange={handleInputChange}
              ></InputFamilyName>
              {showNotes && (
                <Note>
                  Voorletters Opmerking: Hoe moeten deze ingevoerd worden? Gescheiden door spaties, punten, moet er wel
                  validatie op? Geen autoComplete, niet in definititie van basis registratie personen Voorlopige
                  conclusie: Vermijd voorletters
                </Note>
              )}
              <FormField>
                <FormLabel htmlFor="given-name-initials">{t("given-name-initials")}</FormLabel>
                <TextInput
                  onBlur={handleInputBlur}
                  id="given-name-initials"
                  name="given-name-initials"
                  value={formInputState["given-name-initials"]}
                  onChange={handleInputChange}
                />
              </FormField>
              {showNotes && (
                <Note>
                  Tussenvoegsels naam Opmerking: Waarom horen deze niet bij de achternaam? Wat als een achternaam uit 2
                  delen bestaat en het tweede deel ook voorvoegsels heeft? "de Vries - de Boer" Weetje dat belgische
                  achtnamen niet dezelfde regels kennen voor hoofdletters. Een nederlandse "van der Valk" wordt daar
                  "Van Der Valk". Geen autoComplete
                </Note>
              )}
              <FormField>
                <FormLabel htmlFor="family-name-prefix">{t("family-name-prefix")}</FormLabel>
                <TextInput
                  onBlur={handleInputBlur}
                  id="family-name-prefix"
                  name="family-name-prefix"
                  list="family-name-prefix-datalist"
                  autoComplete="honorific-prefix"
                  value={formInputState["family-name-prefix"]}
                  maxLength={voorvoegselGeslachtsnaamValidation.maxLength}
                  pattern={voorvoegselGeslachtsnaamValidation.pattern}
                  onChange={handleInputChange}
                />
                <datalist id="family-name-prefix-datalist">
                  {voorvoegsels.map((voorvoegsel) => (
                    <option key={voorvoegsel}>{voorvoegsel}</option>
                  ))}
                </datalist>
              </FormField>

              {showNotes && (
                <Note>
                  Naam in origineel schrift Opmerking: waarom? Wanneer gebruiken, hoe zorg je dat dit niet in de andere
                  naam velden is ingevoerd? Geen autoComplete? Of hoe weten we dat dit niet gecomplete wordt in
                  origineel schrift?
                </Note>
              )}
              <FormField>
                <FormLabel htmlFor="name-original-writing">{t("name-original-writing")}</FormLabel>
                <TextInput
                  onBlur={handleInputBlur}
                  id="name-original-writing"
                  name="name-original-writing"
                  value={formInputState["name-original-writing"]}
                  onChange={handleInputChange}
                />
              </FormField>
              {showNotes && (
                <Note>
                  Aanspreekvorm / mogelijke titulatuur TODO: Richtlijnen Wanneer gebruiken? Hoe valt deze samen met
                  gender? Is een vrij invoerveld zodat alle soorten titulatuur en combinaties door de persoon zelf
                  gekozen kunnen worden.
                </Note>
              )}
              <FormField>
                <FormLabel htmlFor="manner-of-address">{t("manner-of-address")}</FormLabel>
                <TextInput
                  onBlur={handleInputBlur}
                  id="manner-of-address"
                  name="manner-of-address"
                  value={formInputState["manner-of-address"]}
                  onChange={handleInputChange}
                />
              </FormField>

              {showNotes && (
                <Note>
                  Geslacht (M/V/NB/onbekend) Opmerking: Basis registratie ondersteund 'M/V/onbekend' Gemeente Amsterdam
                  zegt vermijdt 'select' voor weinig (hoeveel is weinig?) options. Als we aannemen dat 3 weinig is, dan
                  dus geen select gebruiken. TODO: richtlijnen wanneer geslacht wel/niet nodig is.
                </Note>
              )}
              <InputGender
                id="gender"
                required
                invalid
                value={formInputState.gender}
                onChange={handleInputChange}
                errors={[{ id: "gender-required", message: t("gender-required") }]}
              ></InputGender>
              {showNotes && (
                <Note>
                  Geboortedatum Opmerking: Wordt vaak opgelost met een date picker, maar die zijn lang niet altijd
                  bruikbaar. TODO: richtlijnen voor welke (meerdere?) types input bruikbaar zijn
                </Note>
              )}
              <FormField>
                <FormLabel htmlFor="bday">{t("bday")}</FormLabel>
                <DateInput
                  id="bday"
                  autoComplete="bday"
                  name="bday"
                  value={formInputState.bday}
                  onChange={handleInputChange}
                />
              </FormField>
              <FormField>
                <FormLabel htmlFor="place-of-birth">{t("place-of-birth")}</FormLabel>
                <TextInput
                  id="place-of-birth"
                  name="place-of-birth"
                  value={formInputState["place-of-birth"]}
                  maxLength={placeOfBirthValidation.maxLength}
                  pattern={placeOfBirthValidation.pattern}
                  onBlur={handleInputBlur}
                  onChange={handleInputChange}
                />
              </FormField>
              <FormField>
                <FormLabel htmlFor="country-of-birth">{t("country-of-birth")}</FormLabel>
                <TextInput
                  id="country-of-birth"
                  name="country-of-birth"
                  list="country-of-birth-list"
                  value={formInputState["country-of-birth"]}
                  onBlur={handleInputBlur}
                  onChange={handleInputChange}
                />
                <datalist id="country-of-birth-list">
                  <option></option>
                  {landen
                    .sort((a, b) => (a.naam === b.naam ? 0 : a.naam > b.naam ? 1 : -1))
                    .map(({ code, naam }) => (
                      <option key={code}>{naam}</option>
                    ))}
                </datalist>
              </FormField>

              {showNotes && (
                <Note>
                  BSN Opmerking: is bsn voor iedereen goed te begrijpen, wanneer te gebruiken. Moet het gebruikt worden
                  samen met een uitleg waar je deze kan vinden bijvoorbeeld?
                </Note>
              )}
              <InputBSN
                id="bsn"
                name="bsn"
                value={formInputState.bsn}
                onBlur={handleInputBlur}
                minLength={bsnValidation.minLength}
                maxLength={bsnValidation.maxLength}
                pattern={bsnValidation.pattern}
                onChange={handleInputChange}
              ></InputBSN>
            </div>
            <div className="form-section">
              <Heading2>{t("contact-details")}</Heading2>

              {showNotes && (
                <Note>
                  E-mailadres (vaak verplicht omdat het verplicht is een bevestiging te sturen - heb je er zelf geen dan
                  van iemand anders) Opmerking: waarschijnlijk wil je dit niet al te veel valideren, er zijn veel valide
                  opties binnen e-mail adressen. TODO: opnemen in richtlijnen.
                </Note>
              )}
              <InputEmail
                id="email"
                name="email"
                value={formInputState.email}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
              />
              {showNotes && (
                <Note>
                  Telefoonnummer Opmerking: als je het verplicht maakt, dan is het niet accessible, want wat als je niet
                  kan opnemen/horen? TODO: richtlijnen Opmerking: wat als je internationale nummers moet ondersteunen?
                  Mag +, misschien niet teveel validatie? Todo: testen of losse velden voor mobiel/vast nummer nog
                  nuttig zijn en de uitkomst documenteren Daarnaast heeft lang niet iedereen meer een vast nummer, en
                  wel mobiel. Wil je na het formulier een bevestiging sturen? Dan is misschien mobiel belangrijker dan
                  'telefoonnummer'.
                </Note>
              )}
              <FormField>
                <FormLabel htmlFor="tel">{t("tel")}</FormLabel>
                <TextInput
                  onBlur={handleInputBlur}
                  type="tel"
                  id="tel"
                  name="tel"
                  autoComplete="tel"
                  value={formInputState.tel}
                  onChange={handleInputChange}
                />
              </FormField>

              {showNotes && <Note>Mobiel telefoonnummer</Note>}
              <FormField>
                <FormLabel htmlFor="tel-mobile">{t("tel-mobile")}</FormLabel>
                <TextInput
                  onBlur={handleInputBlur}
                  type="tel"
                  id="tel-mobile"
                  name="tel-mobile"
                  autoComplete="tel mobile"
                  value={formInputState["tel-mobile"]}
                  onChange={handleInputChange}
                />
              </FormField>

              {showNotes && (
                <Note>
                  Telefoon overdag / 's avonds -- vaak genoemd in formulieren workshop Opmerking: wordt gebruikgt in
                  plaats van tel-mobile en tel?
                </Note>
              )}
              <FormField>
                <FormLabel htmlFor="tel-daytime">{t("tel-daytime")}</FormLabel>
                <TextInput
                  onBlur={handleInputBlur}
                  type="tel"
                  id="tel-daytime"
                  name="tel-daytime"
                  autoComplete="tel"
                  value={formInputState["tel-daytime"]}
                  onChange={handleInputChange}
                />
              </FormField>
              <FormField>
                <FormLabel htmlFor="tel-evening">{t("tel-evening")}</FormLabel>
                <TextInput
                  onBlur={handleInputBlur}
                  type="tel"
                  id="tel-evening"
                  name="tel-evening"
                  autoComplete="tel"
                  value={formInputState["tel-evening"]}
                  onChange={handleInputChange}
                />
              </FormField>

              {showNotes && (
                <Note>
                  Adres - Postcode -- als eerste omdat de validatie/invullen van het adres hier op gebaseerd kunnen
                  worden. TODO richtlijnen validatie (irritante whitespace contraints voorkomen) - Huisnummer -- als
                  tweede omdat het samen met postcode in nederland tot een uniek adres leidt. Kent geen autoComplete,
                  potentieel minder gebruiksvriendelijk dan een algemeen adres veld. - Huisnummer letter (helemaal los
                  van 'toevoeging' in steden zoals Den Haag) Kadestraal nummer bijvoorbeeld 24 en 24a zijn los
                  gesplitste panden geworden? TODO: UITZOEKEN - Huisnummer toevoeging (bijvoorbeeld verdieping) BV 24b
                  3v ? - Straatnaam -- geen autocompleet voor straatnaam zonder huisnummer - Woonplaats -- geen
                  autoComplete - Gemeente -- geen autoComplete heel nederland specifiek, guidelines nodig wanneer deze
                  te gebruiken - Land Opmerking formulieren workshop: autoComplete Nederlands adres op basis van
                  postcode Meerdere adressen mogelijk: Postadres, Briefadres / Woonadres / Factuuradres / Overweeg deze
                  optioneel te maken zodat óf deze óf de locatiebeschrijving kan worden ingevuld.
                </Note>
              )}
              <Fieldset>
                <FieldsetLegend>{t("address")}</FieldsetLegend>
                <FormField>
                  <FormLabel htmlFor="postal-code">{t("postal-code")}</FormLabel>
                  <TextInput
                    onBlur={handleInputBlur}
                    id="postal-code"
                    name="postal-code"
                    autoComplete="postal-code"
                    value={formInputState["postal-code"]}
                    pattern={postcodeValidation.pattern}
                    onChange={handleInputChange}
                  />
                </FormField>
                <InputHouseNumber
                  id="house-number"
                  name="house-number"
                  value={formInputState["house-number"]}
                  onBlur={handleInputBlur}
                  onChange={handleInputChange}
                ></InputHouseNumber>
                <FormField>
                  <FormLabel htmlFor="house-number">{t("house-number")}</FormLabel>
                  <TextInput
                    onBlur={handleInputBlur}
                    id="house-number"
                    name="house-number"
                    inputMode="numeric"
                    value={formInputState["house-number"]}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="house-number-letter">{t("house-number-letter-suffix")}</FormLabel>
                  <TextInput
                    onBlur={handleInputBlur}
                    id="house-number-letter"
                    name="house-number-letter"
                    value={formInputState["house-number-letter"]}
                    maxLength={huisletterValidation.maxLength}
                    pattern={huisletterValidation.pattern}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="house-number-suffix">{t("house-number-suffix")}</FormLabel>
                  <TextInput
                    onBlur={handleInputBlur}
                    id="house-number-suffix"
                    name="house-number-suffix"
                    value={formInputState["house-number-suffix"]}
                    pattern={huisnummertoevoegingValidation.pattern}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="street">{t("street")}</FormLabel>
                  <TextInput
                    onBlur={handleInputBlur}
                    id="street"
                    name="street"
                    value={formInputState.street}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="place-of-residence">{t("place-of-residence")}</FormLabel>
                  <TextInput
                    onBlur={handleInputBlur}
                    id="place-of-residence"
                    name="place-of-residence"
                    value={formInputState["place-of-residence"]}
                    minLength={woonplaatsnaamValidation.minLength}
                    maxLength={woonplaatsnaamValidation.maxLength}
                    pattern={woonplaatsnaamValidation.pattern}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="municipality">{t("municipality")}</FormLabel>
                  <TextInput
                    onBlur={handleInputBlur}
                    id="municipality"
                    name="municipality"
                    value={formInputState.municipality}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="country">{t("country")}</FormLabel>
                  <TextInput
                    onBlur={handleInputBlur}
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    value={formInputState.country}
                    onChange={handleInputChange}
                  />
                </FormField>
              </Fieldset>

              {showNotes && (
                <Note>
                  Locatie beschrijving Te gebruiken als iemand geen adres hebt/weet? Bijvoorbeeld "melden overlast" Vrij
                  invoerveld voor locatie: "onder brug tegenover Albert Heijn" / gebruik maken van locatie device?
                </Note>
              )}
              <FormField>
                <FormLabel htmlFor="location-description">{t("location-description")}</FormLabel>
                <Textarea
                  onBlur={handleInputBlur}
                  id="location-description"
                  name="location-description"
                  value={formInputState["location-description"]}
                  maxLength={locatiebeschrijvingValidation.maxLength}
                  onChange={handleInputChange}
                />
              </FormField>

              <Fieldset>
                <FieldsetLegend>Buitenlands adres</FieldsetLegend>
                <FormField>
                  <FormLabel htmlFor="address-line1">Regel 1</FormLabel>
                  <TextInput
                    id="address-line1"
                    name="address-line1"
                    maxLength={adresRegel1Validation.maxLength}
                    pattern={adresRegel1Validation.pattern}
                    autoComplete="address-line1"
                    value={formInputState["address-line1"]}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="address-line2">Regel 2</FormLabel>
                  <TextInput
                    id="address-line2"
                    name="address-line2"
                    maxLength={adresRegel2Validation.maxLength}
                    pattern={adresRegel2Validation.pattern}
                    autoComplete="address-line2"
                    value={formInputState["address-line2"]}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="address-line3">Regel 3</FormLabel>
                  <TextInput
                    id="address-line3"
                    name="address-line3"
                    maxLength={adresRegel3Validation.maxLength}
                    pattern={adresRegel3Validation.pattern}
                    autoComplete="address-line3"
                    value={formInputState["address-line3"]}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                  />
                </FormField>
              </Fieldset>
              {showNotes && <Note> voorkeur contactwijze: brief / telefoon / e-mail </Note>}
              <Fieldset>
                <FieldsetLegend>{t("contact-preference")}</FieldsetLegend>
                <FormField>
                  <FormLabel type="radio" htmlFor="contact-letter">
                    {t("contact-letter")}
                  </FormLabel>
                  <RadioButton
                    id="contact-letter"
                    name="contact-preference"
                    value="letter"
                    checked={formInputState["contact-preference"] === "letter"}
                    onChange={handleInputChange}
                    required
                  />
                </FormField>
                <FormField>
                  <FormLabel type="radio" htmlFor="contact-phone">
                    {t("contact-phone")}
                  </FormLabel>
                  <RadioButton
                    id="contact-phone"
                    name="contact-preference"
                    value="phone"
                    checked={formInputState["contact-preference"] === "phone"}
                    onChange={handleInputChange}
                    required
                  />
                </FormField>
                <FormField>
                  <FormLabel type="radio" htmlFor="contact-email">
                    {t("contact-email")}
                  </FormLabel>
                  <RadioButton
                    id="contact-email"
                    name="contact-preference"
                    value="email"
                    checked={formInputState["contact-preference"] === "email"}
                    onChange={handleInputChange}
                    required
                  />
                </FormField>
              </Fieldset>
            </div>
            <div className="form-section">
              <Heading2>{t("commercial-details")}</Heading2>

              {showNotes && (
                <Note>
                  KvK nummer Opmerking: Is hier standaard validatie voor? Kan op basis van KvK nummer de bedrijfsnaam
                  worden getoond?
                </Note>
              )}
              <FormField>
                <FormLabel htmlFor="kvk-number">{t("kvk-number")}</FormLabel>
                <TextInput
                  onBlur={handleInputBlur}
                  id="kvk-number"
                  name="kvk-number"
                  inputMode="numeric"
                  value={formInputState["kvk-number"]}
                  onChange={handleInputChange}
                />
              </FormField>

              {showNotes && <Note>Bedrijfsnaam </Note>}
              <FormField>
                <FormLabel htmlFor="organization">{t("organization")}</FormLabel>
                <TextInput
                  onBlur={handleInputBlur}
                  id="organization"
                  name="organization"
                  autoComplete="organization"
                  value={formInputState.organization}
                  onChange={handleInputChange}
                />
              </FormField>

              {showNotes && <Note>Website </Note>}
              <FormField>
                <FormLabel htmlFor="website">{t("website")}</FormLabel>
                <TextInput
                  onBlur={handleInputBlur}
                  type="url"
                  id="website"
                  name="website"
                  autoComplete="url"
                  value={formInputState.website}
                  onChange={handleInputChange}
                />
              </FormField>
            </div>
            <div className="form-section">
              <Heading2>{t("financial-details")}</Heading2>

              {showNotes && <Note>IBAN </Note>}
              <FormField>
                <FormLabel htmlFor="iban">{t("iban")}</FormLabel>
                <TextInput
                  onBlur={handleInputBlur}
                  id="iban"
                  name="iban"
                  value={formInputState.iban}
                  onChange={handleInputChange}
                />
              </FormField>

              {showNotes && <Note>BIC </Note>}
              <FormField>
                <FormLabel htmlFor="bic">{t("bic")}</FormLabel>
                <TextInput
                  onBlur={handleInputBlur}
                  id="bic"
                  name="bic"
                  value={formInputState.bic}
                  onChange={handleInputChange}
                />
              </FormField>
            </div>
            <div className="form-section">
              <Heading2>{t("other-fields")}</Heading2>

              {showNotes && (
                <Note>
                  Checkbox voor akkoord gegevensverwerking Opmerking: wanneer toegevoegd is hij waarschijnlijk required.
                  Moeten we richtlijnen toevoegen wanneer deze toegevoegd dient te worden?
                </Note>
              )}
              <FormField>
                <Checkbox
                  id="accept-data-handling"
                  name="accept-data-handling"
                  checked={formCheckedState["accept-data-handling"]}
                  onChange={handleCheckboxChange}
                  required
                />
                <FormLabel type="checkbox" htmlFor="accept-data-handling">
                  {t("accept-data-handling")}
                </FormLabel>
              </FormField>

              {showNotes && (
                <Note>Checkbox voor op de hoogte blijven TODO: richtlijnen over `checked` state bij aanvang</Note>
              )}
              <FormField>
                <Checkbox
                  id="subscribe-newsletter"
                  name="subscribe-newsletter"
                  checked={formCheckedState["subscribe-newsletter"]}
                  onChange={handleCheckboxChange}
                />
                <FormLabel type="checkbox" htmlFor="subscribe-newsletter">
                  {t("subscribe-newsletter")}
                </FormLabel>
              </FormField>
            </div>
            <SaveButton>save-progress</SaveButton>
            <Button type="submit" disabled={loading} busy={loading}>
              {t("submit")}
            </Button>
          </form>
          <div>
            <Button onClick={demo1}>Demo 1</Button>
            <Button onClick={demo2}>Demo 2</Button>
            <Button onClick={clear}>Reset</Button>
          </div>
        </>
      )}
    </Document>
  );
}
