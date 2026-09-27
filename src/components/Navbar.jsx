import { Link } from "react-router-dom";

function Navbar({ cartCount = 0 }) {
  return (
    <header className="navbar">
      <div className="container navbar-content">

        <Link to="/" className="logo">
          <span className="logo-icon">●</span>
          <span>GreenBasket</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Shop</Link>
          <Link to="/?category=all">Categories</Link>
        </nav>

        <Link to="/cart" className="cart-button">
          <span className="cart-icon">🛒</span>
          <span>Cart</span>

          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </Link>

      </div>
    </header>
  );
}

export default Navbar;