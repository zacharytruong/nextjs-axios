import {
  SignOutContainer,
  ActionContainer,
  SignOutButtons
} from '../styles/SignOut';
import { ISignOutProps } from '../libraries/globalInterfaces';
import { useAccount } from '../libraries/AccountContext';
const SignOut = ({ setOpenSignOutModal }: ISignOutProps) => {
  const {signOut} = useAccount();
  return (
    <SignOutContainer>
      <ActionContainer>
        <p>This action will sign you out!</p>
        <SignOutButtons>
          <button onClick={signOut}>Sign Out</button>
          <button onClick={() => setOpenSignOutModal(false)}>Cancel</button>
        </SignOutButtons>
      </ActionContainer>
    </SignOutContainer>
  );
};

export default SignOut;
