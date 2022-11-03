import React from 'react'
import ReactDOM from 'react-dom/client'
import {createHashRouter, RouterProvider} from 'react-router-dom';
import App from './App'
import './index.css'
import About from './About';

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
