import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  primary: '#4ABC93',
  text: '#3A3A3A',
  hover: 'rgb(49, 49, 49)',
  accent: 'rgb(217, 217, 217)',
  boxShadow: '0px 15px 30px rgb(0 0 0 / 15%)',
  background: '#f1f1f1',
  customBackground: 'rgba(255, 255, 255, 0.4)',
  loading: 'rgb(49, 49, 49)',
  gradient:
    'linear-gradient(90deg, #4abc93, #68c4a0, #81ccad, #99d4ba, #b0dbc8, #c6e3d5, #dbeae3, #f1f1f1);'
};

export const darkTheme = {
  primary: '#4ABC93',
  text: '#FFF',
  hover: 'rgb(49, 49, 49)',
  accent: 'rgb(49, 49, 49)',
  boxShadow: '0px 15px 30px rgb(255 255 255 / 15%)',
  background: '#3A3A3A',
  customBackground: 'rgba(0, 0, 0, 0.4)',
  loading: 'rgb(49, 49, 49)',
  gradient:
    'linear-gradient(90deg, #4abc93, #4ba885, #4b9578, #4a826b, #476f5e, #445d52, #3f4b46, #3a3a3a);'
};

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
  }

  * {
    box-sizing: border-box;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    transition: all 0.25s linear;
   
  }

  a {
  color: inherit;
  text-decoration: none;
  font-size: 1.6rem;
  }

  ul {
    list-style: none;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2rem;
  }

  p, div {
    font-size: 1.6rem;
  }

  span {
    font-size: 1.6rem;
  }

  button {
    border: none;
    background: ${({ theme }) => theme.primary};
    padding: 1rem 5rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.background};
    cursor: pointer;
  }
  
  button:hover {
    opacity: 0.75;
  }

  input, select {
    border: none;
    padding: 2rem;
    background: ${({ theme }) => theme.accent};
  }

  input:focus, select:focus {
    outline: none;
  }
`;
