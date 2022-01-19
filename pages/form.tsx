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
import {
  Button,
  Checkbox,
  Document,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Heading2,
  Paragraph,
  RadioButton,
  Textarea,
  TextInput,
} from "../src/components/utrecht";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form"])),
  },
});

const trimWhitespace = (value: string) => value.trim();
const normalizeWhitespace = (value: string) => value.replace(/\s+/g, " ");
const removeWhitespace = (value: string) => value.replace(/\s+/g, "");
// const toInteger = (value: string): number => parseInt(value, 10);

const normalizers: Partial<{ [Property in keyof DemoFormInput]: ((value: string) => string)[] }> = {
  "given-name": [trimWhitespace, normalizeWhitespace],
  iban: [removeWhitespace],
  "kvk-number": [removeWhitespace],
};

// const removeWhitespaceConfig: (keyof DemoForm)[] = [];

export default function Form() {
  function handleFormInputChange(
    state: DemoFormInput,
    partial: { [Property in keyof Partial<DemoFormInput>]: string }
  ) {
    console.log("NORMALIZE");
    const normalizedPartial = Object.entries(partial).reduce((normalized, [key, value]) => {
      return {
        ...normalized,
        [key]:
          normalizers[key as keyof DemoFormInput] && Array.isArray(normalizers[key as keyof DemoFormInput])
            ? normalizers[key as keyof DemoFormInput]!.reduce((result, fn) => fn(result), value)
            : value,
      };
    }, {});

    console.log(partial, normalizedPartial);

    return { ...state, ...normalizedPartial };
  }

  function handleFormChecked(state: DemoFormChecked, partial: Partial<DemoFormChecked>) {
    return { ...state, ...partial };
  }

  const initialFormChecked: DemoFormChecked = {
    "accept-data-handling": false,
    "subscribe-newsletter": false,
  };

  const [formCheckedState, dispatchFormCheck] = useReducer(handleFormChecked, initialFormChecked);
  const [formInputState, dispatchFormInputState] = useReducer(handleFormInputChange, {} as DemoFormInput);
  const [showNotes, setShowNotes] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation("form");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setSubmitted(true);

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
  };
  const demo1 = () => {
    dispatchFormInputState({
      gender: "female",
      "given-name": "Yolijn",
      "contact-preference": "letter",
    });

    dispatchFormCheck({
      "accept-data-handling": true,
    });
  };

  const demo2 = () => {
    dispatchFormInputState({
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
    });

    dispatchFormCheck({
      "accept-data-handling": true,
    });
  };

  const handleInputChange = (change: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatchFormInputState({ [change.target.name]: change.target.value });
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
      {!submitted || loading ? (
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
              <FormField>
                <FormLabel htmlFor="given-name">{t("given-name")}</FormLabel>
                <TextInput
                  id="given-name"
                  name="given-name"
                  autoComplete="given-name"
                  defaultValue={formInputState["given-name"]}
                  onChange={handleInputChange}
                  required
                  aria-describedby="given-name-required"
                />
                {!formInputState["given-name"] && (
                  <FormFieldDescription id="given-name-required" invalid>
                    <Paragraph>{t("given-name-required")}</Paragraph>
                  </FormFieldDescription>
                )}
              </FormField>
              {showNotes && (
                <Note>
                  Achternaam (of "Achternaam of achternamen (of "Achternaam (1 of meerdere)" Mijn Overheid, basis
                  registratie personen: "De geslachtsnaam is hetzelfde als de achternaam. Heeft de geslachtsnaam een
                  voorvoegsel, zoals “de” of “van”? Dan is het voorvoegsel vermeld bij Voorvoegsels geslachtsnaam"
                </Note>
              )}
              <FormField>
                <FormLabel htmlFor="family-name">{t("family-name")}</FormLabel>
                <TextInput
                  id="family-name"
                  name="family-name"
                  autoComplete="family-name"
                  defaultValue={formInputState["family-name"]}
                  onChange={handleInputChange}
                />
              </FormField>
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
                  id="given-name-initials"
                  name="given-name-initials"
                  defaultValue={formInputState["given-name-initials"]}
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
                  id="family-name-prefix"
                  name="family-name-prefix"
                  autoComplete="honorific-prefix"
                  defaultValue={formInputState["family-name-prefix"]}
                  onChange={handleInputChange}
                />
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
                  id="name-original-writing"
                  name="name-original-writing"
                  defaultValue={formInputState["name-original-writing"]}
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
                  id="manner-of-address"
                  name="manner-of-address"
                  defaultValue={formInputState["manner-of-address"]}
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
              <Fieldset aria-required="true" aria-invalid="true">
                <FieldsetLegend>{t("gender")}</FieldsetLegend>
                <FormField>
                  <FormLabel type="radio" htmlFor="gender-female">
                    {t("gender-female")}
                  </FormLabel>
                  <RadioButton
                    id="gender-female"
                    name="gender"
                    value="female"
                    checked={formInputState.gender === "female"}
                    onChange={handleInputChange}
                    aria-describedby="gender-required"
                  />
                </FormField>
                <FormField>
                  <FormLabel type="radio" htmlFor="gender-male">
                    {t("gender-male")}
                  </FormLabel>
                  <RadioButton
                    id="gender-male"
                    name="gender"
                    value="male"
                    checked={formInputState.gender === "male"}
                    onChange={handleInputChange}
                    aria-describedby="gender-required"
                  />
                </FormField>
                <FormField>
                  <FormLabel type="radio" htmlFor="gender-unknown">
                    {t("gender-unknown")}
                  </FormLabel>
                  <RadioButton
                    id="gender-unknown"
                    name="gender"
                    value="unknown"
                    checked={formInputState.gender === "unknown"}
                    onChange={handleInputChange}
                    aria-describedby="gender-required"
                  />
                </FormField>
                <FormFieldDescription invalid id="gender-required">
                  <Paragraph>{t("gender-required")}</Paragraph>
                </FormFieldDescription>
              </Fieldset>

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
                  defaultValue={formInputState.bday}
                  onChange={handleInputChange}
                />
              </FormField>

              {showNotes && (
                <Note>
                  BSN Opmerking: is bsn voor iedereen goed te begrijpen, wanneer te gebruiken. Moet het gebruikt worden
                  samen met een uitleg waar je deze kan vinden bijvoorbeeld?
                </Note>
              )}
              <FormField>
                <FormLabel htmlFor="bsn">{t("bsn")}</FormLabel>
                <TextInput
                  id="bsn"
                  name="bsn"
                  inputMode="numeric"
                  defaultValue={formInputState.bsn}
                  onChange={handleInputChange}
                />
              </FormField>
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
              <FormField>
                <FormLabel htmlFor="email">{t("email")}</FormLabel>
                <TextInput
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={formInputState.email}
                  onChange={handleInputChange}
                />
              </FormField>

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
                  type="tel"
                  id="tel"
                  name="tel"
                  autoComplete="tel"
                  defaultValue={formInputState.tel}
                  onChange={handleInputChange}
                />
              </FormField>

              {showNotes && <Note>Mobiel telefoonnummer</Note>}
              <FormField>
                <FormLabel htmlFor="tel-mobile">{t("tel-mobile")}</FormLabel>
                <TextInput
                  type="tel"
                  id="tel-mobile"
                  name="tel-mobile"
                  autoComplete="tel mobile"
                  defaultValue={formInputState["tel-mobile"]}
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
                  type="tel"
                  id="tel-daytime"
                  name="tel-daytime"
                  autoComplete="tel"
                  defaultValue={formInputState["tel-daytime"]}
                  onChange={handleInputChange}
                />
              </FormField>
              <FormField>
                <FormLabel htmlFor="tel-evening">{t("tel-evening")}</FormLabel>
                <TextInput
                  type="tel"
                  id="tel-evening"
                  name="tel-evening"
                  autoComplete="tel"
                  defaultValue={formInputState["tel-evening"]}
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
                    id="postal-code"
                    name="postal-code"
                    autoComplete="postal-code"
                    defaultValue={formInputState["postal-code"]}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="house-number">{t("house-number")}</FormLabel>
                  <TextInput
                    id="house-number"
                    name="house-number"
                    inputMode="numeric"
                    defaultValue={formInputState["house-number"]}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="house-number-letter">{t("house-number-letter-suffix")}</FormLabel>
                  <TextInput
                    id="house-number-letter"
                    name="house-number-letter"
                    defaultValue={formInputState["house-number-letter"]}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="house-number-suffix">{t("house-number-suffix")}</FormLabel>
                  <TextInput
                    id="house-number-suffix"
                    name="house-number-suffix"
                    defaultValue={formInputState["house-number-suffix"]}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="street">{t("street")}</FormLabel>
                  <TextInput
                    id="street"
                    name="street"
                    defaultValue={formInputState.street}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="place-of-residence">{t("place-of-residence")}</FormLabel>
                  <TextInput
                    id="place-of-residence"
                    name="place-of-residence"
                    defaultValue={formInputState["place-of-residence"]}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="municipality">{t("municipality")}</FormLabel>
                  <TextInput
                    id="municipality"
                    name="municipality"
                    defaultValue={formInputState.municipality}
                    onChange={handleInputChange}
                  />
                </FormField>
                <FormField>
                  <FormLabel htmlFor="country">{t("country")}</FormLabel>
                  <TextInput
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    defaultValue={formInputState.country}
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
                  id="location-description"
                  name="location-description"
                  defaultValue={formInputState["location-description"]}
                  onChange={handleInputChange}
                />
              </FormField>

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
                  id="kvk-number"
                  name="kvk-number"
                  inputMode="numeric"
                  defaultValue={formInputState["kvk-number"]}
                  onChange={handleInputChange}
                />
              </FormField>

              {showNotes && <Note>Bedrijfsnaam </Note>}
              <FormField>
                <FormLabel htmlFor="organization">{t("organization")}</FormLabel>
                <TextInput
                  id="organization"
                  name="organization"
                  autoComplete="organization"
                  defaultValue={formInputState.organization}
                  onChange={handleInputChange}
                />
              </FormField>

              {showNotes && <Note>Website </Note>}
              <FormField>
                <FormLabel htmlFor="website">{t("website")}</FormLabel>
                <TextInput
                  type="url"
                  id="website"
                  name="website"
                  autoComplete="url"
                  defaultValue={formInputState.website}
                  onChange={handleInputChange}
                />
              </FormField>
            </div>
            <div className="form-section">
              <Heading2>{t("financial-details")}</Heading2>

              {showNotes && <Note>IBAN </Note>}
              <FormField>
                <FormLabel htmlFor="iban">{t("iban")}</FormLabel>
                <TextInput id="iban" name="iban" defaultValue={formInputState.iban} onChange={handleInputChange} />
              </FormField>

              {showNotes && <Note>BIC </Note>}
              <FormField>
                <FormLabel htmlFor="bic">{t("bic")}</FormLabel>
                <TextInput id="bic" name="bic" defaultValue={formInputState.bic} onChange={handleInputChange} />
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
            <Button type="submit" disabled={loading} busy={loading}>
              {t("submit")}
            </Button>
          </form>
          <div>
            <Button onClick={demo1}>Demo 1</Button>
            <Button onClick={demo2}>Demo 2</Button>
          </div>
        </>
      ) : (
        <>
          <section>
            <h2 id="h2">{t("personal-details")}</h2>
            {/* <!-- test <dl> met aria-describedby --> */}
            <dl aria-describedby="h2">
              {/* <!-- How annoying is it to have a screen reader repeat the name and say "heading level 2 Persoonsgegevens, definition list Persoonsgegevens"? --> */}
              <div>
                <dt>{t("manner-of-address")}</dt>
                <DataListValue
                  value={formInputState["manner-of-address"]}
                  emptyDescription={t("data-item-input-empty")}
                >
                  <span className="notranslate">{formInputState["manner-of-address"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("given-name-initials")}</dt>
                <DataListValue
                  value={formInputState["given-name-initials"]}
                  emptyDescription={t("data-item-input-empty")}
                >
                  <span className="notranslate">{formInputState["given-name-initials"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("given-name")}</dt>
                <DataListValue value={formInputState["given-name"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState["given-name"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("family-name-prefix")}</dt>
                <DataListValue
                  value={formInputState["family-name-prefix"]}
                  emptyDescription={t("data-item-input-empty")}
                >
                  <span className="notranslate">{formInputState["family-name-prefix"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("family-name")}</dt>
                <DataListValue value={formInputState["family-name"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState["family-name"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("name-original-writing")}</dt>
                <DataListValue
                  value={formInputState["name-original-writing"]}
                  emptyDescription={t("data-item-input-empty")}
                >
                  <bdi className="notranslate">{formInputState["name-original-writing"]}</bdi>
                </DataListValue>
              </div>
              <div>
                <dt>{t("gender")}</dt>
                <DataListValue value={formInputState.gender} emptyDescription={t("data-item-input-empty")}>
                  {t(`gender-${formInputState.gender}`)}
                </DataListValue>
              </div>
              <div>
                <dt>{t("bsn")}</dt>
                <DataListValue value={formInputState.bsn} emptyDescription={t("data-item-input-empty")}>
                  {formInputState.bsn}
                </DataListValue>
              </div>
              <div>
                <dt>{t("bday")}</dt>
                <DataListValue value={formInputState.bday} emptyDescription={t("data-item-input-empty")}>
                  {/* TODO: Use library to display ISO8601 in human readable format */}
                  <time dateTime={formInputState.bday}>{formInputState.bday}</time>
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
                <DataListValue value={formInputState["house-number"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState["house-number"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("house-number-letter")}</dt>
                <DataListValue
                  value={formInputState["house-number-letter"]}
                  emptyDescription={t("data-item-input-empty")}
                >
                  <span className="notranslate">{formInputState["house-number-letter"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("house-number-suffix")}</dt>
                <DataListValue
                  value={formInputState["house-number-suffix"]}
                  emptyDescription={t("data-item-input-empty")}
                >
                  <span className="notranslate">{formInputState["house-number-suffix"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("street")}</dt>
                <DataListValue value={formInputState.street} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState.street}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("place-of-residence")}</dt>
                <DataListValue
                  value={formInputState["place-of-residence"]}
                  emptyDescription={t("data-item-input-empty")}
                >
                  <span className="notranslate">{formInputState["place-of-residence"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("municipality")}</dt>
                <DataListValue value={formInputState.municipality} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState.municipality}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("country")}</dt>
                <DataListValue value={formInputState.country} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState.country}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("email")}</dt>
                <DataListValue value={formInputState.email} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState.email}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("tel")}</dt>
                <DataListValue value={formInputState.tel} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState.tel}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("tel-mobile")}</dt>
                <DataListValue value={formInputState["tel-mobile"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState["tel-mobile"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("tel-daytime")}</dt>
                <DataListValue value={formInputState["tel-daytime"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState["tel-daytime"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("tel-evening")}</dt>
                <DataListValue value={formInputState["tel-evening"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState["tel-evening"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("location-description")}</dt>
                <DataListValue
                  value={formInputState["location-description"]}
                  emptyDescription={t("data-item-input-empty")}
                >
                  <span className="notranslate">{formInputState["location-description"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("contact-preference")}</dt>
                <DataListValue
                  value={formInputState["contact-preference"]}
                  emptyDescription={t("data-item-input-empty")}
                >
                  <span>
                    {t(`contact-${formInputState["contact-preference"]}`) || (
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
                <DataListValue value={formInputState.iban} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState.iban}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("bic")}</dt>
                <DataListValue value={formInputState.bic} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState.bic}</span>
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
                <DataListValue value={formInputState["kvk-number"]} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState["kvk-number"]}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("organization")}</dt>
                <DataListValue value={formInputState.organization} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState.organization}</span>
                </DataListValue>
              </div>
              <div>
                <dt>{t("website")}</dt>
                <DataListValue value={formInputState.website} emptyDescription={t("data-item-input-empty")}>
                  <span className="notranslate">{formInputState.website}</span>
                </DataListValue>
              </div>
            </dl>
          </section>
          <Button onClick={() => setSubmitted(false)}>Back</Button>
        </>
      )}
    </Document>
  );
}
