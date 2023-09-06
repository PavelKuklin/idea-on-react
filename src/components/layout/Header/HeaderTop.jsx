import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTop = () => {
  return (
    <div className='headerTop'>
      <div className='container'>
        <div className='headerTop__block'>
          <ul className='headerTop__menu'>
            <li className='headerTop__menu_item'>
              {/* //ссылки делаем через Link чтобы переход был без перезагрузки */}
              <Link to="/collection/all" className='headerTop__menu_link'>
                Каталог
              </Link>
            </li>
          </ul>
          <div className='headerTop__text'>
            <div>Доставка с 8:00 до 23:00</div>
          </div>
          <div>
            <div>
              <a className='headerTop__contacts_phone' href='tel:+79891233232'>
                +79891233232
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
