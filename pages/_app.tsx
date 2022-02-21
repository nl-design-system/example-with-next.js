import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "../src/context/ThemeContext";

import "@utrecht/design-tokens/dist/theme/index.css";
import "@utrecht/component-library-css/dist/bem.css";
import "@utrecht/component-library-css/dist/html.css";
import "@utrecht/design-tokens/dist/theme/index.css";
import "@gemeente-denhaag/design-tokens-components/dist/theme/index.css";
import "@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css";
import "@utrecht/design-tokens/dist/index.css";
import "@utrecht/component-library-css/dist/bem.css";
import "../styles/amsterdam-theme.css";
import "../styles/denhaag-theme.css";
import "../styles/globals.css";
import "../styles/utrecht-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("@utrecht/web-component-library-stencil/dist/utrecht/utrecht.esm.js");
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
