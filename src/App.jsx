import { Route, Routes } from 'react-router-dom';

import Footer from 'components/layout/Footer/Footer';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Catalog from 'pages/Collection/Collection';
import Header from 'components/layout/Header/Header';

function app() {
  return (
    <div className='main-wrapper'>
      <Header />

      <div className='content'>
        {/* // связываем адреса и компоненты (грубо говоря) */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection/all' element={<Catalog />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default app;
