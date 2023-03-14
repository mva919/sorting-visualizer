import { Dispatch, ReactNode, SetStateAction } from 'react';

export type Algorithm = 'bubble sort' | 'insertion sort';

export type AlgorithmProviderProps = {
  children: ReactNode;
};

export interface ArrayContextInterface {
  array: number[];
  setArray: Dispatch<SetStateAction<number[]>>;
}

export interface AlgorithmContextInterface {
  algorithm: Algorithm | null;
  setAlgorithm: Dispatch<SetStateAction<Algorithm | null>>;
}

export interface SettingsInterface {
  arraySize: number;
  sortingSpeed: number;
}

export interface SettingsContextInterface {
  settings: SettingsInterface;
  setSettings: Dispatch<SetStateAction<SettingsInterface>>;
  sort: (algoType: Algorithm) => void;
}
