import React from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth } from './AuthContext';

const Navigation = ({ isMobile }) => {
  const { isLoggedIn } = useAuth();
  const isAuthenticated = isLoggedIn;

  // alert('isAuthenticated: ' + isAuthenticated);


  // Helper function to determine which links to show
  const renderNavLinks = () => {
    if (!isAuthenticated) {
      // Only show home link for non-authenticated users
      return (
        <li>
          <NavLink
            exact
            to="/"
            className="font-body text-white hover:text-[#C4E736] transition duration-200 underline-offset-4 hover:underline"
          >
            Home
          </NavLink>
        </li>
      );
    }
    else {
      // For authenticated users, show all links
      return (
        <>
          <li>
            <NavLink
              exact
              to="/"
              className="font-body text-white hover:text-[#C4E736] transition duration-200 underline-offset-4 hover:underline"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/developers"
              className="font-body text-white hover:text-[#C4E736] transition duration-200 underline-offset-4 hover:underline"
            >
              Developers
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/profile"
              className="font-body text-white hover:text-[#C4E736] transition duration-200 underline-offset-4 hover:underline"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/logout"
              className="font-body text-white hover:text-[#C4E736] transition duration-200 underline-offset-4 hover:underline"
            >
              Logout
            </NavLink>
          </li>
          {/* Add more NavLinks for authenticated users here */}
        </>
      );
    }    
  };

  return (
    <nav>
      <ul
        className={`${isMobile ? 'flex flex-col space-y-4' : 'flex space-x-6'}`}
      >
        {renderNavLinks()}
      </ul>
    </nav>
  );
};

export default Navigation;
