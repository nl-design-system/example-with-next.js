import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@utrecht/design-tokens/dist/theme/index.css";
import "@utrecht/component-library-css/dist/bem.css";
import "@utrecht/component-library-css/dist/html.css";
import { appWithTranslation } from "next-i18next";
import "./index.css";
import "../src/components/SkipLink.css";
import { ThemeProvider } from "../src/context/ThemeContext";

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
