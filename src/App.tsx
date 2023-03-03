import { useState } from 'react';
import NavBar from './components/Navbar';
import Sorter from './components/Sorter';
import { AlgorithmContext } from './context/AlgorithmContext';
import { SettingsContext } from './context/SettingsContext';
import { ThemeContext } from './context/ThemeContext';
import { themeType } from './utils/themeType';

function App() {
  const [algorithm, setAlgorithm] = useState<string | null>(null);
  const algorithmValue = { algorithm, setAlgorithm };
  const [theme, setTheme] = useState<themeType>('light');
  const themeValue = { theme, setTheme };
  const [sortingSpeed, setSortingSpeed] = useState(50);
  const [arraySize, setArraySize] = useState(50);
  const settingsValue = {
    sortingSpeed,
    setSortingSpeed,
    arraySize,
    setArraySize
  };
  const [sortArray, setSortArray] = useState<Array<number>>([]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <AlgorithmContext.Provider value={algorithmValue}>
        <SettingsContext.Provider value={settingsValue}>
          <div className="bg-blue-200 container mx-auto h-screen">
            <NavBar updateSortArray={setSortArray} />
            <Sorter sortArray={sortArray} updateSortArray={setSortArray} />
          </div>
        </SettingsContext.Provider>
      </AlgorithmContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
