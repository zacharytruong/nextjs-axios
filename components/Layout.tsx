import { Props } from '../libraries/globalInterfaces';
import {
  MainContainer,
  Container,
  NavContainer,
  AppContainer,
  AppContent
} from '../styles/Layout';
import PrimaryMenu from './PrimaryMenu';
import FooterMenu from './FooterMenu';
import Appbar from './Appbar';
import CoinsContainer from './CoinsContainer';
const Layout = ({ children }: Props) => {
  return (
    <MainContainer>
      <NavContainer>
        <PrimaryMenu />
        <FooterMenu />
      </NavContainer>
      <AppContainer>
        <Appbar />
        <AppContent>
          <CoinsContainer />
          <Container>{children}</Container>
        </AppContent>
      </AppContainer>
    </MainContainer>
  );
};

export default Layout;
