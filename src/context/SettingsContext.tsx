import { createContext, Dispatch, SetStateAction } from 'react';

interface SettingsContextType {
  arraySize: number;
  setArraySize: Dispatch<SetStateAction<number>>;
  sortingSpeed: number;
  setSortingSpeed: Dispatch<SetStateAction<number>>;
}

export const SettingsContext = createContext<SettingsContextType>({
  arraySize: 50,
  setArraySize: () => {},
  sortingSpeed: 50,
  setSortingSpeed: () => {}
});
