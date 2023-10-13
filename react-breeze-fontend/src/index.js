import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Layout from './componets/Layout/Layout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {AuthProvider} from "./context/AuthContext";
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProvider><Layout /></AuthProvider>,
    children:[
      {
        path: '',
        element: <Home />,
      }
    ]
  },
  {
    path: '/login',
    element: (<AuthProvider><Login /></AuthProvider>),
  },
  {
    path: '/register',
    element: <AuthProvider><Register /></AuthProvider>,
  },
  {
    path: '/forgot-password',
    element: <AuthProvider><ForgotPassword /></AuthProvider>,
  },
  {
    path: '/password-reset/:token',
    element: <AuthProvider><ResetPassword /></AuthProvider>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

