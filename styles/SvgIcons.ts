import styled from 'styled-components';

export const StyledSvg = styled.svg`
  width: 3rem;
  height: 3rem;
`;

export const StyledSvgPath = styled.path`
  fill: ${({ theme }) => theme.text};
`;

export const StyledSvgGlobal = styled.g`
  fill: ${({ theme }) => theme.text};
  stroke: ${({ theme }) => theme.text};
`;

export const StyledPrimaryLogo = styled.svg`
  .cls-1 {
    fill: #f1e114;
  }
  .cls-2 {
    fill: ${({theme}) => theme.text}
  }
  .cls-3 {
    fill: #5cbc96;
  }
  .cls-4 {
    fill: #ff4c31;
  }
  .cls-5 {
    fill: #f08421;
  }
  .cls-6 {
    fill: #253c96;
  }
`;
