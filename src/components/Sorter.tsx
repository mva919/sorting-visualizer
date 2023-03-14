import { useContext, useEffect, useState } from 'react';
import { ArrayContext, SettingsContext } from '../context/AlgorithmContext';
import { ThemeContext } from '../context/ThemeContext';

function Sorter() {
  const { theme } = useContext(ThemeContext);
  const { settings, setSettings } = useContext(SettingsContext);
  const { array } = useContext(ArrayContext);

  return (
    <div className="flex justify-between w-full gap-1 mt-2">
      {array.map((item, idx) => {
        return (
          <div
            key={idx}
            style={{ height: item * 6 }}
            className="rounded bg-red-200 flex-1 "
          ></div>
        );
      })}
    </div>
  );
}

export default Sorter;
