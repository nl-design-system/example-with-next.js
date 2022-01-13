import clsx from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";

export const LanguageToggle = () => {
  const router = useRouter();

  return (
    <div className="utrecht-alternate-lang-nav">
      <Link href={router.pathname} locale="nl">
        <a
          className={clsx(
            "utrecht-link",
            "utrecht-link--alternate-lang",
            router.locale === "nl" && "utrecht-link--current-lang"
          )}
          // aria-current={router.locale === "nl" ? "page" : ""}
          hrefLang="nl"
          lang="nl"
          rel={router.locale !== "nl" ? "alternate" : ""}
          title="Nederlands"
        >
          NL
        </a>
      </Link>
      <span aria-hidden="true"> | </span>
      <Link href={router.pathname} locale="en">
        <a
          className={clsx(
            "utrecht-link",
            "utrecht-link--alternate-lang",
            router.locale === "en" && "utrecht-link--current-lang"
          )}
          // aria-current={router.locale === "nl" ? "page" : ""}
          hrefLang="en"
          lang="en"
          title="English"
          rel={router.locale !== "en" ? "alternate" : ""}
        >
          EN
        </a>
      </Link>
    </div>
  );
};
