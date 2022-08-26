import { IMenuItem, IFooterMenuItem } from '../libraries/globalInterfaces';
import { signUpIcon, lendingIcon, helpIcon } from '../components/SvgIcons';
export const primaryMenuItems: IMenuItem[] = [
  {
    id: 1,
    icon: signUpIcon(),
    text: 'Sign Up / Sign In',
    url: '/',
    newWindow: false,
    isAuthenticated: true
  },
  {
    id: 2,
    icon: lendingIcon(),
    text: 'On-Demand Trading',
    url: 'https://www.cryptofi.tech/odt',
    newWindow: true,
    isAuthenticated: false
  },
  {
    id: 3,
    icon: helpIcon(),
    text: 'Help',
    url: '/help',
    newWindow: false,
    isAuthenticated: false
  }
];

export const footerMenuItems: IFooterMenuItem[] = [
  {
    id: 1,
    text: 'FAQ',
    url: 'https://www.cryptotocashnow.com/faq',
    newWindow: true,
    isAuthenticated: false
  },
  {
    id: 2,
    text: 'Terms of Service',
    url: '/tos',
    newWindow: true,
    isAuthenticated: false
  },
  {
    id: 3,
    text: 'Privacy Policy',
    url: 'https://www.cryptofi.tech/privacy',
    newWindow: true,
    isAuthenticated: false
  }
];
