import React, { useEffect } from 'react';
import '../styles/Header.css';
import dark from '../assets/images/moon.png';
import light from '../assets/images/brightness.png';
import useDarkMode from '../hooks/useDarkMode';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import useSound from 'use-sound';
import lightSound from '../assets/audios/switch.wav';

const Header = () => {
  const [setTheme, colorTheme] = useDarkMode();
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  const [play] = useSound(lightSound);

  useEffect(() => {
    setThemeMode(colorTheme)
  }, [colorTheme]);

  return (
    <header className="text-gray-600 body-font bg-green-500 dark:bg-gray-900 sticky top-0 z-40 transition duration-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-black p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-black dark:text-white">Tailblocks</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {
            colorTheme === 'dark' ? <button onClick={() => { setTheme(colorTheme); play() }}><img src={dark} alt="" className="mx-3" style={{ width: '15px', objectFit: 'contain', cursor: 'pointer' }} /></button> : <button onClick={() => { setTheme(colorTheme); play() }}><img src={light} alt="" className="mx-3" style={{ width: '22px', objectFit: 'contain', cursor: 'pointer' }} /></button>
          }
          <a className="mr-5 text-black dark:text-white">First Link</a>
          <a className="mr-5 text-black dark:text-white">Second Link</a>
          <a className="mr-5 text-black dark:text-white">Third Link</a>
          <a className="mr-5 text-black dark:text-white">Fourth Link</a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;