import { createContext } from 'react';

interface IContext {
  activeTheme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IContext>({
  activeTheme: 'dark',
  toggleTheme: () => {}
});

export default ThemeContext;
