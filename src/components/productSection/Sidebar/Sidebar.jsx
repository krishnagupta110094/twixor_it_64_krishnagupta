import React, { useState } from "react";
import "./Sidebar.css";
import { filters } from "../../../data/filter";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  // State to track which sections are open (using an object with ID keys)
  const [openSections, setOpenSections] = useState({
    // By default, let's keep the first section open
    [filters[0].id]: true 
  });

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the specific ID
    }));
  };

  return (
    <motion.aside
      className="meesho-sidebar"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Sort Section */}
      <div className="sort-container">
        <span className="sort-label">
          Sort by : <strong>Relevance</strong>
        </span>
        <span className="chevron-icon">▼</span>
      </div>

      <div className="filters-card">
        <div className="filters-title-box">
          <h3 className="filters-text">FILTERS</h3>
          <p className="product-count">1000+ Products</p>
        </div>

        {filters.map((filterGroup, groupIndex) => {
          const isOpen = openSections[filterGroup.id];

          return (
            <div key={filterGroup.id} className="filter-section">
              <hr className="divider" />

              {/* Clickable Toggle Header */}
              <div 
                className="category-toggle" 
                onClick={() => toggleSection(filterGroup.id)}
                style={{ cursor: "pointer" }}
              >
                <span>{filterGroup.title}</span>
                <motion.span 
                  animate={{ rotate: isOpen ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                  className="chevron-icon"
                >
                  ▲
                </motion.span>
              </div>

              {/* Animated Content Wrapper */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    {filterGroup.title === "Category" && (
                      <div className="search-box-wrapper">
                        <input
                          type="text"
                          placeholder="Search"
                          className="sidebar-search"
                        />
                      </div>
                    )}

                    <div className="filter-options">
                      {filterGroup.options.map((option, optionIndex) => (
                        <motion.label
                          key={option}
                          className="checkbox-item"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          whileHover={{ x: 5, color: "#9f2089" }}
                        >
                          <input type="checkbox" className="custom-checkbox" />
                          <span>{option}</span>
                        </motion.label>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.aside>
  );
};

export default Sidebar;