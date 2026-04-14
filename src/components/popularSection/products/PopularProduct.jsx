import React from "react";
import { popular } from "../../../data/popular";
import style from "./PopularProduct.module.css";
import { motion } from "motion/react";

const ProductGrid = () => {
  return (
    <motion.main
      className={style["meesho-product-grid"]}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {popular.map((product, i) => (
        <motion.div
          key={product.id}
          className={style["meesho-card"]}
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
          <div className={style["card-image-box"]}>
            <img src={product.image} alt={product.title} />
          </div>
          <div className={style["card-details"]}>
            <p className={style["card-title"]}>{product.title}</p>
            <div className={style["card-pricing"]}>
              <span className={style["card-price"]}>₹{product.price}</span>
              <span className={style["card-original"]}>
                ₹{product.originalPrice}
              </span>
              <span className={style["card-discount"]}>{product.discount}</span>
            </div>
            <div className={style["card-shipping"]}>
              <span>{product.delivery}</span>
            </div>
            <div className={style["card-rating-section"]}>
              <div className={style["rating-pill"]}>{product.rating} ★</div>
              <span className={style["review-text"]}>
                {product.reviews} Reviews
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.main>
  );
};

export default ProductGrid;
