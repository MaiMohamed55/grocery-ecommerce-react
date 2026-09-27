import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">

      <Link
        to={`/product/${product.id}`}
        className="product-image-wrapper"
      >
        {product.discount && (
          <span className="discount-badge">
            -{product.discount}%
          </span>
        )}

        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </Link>

      <div className="product-content">

        <span className="product-category">
          {product.category}
        </span>

        <Link
          to={`/product/${product.id}`}
          className="product-title"
        >
          {product.title}
        </Link>

        <div className="product-bottom">

          <div className="product-price">
            {product.discount ? (
              <>
                <span className="old-price">
                  ${product.oldPrice}
                </span>

                <strong>${product.price}</strong>
              </>
            ) : (
              <strong>${product.price}</strong>
            )}
          </div>

          <button
            className="add-button"
            onClick={() => onAddToCart(product)}
          >
            +
          </button>

        </div>
      </div>

    </article>
  );
}

export default ProductCard;