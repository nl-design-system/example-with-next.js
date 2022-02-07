import { useTranslation } from "next-i18next";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useReducer, useState } from "react";
import { DemoForm, DemoFormChecked, DemoFormInput } from "../../../types/DemoForm";
import {
  adresRegel1Validation,
  adresRegel2Validation,
  adresRegel3Validation,
  bsnValidation,
  geslachtsnaamValidation,
  huisletterValidation,
  huisnummertoevoegingValidation,
  locatiebeschrijvingValidation,
  placeOfBirthValidation,
  postcodeValidation,
  voornaamValidation,
  voorvoegselGeslachtsnaamValidation,
  woonplaatsnaamValidation,
  huisnummerValidation,
  kvkValidation,
} from "../../data";
import { InputFamilyName } from "../input/InputFamilyName";
import { InputGivenName } from "../input/InputGivenName";
import { Checkbox } from "../utrecht/Checkbox";
import { FormField } from "../utrecht/FormField";
import { FormLabel } from "../utrecht/FormLabel";
import { Heading2 } from "../utrecht/Heading2";
import { TextInput } from "../utrecht/TextInput";
import voorvoegsels from "../../data/voorvoegsels.json";
import landen from "../../data/landen.json";

import { InputGender } from "../input/InputGender";
import { DateInput } from "../DateInput";
import { InputBSN, InputEmail, InputHouseNumber } from "../input";
import { Button, Fieldset, FieldsetLegend, RadioButton, Textarea } from "../utrecht";
import { SaveButton } from "../SaveButton";
import { ValidationMessages } from "../ValidationMessages";
import { ValidationIcon } from "../ValidationIcon";
import {
  FormFieldDeclaration,
  FormValidationError,
  FormValidationFunction,
  FormNormalizeFunction,
} from "../input/model";
import {
  trimWhitespace,
  normalizeWhitespace,
  removeWhitespace,
  normalizeUnicode,
  toUpperCase,
} from "../../data/normalize";
import { createValidators } from "../../data/validate";
import { createFieldState } from "../input/controller";
import { Input } from "../input/Input";

interface Props {
  setDetails: Dispatch<SetStateAction<DemoForm | undefined>>;
}
type FormInput = { [Property in keyof DemoFormInput]: string };

export type FormInputValidityState = Partial<{
  [Property in keyof DemoFormInput]: {
    errors: FormValidationError[];
  };
}>;

const errorIds = (errors: FormValidationError[] | undefined): string | undefined =>
  errors ? errors.map(({ id }) => id).join(" ") : undefined;

