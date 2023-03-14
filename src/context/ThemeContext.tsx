import { createContext, Dispatch, SetStateAction } from 'react';

export type themeType = 'light' | 'dark';

interface ThemeContextType {
  theme: themeType;
  setTheme: Dispatch<SetStateAction<themeType>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {}
});
