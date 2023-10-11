import React from 'react';
import {  createBrowserRouter,RouterProvider,useMiddleware, useNavigate } from "react-router-dom";
import Dashboard from './backend/users/dashboard';
import Login from './backend/users/login';
import Logout from './backend/users/logout';
import Register from './backend/users/register';

import Home from './frontend/Home';
import Store from './frontend/Store';
import NoMatch from './NoMatch';
import Products from './backend/products/Products';

const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/store",
      element: <Store/>,
      
    },
    {
      path:'/admin',
      element: <Dashboard />
    },
    {
      path:'/admin/login',
      element: <Login />
    },
    {
      path:'/admin/logout',
      element: <Logout />,
    },
    {
      path:'/admin/register',
      element: <Register />
    },
    {
      path: '/admin/products',
      element:<Products />,
    },
    {
      path:'*',
      element: <NoMatch />
    },
  
  ]);
  export default AppRouter;