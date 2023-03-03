import { createContext, Dispatch, SetStateAction } from 'react';
import { themeType } from '../utils/themeType';

interface ThemeContextType {
  theme: themeType;
  setTheme: Dispatch<SetStateAction<themeType>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {}
});
