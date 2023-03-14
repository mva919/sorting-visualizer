import { useState } from 'react';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Sorter from './components/Sorter';
import AlgorithmProvider from './context/AlgorithmContext';
import { ThemeContext, themeType } from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState<themeType>('light');
  const themeValue = { theme, setTheme };

  return (
    <main className="h-screen w-screen">
      <ThemeContext.Provider value={themeValue}>
        <AlgorithmProvider>
          <NavBar />
          <Sorter />
          <Footer />
        </AlgorithmProvider>
      </ThemeContext.Provider>
    </main>
  );
}

export default App;
