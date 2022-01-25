import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@utrecht/design-tokens/dist/index.css";
import { appWithTranslation } from "next-i18next";
import "./index.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("@utrecht/web-component-library-stencil/dist/utrecht/utrecht.esm.js");
  }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://unpkg.com/@nl-design-system-unstable/theme-switcher";
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("utrecht-theme");
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
