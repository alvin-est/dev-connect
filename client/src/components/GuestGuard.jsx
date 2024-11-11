// Allows only non-authenticated users to access route/path
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthService from '../utils/auth';

const GuestGuard = ({ children }) => {
  const isAuthenticated = AuthService.loggedIn();
  const location = useLocation();

  // If user is authenticated, redirect to home
  if (isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // If user is not authenticated, render the children (public routes)
  return children;
};

export default GuestGuard;