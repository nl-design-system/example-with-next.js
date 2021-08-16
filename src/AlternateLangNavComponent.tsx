import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

const LinkSeparator = () => <span aria-hidden="true"> | </span>;

export const AlternateLangNavComponent = ({
  currentLang,
  locales,
}: {
  currentLang?: string;
  locales: { hrefLang: string; lang: string; textContent: string; title: string }[];
}) => {
  const { asPath, locale } = useRouter();

  return (
    <div className="utrecht-alternate-lang-nav" role="group">
      {locales
        .map(({ hrefLang, lang, textContent, title }) => (
          <Link href={asPath} locale={lang}>
            <a
              className={clsx(
                "utrecht-link",
                "utrecht-link--alternate-lang",
                lang === currentLang && "utrecht-link--current-lang"
              )}
              aria-current={lang === currentLang ? "page" : undefined}
              title={title}
              hrefLang={hrefLang}
              lang={lang}
            >
              {textContent}
            </a>
          </Link>
        ))
        .map((link, index) =>
          index >= 1 ? (
            <>
              <LinkSeparator />
              {link}
            </>
          ) : (
            link
          )
        )}
    </div>
  );
};
