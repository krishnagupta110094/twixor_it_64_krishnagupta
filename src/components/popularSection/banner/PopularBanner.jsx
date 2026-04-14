import React from "react";
import style from "./PopularBanner.module.css";
import { motion } from "framer-motion";

const PopularBanner = () => {
  return (
    <motion.section
      className={style["banner-section"]}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={style["banner-container"]}>
        <div className={style["banner-content"]}>
          <motion.div
            className={style["text-section"]}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className={style["main-title"]}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Trending Now
            </motion.h1>

            <motion.h2
              className={style["sub-title"]}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Join 2M+ shoppers discovering today's top picks
            </motion.h2>

            <motion.button
              className={style["shop-now-btn"]}
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

export default PopularBanner;
