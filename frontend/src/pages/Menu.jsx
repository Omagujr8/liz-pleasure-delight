import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

function Menu() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("products/")
      .then((response) => setProducts(response.data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="page-section">
      <p className="eyebrow">Fresh choices for you</p>
      <h1>Our Menu</h1>
      <p className="page-intro">
        Choose from our popcorn, peanut, and snack-mix varieties.
      </p>

      {loading ? (
        <p>Loading snacks...</p>
      ) : products.length === 0 ? (
        <p>
          No products have been added yet. Add products from your Django admin
          panel, then refresh this page.
        </p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Menu;