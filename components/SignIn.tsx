import { AxiosError } from 'axios';
import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useReducer,
  useState
} from 'react';
import { useAccount } from '../libraries/AccountContext';
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
} from '../libraries/formatter';
import { ISignIn } from '../libraries/globalInterfaces';
import { Container, FormInput, SubmitBtn } from '../styles/SignIn';
import { ComponentLoading } from './Loading';
import { validatePhoneNumbersReducer } from '../libraries/validatorReducer';

export default function SignIn({
  setOTPReady,
  username,
  setUsername
}: ISignIn) {
  const { saveSession } = useAccount();
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const initialIsPhoneNumberValidState = {
    value: phoneNumber,
    isValid: false
  };
  const [isPhoneNumberValidState, dispatch] = useReducer(
    validatePhoneNumbersReducer,
    initialIsPhoneNumberValidState
  );

  const selectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneNumberInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(formatPhoneNumber(e.target.value));
    setFormattedPhoneNumber(formatDisplayPhoneNumber(e.target.value));
  };

  const initialAuth = async () => {
    try {
      const res = await cognitoInitiateAuth.post(
        '/',
        cognitoInitiateAuthBody(username)
      );
      saveSession(res.data.Session);
      return res;
    } catch (err: AxiosError | any) {
      if (err.response.status === 400) {
        return err.response.status;
      } else {
        console.error('Failed to initate a network call to Cognito API', err);
      }
    }
  };

  const signUpNewAccount = async () => {
    try {
      const res = await cognitoSignUp.post(
        '/',
        cognitoSignUpBody(username, username)
      );
      return res.status;
    } catch (err: AxiosError | any) {
      console.error(
        'Failed to sign up a new account with Authentication Service Provider',
        err
      );
    }
  };

  // SignUp / SignIn process
  // Send an initiation auth request
  // Returned status = 400 => phone number (account) does not exist
  // => sign up => send initiation auth request again.
  // Returned status = 200 => phone number (account exists)
  // => save Session => show OTP form.
  const start = async (e: SyntheticEvent) => {
    e.preventDefault();
    // dispatch({ type: countryCode, payload: phoneNumber });
    // if (!isPhoneNumberValidState.isValid) {
    //   return;
    // }
    setIsLoading(true);
    const res = await initialAuth();
    if (res.status === 400) {
      await signUpNewAccount();
      await initialAuth();
    }
    setIsLoading(false);
    setOTPReady(true);
  };

  // Update the "Username" when the country code OR phone number input change
  useEffect(() => {
    setUsername(countryCode + phoneNumber);
  }, [countryCode, phoneNumber, setUsername]);
  return (
    <Container>
      <form onSubmit={start}>
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
            value={formattedPhoneNumber}
          />
        </FormInput>
        <SubmitBtn disabled={isLoading ? true : false}>
          {isLoading ? <ComponentLoading /> : 'Start'}
        </SubmitBtn>
      </form>
    </Container>
  );
}
