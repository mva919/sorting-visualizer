import { createContext, Dispatch, SetStateAction } from "react";

interface AlgorithmContextType {
  algorithm: string | null;
  setAlgorithm: Dispatch<SetStateAction<string | null>>;
}

export const AlgorithmContext = createContext<AlgorithmContextType>({
  algorithm: null,
  setAlgorithm: () => { }
});