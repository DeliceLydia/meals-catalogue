import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <Link className="home" to="/">
      <h4 className="nav-text">Delicious Meals</h4>
    </Link>
  </nav>
);

export default Navbar;
