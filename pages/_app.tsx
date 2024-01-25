import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "../src/context/ThemeContext";

import "@utrecht/design-tokens/dist/index.css";
import "@utrecht/component-library-css/dist/index.css";
import "@utrecht/component-library-css/dist/html.css";
import "@gemeente-denhaag/design-tokens-components/dist/theme/index.css";
import "@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css";
import "@utrecht/design-tokens/dist/index.css";
import "../styles/amsterdam-theme.css";
import "../styles/denhaag-theme.css";
import "../styles/globals.css";
import "../styles/utrecht-theme.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default appWithTranslation(MyApp);
