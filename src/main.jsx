import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from './components/Test.jsx'
import Hello from './components/Hello.jsx'
import Boimela from './components/Boimela.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Boimela/>
    {/* <Test/>
    <Hello/> */}
  </StrictMode>,
)
