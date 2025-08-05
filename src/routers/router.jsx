import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from '../pages/Layouts/RootLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import ResetPassword from '../pages/Authentication/ResetPassword';
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index:true,
            Component: Home
        }
    ]
  },
  {
    path: "/login",
    Component: Login
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/reset-password",
    Component: ResetPassword
  }
]);

export default router;