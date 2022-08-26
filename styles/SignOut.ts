import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SignOutContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: ${({theme}) => theme.customBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ActionContainer = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 5rem;
  background: ${({ theme }) => theme.customBackground};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  text-align: center;
  p {
    padding: 4rem 0;
  }
`;

export const SignOutButtons = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    margin: 1rem 2rem;
  }
`