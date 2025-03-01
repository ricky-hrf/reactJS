import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login";
import RegisterPage from './Pages/register';
import ErrorPage from './Pages/Error';
import ProductPage from './Pages/product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello world</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
  {
    path: "/product",
    element: <ProductPage/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

