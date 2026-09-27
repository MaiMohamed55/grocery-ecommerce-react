import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "./Products";

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="not-found-page">
        <h1>Product Not Found</h1>

        <Link to="/">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
  };

  return (
    <main className="details-page">

      <div className="container">

        <Link to="/" className="back-link">
          ← Back to Shop
        </Link>

        <div className="details-card">

          <div className="details-image">

            {product.discount && (
              <span className="discount-badge">
                -{product.discount}%
              </span>
            )}

            <img
              src={product.image}
              alt={product.title}
            />

          </div>

          <div className="details-content">

            <span className="product-category">
              {product.category}
            </span>

            <h1>{product.title}</h1>

            <div className="rating">
              ★★★★★
              <span> 4.9 · 120 reviews</span>
            </div>

            <p className="details-description">
              Carefully selected for excellent quality and
              freshness. A perfect choice for your everyday
              shopping.
            </p>

            <div className="details-price">
              ${product.price}
            </div>

            <div className="quantity-row">

              <span>Quantity</span>

              <div className="quantity-control">

                <button
                  onClick={() =>
                    setQuantity((q) => Math.max(1, q - 1))
                  }
                >
                  −
                </button>

                <span>{quantity}</span>

                <button
                  onClick={() =>
                    setQuantity((q) => q + 1)
                  }
                >
                  +
                </button>

              </div>

            </div>

            <button
              className="details-add-button"
              onClick={handleAdd}
            >
              Add to Cart
              <span>→</span>
            </button>

            <div className="product-info">

              <div>
                <strong>✓ Fresh quality</strong>
                <span>Carefully selected products</span>
              </div>

              <div>
                <strong>✓ Secure shopping</strong>
                <span>Safe & easy checkout</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;