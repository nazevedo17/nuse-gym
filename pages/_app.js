import App from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'i18n';

import '../styles/globals.css';

import Header from 'components/app/Header';
import Footer from 'components/app/Footer';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Nuse Gym</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
