import "../styles/globals.css";

import "react-notion-x/src/styles.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps:{session,...pageProps} }) {
  return (
    <>
      
     <SessionProvider>
     <Component {...pageProps} />
     </SessionProvider>
    </>
  );
}

export default MyApp;
