import { footerMenuItems } from '../data/menuItems';
import { FooterContainer, StyledList } from '../styles/Footer';
import { ExternalFooterMenuItem, InternalFooterMenuItem } from './MenuItem';

const FooterMenu = () => {
  return (
    <FooterContainer>
      <StyledList>
        {footerMenuItems.map((item) =>
          item.newWindow ? (
            <ExternalFooterMenuItem
              key={item.id}
              id={item.id}
              text={item.text}
              url={item.url}
              newWindow={item.newWindow}
              isVisible={item.isVisible}
            />
          ) : (
            <InternalFooterMenuItem
              key={item.id}
              id={item.id}
              text={item.text}
              url={item.url}
              newWindow={item.newWindow}
              isVisible={item.isVisible}
            />
          )
        )}
      </StyledList>
    </FooterContainer>
  );
}

export default FooterMenu

