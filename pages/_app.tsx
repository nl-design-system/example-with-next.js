import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@utrecht/design-tokens/dist/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("@utrecht/web-component-library-stencil/dist/utrecht/utrecht.esm.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
