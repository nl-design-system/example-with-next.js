import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/globals.css";
import "@utrecht/design-tokens/dist/index.css";
import "@utrecht/component-library-css/dist/bem.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("@utrecht/web-component-library-stencil/dist/utrecht/utrecht.esm.js");
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("utrecht-theme");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
