import styled from "styled-components";
import { device } from "../libraries/devices";

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
`

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin: 1rem auto;
  }
  button:hover {
    opacity: 0.75;
  }
  .cancel {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
  }
`