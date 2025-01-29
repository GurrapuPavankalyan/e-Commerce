import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Login from './Pages/Login';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import './App.css';

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
    }
  ]);

  return (
    <RouterProvider router={appRouter} />
  );
};

export default App;