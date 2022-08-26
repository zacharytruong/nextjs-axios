import Link from 'next/link';
import { useRouter } from 'next/router';
import { IMenuItem, IFooterMenuItem } from '../libraries/globalInterfaces';
import { StyledMenuItem } from '../styles/MenuItem';

export const InternalMenuItem = ({ icon, text, url }: IMenuItem) => {
  const router = useRouter();

  return (
    <Link href={url}>
      <StyledMenuItem className={router.asPath === url ? 'active-menu' : ''}>
        {icon}
        <span>{text}</span>
      </StyledMenuItem>
    </Link>
  );
};

export const ExternalMenuItem = ({ icon, text, url }: IMenuItem) => {
  return (
    <a href={url} rel="noreferrer" target="_blank">
      <StyledMenuItem>
        {icon}
        <span>{text}</span>
      </StyledMenuItem>
    </a>
  );
};

export const InternalFooterMenuItem = ({ text, url }: IFooterMenuItem) => {
  const router = useRouter();
  return (
    <Link href={url}>
      <StyledMenuItem className={router.asPath === url ? 'active-menu' : ''}>
        <span>{text}</span>
      </StyledMenuItem>
    </Link>
  );
};

export const ExternalFooterMenuItem = ({ text, url }: IFooterMenuItem) => {
  return (
    <a href={url} rel="noreferrer" target="_blank">
      <StyledMenuItem>
        <span>{text}</span>
      </StyledMenuItem>
    </a>
  );
};
