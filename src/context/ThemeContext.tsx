import Head from "next/head";
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from "react";

interface ThemeContext {
  theme?: Theme;
  builtInThemes: Theme[];
  setTheme: Dispatch<SetStateAction<Theme>>;
  loading?: boolean;
}

const builtInThemes: Theme[] = [
  {
    className: "utrecht-theme",
    title: "Gemeente Utrecht",
    href: "https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css",
  },
  {
    className: "denhaag-theme",
    title: "Gemeente Den Haag",
    href: "https://unpkg.com/@gemeente-denhaag/design-tokens-components/dist/theme/index.css",
  },
  {
    className: "amsterdam-theme",
    title: "Gemeente Amsterdam",
    href: "https://unpkg.com/@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css",
  },
  // {
  //   className: "bodegraven-theme",
  //   title: "Gemeente Bodegraven-Reeuwijk",
  //   href: "https://unpkg.com/@nl-design-system-unstable/bodegraven-reeuwijk-design-tokens/dist/index.css",
  // },
  // {
  //   className: "drechterland-theme",
  //   title: "Gemeente Drechterland",
  //   href: "https://unpkg.com/@nl-design-system-unstable/drechterland-design-tokens/dist/index.css",
  // },
  // {
  //   className: "duiven-theme",
  //   title: "Gemeente Duiven",
  //   href: "https://unpkg.com/@nl-design-system-unstable/duiven-design-tokens/dist/index.css",
  // },
  // {
  //   className: "enkhuizen-theme",
  //   title: "Gemeente Enkhuizen",
  //   href: "https://unpkg.com/@nl-design-system-unstable/enkhuizen-design-tokens/dist/index.css",
  // },
  // {
  //   className: "groningen-theme",
  //   title: "Gemeente Groningen",
  //   href: "https://unpkg.com/@nl-design-system-unstable/groningen-design-tokens/dist/index.css",
  // },
  // {
  //   className: "haarlemmermeer-theme",
  //   title: "Gemeente Haarlemmermeer",
  //   href: "https://unpkg.com/@nl-design-system-unstable/haarlemmermeer-design-tokens/dist/index.css",
  // },
  // {
  //   className: "hoorn-theme",
  //   title: "Gemeente Hoorn",
  //   href: "https://unpkg.com/@nl-design-system-unstable/hoorn-design-tokens/dist/index.css",
  // },
  // {
  //   className: "horstaandemaas-theme",
  //   title: "Gemeente Horst aan de Maas",
  //   href: "https://unpkg.com/@nl-design-system-unstable/horstaandemaas-design-tokens/dist/index.css",
  // },
  // {
  //   className: "leidschendam-theme",
  //   title: "Gemeente Leidschendam Voorburg",
  //   href: "https://unpkg.com/@nl-design-system-unstable/leidschendam-voorburg-design-tokens/dist/index.css",
  // },
  // {
  //   className: "noordoostpolder-theme",
  //   title: "Gemeente Noordoostpolder",
  //   href: "https://unpkg.com/@nl-design-system-unstable/noordoostpolder-design-tokens/dist/index.css",
  // },
  // {
  //   className: "rotterdam-theme",
  //   title: "Gemeente Rotterdam",
  //   href: "https://unpkg.com/@nl-design-system-unstable/rotterdam-design-tokens/dist/index.css",
  // },
  // {
  //   className: "stedebroec-theme",
  //   title: "Gemeente Stede Broec",
  //   href: "https://unpkg.com/@nl-design-system-unstable/stedebroec-design-tokens/dist/index.css",
  // },
  // {
  //   className: "tilburg-theme",
  //   title: "Gemeente Tilburg",
  //   href: "https://unpkg.com/@nl-design-system-unstable/tilburg-design-tokens/dist/index.css",
  // },
  // {
  //   className: "venray-theme",
  //   title: "Gemeente Venray",
  //   href: "https://unpkg.com/@nl-design-system-unstable/venray-design-tokens/dist/index.css",
  // },
  // {
  //   className: "vught-theme",
  //   title: "Gemeente Vught",
  //   href: "https://unpkg.com/@nl-design-system-unstable/vught-design-tokens/dist/index.css",
  // },
  // {
  //   className: "westervoort-theme",
  //   title: "Gemeente Westervoort",
  //   href: "https://unpkg.com/@nl-design-system-unstable/westervoort-design-tokens/dist/index.css",
  // },
  // {
  //   className: "zevenaar-theme",
  //   title: "Gemeente Zevenaar",
  //   href: "https://unpkg.com/@nl-design-system-unstable/zevenaar-design-tokens/dist/index.css",
  // },
  // {
  //   className: "zwolle-theme",
  //   title: "Gemeente Zwolle",
  //   href: "https://unpkg.com/@nl-design-system-unstable/zwolle-design-tokens/dist/index.css",
  // },
];

const SELECTED_THEME = "selected-theme";

const ThemeContext = createContext<ThemeContext>({ builtInThemes, setTheme: () => {} });

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState(builtInThemes[0]);
  const [stylesheets, setStylesheets] = useState<string[]>([]);

  let sharedState: ThemeContext = {
    theme,
    setTheme,
    builtInThemes,
  };

  // Run once after the browser rendering has started
  useEffect(() => {
    const savedTheme = builtInThemes.find((theme) => theme.className === sessionStorage.getItem(SELECTED_THEME));

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Run every time a new theme is selected
  useEffect(() => {
    if (theme && !stylesheets.includes(theme.href)) {
      setStylesheets((stylesheets) => [...stylesheets, theme.href]);
    }

    sessionStorage.setItem(SELECTED_THEME, theme.className);
  }, [theme]);

  return (
    <ThemeContext.Provider value={sharedState}>
      <Head>
        {stylesheets.map((href) => (
          <link rel="stylesheet" type="text/css" href={href} key={href} />
        ))}
      </Head>
      <div className={theme.className}>{children}</div>
    </ThemeContext.Provider>
  );
};

export function useThemeContext() {
  return useContext(ThemeContext);
}
