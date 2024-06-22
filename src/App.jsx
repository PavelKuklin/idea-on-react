import { Route, Routes } from 'react-router-dom';

import Footer from 'components/layout/Footer/Footer';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound/NotFound';
import Catalog from 'pages/Collection/Collection';
import Header from 'components/layout/Header/Header';
import Favorites from 'pages/Favorites/Favorites';
import UserAccount from 'pages/UserAccount/UserAccount';
import ClampFunction from 'pages/ClampFunction/ClampFunction';
import ToTopButton from 'components/buttonToTop/ToTopButton';
import IndexAdvantages from 'components/layout/IndexAdvantages/IndexAdvantages';

function app() {
  return (
    <div className='main-wrapper'>
      <Header />

      <div className='content'>
        {/* // связываем адреса и компоненты (грубо говоря) */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user-account' element={<UserAccount />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/collection/all' element={<Catalog />} />
          <Route path='/clamp-function' element={<ClampFunction />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <IndexAdvantages />
      <ToTopButton />
      <Footer />
    </div>
  );
}

export default app;
