import React from 'react';
import {  createBrowserRouter,RouterProvider, } from "react-router-dom";
import AppRouter from './AppRouter';
import  './frontend/style.scss';

export default function App() {

  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  )
}
