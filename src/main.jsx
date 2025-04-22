import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {CartProvider} from './context/CartContext';
import LoginPage from "./Pages/login";
import RegisterPage from './Pages/register';
import ErrorPage from './Pages/Error';
import ProductPage from './Pages/product';
import HomePage from './Pages/home';
import ProductDetail from './Pages/ProductDetailPage'
import CheckoutPage from './Pages/CheckoutPage';

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
    path: "/product",
    element: <ProductPage/>,
  },
  {
    path: "/products/:id",
    element: <ProductDetail/>,
  },
  {
    path: "/checkout",
    element: <CheckoutPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)

