import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggler({ }) {
  const [isDark, setIsDark] = useState(false);
  const { setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setIsDark(prevState => !prevState);
    isDark ? setTheme('light') : setTheme('dark');
  };

  return (
    <div className="bg-indigo-200 rounded-2xl w-16 px-1 flex items-center py-1 justify-between" onClick={handleClick}>
      {isDark && <FontAwesomeIcon className='text-white pl-1' icon={faMoon} />}
      <div className="bg-white w-6 h-6 rounded-full"></div>
      {!isDark && <FontAwesomeIcon className='text-white pr-1' icon={faSun} />}
    </div>
  );
}

export default ThemeToggler