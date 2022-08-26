import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMenuItem = styled(motion.li)`
  display: flex;
  padding: 1.5rem 0;
  cursor: pointer;
  padding-left: 3rem;
  span {
    padding-left: 2rem;
  }
  &:hover {
    background: ${({ theme }) => theme.accent};
  }
  &.active-menu {
    background: ${({ theme }) => theme.accent};
  }
`;
