import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="space-x-4">
      <NavLink exact to="/" activeClassName="hover:text-gray-200">Home</NavLink>&nbsp;
      <NavLink to="/developers" activeClassName="hover:text-gray-200">Developers</NavLink>&nbsp;
      <NavLink to="/profile" activeClassName="hover:text-gray-200">Profile</NavLink>&nbsp;
    </nav>
  );
}

export default Navigation;