import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledCoinContainer = styled(motion.div)`
  /* background-color: rgba(0, 0, 0, 0.5); */
  width: 100%;
  max-width: 35rem;
  margin-left: 2rem;
`;

export const CoinContainer = styled(motion.div)`
  display: flex;
  background: ${({theme}) => theme.customBackground};
  border-radius: 1rem;
  align-items: center;
  padding: 1rem 3rem;
  margin: 1rem auto;
  box-shadow: ${({theme}) => theme.boxShadow};
  .coin-logo {
    display: flex;
    align-items: center;
  }
  .coin-info {
    margin-left: 2rem;
  }
`