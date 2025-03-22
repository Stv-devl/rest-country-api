import React, { useEffect, useState } from 'react';
import { iconsMap } from '../../constantes/iconsMap';

/**
 * ThemeSwitcher component
 * A toggle button that switches between light and dark mode.
 * Uses ThemeContext to access and update the current theme.
 * @returns {JSX.Element} The rendered theme switcher button
 */
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const currentTheme =
    theme && theme === 'dark'
      ? {
          icon: iconsMap.LightIcon,
          label: 'Light Mode',
        }
      : {
          icon: iconsMap.DarkIcon,
          label: 'Dark Mode',
        };

  const { icon: Icon, label } = currentTheme;

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 cursor-pointer focus:outline-none"
    >
      <Icon className="size-4 sm:size-6" />
      <span className="font-semibold text-xs sm:text-base">{label}</span>
    </button>
  );
};

export default ThemeSwitcher;
