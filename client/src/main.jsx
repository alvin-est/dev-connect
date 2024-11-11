import React from 'react';
import ReactDOM from 'react-dom/client'


// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// Import the AuthGuard and GuestGuard components
import AuthGuard from './components/AuthGuard';
import GuestGuard from './components/GuestGuard';

// Import the AuthContext provider
import { AuthProvider } from './components/AuthContext';

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
import Me from './pages/Me';
import Logout from './pages/Logout';
import Edit from './pages/EditTemp';
import Auth from './utils/auth';
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
      // GuestGuard (public) routes for non-logged-in users only
      { path: "register", element: <GuestGuard><Registration /></GuestGuard>},
      { path: "login", element: <GuestGuard><Login /></GuestGuard>},
      // AuthGuard (protected) routes for logged-in users only
      { path: "edit", element: <AuthGuard><Edit /></AuthGuard>},
      { path: "logout", element: <AuthGuard><Logout /></AuthGuard>},
      { path: "profile", element: <AuthGuard><Profile /></AuthGuard>},
      { path: "developers", element: <AuthGuard><Developers /></AuthGuard>},
      { path: "me", element: <AuthGuard><Me /></AuthGuard>},
      /* Add more pages here */
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

  