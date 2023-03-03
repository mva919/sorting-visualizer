import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { AlgorithmContext } from '../context/AlgorithmContext';
import { SettingsContext } from '../context/SettingsContext';
import { ThemeContext } from '../context/ThemeContext';
import { generateNewArray } from '../utils/generateArray';

interface SorterProps {
  sortArray: Array<number>;
  updateSortArray: Dispatch<SetStateAction<Array<number>>>;
}

function Sorter(Props: SorterProps) {
  const { algorithm } = useContext(AlgorithmContext);
  const { theme } = useContext(ThemeContext);
  const { arraySize, sortingSpeed } = useContext(SettingsContext);

  useEffect(() => {
    Props.updateSortArray(generateNewArray(arraySize));
  }, [arraySize]);


  return (
    <div className="flex justify-between w-full bg-green-200 gap-1">
      {Props.sortArray.map((item, idx) => {
        return (
          <div
            key={idx}
            style={{ height: item * 10 }}
            className="rounded bg-red-200 flex-1 "
          ></div>
        );
      })}
    </div>
  );
}

export default Sorter;
