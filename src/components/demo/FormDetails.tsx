import { useTranslation } from "next-i18next";
import { DemoForm } from "../../../types/DemoForm";
import { DataListValue } from "../DataListValue";
import { EmptyIndicator } from "../EmptyIndicator";

export const FormDetails = (data: DemoForm) => {
  const { t } = useTranslation("form");

  return (
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
                {t(`contact-${data["contact-preference"]}`) || <EmptyIndicator title={t("data-item-input-empty")} />}
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
    </>
  );
};
