import { AxiosError } from 'axios';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useContext,
  useEffect,
  useState
} from 'react';
import AccountContext from '../libraries/AccountContext';
import {
  cognitoInitiateAuth,
  cognitoInitiateAuthBody,
  cognitoSignUp,
  cognitoSignUpBody
} from '../libraries/cognitoCTCNAPI';
import countriesCodes from '../libraries/countryPhoneCodes';
import {
  formatDisplayPhoneNumber,
  formatPhoneNumber
} from '../libraries/formatPhoneNumber';
import { Container, FormInput, SubmitBtn } from '../styles/SignIn';

interface IOTP {
  setOTPReady: Dispatch<SetStateAction<boolean>>;
}
export default function SignIn({ setOTPReady }: IOTP) {
  const { setSession } = useContext(AccountContext);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberOnly, setPhoneNumberOnly] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [username, setUsername] = useState('');

  const selectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneNumberInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumberOnly(formatPhoneNumber(e.target.value));
    setPhoneNumber(formatDisplayPhoneNumber(e.target.value));
  };

  const signUpNewAccount = async () => {
    try {
      await cognitoSignUp.post(
        '/',
        cognitoSignUpBody(username, username)
      );
      console.log('Successfully sign up a new account!');
    } catch (err: AxiosError | any) {
      console.log('Failed to sign up a new account with Cognito', err);
    }
  };

  // Auth (Start) workflow:
  // 1. Request an initial auth call to Cognito
  // 2. No error -> user exists, save Session token context, and send OTP.
  // 3. Error -> if status === 400, user does not exist, sign up.
  // 4. Error -> if status !== 400, network error, check console for more information.
  const start = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await cognitoInitiateAuth.post(
        '/',
        cognitoInitiateAuthBody(username)
      );
      setSession(res.data.Session);
      setOTPReady(true);
    } catch (err: AxiosError | any) {
      if (err.response.status === 400) {
        await signUpNewAccount();
      } else {
        console.error('Failed to initate a network call to Cognito API', err);
      }
    }
  };

  // Update the "Username" when the country code OR phone number input change
  useEffect(() => {
    setUsername(countryCode + phoneNumberOnly);
  }, [countryCode, phoneNumberOnly]);

  return (
    <Container>
      <form onSubmit={(e) => start(e)}>
        <FormInput>
          <select id="country-code" onChange={selectChange}>
            {countriesCodes &&
              countriesCodes.map((country) => (
                <option key={country.id} value={country.value}>
                  {country.name} {`( ${country.value} )`}
                </option>
              ))}
          </select>
          <input
            type="text"
            id="phone-number"
            autoComplete="off"
            onChange={handlePhoneNumberInput}
            value={phoneNumber}
          />
        </FormInput>
        <SubmitBtn>Start</SubmitBtn>
      </form>
    </Container>
  );
}
