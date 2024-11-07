import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="contrast">Home</NavLink>&nbsp;
      <NavLink to="/developers" activeClassName="contrast">Developers</NavLink>&nbsp;
      <NavLink to="/profile" activeClassName="contrast">Profile</NavLink>&nbsp;
    </nav>
  );
}

export default Navigation;