import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from './styles/globalStyles.js'
import { Login } from './containers/Login'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyles/>
    <ToastContainer autoClose={2000} theme='colored'/>
  </StrictMode>,
)
