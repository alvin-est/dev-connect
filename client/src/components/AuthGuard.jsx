// Allows only authenticated users to access route/path
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthService from '../utils/auth';

const AuthGuard = ({ children, redirectTo }) => {
  const isAuthenticated = AuthService.loggedIn();
  const location = useLocation();

  // If user is not authenticated, redirect to home
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // If user is authenticated, render the children (protected routes)
  return children;
};

export default AuthGuard;