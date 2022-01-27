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
import { FormValidationError, ValidationIcon } from "../ValidationIcon";

interface Props {
  setDetails: Dispatch<SetStateAction<DemoForm | undefined>>;
}
type FormInput = { [Property in keyof DemoFormInput]: string };

type FormInputValidityState = {
  [Property in keyof DemoFormInput]: {
    errors: FormValidationError[];
  };
};

type FormValidationFunction = (value: string) => FormValidationError[];

const flattenArray: <T>(a: T[], b: T[]) => T[] = (a, b) => [...a, ...b];

export const BasicForm = ({ setDetails }: Props) => {
  const { t } = useTranslation("form");

  const trimWhitespace = (value: string) => value.trim();
  const normalizeWhitespace = (value: string) => value.replace(/\s+/g, " ");
  const removeWhitespace = (value: string) => value.replace(/\s+/g, "");
  const normalizeUnicode = (value: string) => value.normalize("NFC");
  const toInteger = (value: string): number => parseInt(value, 10);
  const toUpperCase = (value: string): string => String(value).toUpperCase();

  const normalizers: Partial<{ [Property in keyof DemoFormInput]: ((value: string) => string)[] }> = {
    "given-name": [trimWhitespace, normalizeWhitespace, normalizeUnicode],
    "family-name": [trimWhitespace, normalizeWhitespace, normalizeUnicode],
    iban: [removeWhitespace],
    "kvk-number": [removeWhitespace],
    "postal-code": [removeWhitespace, toUpperCase],
  };

  const validators: Partial<{ [Property in keyof DemoFormInput]: FormValidationFunction[] }> = {
    "postal-code": [
      (value) => {
        const errors = [];
        if (value.length > 6) {
          errors.push({
            id: "3c1ac06c-80f0-41fc-ad37-7637ebd2e1ce",
            message: t("invalid-max-length"),
          });
        }
        if (
          typeof postcodeValidation.pattern == "string" &&
          !new RegExp(`^(?:${postcodeValidation.pattern})$`).test(value)
        ) {
          errors.push({
            id: "3249dd09-baa8-498e-9709-af3062737f50",
            message: t("invalid-pattern"),
          });
        }
        return errors;
      },
    ],
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
    dispatchFormInputState({ event: "change", partial: { [change.target.name]: change.target.value } });
  };

  const handleInputBlur = (change: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatchFormInputState({ event: "blur", partial: { [change.target.name]: change.target.value } });
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
  };

  const [formCheckedState, dispatchFormCheck] = useReducer(handleFormChecked, initialFormChecked);

  const validateFormInputChange = (data: FormInput, { event }): FormInputValidityState => {
    console.log("validate", data, event);
    return {
      "postal-code": {
        errors:
          validators["postal-code"]
            ?.map((validator) => validator(data["postal-code"] || ""))
            .reduce(flattenArray, []) || [],
      },
    };
  };

  const [formInputState, dispatchFormInputState] = useReducer(handleFormInputChange, defaultFormInput as FormInput);
  const [formValidityState, validateFormInputState] = useReducer(
    validateFormInputChange,
    defaultFormInput as FormInput
  );
  const [loading, setLoading] = useState(false);

  const clear = () => {
    dispatchFormInputState({ event: "change", partial: defaultFormInput });
    dispatchFormCheck(initialFormChecked);
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <Heading2>{t("personal-details")}</Heading2>
          <InputGivenName
            id="given-name2"
            name="given-name"
            value={formInputState["given-name"]}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            maxLength={voornaamValidation.maxLength}
            pattern={voornaamValidation.pattern}
            required
            errors={formValidityState["given-name"].errors}
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
            maxLength={geslachtsnaamValidation.maxLength}
            pattern={geslachtsnaamValidation.pattern}
            onChange={handleInputChange}
          ></InputFamilyName>
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
          <InputEmail
            id="email"
            name="email"
            value={formInputState.email}
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
              autoComplete="tel"
              value={formInputState.tel}
              onChange={handleInputChange}
            />
          </FormField>
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
          <Fieldset>
            <FieldsetLegend>{t("address")}</FieldsetLegend>
            <FormField>
              <FormLabel htmlFor="postal-code">
                {t("postal-code")}
                <ValidationIcon errors={formValidityState["postal-code"].errors} />
              </FormLabel>
              <TextInput
                onBlur={handleInputBlur}
                id="postal-code"
                name="postal-code"
                autoComplete="postal-code"
                value={formInputState["postal-code"]}
                pattern={postcodeValidation.pattern}
                onChange={handleInputChange}
              />
              <ValidationMessages errors={formValidityState["postal-code"].errors} />
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
              inputMode="numeric"
              value={formInputState["kvk-number"]}
              onChange={handleInputChange}
            />
          </FormField>
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
