import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { AlgorithmContext, SettingsContext } from '../context/AlgorithmContext';
import { ThemeContext } from '../context/ThemeContext';
import {
  MAX_ARRAY_SIZE,
  MAX_SORTING_SPEED,
  MIN_ARRAY_SIZE,
  MIN_SORTING_SPEED,
  SORTING_ALGOS
} from '../utils/algorithms.constants';
import DropdownButton from './DropdownButton';
import ThemeToggler from './ThemeToggler';

function NavBar() {
  const { algorithm, setAlgorithm } = useContext(AlgorithmContext);
  const { settings, setSettings, sort } = useContext(SettingsContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-between p-2 ${
        theme === 'dark' ? 'text-white' : 'text-black'
      }`}
    >
      <h1 className="font-bold hidden sm:inline-block text-2xl">
        Sorting Visualizer
      </h1>
      <div className="flex items-center gap-5">
        <div className="sm:flex sm:flex-col sm:items-center hidden">
          <label htmlFor="speed">Speed</label>
          <input
            type="range"
            min="10"
            max="100"
            step="10"
            id="speed"
            value={settings.sortingSpeed}
            onChange={(e) =>
              setSettings((prevSettings) => {
                return {
                  ...prevSettings,
                  sortingSpeed: parseInt(e.target.value)
                };
              })
            }
            className="w-24"
          />
        </div>

        <PhoneMenu />

        <div className="sm:flex sm:flex-col sm:items-center hidden">
          <label htmlFor="size">Size</label>
          <input
            type="range"
            min={MIN_ARRAY_SIZE}
            max={MAX_ARRAY_SIZE}
            step="10"
            id="size"
            value={settings.arraySize}
            onChange={(e) =>
              setSettings((prevSettings) => {
                return {
                  ...prevSettings,
                  arraySize: parseInt(e.target.value)
                };
              })
            }
            className="w-24"
          />
        </div>

        <div className="sm:flex sm:gap-2 sm:items-center hidden">
          <ThemeToggler />
          <button
            className={`rounded-lg text-white font-semibold px-8 py-1 disabled:bg-slate-400 disabled:text-slate-600 ${
              theme === 'dark' ? 'bg-red-700' : 'bg-red-500'
            }`}
            disabled={algorithm === null}
            onClick={() => sort(algorithm)}
          >
            Sort
          </button>
          <DropdownButton
            dropdownOptions={SORTING_ALGOS}
            updateSelectedOption={setAlgorithm}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

function PhoneMenu() {
  const [menuShowing, setMenuShowing] = useState(false);
  const { algorithm, setAlgorithm } = useContext(AlgorithmContext);
  const { settings, setSettings, sort } = useContext(SettingsContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex w-screen items-center justify-between sm:hidden relative px-4">
      <h1 className="font-bold text-lg">Sorting Visualizer</h1>

      {!menuShowing ? (
        <FontAwesomeIcon
          icon={faBars}
          className="h-6 py-1"
          onClick={() => setMenuShowing(true)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => setMenuShowing(false)}
          className="h-8 text-red-500 cursor-pointer"
        />
      )}
      {menuShowing && (
        <div
          className={`${
            theme === 'dark' ? 'bg-slate-800' : 'bg-slate-300'
          } mt-1 h-96 shadow absolute right-0 top-full rounded-md flex flex-col items-center justify-between py-4 px-8 mx-2`}
        >
          <div className="flex flex-col items-center">
            <label htmlFor="speed">Speed</label>
            <input
              type="range"
              min={MIN_SORTING_SPEED}
              max={MAX_SORTING_SPEED}
              step="10"
              id="speed"
              value={settings.sortingSpeed}
              onChange={(e) =>
                setSettings((prevSettings) => {
                  return {
                    ...prevSettings,
                    sortingSpeed: parseInt(e.target.value)
                  };
                })
              }
            />
          </div>

          <div className="flex flex-col items-center">
            <label htmlFor="size">Size</label>
            <input
              type="range"
              min={MIN_ARRAY_SIZE}
              max={MAX_ARRAY_SIZE}
              step="10"
              id="size"
              value={settings.arraySize}
              onChange={(e) =>
                setSettings((prevSettings) => {
                  return {
                    ...prevSettings,
                    arraySize: parseInt(e.target.value)
                  };
                })
              }
            />
          </div>

          <DropdownButton
            dropdownOptions={SORTING_ALGOS}
            updateSelectedOption={setAlgorithm}
          />

          <button
            className={`rounded-lg text-white font-semibold px-8 py-1 disabled:bg-slate-400 disabled:text-slate-600 ${
              theme === 'dark' ? 'bg-red-700' : 'bg-red-500'
            }`}
            disabled={algorithm === null}
            onClick={() => {
              sort(algorithm);
              setMenuShowing(false);
            }}
          >
            Sort
          </button>
          <ThemeToggler />
        </div>
      )}
    </div>
  );
}
