// src/main.jsx
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import './index.css'

// Import `react-router-dom` components for routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Uncomment Error component import for handling errors in routing
import Error from './pages/ErrorPage';
import Home from './pages/Homepage';
import Profile from './pages/UserProfile';
import Developer from './pages/Developers';

// Define the router and specify routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />, // Specify error element to handle route errors
    children: [
      { index: true, element: <Home />},
      { path: '/home', element: <Home />}, 
      { path: '/profile', element: <Profile />},
      { path: '/developer', element: <Developer />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
