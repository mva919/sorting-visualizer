import { useContext } from 'react';
import { AlgorithmContext } from '../context/AlgorithmContext';
import { SettingsContext } from '../context/SettingsContext';
import { SORTING_ALGOS } from '../utils/algorithms.constants';
import DropdownButton from './DropdownButton';
import ThemeToggler from './ThemeToggler';

function NavBar({ }) {
  const { algorithm, setAlgorithm } = useContext(AlgorithmContext);
  const { sortingSpeed, setSortingSpeed, arraySize, setArraySize } = useContext(SettingsContext);

  return (
    <div className='bg-red-200 my-2 flex items-center justify-between px-2'>
      <h1 className='font-bold text-3xl'>Sorting Visualizer</h1>
      <div className='flex flex-col items-center'>
        <label htmlFor='speed'>Speed</label>
        <input type='range' min='10' max='100' step='10' id='speed' value={sortingSpeed} onChange={e => setSortingSpeed(parseInt(e.target.value))} />
      </div>

      <div className='flex flex-col items-center'>
        <label htmlFor='size'>Size</label>
        <input type='range' min='20' max='60' step='10' id='size' value={arraySize} onChange={e => setArraySize(parseInt(e.target.value))} />
      </div>

      <ThemeToggler />
      <button className='rounded-lg bg-slate-200 px-4 py-1'>New Array</button>
      <button className='rounded-lg bg-slate-200 px-4 py-1' disabled={algorithm === null}>Sort</button>
      <DropdownButton
        dropdownOptions={SORTING_ALGOS}
        updateSelectedOption={setAlgorithm}
      />
    </div>
  );
}

export default NavBar