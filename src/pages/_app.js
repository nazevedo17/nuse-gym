import App from 'next/app';
import { appWithTranslation } from 'src/i18n';
import Head from 'next/head';

import '../../styles/globals.css';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from '../theme';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Nuse Gym</title>

      <meta name="theme-color" content={theme.palette.primary.main} />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>

    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <Component {...pageProps} />
      </StylesProvider>
    </ThemeProvider>
  </>
);

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
