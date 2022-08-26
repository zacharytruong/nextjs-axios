/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import loaderIcon from '../media/loaderIcon.png';
import { LoadingAnim } from '../styles/Animation';
import {
  LoaderContainer,
  StyledLoading,
  ComponentLoaderContainer,
  ComponentLoader
} from '../styles/Loading';
import { useThemeContext } from '../libraries/ThemeContext';
import loadingIconWhite from '../media/loadingIconWhite.png';
export const Loading = () => {
  return (
    <StyledLoading>
      <LoaderContainer animate={LoadingAnim}>
        <Image src={loaderIcon} alt="Loading ..." />
      </LoaderContainer>
    </StyledLoading>
  );
};

export const ComponentLoading = () => {
  const { activeTheme } = useThemeContext();

  return (
    <ComponentLoader>
      <ComponentLoaderContainer animate={LoadingAnim}>
        <Image
          src={activeTheme === 'light' ? loaderIcon : loadingIconWhite}
          alt="Loading ..."
        />
      </ComponentLoaderContainer>
    </ComponentLoader>
  );
};
