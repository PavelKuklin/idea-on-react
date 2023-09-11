import React, { useEffect, useRef, useState } from 'react';

import './ThemeSwitcher.scss';
const ThemeSwitcher = () => {
  const themeLocal = localStorage.getItem('themeLocal') || 0;
  let root = document.querySelector(':root');
  const defTheme = themeLocal ? themeLocal : 'auto';
  const btnRef = useRef(null);
  const [theme, setTheme] = useState(defTheme);
  let title =
    theme === 'auto'
      ? 'Автоматически'
      : theme === 'light'
      ? 'Светлая'
      : 'Темная';

  const changeTheme = () => {
    setTheme(currentValue => {
      let themeChanged =
        currentValue === 'auto'
          ? 'light'
          : currentValue === 'light'
          ? 'dark'
          : 'auto';
      return themeChanged;
    });
  };

  useEffect(() => {
    if (theme === 'auto') {
      localStorage.removeItem('themeLocal');
      root.classList = '';
    } else {
      localStorage.setItem('themeLocal', theme);
      root.classList = theme;
    }
    btnRef.current.dataset.theme = theme;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <div
      ref={btnRef}
      className='switcher'
      title={title}
      data-theme=''
      onClick={changeTheme}
    ></div>
  );
};

export default ThemeSwitcher;
