import "../styles/globals.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Nuse Gym</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
