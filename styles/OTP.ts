import styled from 'styled-components';
import { device } from '../libraries/devices';

export const Container = styled.div`
  width: 37.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 2rem;
  padding: 0 5rem;
  margin: 0 auto;
  h2 {
    margin: 2rem auto 1rem auto;
  }
  input {
    margin: 2rem auto;
    border-radius: 0.5rem;
  }
`;

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  select {
    width: 30%;
    text-align: center;
  }
  input {
    font-size: 2.5rem;
    letter-spacing: 1rem;
    text-align: center;
  }
  button {
    display: flex;
    justify-content: center;
    &:disabled {
      cursor: not-allowed;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const BtnContainer = styled.div`
  .cancel {
    margin: 1rem auto;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
  }
  .cancel:hover {
    opacity: 0.75;
  }
`;
