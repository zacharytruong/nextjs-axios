import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import { AccountProvider } from '../libraries/AccountContext';
import { GlobalStyles } from '../libraries/ThemeConfig';
import { ThemeContextProvider } from '../libraries/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <AccountProvider>
        <Head>
          <title>Crypto To Cash Now</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AccountProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