export const BasicForm = ({ setDetails }: Props) => {
  const { t } = useTranslation("form");

  const toInteger: FormNormalizeFunction = (value: string): number | string =>
    /^[\d+]$/.test(value) ? parseInt(value, 10) : value;

  const formatPostCodeWithSpace = (value: string): string =>
    value.replace(/^\s*([0-9]{4})\s*([A-Za-z]{2})\s*$/, "$1 $2").toUpperCase();

  const integerNormalizers: FormNormalizeFunction[] = [removeWhitespace];

  // By removing whitespace from telephone numbers, it might be more difficult
  // for users to check correctness, because they prefer their own arbitrary
  // grouping. Perhaps this type of normalization should only happen in the backend.
  const telNormalizers: FormNormalizeFunction[] = [];

  const normalizers: Partial<{ [Property in keyof DemoFormInput]: FormNormalizeFunction[] }> = {
    "given-name": [trimWhitespace, normalizeWhitespace, normalizeUnicode],
    "family-name-prefix": [trimWhitespace, normalizeWhitespace, normalizeUnicode],
    "family-name": [trimWhitespace, normalizeWhitespace, normalizeUnicode],
    street: [trimWhitespace, normalizeWhitespace, normalizeUnicode],
    iban: [removeWhitespace],
    "kvk-number": [...integerNormalizers],
    "postal-code": [removeWhitespace, toUpperCase, formatPostCodeWithSpace],
    bsn: [removeWhitespace],
    "house-number": [...integerNormalizers],
    "house-number-letter": [removeWhitespace],
    "year-of-establishment": [...integerNormalizers],
    email: [trimWhitespace],
    country: [trimWhitespace],
    "place-of-residence": [trimWhitespace],
    tel: [...telNormalizers],
    "tel-mobile": [...telNormalizers],
    "tel-daytime": [...telNormalizers],
    "tel-evening": [...telNormalizers],
  };

  const validators: Partial<{ [Property in keyof DemoFormInput]: FormValidationFunction[] }> = {
    bsn: createValidators(bsnValidation),
    "given-name": createValidators(voornaamValidation),
    "family-name-prefix": createValidators(voorvoegselGeslachtsnaamValidation),
    "family-name": createValidators(geslachtsnaamValidation),
    "postal-code": createValidators(postcodeValidation),
    "house-number": createValidators(huisnummerValidation),
    "house-number-letter": createValidators(huisletterValidation),
    "address-line1": createValidators(adresRegel1Validation),
    "address-line2": createValidators(adresRegel2Validation),
    "address-line3": createValidators(adresRegel3Validation),
    "kvk-number": createValidators(kvkValidation),
  };

  const formFields: { [index: string]: FormFieldDeclaration } = {
    "given-name": {
      id: "516a5fb3-ed7d-4045-97ef-42016a1f8740",
      labelKey: "given-name",
      name: "given-name",
      required: false,
      fieldType: "input",
      inputSubtype: "text",
      definition: voornaamValidation,
      validators: createValidators(voornaamValidation),
      normalizers: [trimWhitespace, normalizeWhitespace, normalizeUnicode],
      defaultState: {
        value: "",
        invalid: false,
        errors: [],
      },
    },
  };

  const convertTypes: Partial<{ [Property in keyof DemoFormInput]: (value: string) => number | boolean }> = {
    "kvk-number": toInteger,
  };

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
    { event, input }: { event: "change" | "blur"; input: Partial<FormInput> }
  ) {
    if (event === "blur") {
      return { ...state, ...normalizeInput(input) };
    }

    return { ...state, ...input };
  }

  function handleFormChecked(state: DemoFormChecked, input: Partial<DemoFormChecked>) {
    return { ...state, ...input };
  }

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
    setDetails(result);
  };

  const handleInputChange = (change: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    dispatchFormInputState({ event: "change", input: { [change.target.name]: change.target.value } });
  };

  const handleInputBlur = (change: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = { [change.target.name]: change.target.value };
    dispatchFormInputState({ event: "blur", input });
    validateFormInput(input);
  };

  const handleCheckboxChange = (change: ChangeEvent<HTMLInputElement>) => {
    dispatchFormCheck({ [change.target.name]: change.target.checked });
  };

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
    "year-of-establishment": undefined,
  };

  const [formCheckedState, dispatchFormCheck] = useReducer(handleFormChecked, initialFormChecked);

  const validateFormInputChange = (
    validityState: FormInputValidityState,
    input: Partial<FormInput>
  ): FormInputValidityState => {
    return Object.entries(input).reduce((state, [key, value]) => {
      const errors = validators[key as keyof DemoFormInput]?.flatMap((validator) => validator(value));
      return errors ? { ...state, [key]: { errors } } : state;
    }, validityState);
  };

  const [formInputState, dispatchFormInputState] = useReducer(handleFormInputChange, defaultFormInput as FormInput);
  const [formValidityState, validateFormInput] = useReducer(validateFormInputChange, {});
  const [loading, setLoading] = useState(false);

  const clear = () => {
    dispatchFormInputState({ event: "change", input: defaultFormInput });
    dispatchFormCheck(initialFormChecked);
  };

  const demo1 = () => {
    clear();
    dispatchFormInputState({
      event: "blur",
      input: {
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

  const demo2 = () => {
    clear();
    dispatchFormInputState({
      event: "blur",
      input: {
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <Heading2>{t("personal-details")}</Heading2>
          <Input state={createFieldState(formFields["given-name"])} />
          <InputGivenName
            id="given-name2"
            name="given-name"
            value={formInputState["given-name"]}
            spellCheck={false}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            maxLength={voornaamValidation.maxLength}
            pattern={voornaamValidation.pattern}
            required
            errors={formValidityState["given-name"]?.errors}
          ></InputGivenName>
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
            spellCheck={false}
            maxLength={geslachtsnaamValidation.maxLength}
            pattern={geslachtsnaamValidation.pattern}
            onChange={handleInputChange}
          ></InputFamilyName>
          <FormField>
            <FormLabel htmlFor="given-name-initials">{t("given-name-initials")}</FormLabel>
            <TextInput
              onBlur={handleInputBlur}
              id="given-name-initials"
              spellCheck={false}
              name="given-name-initials"
              value={formInputState["given-name-initials"]}
              onChange={handleInputChange}
            />
          </FormField>
          <FormField>
            <FormLabel htmlFor="family-name-prefix">{t("family-name-prefix")}</FormLabel>
            <TextInput
              onBlur={handleInputBlur}
              id="family-name-prefix"
              name="family-name-prefix"
              list="family-name-prefix-datalist"
              spellCheck={false}
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
          <FormField>
            <FormLabel htmlFor="name-original-writing">{t("name-original-writing")}</FormLabel>
            <TextInput
              onBlur={handleInputBlur}
              id="name-original-writing"
              name="name-original-writing"
              value={formInputState["name-original-writing"]}
              spellCheck={false}
              onChange={handleInputChange}
            />
          </FormField>
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
          <InputGender
            id="gender"
            required
            invalid
            value={formInputState.gender}
            onChange={handleInputChange}
            errors={[{ id: "gender-required", message: t("gender-required") }]}
          ></InputGender>
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
              spellCheck={false}
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
              spellCheck={false}
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
          <InputBSN
            id="bsn"
            name="bsn"
            value={formInputState.bsn}
            onBlur={handleInputBlur}
            minLength={bsnValidation.minLength}
            maxLength={bsnValidation.maxLength}
            spellCheck={bsnValidation.spellCheck}
            pattern={bsnValidation.pattern}
            onChange={handleInputChange}
          ></InputBSN>
          <ValidationMessages errors={formValidityState["bsn"]?.errors} />
        </div>
        <div className="form-section">
          <Heading2>{t("contact-details")}</Heading2>
          <InputEmail
            id="email"
            name="email"
            value={formInputState.email}
            spellCheck={false}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
          <FormField>
            <FormLabel htmlFor="tel">{t("tel")}</FormLabel>
            <TextInput
              onBlur={handleInputBlur}
              type="tel"
              id="tel"
              name="tel"
              spellCheck={false}
              autoComplete="tel"
              value={formInputState.tel}
              onChange={handleInputChange}
              aria-describedby={errorIds(formValidityState["tel"]?.errors)}
            />
            <ValidationMessages errors={formValidityState["tel"]?.errors} />
          </FormField>
          <FormField>
            <FormLabel htmlFor="tel-mobile">{t("tel-mobile")}</FormLabel>
            <TextInput
              onBlur={handleInputBlur}
              type="tel"
              id="tel-mobile"
              name="tel-mobile"
              spellCheck={false}
              autoComplete="tel mobile"
              value={formInputState["tel-mobile"]}
              onChange={handleInputChange}
              aria-describedby={errorIds(formValidityState["tel-mobile"]?.errors)}
            />
            <ValidationMessages errors={formValidityState["tel-mobile"]?.errors} />
          </FormField>
          <FormField>
            <FormLabel htmlFor="tel-daytime">{t("tel-daytime")}</FormLabel>
            <TextInput
              onBlur={handleInputBlur}
              type="tel"
              id="tel-daytime"
              name="tel-daytime"
              spellCheck={false}
              autoComplete="tel"
              value={formInputState["tel-daytime"]}
              onChange={handleInputChange}
              aria-describedby={errorIds(formValidityState["tel-daytime"]?.errors)}
            />
            <ValidationMessages errors={formValidityState["tel-daytime"]?.errors} />
          </FormField>
          <FormField>
            <FormLabel htmlFor="tel-evening">{t("tel-evening")}</FormLabel>
            <TextInput
              onBlur={handleInputBlur}
              type="tel"
              id="tel-evening"
              name="tel-evening"
              spellCheck={false}
              autoComplete="tel"
              value={formInputState["tel-evening"]}
              onChange={handleInputChange}
              aria-describedby={errorIds(formValidityState["tel-evening"]?.errors)}
            />
            <ValidationMessages errors={formValidityState["tel-evening"]?.errors} />
          </FormField>
          <Fieldset>
            <FieldsetLegend>{t("address")}</FieldsetLegend>
            <FormField>
              <FormLabel htmlFor="postal-code">
                {t("postal-code")}
                <ValidationIcon errors={formValidityState["postal-code"]?.errors} />
              </FormLabel>
              <TextInput
                onBlur={handleInputBlur}
                id="postal-code"
                name="postal-code"
                spellCheck={false}
                style={{
                  ["--maxlength" as any]: 7, // Room for "1234 AB" with space, even though it will be normalized
                }}
                className="utrecht-textbox--maxlength"
                autoComplete="postal-code"
                value={formInputState["postal-code"]}
                pattern={postcodeValidation.pattern}
                onChange={handleInputChange}
                aria-describedby={errorIds(formValidityState["postal-code"]?.errors)}
              />
              <ValidationMessages errors={formValidityState["postal-code"]?.errors} />
            </FormField>
            <InputHouseNumber
              id="house-number"
              name="house-number"
              maxLength={huisnummerValidation.maxLength}
              spellCheck={huisnummerValidation.spellCheck}
              value={formInputState["house-number"]}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            ></InputHouseNumber>
            <ValidationMessages errors={formValidityState["house-number"]?.errors} />
            <FormField>
              <FormLabel htmlFor="house-number">{t("house-number")}</FormLabel>
              <TextInput
                onBlur={handleInputBlur}
                id="house-number"
                maxLength={5}
                spellCheck={false}
                name="house-number"
                inputMode="numeric"
                value={formInputState["house-number"]}
                onChange={handleInputChange}
                aria-describedby={errorIds(formValidityState["house-number"]?.errors)}
              />
              <ValidationMessages errors={formValidityState["house-number"]?.errors} />
            </FormField>
            <FormField>
              <FormLabel htmlFor="house-number-letter">{t("house-number-letter-suffix")}</FormLabel>
              <TextInput
                onBlur={handleInputBlur}
                id="house-number-letter"
                name="house-number-letter"
                spellCheck={false}
                value={formInputState["house-number-letter"]}
                maxLength={huisletterValidation.maxLength}
                pattern={huisletterValidation.pattern}
                onChange={handleInputChange}
                aria-describedby={errorIds(formValidityState["house-number-letter"]?.errors)}
              />
              <ValidationMessages errors={formValidityState["house-number-letter"]?.errors} />
            </FormField>
            <FormField>
              <FormLabel htmlFor="house-number-suffix">{t("house-number-suffix")}</FormLabel>
              <TextInput
                onBlur={handleInputBlur}
                id="house-number-suffix"
                name="house-number-suffix"
                style={{
                  ["--maxlength" as any]: 4,
                }}
                spellCheck={false}
                className="utrecht-textbox--maxlength"
                value={formInputState["house-number-suffix"]}
                pattern={huisnummertoevoegingValidation.pattern}
                onChange={handleInputChange}
                aria-describedby={errorIds(formValidityState["house-number-suffix"]?.errors)}
              />
              <ValidationMessages errors={formValidityState["house-number-suffix"]?.errors} />
            </FormField>
            <FormField>
              <FormLabel htmlFor="street">{t("street")}</FormLabel>
              <TextInput
                onBlur={handleInputBlur}
                id="street"
                name="street"
                spellCheck={false}
                value={formInputState.street}
                onChange={handleInputChange}
                aria-describedby={errorIds(formValidityState["street"]?.errors)}
              />
              <ValidationMessages errors={formValidityState["street"]?.errors} />
            </FormField>
            <FormField>
              <FormLabel htmlFor="place-of-residence">{t("place-of-residence")}</FormLabel>
              <TextInput
                onBlur={handleInputBlur}
                id="place-of-residence"
                name="place-of-residence"
                value={formInputState["place-of-residence"]}
                spellCheck={false}
                minLength={woonplaatsnaamValidation.minLength}
                maxLength={woonplaatsnaamValidation.maxLength}
                pattern={woonplaatsnaamValidation.pattern}
                onChange={handleInputChange}
                aria-describedby={errorIds(formValidityState["place-of-residence"]?.errors)}
              />
              <ValidationMessages errors={formValidityState["place-of-residence"]?.errors} />
            </FormField>
            <FormField>
              <FormLabel htmlFor="municipality">{t("municipality")}</FormLabel>
              <TextInput
                onBlur={handleInputBlur}
                spellCheck={false}
                id="municipality"
                name="municipality"
                value={formInputState.municipality}
                onChange={handleInputChange}
                aria-describedby={errorIds(formValidityState["municipality"]?.errors)}
              />
              <ValidationMessages errors={formValidityState["municipality"]?.errors} />
            </FormField>
            <FormField>
              <FormLabel htmlFor="country">{t("country")}</FormLabel>
              <TextInput
                onBlur={handleInputBlur}
                id="country"
                name="country"
                spellCheck={false}
                autoComplete="country-name"
                value={formInputState.country}
                onChange={handleInputChange}
                aria-describedby={errorIds(formValidityState["country"]?.errors)}
              />
              <ValidationMessages errors={formValidityState["country"]?.errors} />
            </FormField>
          </Fieldset>
          <FormField>
            <FormLabel htmlFor="location-description">{t("location-description")}</FormLabel>
            <Textarea
              onBlur={handleInputBlur}
              id="location-description"
              name="location-description"
              spellCheck={true}
              value={formInputState["location-description"]}
              maxLength={locatiebeschrijvingValidation.maxLength}
              onChange={handleInputChange}
              aria-describedby={errorIds(formValidityState["location-description"]?.errors)}
            />
            <ValidationMessages errors={formValidityState["location-description"]?.errors} />
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
                spellCheck={false}
                autoComplete="address-line1"
                value={formInputState["address-line1"]}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
                aria-describedby={errorIds(formValidityState["address-line1"]?.errors)}
              />
              <ValidationMessages errors={formValidityState["address-line1"]?.errors} />
            </FormField>
            <FormField>
              <FormLabel htmlFor="address-line2">Regel 2</FormLabel>
              <TextInput
                id="address-line2"
                name="address-line2"
                maxLength={adresRegel2Validation.maxLength}
                spellCheck={false}
                pattern={adresRegel2Validation.pattern}
                autoComplete="address-line2"
                value={formInputState["address-line2"]}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
                aria-describedby={errorIds(formValidityState["address-line2"]?.errors)}
              />
              <ValidationMessages errors={formValidityState["address-line2"]?.errors} />
            </FormField>
            <FormField>
              <FormLabel htmlFor="address-line3">Regel 3</FormLabel>
              <TextInput
                id="address-line3"
                name="address-line3"
                maxLength={adresRegel3Validation.maxLength}
                pattern={adresRegel3Validation.pattern}
                spellCheck={false}
                autoComplete="address-line3"
                value={formInputState["address-line3"]}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
                aria-describedby={errorIds(formValidityState["address-line3"]?.errors)}
              />
              <ValidationMessages errors={formValidityState["address-line3"]?.errors} />
            </FormField>
          </Fieldset>
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
          <FormField>
            <FormLabel htmlFor="kvk-number">{t("kvk-number")}</FormLabel>
            <TextInput
              onBlur={handleInputBlur}
              id="kvk-number"
              name="kvk-number"
              spellCheck={false}
              inputMode="numeric"
              maxLength={
                8
              } /* Volgens kvk.nl: "Als je je bedrijf inschrijft in het Handelsregister krijg je een uniek 8-cijferig KVK-nummer." */
              value={formInputState["kvk-number"]}
              onChange={handleInputChange}
              aria-describedby={errorIds(formValidityState["kvk-number"]?.errors)}
            />
            <ValidationMessages errors={formValidityState["kvk-number"]?.errors} />
          </FormField>
          <FormField>
            <FormLabel htmlFor="organization">{t("organization")}</FormLabel>
            <TextInput
              onBlur={handleInputBlur}
              id="organization"
              name="organization"
              spellCheck={false}
              autoComplete="organization"
              value={formInputState.organization}
              onChange={handleInputChange}
              aria-describedby={errorIds(formValidityState["organization"]?.errors)}
            />
            <ValidationMessages errors={formValidityState["organization"]?.errors} />
          </FormField>
          <FormField>
            <FormLabel htmlFor="year-of-establishment">{t("year-of-establishment")}</FormLabel>
            <TextInput
              onBlur={handleInputBlur}
              id="year-of-establishment"
              name="year-of-establishment"
              inputMode="numeric"
              spellCheck={false}
              maxLength={4}
              value={formInputState["year-of-establishment"]}
              onChange={handleInputChange}
              aria-describedby={errorIds(formValidityState["year-of-establishment"]?.errors)}
            />
            <ValidationMessages errors={formValidityState["year-of-establishment"]?.errors} />
          </FormField>
          <FormField>
            <FormLabel htmlFor="website">{t("website")}</FormLabel>
            <TextInput
              onBlur={handleInputBlur}
              type="url"
              id="website"
              name="website"
              autoComplete="url"
              spellCheck={false}
              value={formInputState.website}
              onChange={handleInputChange}
              aria-describedby={errorIds(formValidityState["website"]?.errors)}
            />
            <ValidationMessages errors={formValidityState["website"]?.errors} />
          </FormField>
        </div>
        <div className="form-section">
          <Heading2>{t("financial-details")}</Heading2>
          <FormField>
            <FormLabel htmlFor="iban">{t("iban")}</FormLabel>
            <TextInput
              onBlur={handleInputBlur}
              id="iban"
              name="iban"
              spellCheck={false}
              value={formInputState.iban}
              onChange={handleInputChange}
              aria-describedby={errorIds(formValidityState["iban"]?.errors)}
            />
            <ValidationMessages errors={formValidityState["iban"]?.errors} />
          </FormField>
          <FormField>
            <FormLabel htmlFor="bic">{t("bic")}</FormLabel>
            <TextInput
              onBlur={handleInputBlur}
              id="bic"
              name="bic"
              spellCheck={false}
              maxLength={11} /* ISO 9362: 8 or 11 chars */
              value={formInputState.bic}
              onChange={handleInputChange}
              aria-describedby={errorIds(formValidityState["bic"]?.errors)}
            />
            <ValidationMessages errors={formValidityState["bic"]?.errors} />
          </FormField>
        </div>
        <div className="form-section">
          <Heading2>{t("other-fields")}</Heading2>
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
  );
};
