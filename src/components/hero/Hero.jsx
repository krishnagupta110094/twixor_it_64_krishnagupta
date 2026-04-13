import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="banner-section"
      initial={{ opacity: 0 , scale: 0.97 }}
      animate={{ opacity: 1 , scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="banner-container">
        <div className="banner-content">
          <motion.div
            className="text-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="main-title"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Smart Shopping
            </motion.h1>

            <motion.h2
              className="sub-title"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Trusted by Millions
            </motion.h2>

            <motion.button
              className="shop-now-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#f0f0f0", 
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              exit={{
                scale: 1,
                backgroundColor: "transparent",
              }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
