import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

const LinkSeparator = () => <span aria-hidden="true"> | </span>;

export const AlternateLangLink = ({
  children,
  current,
  href,
  hrefLang,
  lang,
  title,
}: {
  children: any;
  current: boolean;
  href?: string;
  hrefLang: string;
  lang: string;
  title: string;
}) => (
  <a
    className={clsx("utrecht-link", "utrecht-link--alternate-lang", current && "utrecht-link--current-lang")}
    href={href}
    aria-current={current ? "page" : undefined}
    title={title}
    hrefLang={hrefLang}
    lang={lang}
  >
    {children}
  </a>
);

export const AlternateLangNextLink = ({
  children,
  current,
  href,
  hrefLang,
  lang,
  title,
}: {
  children: any;
  current: boolean;
  href: string;
  hrefLang: string;
  lang: string;
  title: string;
}) => (
  <Link href={href} locale={lang}>
    <a
      className={clsx("utrecht-link", "utrecht-link--alternate-lang", current && "utrecht-link--current-lang")}
      aria-current={current ? "page" : undefined}
      title={title}
      hrefLang={hrefLang}
      lang={lang}
    >
      {children}
    </a>
  </Link>
);

export const AlternateLangNavContainer = ({ children }: { children: any }) => (
  <div className="utrecht-alternate-lang-nav" role="group">
    {children}
  </div>
);

export const AlternateLangNavComponent = ({
  currentLang,
  locales,
}: {
  currentLang?: string;
  locales: { hrefLang: string; lang: string; textContent: string; title: string }[];
}) => {
  const { asPath, locale } = useRouter();

  return (
    <AlternateLangNavContainer>
      {locales
        .map(({ hrefLang, lang, textContent, title }) => (
          <AlternateLangNextLink
            key={hrefLang}
            current={lang === currentLang}
            href={asPath}
            hrefLang={hrefLang}
            lang={lang}
            title={title}
          >
            {textContent}
          </AlternateLangNextLink>
        ))
        .map((link, index) =>
          index >= 1 ? (
            <Fragment key={index}>
              <LinkSeparator />
              {link}
            </Fragment>
          ) : (
            link
          )
        )}
    </AlternateLangNavContainer>
  );
};
