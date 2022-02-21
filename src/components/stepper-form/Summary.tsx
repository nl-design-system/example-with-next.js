import { useTranslation } from "next-i18next";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { Heading1 } from "../utrecht/Heading1";
import { Link } from "../utrecht/Link";
import { Paragraph } from "../utrecht/Paragraph";
import { ADDRESS } from "./Address";
import { CONTACT_DETAILS } from "./ContactDetails";
import { LAST_STEP } from "./LastStep";
import { PERSONAL_DETAILS } from "./PersonalDetails";

export const Summary = () => {
  const { t } = useTranslation("stepper-form");
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const request = new Request("/api/stepper-form");

    fetch(request).then(async (res) => {
      const data = await res.json();
      setFormData(data);
    });
  }, []);

  return (
    <>
      <Heading1>{t("form-summary")}</Heading1>
      <Paragraph>{t("form-summary-description")}</Paragraph>
      <dl className="todo-form-summary">
        {Object.values(PERSONAL_DETAILS).map((key) => (
          <div key={key} className="todo-form-summary-item">
            <dt className="todo-form-summary-item__title">
              <p>{t(key)}</p>
            </dt>
            <dd>
              <p className="todo-form-summary-item__data">
                {formData[key]}
                <span className="todo-form-summary-item__edit-link">
                  <NextLink href={`step-1?${key}`}>
                    <Link>✎ {t("edit", { key })}</Link>
                  </NextLink>
                </span>
              </p>
            </dd>
          </div>
        ))}
        {Object.values(ADDRESS).map((key) => (
          <div key={key} className="todo-form-summary-item">
            <dt className="todo-form-summary-item__title">
              <p>{t(key)}</p>
            </dt>
            <dd>
              <p className="todo-form-summary-item__data">
                {formData[key]}
                <span className="todo-form-summary-item__edit-link">
                  <NextLink href={`step-2?${key}`}>
                    <Link>✎ {t("edit", { key })}</Link>
                  </NextLink>
                </span>
              </p>
            </dd>
          </div>
        ))}
        {Object.values(CONTACT_DETAILS).map((key) => (
          <div key={key} className="todo-form-summary-item">
            <dt className="todo-form-summary-item__title">
              <p>{t(key)}</p>
            </dt>
            <dd>
              <p className="todo-form-summary-item__data">
                {formData[key]}
                <span className="todo-form-summary-item__edit-link">
                  <NextLink href={`step-3?${key}`}>
                    <Link>✎ {t("edit", { key })}</Link>
                  </NextLink>
                </span>
              </p>
            </dd>
          </div>
        ))}
        {Object.values(LAST_STEP).map((key) => (
          <div key={key} className="todo-form-summary-item">
            <dt className="todo-form-summary-item__title">
              <p>{t(key)}</p>
            </dt>
            <dd>
              <p className="todo-form-summary-item__data">
                {formData[key]}
                <span className="todo-form-summary-item__edit-link">
                  <NextLink href={`step-3?${key}`}>
                    <Link>✎ {t("edit", { key })}</Link>
                  </NextLink>
                </span>
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
};
