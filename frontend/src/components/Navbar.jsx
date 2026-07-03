import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        Liz <span>Pleasure Delight</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/snacks-mix">Snacks Mix</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
        <NavLink to="/order" className="order-link">
          Order Now
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;