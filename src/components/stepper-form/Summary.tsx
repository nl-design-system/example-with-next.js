import { useTranslation } from "next-i18next";
import NextLink from "next/link";
import { State } from "../../form/action/reducer";
import { Heading1 } from "../utrecht/Heading1";
import { Link } from "../utrecht/Link";
import { Paragraph } from "../utrecht/Paragraph";

export const Summary = ({ state }: { state: State }) => {
  const { t } = useTranslation("stepper-form");

  const fields = [
    {
      field: state.fields[0],
      step: "step-1",
    },
    {
      field: state.fields[1],
      step: "step-1",
    },
    {
      field: state.fields[2],
      step: "step-1",
    },
    {
      field: state.fields[3],
      step: "step-2",
    },
    {
      field: state.fields[4],
      step: "step-2",
    },
    {
      field: state.fields[5],
      step: "step-2",
    },
    {
      field: state.fields[6],
      step: "step-2",
    },
    {
      field: state.fields[7],
      step: "step-2",
    },
    {
      field: state.fields[8],
      step: "step-3",
    },
    {
      field: state.fields[9],
      step: "step-3",
    },
    {
      field: state.fields[10],
      step: "step-3",
    },
    {
      field: state.fields[11],
      step: "step-4",
    },
  ];

  return (
    <>
      <Heading1>{t("form-summary")}</Heading1>
      <Paragraph>{t("form-summary-description")}</Paragraph>
      <dl className="todo-form-summary">
        {fields.map(({ field, step }) => (
          <div key={field.declaration.id} className="todo-form-summary-item">
            <dt className="todo-form-summary-item__title">
              {field.declaration.labelKey
                ? t(field.declaration.labelKey, field.declaration.label)
                : field.declaration.label}
            </dt>
            <dd className="todo-form-summary-item__data">{field.inputState.value}</dd>
            <div className="todo-form-summary-item__edit-link">
              <NextLink href={`${step}#${field.declaration.id}`} passHref>
                <Link>✎ {t("edit", { key: field.declaration.id })}</Link>
              </NextLink>
            </div>
          </div>
        ))}
      </dl>
    </>
  );
};
