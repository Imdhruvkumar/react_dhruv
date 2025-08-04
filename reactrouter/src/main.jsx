import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {ReactProviuder, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    paht:'/'
  }
])

 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ReactProviuder router={router}/>

  </React.StrictMode>,
)
