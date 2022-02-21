import clsx from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "./utrecht/Button";
import { useTranslation } from "next-i18next";

export const LanguageToggle = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  return (
    <div className="utrecht-alternate-lang-nav">
      <Button
        onClick={() => {
          i18n.changeLanguage("nl");
        }}
        className={clsx(
          "todo-alternate-lang-nav__button",
          i18n.language === "nl" && "todo-alternate-lang-nav__button--current"
        )}
        // aria-current={router.locale === "nl" ? "page" : ""}
        lang="nl"
        title="Nederlands"
      >
        NL
      </Button>
      <span aria-hidden="true"> | </span>
      <Button
        onClick={() => {
          i18n.changeLanguage("en");
        }}
        className={clsx(
          "todo-alternate-lang-nav__button",
          i18n.language === "en" && "todo-alternate-lang-nav__button--current"
        )}
        // aria-current={router.locale === "nl" ? "page" : ""}
        lang="en"
        title="English"
      >
        EN
      </Button>
    </div>
  );
};
