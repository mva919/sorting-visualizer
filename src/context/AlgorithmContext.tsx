/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect, useState } from 'react';
import {
  Algorithm,
  AlgorithmContextInterface,
  AlgorithmProviderProps,
  ArrayContextInterface,
  SettingsContextInterface,
  SettingsInterface
} from './AlgorithContext.types';

const defaultAlgorithmState = {
  algorithm: 'bubble sort',
  setAlgorithm: () => {}
} as AlgorithmContextInterface;

export const AlgorithmContext = createContext<AlgorithmContextInterface>(
  defaultAlgorithmState
);

const defaultArrayState = {
  array: [],
  setArray: () => {}
} as ArrayContextInterface;

export const ArrayContext =
  createContext<ArrayContextInterface>(defaultArrayState);

const defaultSettings = {
  arraySize: 50,
  sortingSpeed: 50
};

const defaultSettingsState = {
  settings: defaultSettings,
  setSettings: () => {},
  sort: () => {}
};

export const SettingsContext =
  createContext<SettingsContextInterface>(defaultSettingsState);

function AlgorithmProvider({ children }: AlgorithmProviderProps) {
  const [algorithm, setAlgorithm] = useState<Algorithm | null>('bubble sort');
  const [array, setArray] = useState<number[]>([]);
  const [settings, setSettings] = useState<SettingsInterface>(defaultSettings);

  useEffect(() => {
    const newArr = Array.from(
      { length: settings.arraySize },
      () => Math.floor(Math.random() * 60) + 20
    );
    console.log(newArr);
    setArray(newArr);
  }, [settings.arraySize]);

  const sort = () => {};

  return (
    <ArrayContext.Provider value={{ array, setArray }}>
      <SettingsContext.Provider value={{ sort, settings, setSettings }}>
        <AlgorithmContext.Provider value={{ algorithm, setAlgorithm }}>
          {children}
        </AlgorithmContext.Provider>
      </SettingsContext.Provider>
    </ArrayContext.Provider>
  );
}

export default AlgorithmProvider;
