import axios from 'axios';

/// Cognito Authentication ///
export const cognitoHeader = (direction: string) => ({
  'X-Amz-Target': `${process.env.NEXT_PUBLIC_X_AMZ_TARGET}.${direction}`,
  'Content-type': `${process.env.NEXT_PUBLIC_COGNITO_CONTENT_TYPE}`
});

/// Initiate Auth ///
export const cognitoInitiateAuth = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_COGNITO_BASE_URL}`,
  headers: cognitoHeader('InitiateAuth')
});

/// Return a session id that would be used for respondAuthChallenge ///
export const cognitoInitiateAuthBody = (USERNAME: string) => ({
  AuthParameters: {
    USERNAME
  },
  AuthFlow: 'CUSTOM_AUTH',
  ClientId: `${process.env.NEXT_PUBLIC_CLIENT_ID}`
});

/// Respond To Auth Challenge ///
export const cognitoRespondToAuthChallenge = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_COGNITO_BASE_URL}`,
  headers: cognitoHeader('RespondToAuthChallenge')
});

export const cognitoRespondToAuthChallengeBody = (
  USERNAME: string,
  ANSWER: string,
  Session: string
) => ({
  ChallengeName: 'CUSTOM_CHALLENGE',
  ChallengeResponses: {
    USERNAME,
    ANSWER
  },
  AuthFlow: 'CUSTOM_AUTH',
  ClientId: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
  Session
});

/// SignUp Cognito ///
export const cognitoSignUp = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_COGNITO_BASE_URL}`,
  headers: cognitoHeader('SignUp')
});

export const cognitoSignUpBody = (Username: string, Password: string) => ({
  ClientId: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
  Username,
  Password // same value as Username
});

/////////////////
/// CTCN API ///
///////////////

// Get User Info
export const ctcnAxiosInstance = (token: string) => {
  return axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

// Get Tokens (Coins info)
export const ctcnTokenInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  headers: {
    "ctc-token": `${process.env.NEXT_PUBLIC_TOKEN_ID}`
  }
});
