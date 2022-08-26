import { useRouter } from 'next/router';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useAccount } from '../libraries/AccountContext';
import {
  cognitoRespondToAuthChallenge,
  cognitoRespondToAuthChallengeBody
} from '../libraries/cognitoCTCNAPI';
import { formatOtp } from '../libraries/formatter';
import { IOTP } from '../libraries/globalInterfaces';
import { BtnContainer, Container, FormInput } from '../styles/OTP';
import { ComponentLoading } from './Loading';

const OTP = ({ setOTPReady, username }: IOTP) => {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { Session, saveSession, signOut, authenticate } = useAccount();
  const handleOtpInput = (e: ChangeEvent<HTMLInputElement>) => {
    setOtp(formatOtp(e.target.value));
  };
  const handleSignIn = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const res = await cognitoRespondToAuthChallenge.post(
        '/',
        cognitoRespondToAuthChallengeBody(username, otp, Session)
      );
      const token = res.data.AuthenticationResult.IdToken;
      localStorage.setItem('IdToken', token);
      await authenticate(router.asPath);
      setOtp('');
      setIsLoading(false);
    } catch (err) {
      console.log('Failed to connect to Sign In Provider', err);
    }
  };
  const handleCancel = (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      saveSession('');
      setOTPReady(false);
      signOut();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Container>
      <h2>Check Your Phone!</h2>
      <p>
        Please check your phone for a text message with a 6 digit code to
        validate your account.
      </p>
      <FormInput onSubmit={handleSignIn}>
        <input
          type="text"
          id="phone-number"
          autoComplete="off"
          onChange={handleOtpInput}
          value={otp}
        />
        <button disabled={isLoading ? true : false}>
          {isLoading ? <ComponentLoading /> : 'Submit'}
        </button>
      </FormInput>
      <BtnContainer>
        <button className="cancel" onClick={handleCancel}>
          Cancel
        </button>
      </BtnContainer>
    </Container>
  );
};

export default OTP;
