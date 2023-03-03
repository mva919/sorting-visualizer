import { useContext, useEffect, useState } from "react";
import { AlgorithmContext } from "../context/AlgorithmContext";
import { SettingsContext } from "../context/SettingsContext";
import { ThemeContext } from "../context/ThemeContext";

interface SorterProps {

}

function Sorter() {
  const { algorithm } = useContext(AlgorithmContext);
  const { theme } = useContext(ThemeContext);
  const { arraySize, sortingSpeed } = useContext(SettingsContext);

  const generateNewArray = () => {
    return Array.from({ length: arraySize },
      () => Math.floor(Math.random() * 60) + 20)
  }

  const [sortingArray, setSortingArray] = useState(generateNewArray());
  useEffect(() => {
    setSortingArray(generateNewArray);
  }, [arraySize])

  return (
    <div className="flex justify-between w-full bg-green-200 gap-1">
      {sortingArray.map((item, idx) => {
        return (
          <div key={idx} style={{ height: item * 10 }} className="rounded bg-red-200 flex-1 ">
          </div>
        );
      })}
    </div>
  );
}

export default Sorter