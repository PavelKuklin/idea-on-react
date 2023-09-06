import React from 'react';

import HeaderTop from 'components/layout/Header/HeaderTop';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <HeaderTop />

      <div className="container">
        <div className='header-block'>
          <div className='header-block__logo'>logo</div>
          <div className='header-block__search'>
            <input className='header-block__field' type="text" placeholder="Поиск..." />
          </div>
          <div className='header-block__controls'>controls</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
