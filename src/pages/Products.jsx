import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    title: "Organic Avocado",
    category: "Fruits",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    title: "Fresh Strawberries",
    category: "Fruits",
    price: 5.49,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    title: "Fresh Broccoli",
    category: "Vegetables",
    price: 3.29,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    title: "Organic Tomatoes",
    category: "Vegetables",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    title: "Fresh Whole Milk",
    category: "Dairy",
    price: 2.99,
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    title: "Farm Fresh Eggs",
    category: "Dairy",
    price: 4.59,
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    title: "Premium Orange Juice",
    category: "Drinks",
    price: 4.49,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    title: "Pure Honey",
    category: "Pantry",
    price: 7.99,
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=700&q=80",
  },
];

function Products({ onAddToCart }) {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const categories = [
    "All",
    "Fruits",
    "Vegetables",
    "Dairy",
    "Drinks",
    "Pantry",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main>

      {/* Hero */}

      <section className="hero">
        <div className="container hero-content">

          <div className="hero-text">

            <span className="hero-label">
              FRESH EVERY DAY
            </span>

            <h1>
              Better food.
              <br />
              Better living.
            </h1>

            <p>
              Fresh groceries, carefully selected for your
              everyday life. Quality you can taste.
            </p>

            <button
              className="hero-button"
              onClick={() =>
                document
                  .getElementById("products")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Shop Fresh Products
              <span>→</span>
            </button>

          </div>

          <div className="hero-visual">

            <div className="hero-circle"></div>

            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85"
              alt="Fresh groceries"
            />

            <div className="hero-offer">
              <small>THIS WEEK</small>
              <strong>20%</strong>
              <span>OFF FRESH PICKS</span>
            </div>

          </div>

        </div>
      </section>

      {/* Main Products */}

      <section className="products-section" id="products">

        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-label">
                OUR SELECTION
              </span>

              <h2>Fresh from the market</h2>
            </div>

            <p>
              Quality products chosen for your everyday needs.
            </p>
          </div>

          {/* Search */}

          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Categories */}

          <div className="categories">

            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "category active"
                    : "category"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}

          </div>

          {/* Products */}

          {loading ? (
            <div className="loading-container">

              <div className="loader"></div>

              <p>Preparing fresh products...</p>

            </div>
          ) : filteredProducts.length === 0 ? (

            <div className="empty-results">

              <div>⌕</div>

              <h3>No products found</h3>

              <p>
                Try searching for another product or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                View All Products
              </button>

            </div>

          ) : (

            <div className="products-grid">

              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}

            </div>

          )}

        </div>

      </section>

      {/* Benefits */}

      <section className="benefits">

        <div className="container benefits-grid">

          <div className="benefit">
            <span>✦</span>
            <div>
              <strong>Fresh Quality</strong>
              <p>Selected with care</p>
            </div>
          </div>

          <div className="benefit">
            <span>✓</span>
            <div>
              <strong>Easy Shopping</strong>
              <p>Simple & convenient</p>
            </div>
          </div>

          <div className="benefit">
            <span>⌁</span>
            <div>
              <strong>Fast Delivery</strong>
              <p>Straight to your door</p>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}

export { products };
export default Products;