import { useContext } from 'react';
import { ArrayContext, SettingsContext } from '../context/AlgorithmContext';

function Sorter() {
  const { settings } = useContext(SettingsContext);
  const { array } = useContext(ArrayContext);

  return (
    <div className="flex justify-between w-full gap-1 mt-2 px-1">
      {array.map((item, idx) => {
        return (
          <div
            key={`${idx}-${item}-${settings.arraySize}-${settings.sortingSpeed}`}
            style={{ height: item * 6 }}
            id={`${idx}`}
            className="rounded flex-1 bg-indigo-600"
          ></div>
        );
      })}
    </div>
  );
}

export default Sorter;
