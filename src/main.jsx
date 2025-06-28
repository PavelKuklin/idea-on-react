// import { StrictMode } from 'react'
import '@assets/styles/scss/index.scss'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>,
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
