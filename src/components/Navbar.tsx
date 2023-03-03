import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction, useContext } from 'react';
import { AlgorithmContext } from '../context/AlgorithmContext';
import { SettingsContext } from '../context/SettingsContext';
import { MAX_ARRAY_SIZE, MIN_ARRAY_SIZE, SORTING_ALGOS } from '../utils/algorithms.constants';
import { generateNewArray } from '../utils/generateArray';
import DropdownButton from './DropdownButton';
import ThemeToggler from './ThemeToggler';

interface NavBarProps {
  updateSortArray: Dispatch<SetStateAction<Array<number>>>
}

function NavBar(Props: NavBarProps) {
  const { algorithm, setAlgorithm } = useContext(AlgorithmContext);
  const { sortingSpeed, setSortingSpeed, arraySize, setArraySize } =
    useContext(SettingsContext);

  return (
    <div className="bg-red-200 my-2 flex items-center justify-between px-2">
      <h1 className="font-bold text-lg xl:text-3xl">Sorting Visualizer</h1>
      <div className="sm:flex sm:flex-col sm:items-center hidden">
        <label htmlFor="speed">Speed</label>
        <input
          type="range"
          min="10"
          max="100"
          step="10"
          id="speed"
          value={sortingSpeed}
          onChange={(e) => setSortingSpeed(parseInt(e.target.value))}
        />
      </div>

      <FontAwesomeIcon icon={faBars} className='block sm:hidden' />

      <div className="sm:flex sm:flex-col sm:items-center hidden">
        <label htmlFor="size">Size</label>
        <input
          type="range"
          min={MIN_ARRAY_SIZE}
          max={MAX_ARRAY_SIZE}
          step="10"
          id="size"
          value={arraySize}
          onChange={(e) => setArraySize(parseInt(e.target.value))}
        />
      </div>

      <div className="sm:flex sm:flex-col sm:items-center hidden">
      <ThemeToggler />
      <button className="rounded-lg bg-slate-200 px-4 py-1" onClick={() => Props.updateSortArray(generateNewArray(arraySize))}>New Array</button>
      <button
        className="rounded-lg bg-slate-200 px-4 py-1"
        disabled={algorithm === null}
        >
        Sort
      </button>
      <DropdownButton
        dropdownOptions={SORTING_ALGOS}
        updateSelectedOption={setAlgorithm}
        />
        </div>
    </div>
  );
}

export default NavBar;
