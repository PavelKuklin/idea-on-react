import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import HeaderTop from '@components/layout/Header/HeaderTop/HeaderTop';
import styles from './Header.module.scss';
// import { ReactComponent as Logo } from '@assets/images/store_logo.svg';
import Logo from "@assets/images/store_logo.svg?react";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <HeaderTop />

      <div className='container'>
        <div className={styles.block}>
          <div className={styles['block__logo']}>
            {/* //ссылки делаем через Link чтобы переход был без перезагрузки */}
            <Link to='/' className={styles['block__logo-icon']}>
              <Logo />
            </Link>
          </div>
          <div className={styles['block__search']}>
            <input
              className={styles['block__field']}
              type='text'
              placeholder='Поиск...'
            />
          </div>
          <div className={styles['block__controls']}>
            <Link to='/user-account' className={styles['block__controls-link']}>
              <AiOutlineUser className={styles['controls-icon']} />
            </Link>
            <Link to='/favorites' className={styles['block__controls-link']}>
              <AiOutlineHeart className={styles['controls-icon']} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
