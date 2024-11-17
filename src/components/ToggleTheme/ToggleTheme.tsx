import React from 'react';
import IconSun from '../icons/IconSun';
import { useTheme } from '@/themes/ThemeProvider';
import IconMoon from '../icons/IconMoon';
import cx from 'classnames';

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  const handleChangeTheme = () => {
    toggleTheme();
  };
  return (
    <button
      onClick={handleChangeTheme}
      className='w-11 h-11 rounded-full flex justify-center items-center border dark:border-neutral-3 relative cursor-pointer'
    >
      <IconSun
        className={cx(
          'transition-all duration-500 ease-in text-base text-black',
          {
            'visible rotate-[360deg] scale(1)': theme === 'light',
            'invisible scale-0': theme === 'dark',
          }
        )}
      />
      <IconMoon
        className={cx(
          'text-white transition-all absolute duration-500 ease-in text-base',
          {
            visible: theme === 'dark',
            'invisible delay-0 scale-0 rotate-[360deg]': theme === 'light',
          }
        )}
      />
    </button>
  );
}
