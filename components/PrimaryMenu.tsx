import { PrimaryMenuContainer, Logo, StyledList } from '../styles/PrimaryMenu';
import { useRouter } from 'next/router';
import { primaryMenuItems } from '../data/menuItems';
import { InternalMenuItem, ExternalMenuItem } from './MenuItem';
import { useAccount } from '../libraries/AccountContext';
import { PrimaryLogo } from './SvgIcons';
const PrimaryMenu = () => {
  const router = useRouter();
  const { isAuthenticated } = useAccount();

  return (
    <PrimaryMenuContainer>
      <Logo onClick={() => router.push('/')} className="logo">
        <PrimaryLogo />
      </Logo>
      <StyledList>
        {primaryMenuItems.map((item) =>
          isAuthenticated && item.isAuthenticated ? null : item.newWindow ? (
            <ExternalMenuItem
              key={item.id}
              id={item.id}
              icon={item.icon}
              text={item.text}
              url={item.url}
              newWindow={item.newWindow}
              isAuthenticated={item.isAuthenticated}
            />
          ) : (
            <InternalMenuItem
              key={item.id}
              id={item.id}
              icon={item.icon}
              text={item.text}
              url={item.url}
              newWindow={item.newWindow}
              isAuthenticated={item.isAuthenticated}
            />
          )
        )}
      </StyledList>
    </PrimaryMenuContainer>
  );
};

export default PrimaryMenu;
