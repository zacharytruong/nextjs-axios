import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import AccountContext from '../libraries/AccountContext';
import { darkTheme, GlobalStyles, lightTheme } from '../libraries/ThemeConfig';
import ThemeContext from '../libraries/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [activeTheme, setActiveTheme] = useState('light');
  const [Session, setSession] = useState('');
  const tokenId = localStorage.getItem('tokenId') || '';
  const toggleTheme = () => {
    activeTheme === 'light' ? setActiveTheme('dark') : setActiveTheme('light');
  };
  const authenticate = () => {

  }
  return (
    <AccountContext.Provider value={{
      Session,
      setSession,
      tokenId,
      authenticate
    }}>
    <ThemeContext.Provider
      value={{
        activeTheme,
        toggleTheme
      }}
    >
      <ThemeProvider theme={activeTheme == 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Head>
          <title>Crypto To Cash Now</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
    </AccountContext.Provider>
  );
}

export default MyApp;
