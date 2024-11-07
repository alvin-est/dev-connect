import ReactDOM from 'react-dom/client'

import React from 'react';
import App from './App'
import './index.css'

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import Error from './pages/ErrorPage';
import Home from './pages/Homepage';
import Profile from './pages/UserProfile';
import Developer from './pages/Developers';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
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

  