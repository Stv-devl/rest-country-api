import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

/**
 * The banner component is a component that displays a banner with a title and a theme switcher
 * @returns {JSX.Element} The rendered banner component
 */

const Banner = () => {
  return (
    <div className="flex items-center justify-between h-20 px-4 bg-white dark:bg-gray-700 box-shadow-custom-gray shadow-md">
      <h1 className="font-extrabold text-sm sm:text-2xl ">
        Where in the world
      </h1>
      <ThemeSwitcher />
    </div>
  );
};

export default Banner;
