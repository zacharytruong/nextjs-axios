import { Dispatch, SetStateAction, ReactNode, ReactElement } from 'react';

export interface IAccountContext {
  Session: string;
  saveSession: (value: string) => void;
  signOut: () => void;
  authenticate: (url: string) => void;
  isAuthenticated: boolean;
}

export interface IThemeContext {
  activeTheme: string;
  toggleTheme: () => void;
}

export interface Props {
  children: ReactNode;
}

export interface ISignIn {
  setOTPReady: Dispatch<SetStateAction<boolean>>;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}

export interface IOTP {
  setOTPReady: Dispatch<SetStateAction<boolean>>;
  username: string;
}

export interface IMenuItem {
  id: number;
  icon: ReactElement<SVGAElement>;
  text: string;
  url: string;
  newWindow: boolean;
  isAuthenticated: boolean;
}

export interface IFooterMenuItem {
  id: number;
  text: string;
  url: string;
  newWindow: boolean;
  isAuthenticated: boolean;
}

export interface ISignOutProps {
  setOpenSignOutModal: Dispatch<SetStateAction<boolean>>;
}

export interface ICoin {
  base_token: string;
  quantity: string;
  date_updated: string;
  sell_price: string;
  quote_token: string;
  date_updated_str: string;
  token_name: string;
  buy_price: string;
  status: string;
}

export interface IPhoneNumberValidationAction {
  type: string;
  payload: string;
}

export interface IPhoneNumberState {
  value: string;
  isValid: boolean;
}