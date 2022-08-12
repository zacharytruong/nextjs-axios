import { Container, BtnContainer } from "../styles/OTP";

export default function OTP() {
  return (
    <Container>
      <h2>Check Your Phone!</h2>
      <p>
        Please check your phone for a text message with a 4 digit code to
        validate your account.
      </p>
      <input type="text" />
      <BtnContainer>
        <button>Submit</button>
        <button className="cancel">Cancel</button>
      </BtnContainer>
    </Container>
  );
}
