import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ isMobile }) => {
  /* Helper code to dynamically determine the active link if needed */
  // const currentPage = useLocation().pathname; // Find the current page URL
  // const activeLink = (path) => {
  //   return currentPage === path ? 'nav-link nav-active' : 'nav-link';
  // }

  return (
    <nav>
      <ul
        className={`${
          isMobile
            ? 'flex flex-col space-y-4' // On mobile: stack links vertically with spacing
            : 'flex space-x-6' // On desktop: align links horizontally with spacing
        }`}
      >
        {/* Home Link */}
        <li>
          <NavLink
            exact
            to="/"
            className="font-body text-white hover:text-[#C4E736] transition duration-200 underline-offset-4 hover:underline"
          >
            Home
          </NavLink>
        </li>

        {/* Developers Link */}
        <li>
          <NavLink
            exact
            to="/developers"
            className="font-body text-white hover:text-[#C4E736] transition duration-200 underline-offset-4 hover:underline"
          >
            Developers
          </NavLink>
        </li>

        {/* Profile Link */}
        <li>
          <NavLink
            exact
            to="/profile"
            className="font-body text-white hover:text-[#C4E736] transition duration-200 underline-offset-4 hover:underline"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
