import React, { useState } from "react";
import { categories } from "../../data/category";
import "./CategoryNav.css";
import { motion, AnimatePresence } from "framer-motion"; 

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const currentCat = categories.find((cat) => cat.id === activeCategory);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="category-navbar" 
      onMouseLeave={() => setActiveCategory(null)}
    >
      <div className="category-scroll-container">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-item"
            onMouseEnter={() => setActiveCategory(cat.id)}
          >
            <span
              className={`category-name ${activeCategory === cat.id ? "active" : ""}`}
            >
              {cat.name}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeCategory && currentCat && (
          <motion.div
            className="mega-menu"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }} 
            transition={{ duration: 0.6 }}
          >
            <div className="mega-menu-content">
              {currentCat.megaMenu.map((menu, index) => (
                <div key={index} className="menu-column">
                  <h4 className="menu-title">{menu.title}</h4>
                  <ul className="menu-list">
                    {menu.items.map((item, i) => (
                      <li key={i} className="menu-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default CategoryNav;
