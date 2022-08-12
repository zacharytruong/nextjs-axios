import { createContext, Dispatch, SetStateAction } from 'react';

interface IAccountContext {
  Session: string;
  setSession: Dispatch<SetStateAction<string>>;
  tokenId: string;
  authenticate: () => void;
}

const AccountContext = createContext<IAccountContext>({
  Session: '',
  setSession: () => '',
  tokenId: '',
  authenticate: () => {}
});

export default AccountContext;
