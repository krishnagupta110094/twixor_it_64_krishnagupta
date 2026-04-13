import React from 'react';
import './Features.css';
import { RotateCcw, Wallet, Tag } from 'lucide-react';
import { motion } from 'motion/react';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <RotateCcw size={20} className="feature-icon pink" />,
      text: "7 Days Easy Return",
    },
    {
      id: 2,
      icon: <Wallet size={20} className="feature-icon pink" />,
      text: "Cash on Delivery",
    },
    {
      id: 3,
      icon: <Tag size={20} className="feature-icon pink" />,
      text: "Lowest Prices",
    },
  ];

  return (
    <motion.div className="features-section"
    initial={{ opacity: 0 , scale: 0.97 }}
      animate={{ opacity: 1 , scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="features-container">
        {features.map((item) => (
          <div key={item.id} className="feature-item">
            {item.icon}
            <span className="feature-text">{item.text}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Features;