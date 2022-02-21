import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

export const LanguageToggle = () => {
  const router = useRouter();
  const { pathname, query } = useRouter();

  const slugs = Array.isArray(query.slug) ? query.slug : [query.slug];
  const href = `${pathname.replace("[slug]", "")}${slugs.join("/")}`;

  return (
    <div className="utrecht-alternate-lang-nav">
      <Link href={href} locale="nl">
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
      <Link href={href} locale="en">
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
