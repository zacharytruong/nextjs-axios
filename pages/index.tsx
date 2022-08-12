import { useState } from 'react';
import SignIn from '../components/SignIn';
import { Container, InputForm } from '../styles/Homepage';
import OTP from '../components/OTP';

export default function Home() {
  const [isOTPReady, setOTPReady] = useState(true);
  return (
    <Container>
      {isOTPReady ? <OTP /> : (
        <InputForm>
          <div>
            <h1>Please enter your phone number</h1>
          </div>
          <SignIn setOTPReady={setOTPReady} />
        </InputForm>
      )}
    </Container>
  );
}
