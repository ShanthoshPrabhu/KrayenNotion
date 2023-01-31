import "../styles/globals.css";

import "react-notion-x/src/styles.css";
import Head from "next/head";
import BlogNav from "../components/BlogNav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BlogNav />
      <Head>
        <script src="https://www.youtube.com/iframe_api"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
