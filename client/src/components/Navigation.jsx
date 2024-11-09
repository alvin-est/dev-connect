import { NavLink } from 'react-router-dom';

const Navigation = () => {
  /* Helper code to dynamically determine the active link if needed */
  // const currentPage = useLocation().pathname; // Find the current page URL
  // const activeLink = (path) => {
  //   return currentPage === path ? 'nav-link nav-active' : 'nav-link';
  // }

  return (
    <nav>
      <ul className="flex space-x-6">
        {/* Home link */}
        <li>
          <NavLink
            exact
            to="/"
            className="font-body text-white hover:text-accent-500 transition duration-200"
          >
            Home
          </NavLink>
        </li>

        {/* Developers link */}
        <li>
          <NavLink
            exact
            to="/developers"
            className="font-body text-white hover:text-accent-500 transition duration-200"
          >
            Developers
          </NavLink>
        </li>

        {/* Profile link */}
        <li>
          <NavLink
            exact
            to="/profile"
            className="font-body text-white hover:text-accent-500 transition duration-200"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
