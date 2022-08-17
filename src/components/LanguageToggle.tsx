import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

export const LanguageToggle = () => {
  const { locales, asPath, locale: currentLocale } = useRouter();
  type T = keyof typeof mappedLocales;
  const mappedLocales = { nl: "Netherlands", en: "English" };
  return (
    <div className="utrecht-alternate-lang-nav">
      {locales &&
        locales.length > 0 &&
        locales.map((locale, i) => (
          <>
            <Link href={asPath} locale={locale} key={i}>
              <a
                className={clsx(
                  "utrecht-link",
                  "utrecht-link--alternate-lang",
                  locale === currentLocale && "utrecht-link--current-lang"
                )}
                hrefLang={locale}
                lang={locale}
                rel={locale !== currentLocale ? "alternate" : ""}
                title={mappedLocales[locale as T]}
              >
                {locale.toUpperCase()}
              </a>
            </Link>
            {i === 0 && <span aria-hidden="true"> | </span>}
            {/*TODO figure a way better than this, incase we add more languages*/}
          </>
        ))}
    </div>
  );
};
