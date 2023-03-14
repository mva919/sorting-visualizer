import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { AlgorithmContext, SettingsContext } from '../context/AlgorithmContext';
import {
  MAX_ARRAY_SIZE,
  MIN_ARRAY_SIZE,
  SORTING_ALGOS
} from '../utils/algorithms.constants';
import DropdownButton from './DropdownButton';
import ThemeToggler from './ThemeToggler';

function NavBar() {
  const { algorithm, setAlgorithm } = useContext(AlgorithmContext);
  const { settings, setSettings, sort } = useContext(SettingsContext);

  return (
    <div className="bg-red-200 flex flex-col lg:flex-row items-center justify-between p-2">
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
            className="rounded-lg bg-slate-200 px-4 py-1"
            disabled={algorithm === null}
            onClick={() => sort}
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

// interface PhoneMenuProps {
//   updateSortArray: Dispatch<SetStateAction<Array<number>>>;
// }

function PhoneMenu() {
  const [menuShowing, setMenuShowing] = useState(false);
  const { algorithm, setAlgorithm } = useContext(AlgorithmContext);
  const { settings, setSettings, sort } = useContext(SettingsContext);

  return (
    <div className="flex w-screen items-center justify-between bg-blue-300 sm:hidden relative px-4">
      <h1 className="font-bold text-lg">Sorting Visualizer</h1>

      {!menuShowing ? (
        <FontAwesomeIcon
          icon={faBars}
          className="h-6"
          onClick={() => setMenuShowing(true)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => setMenuShowing(false)}
          className="h-8 text-red-500"
        />
      )}
      {menuShowing && (
        <div className="w-full mt-1 h-96 bg-red-500 shadow absolute top-full rounded-md flex flex-col items-center justify-between py-4">
          <div className="flex flex-col items-center">
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
            className="rounded-lg bg-slate-200 px-4 py-1 w-1/2"
            disabled={algorithm === null}
          >
            Sort
          </button>
          <ThemeToggler />
        </div>
      )}
    </div>
  );
}
