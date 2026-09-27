import { Link } from "react-router-dom";

function Cart({
  cart,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="cart-page">

        <div className="container">

          <div className="empty-cart">

            <div className="empty-cart-icon">
              🛒
            </div>

            <span>YOUR CART</span>

            <h1>Your cart is empty</h1>

            <p>
              Looks like you haven't added anything yet.
              Let's find something fresh for you.
            </p>

            <Link to="/" className="shop-button">
              Start Shopping →
            </Link>

          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="cart-page">

      <div className="container">

        <div className="cart-header">

          <div>
            <span>YOUR CART</span>
            <h1>Shopping Cart</h1>
          </div>

          <Link to="/" className="continue-shopping">
            ← Continue Shopping
          </Link>

        </div>

        <div className="cart-layout">

          <div className="cart-items">

            {cart.map((item) => (

              <div className="cart-item" key={item.id}>

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="cart-item-info">

                  <span>{item.category}</span>

                  <h3>{item.title}</h3>

                  <strong>
                    ${item.price}
                  </strong>

                </div>

                <div className="cart-quantity">

                  <button
                    onClick={() =>
                      onDecrease(item.id)
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      onIncrease(item.id)
                    }
                  >
                    +
                  </button>

                </div>

                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  className="remove-button"
                  onClick={() =>
                    onRemove(item.id)
                  }
                >
                  ×
                </button>

              </div>

            ))}

          </div>

          <aside className="summary">

            <span>ORDER SUMMARY</span>

            <h2>Your Order</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <strong>Free</strong>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <button className="checkout-button">
              Proceed to Checkout →
            </button>

            <p className="secure-text">
              ✓ Secure checkout · Free delivery
            </p>

          </aside>

        </div>

      </div>

    </main>
  );
}

export default Cart;