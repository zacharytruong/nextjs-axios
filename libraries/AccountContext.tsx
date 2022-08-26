import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import {Loading} from '../components/Loading';
import { ctcnAxiosInstance } from './cognitoCTCNAPI';

import { IAccountContext, Props } from './globalInterfaces';

const initialAccountState: IAccountContext = {
  Session: '',
  isAuthenticated: false,
  saveSession: (value: string) => {},
  signOut: () => {},
  authenticate: () => ({
    status: 0,
    data: {
      kyc_status_list: [],
      total_allow_to_transact: 0
    }
  })
};

const AccountContext = createContext<IAccountContext>(initialAccountState);

export const useAccount = () => {
  return useContext(AccountContext);
};

export const AccountProvider = ({ children }: Props) => {
  const router = useRouter();
  const [Session, setSession] = useState('');
  const saveSession = (value: string) => setSession(value);
  const [authorized, setAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const showLoading = (value: boolean) => setIsLoading(value);
  const clearIdTokenLocalStorage = () => localStorage.setItem('IdToken', '');

  const signOut = () => {
    clearIdTokenLocalStorage();
    setIsAuthenticated(false);
    router.push({ pathname: '/' });
  };
  
  const authenticate = async (url: string) => {
    const token = localStorage.getItem('IdToken') || '';
    const publicPaths = ['/', '/help', '/tos'];
    const path = url.split('?')[0];
    const returnUrl = router.query.returnUrl;
    try {
      const res = await ctcnAxiosInstance(token).get('/user/kyc');
      if (res.status === 200) {
        setAuthorized(true);
        setIsAuthenticated(true);
        setIsLoading(false);
        if (path === '/' && returnUrl) {
          router.push(`${returnUrl}`);
        } else if (path === '/') {
          router.push('/kyc');
        }
      }
    } catch (err) {
      if (!publicPaths.includes(path)) {
        setAuthorized(false);
        router.push({
          pathname: '/',
          query: { returnUrl: router.asPath }
        });
      } else {
        setAuthorized(true);
        setIsLoading(false);
      }
    }
  };

  // Guarding protected pages
  useEffect(() => {
    // on initial load - run auth check
    authenticate(router.asPath);
    // on route change start - hide page content by setting authorized to false
    const hideContent = () => {
      setIsLoading(true);
      setAuthorized(false);
    };
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authenticate);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authenticate);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AccountContext.Provider
        value={{
          Session,
          saveSession,
          signOut,
          authenticate,
          isAuthenticated,
        }}
      >
        {isLoading ? <Loading /> : authorized ? authorized && children : null}
      </AccountContext.Provider>
    </>
  );
};
