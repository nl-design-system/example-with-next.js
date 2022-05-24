import { useTranslation } from "next-i18next";
import { State } from "../../form/action/reducer";
import { Heading1, Link, Paragraph } from "../index";

export const Summary = ({ state }: { state: State }) => {
  const { t } = useTranslation("stepper-form");

  const fields = [
    {
      field: state.fields[0],
      step: "1",
    },
    {
      field: state.fields[1],
      step: "1",
    },
    {
      field: state.fields[2],
      step: "1",
    },
    {
      field: state.fields[3],
      step: "2",
    },
    {
      field: state.fields[4],
      step: "2",
    },
    {
      field: state.fields[5],
      step: "2",
    },
    {
      field: state.fields[6],
      step: "2",
    },
    {
      field: state.fields[7],
      step: "2",
    },
    {
      field: state.fields[8],
      step: "3",
    },
    {
      field: state.fields[9],
      step: "3",
    },
    {
      field: state.fields[10],
      step: "3",
    },
    {
      field: state.fields[11],
      step: "4",
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
              <Link href={`${step}#${field.declaration.id}`}>✎ {t("edit", { key: field.declaration.id })}</Link>
            </div>
          </div>
        ))}
      </dl>
    </>
  );
};
