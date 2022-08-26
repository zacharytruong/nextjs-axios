import { useState } from 'react';
import SignIn from '../components/SignIn';
import { Container, SignInForm } from '../styles/Homepage';
import OTP from '../components/OTP';

export default function Home() {
  const [isOTPReady, setOTPReady] = useState(false);
  const [username, setUsername] = useState('');
  return (
    <Container>
      {isOTPReady ? (
        <OTP setOTPReady={setOTPReady} username={username} />
      ) : (
        <SignInForm>
          <div>
            <h1>Please enter your phone number</h1>
          </div>
          <SignIn
            setOTPReady={setOTPReady}
            username={username}
            setUsername={setUsername}
          />
        </SignInForm>
      )}
    </Container>
  );
}
