import { StrictMode } from "react"
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import React from "react"
import App from './App.jsx';

import Layout from './components/Layout.jsx'; // ✅ match folder spelling

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contacts.jsx';
import Github from './components/Github.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
       path:"/",
       element:<Home/>   
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"github",
        element:<Github/>
      }
      
    ]
  }
])


 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* ✅ Fixed from ReactProvider */}
  </React.StrictMode>,
)
