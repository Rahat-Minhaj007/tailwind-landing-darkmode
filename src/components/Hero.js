import React, { useContext } from 'react';
import lightHero from '../assets/images/lightHero.svg';
import darkHero from '../assets/images/darkHero.svg';
import hero from '../assets/images/hero.svg';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Hero.css';
const Hero = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  console.log(themeMode);

  return (
    <section className="text-gray-600 body-font dark:bg-gray-900" style={{ background: `url(${themeMode === 'light' ? darkHero : lightHero}) center center/cover no-repeat`,height:"92vh" }}>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">Before they sold out
            <br className="hidden lg:inline-block dark:text-white" />readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed dark:text-white">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded hero-img" alt="hero" src={hero} />
        </div>
      </div>
    </section>
  );
};

export default Hero;