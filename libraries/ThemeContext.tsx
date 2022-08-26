import { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './ThemeConfig';
import { IThemeContext, Props } from './globalInterfaces';

const initialThemeValue: IThemeContext = {
  activeTheme: '',
  toggleTheme: () => {}
};
export const ThemeContext = createContext<IThemeContext>(initialThemeValue);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider = ({ children }: Props) => {
  const [activeTheme, setActiveTheme] = useState('light');
  const toggleTheme = () => {
    activeTheme === 'light' ? setActiveTheme('dark') : setActiveTheme('light');
  };
  return (
    <>
      <ThemeContext.Provider value={{ activeTheme, toggleTheme }}>
        <ThemeProvider theme={activeTheme === 'light' ? lightTheme : darkTheme}>
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};
