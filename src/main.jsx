import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import First from './components/Layout/First';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: <First></First>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch('Sharts.json')
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
