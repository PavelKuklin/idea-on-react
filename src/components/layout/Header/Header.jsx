import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import HeaderTop from 'components/layout/Header/HeaderTop/HeaderTop';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <HeaderTop />

      <div className='container'>
        <div className={styles.block}>
          <div className={styles['block__logo']}>
            {/* //ссылки делаем через Link чтобы переход был без перезагрузки */}
            <Link to='/'>logo</Link>
          </div>
          <div className={styles['block__search']}>
            <input
              className={styles['block__field']}
              type='text'
              placeholder='Поиск...'
            />
          </div>
          <div className={styles['block__controls']}>
            <AiOutlineUser className={styles['controls-icon']}/>
            <AiOutlineHeart className={styles['controls-icon']}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
