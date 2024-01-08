import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HeaderTop.module.scss';
import ThemeSwitcher from 'components/themeSwitcher/ThemeSwitcher';

const HeaderTop = () => {
  // const [now, setNow] = React.useState(new Date());

  // setInterval(() => setNow(new Date()), 1000);

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
            <li>
              <Link to='/clamp-function' className={styles['menu_link']}>
                Clamp-function
              </Link>
            </li>
          </ul>
          {/* <div className=''>{now.toLocaleTimeString()}</div> */}
          <div className={styles.text}>
            <div>Доставка с 8:00 до 23:00</div>
          </div>
          <div>
            <a className={styles['contacts_phone']} href='tel:+79891233232'>
              +79891233232
            </a>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
