import Header from '@components/layout/Header/Header'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home'
import UserAccount from './pages/UserAccount/UserAccount'
import Favorites from './pages/Favorites/Favorites'
import ClampFunction from './pages/ClampFunction/ClampFunction'
import Catalog from './pages/Collection/Collection'

function App() {

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
    </div>
  )
}

export default App
