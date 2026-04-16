import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Search, User, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import DesktopLogo from "../../assets/meesho_logo.png";
import MobileLogo from "../../assets/logo_mob.png";

const Navbar = () => {
  const [placeholderText, setPlaceholderText] = useState("");
  const fullText = "Try Saree, Kurti or Search by Product Name";
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && index < fullText.length) {
          // Typing: Ek letter add karo
          setPlaceholderText(fullText.substring(0, index + 1));
          setIndex(index + 1);
        } else if (isDeleting && index > 0) {
          // Deleting: Ek letter remove karo
          setPlaceholderText(fullText.substring(0, index - 1));
          setIndex(index - 1);
        } else if (index === fullText.length) {
          // Pura text type ho gaya, ab thoda ruk kar delete start karo
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (index === 0 && isDeleting) {
          // Pura delete ho gaya, ab wapas start karo
          setIsDeleting(false);
        }
      },
      isDeleting ? 50 : 100,
    ); // Typing slow, deleting fast

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="navbar"
    >
      <div className="nav-container">
        {/* Logo Section */}
        <div className="logo">
          <img className="desktop" src={DesktopLogo} alt="Meesho Logo" />
          <img className="mobile" src={MobileLogo} alt="Meesho Logo" />
        </div>

        {/* Search Section */}
        <div className="search-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder={placeholderText}
            className="search-input"
          />
        </div>

        {/* Navigation & Actions */}
        <nav className="nav-actions">
          <div className="utility-links">
            <span className="nav-link-text">Become a Supplier</span>
            <span className="nav-link-text">Investor Relations</span>
          </div>

          <div className="user-controls">
            <div className="action-item">
              <User size={22} />
              <span className="action-label">Profile</span>
            </div>
            <div className="action-item">
              <ShoppingCart size={22} />
              <span className="action-label">Cart</span>
            </div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
