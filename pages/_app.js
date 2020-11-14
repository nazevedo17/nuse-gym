import App from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'i18n';

import Header from 'components/app/Header';
import Footer from 'components/app/Footer';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Nuse Gym</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>

    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
