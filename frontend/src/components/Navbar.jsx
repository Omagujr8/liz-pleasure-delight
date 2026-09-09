function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#" className="brand">
          <img
            src="/images/logo.jpeg"
            alt="Liz Pleasure Delight"
          />
        </a>

        <nav>
          <a href="#">Home</a>
          <a href="#snacks">Snacks</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#order" className="nav-order">
            Order Now
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;