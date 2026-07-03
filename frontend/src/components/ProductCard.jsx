import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-box">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <span>Liz Pleasure Delight</span>
        )}
      </div>

      <div className="product-content">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <strong>₦{Number(product.price).toLocaleString()}</strong>

        <Link to="/order" className="button small-button">
          Order This Snack
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;