import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found-page">

      <div className="not-found-content">

        <span className="not-found-number">
          404
        </span>

        <h1>Page not found</h1>

        <p>
          The page you're looking for doesn't exist
          or may have been moved.
        </p>

        <Link to="/" className="shop-button">
          Back to Shop →
        </Link>

      </div>

    </main>
  );
}

export default NotFound;