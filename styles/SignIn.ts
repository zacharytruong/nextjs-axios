import styled from 'styled-components';

export const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 5rem;
  background: ${({ theme }) => theme.customBackground};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const FormInput = styled.div`
  display: flex;
  width: 100%;
  select {
    width: 30%;
    text-align: center;
  }
  input {
    font-size: 3rem;
    width: 70%;
    letter-spacing: 0.5rem;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  margin: 3rem auto 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  &:disabled {
    cursor: not-allowed;
    &:hover {
      opacity: 1;
    }
  }
`;
