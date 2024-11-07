import { NavLink } from 'react-router-dom';

const Navigation = () => {
  /* Some helper code */
  // const currentPage = useLocation().pathname; // Find the current page URL
  // const activeLink = (path) => {
  //   return currentPage === path ? 'nav-link nav-active' : 'nav-link';
  // }

  return (
    <nav>
      <ul className="flex space-x-6">
        <li><NavLink exact to="/" className="hover:underline">Home</NavLink></li>
        <li><NavLink exact to="/developers" className="hover:underline">Developers</NavLink></li>
        <li><NavLink exact to="/profile" className="hover:underline">Profile</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;