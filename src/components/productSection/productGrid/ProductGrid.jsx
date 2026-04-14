import React from "react";
import { products } from "../../../data/product";
import "./ProductGrid.css";
import { motion } from "motion/react";

const ProductGrid = () => {
  return (
    <motion.main
      className="meesho-product-grid"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {products.map((product, i) => (
        <motion.div
          key={product.id}
          className="meesho-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.06,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
        >
          <div className="card-image-box">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="card-details">
            <p className="card-title">{product.title}</p>
            <div className="card-pricing">
              <span className="card-price">₹{product.price}</span>
              <span className="card-original">₹{product.originalPrice}</span>
              <span className="card-discount">{product.discount}</span>
            </div>
            <div className="card-shipping">
              <span>{product.delivery}</span>
            </div>
            <div className="card-rating-section">
              <div className="rating-pill">{product.rating} ★</div>
              <span className="review-text">{product.reviews} Reviews</span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.main>
  );
};

export default ProductGrid;
