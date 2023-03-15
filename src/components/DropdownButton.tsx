import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { Algorithm } from '../context/AlgorithContext.types';
import { ThemeContext } from '../context/ThemeContext';

interface DropdownButtonProps {
  dropdownOptions: Array<Algorithm>;
  updateSelectedOption: Dispatch<SetStateAction<Algorithm | null>>;
}

function DropdownButton({
  dropdownOptions,
  updateSelectedOption
}: DropdownButtonProps) {
  const [selectedOption, setSelectedOption] = useState<Algorithm | null>(
    'bubble sort'
  );
  const [isDropdownShowing, setIsDropdownShowing] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    setIsDropdownShowing((prevState) => !prevState);
  };

  const handleOptionClick = (optionClicked: Algorithm) => {
    if (optionClicked === selectedOption) {
      setSelectedOption(null);
      updateSelectedOption(null);
    } else {
      setSelectedOption(optionClicked);
      updateSelectedOption(optionClicked);
    }
    setIsDropdownShowing(false);
  };

  return (
    <div className="flex flex-col gap-1 relative">
      <button
        className={`rounded-lg flex items-center w-48 py-2 px-2 justify-between 
        ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'}`}
        onClick={handleClick}
      >
        {selectedOption
          ? selectedOption
              .split(' ')
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ')
          : 'Select Algorithm'}
        {isDropdownShowing ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>

      {isDropdownShowing && (
        <ul
          className={`cursor-pointer rounded-lg absolute top-11 w-full py-1 px-1 ${
            theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'
          }`}
        >
          {dropdownOptions.map((option, idx) => {
            return (
              <li
                key={idx}
                className={`${
                  selectedOption === option &&
                  (theme === 'dark' ? 'bg-indigo-700' : 'bg-sky-400')
                } p-1 rounded-lg my-1 flex items-center justify-between ${
                  theme === 'dark' ? 'hover:bg-indigo-700' : 'hover:bg-sky-400'
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option
                  .split(' ')
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')}
                {selectedOption === option && (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default DropdownButton;
