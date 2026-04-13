import React from "react";
import { topCategories } from "../../data/topCategories";
import "./TopCategory.css";
import { motion } from "framer-motion";

const TopCategories = () => {
  return (
    <section className="top-cat-section">
      <div className="top-cat-container">
        {topCategories.map((item, index) => (
          <motion.div
            key={item.id}
            className="top-cat-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="img-wrapper"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.01 }}
              whileHover={{ rotate: 5 }}
            >
              <img src={item.img} alt={item.name} />
            </motion.div>

            <motion.p
              className="top-cat-name"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.08 + 0.2 }}
              viewport={{ once: true }}
            >
              {item.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
