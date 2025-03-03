import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Login from './Pages/Login';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import './App.css';
import CheckOut from './Pages/CheckOut';

const App = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/product/:id",
      element: <Product />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/checkout",
      element: <CheckOut />,
    },
  ]);

  return (
    <RouterProvider router={appRouter} />
  );
};

export default App;