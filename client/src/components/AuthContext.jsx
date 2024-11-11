// AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';
import AuthService from '../utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.loggedIn());

  const login = (token) => {
    AuthService.login(token);
    setIsLoggedIn(true);
    console.log("Logged in. Context set to:", isLoggedIn);
  };

  const logout = () => {
    AuthService.logout();
    setIsLoggedIn(false);
    console.log("Logged out. Context set to:", isLoggedIn);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
