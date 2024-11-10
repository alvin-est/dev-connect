import React from 'react';
import ReactDOM from 'react-dom/client'


// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// Import the AuthGuard component
import AuthGuard from './components/AuthGuard';

// Import global styles
import './assets/styles.css'

// Import pages
import App from './App';
import Error from './pages/ErrorPage';
import Home from './pages/Homepage';
import Profile from './pages/UserProfile';
import Developers from './pages/Developers';
import Login from './pages/Login';
import Registration from './pages/Register';
import User from './pages/User';
import Logout from './pages/Logout';
/* Import more pages here */


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />},
      { path: "home", element: <Home />},
      { path: "register", element: <Registration />},
      { path: "login", element: <Login />},
      // AuthGuard (protected) routes for logged-in users only
      { path: "logout", element: <AuthGuard><Logout /></AuthGuard>},
      { path: "profile", element: <AuthGuard><Profile /></AuthGuard>},
      { path: "developers", element: <AuthGuard><Developers /></AuthGuard>},
      { path: "user", element: <AuthGuard><User /></AuthGuard>},
      /* Add more pages here */
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

  