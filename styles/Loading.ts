import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledLoading = styled(motion.div)`
  background: ${({ theme }) => theme.customBackground};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderContainer = styled(motion.div)`
  height: 7rem;
  width: 7rem;
`
export const ComponentLoader = styled(motion.div)`

`

export const ComponentLoaderContainer = styled(motion.div)`
  height: 3rem;
  width: 3rem;
`