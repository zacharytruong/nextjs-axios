import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AppbarContainer = styled(motion.div)`
  display: flex;
  background: ${({ theme }) => theme.customBackground};
  transition: all 0.25s linear;
`;

export const DateInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 1rem 2rem;
`;

export const AdminOptions = styled(motion.div)`
  display: flex;
`;

export const UserInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 1rem;
`;

export const ThemeSwitcher = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  .theme {
    path {
      fill: ${({ theme }) => theme.text};
    }
  }
  &:hover {
    cursor: pointer;
    .theme {
    path {
      fill: ${({ theme }) => theme.primary};
    }
  }
  }
`;

export const LogOutOption = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  &:hover {
    cursor: pointer;
    path {
      fill: ${({ theme }) => theme.primary};
    }
  }
`;
