import React from 'react';

const HeaderTop = () => {
  return (
    <div className='headerTop'>
      <div className='container'>
        <div className='headerTop__block'>
          <ul className='headerTop__menu'>
            <li className='headerTop__menu_item'>
              <a
                className='headerTop__menu_link'
                href='/collection/all'
              >
                Каталог
              </a>
            </li>
          </ul>
          <div className='headerTop__text'>
            <div>Доставка с 8:00 до 23:00</div>
          </div>
          <div>
            <div>
              <a
                className='headerTop__contacts_phone'
                href='tel:+79891233232'
              >
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
