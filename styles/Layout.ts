import styled from "styled-components";
import { motion } from "framer-motion";

const navWidth = '34rem';
const appBarHeight = '9.2rem';

export const MainContainer = styled(motion.div)`
  position: relative;
`
export const NavContainer = styled(motion.nav)`
  background: ${({theme}) => theme.background};
  transition: all 0.25s linear;
  position: fixed;
  width: ${navWidth};
  top: 0;
  left: 0;
  height: 100vh;
  border-right: 0.1rem solid ${({theme}) => theme.primary};
  color: ${({theme}) => theme.text};
`
export const AppContainer = styled(motion.div)`
  margin-left: ${navWidth};
`

export const Container = styled(motion.div)`
`

export const AppContent = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row-reverse;
  margin: 5rem auto;
`