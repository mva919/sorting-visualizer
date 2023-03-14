import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction, useState } from 'react';
import { Algorithm } from '../context/AlgorithContext.types';

interface DropdownButtonProps {
  dropdownOptions: Array<Algorithm>;
  updateSelectedOption: Dispatch<SetStateAction<Algorithm | null>>;
}

function DropdownButton(Props: DropdownButtonProps) {
  const [selectedOption, setSelectedOption] = useState<Algorithm | null>(null);
  const [isDropdownShowing, setIsDropdownShowing] = useState(false);

  const handleClick = () => {
    setIsDropdownShowing((prevState) => !prevState);
  };

  const handleOptionClick = (optionClicked: Algorithm) => {
    if (optionClicked === selectedOption) {
      setSelectedOption(null);
      Props.updateSelectedOption(null);
    } else {
      setSelectedOption(optionClicked);
      Props.updateSelectedOption(optionClicked);
    }
    setIsDropdownShowing(false);
  };

  return (
    <div className="bg-slate-200 flex flex-col gap-1 relative">
      <div
        className="rounded-lg bg-slate-300 flex items-center w-48 py-2 px-2 justify-between"
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
      </div>

      {isDropdownShowing && (
        <ul className="bg-slate-400 rounded-lg absolute top-11 w-full py-1 px-1">
          {Props.dropdownOptions.map((option, idx) => {
            return (
              <li
                key={idx}
                className={`${
                  selectedOption === option ? 'bg-blue-400' : ''
                } px-1 rounded-lg my-1 hover:bg-blue-400 flex items-center justify-between`}
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
