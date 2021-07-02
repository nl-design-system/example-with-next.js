import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@utrecht/component-library/dist/root-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("../public/utrecht/utrecht.esm.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
