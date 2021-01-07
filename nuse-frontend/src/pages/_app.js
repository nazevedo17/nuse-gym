import { useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { appWithTranslation } from 'src/i18n';

import '../../styles/globals.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from '../theme';

import { wrapper } from '../../redux/store';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import axios from 'axios';
import https from 'https';

axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Nuse Gym</title>

        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default wrapper.withRedux(appWithTranslation(MyApp));
