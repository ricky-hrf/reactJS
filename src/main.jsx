import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login";
import RegisterPage from './Pages/register';
import ErrorPage from './Pages/Error';
import ProductPage from './Pages/product';
import HomePage from './Pages/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
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
    path: "/home",
    element: <HomePage/>,
  },
  {
    path: "/product",
    element: <ProductPage/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <cartProvider>
      <RouterProvider router={router} />
    </cartProvider>
  </React.StrictMode>,
)

