import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeToggler() {
  const [isDark, setIsDark] = useState(false);
  const { setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setIsDark((prevState) => !prevState);
    isDark ? setTheme('light') : setTheme('dark');
  };

  return (
    <div
      className={`rounded-2xl w-16 px-1 flex items-center py-1 justify-between ${
        isDark ? 'bg-indigo-800' : 'bg-sky-400'
      } text-white`}
      onClick={handleClick}
    >
      {isDark && <FontAwesomeIcon className="pl-1" icon={faMoon} />}
      <div className="bg-white w-6 h-6 rounded-full"></div>
      {!isDark && <FontAwesomeIcon className="pr-1" icon={faSun} />}
    </div>
  );
}

export default ThemeToggler;
