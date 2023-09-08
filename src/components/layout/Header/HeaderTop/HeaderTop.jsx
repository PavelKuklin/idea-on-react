import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './HeaderTop.module.scss';
import { ReactComponent as AutoImg } from '../../../../assets/images/sunMoon.svg';

const HeaderTop = () => {
  const themeLocal = localStorage.getItem('themeLocal') || 0;
  let systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  let themeMode = themeLocal ? themeLocal : systemTheme;
  let root = document.querySelector(':root');

  const btnRef = useRef(null);
  const btnAuto = useRef(null);
  const [themMode, setThemModeMode] = useState(themeMode);

  useEffect(() => {
    root.classList = `${themMode}`;
    btnRef.current.dataset.theme = `${themMode}`;
    btnAuto.current.dataset.theme = `${themMode}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themMode]);

  const toggleTheme = e => {
    e.stopPropagation();
    setThemModeMode(currentValue => {
      let them = currentValue === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeLocal', them);
      return them;
    });
  };
  const setAuto = () => {
    let systemTheme = themeMode.matches ? 'dark' : 'light';
    localStorage.removeItem('themeLocal');
    setThemModeMode(`${systemTheme}`);
    btnRef.current.dataset.theme = `${systemTheme}`;
  };

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.block}>
          <ul className={styles.menu}>
            <li>
              {/* //ссылки делаем через Link чтобы переход был без перезагрузки */}
              <Link to='/collection/all' className={styles['menu_link']}>
                Каталог
              </Link>
            </li>
          </ul>
          <div className={styles.text}>
            <div>Доставка с 8:00 до 23:00</div>
          </div>
          <div>
            <a className={styles['contacts_phone']} href='tel:+79891233232'>
              +79891233232
            </a>
          </div>
          <div className={styles.toggle}>
            <div
              ref={btnRef}
              className={styles.theme}
              title='дневная/ночная темы'
              data-theme=''
              onClick={toggleTheme}
            ></div>
            <div
              ref={btnAuto}
              onClick={setAuto}
              className={styles.auto}
              data-theme=''
              title='Использовать настройки системы'
            >
              <AutoImg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
