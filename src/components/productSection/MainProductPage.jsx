import React from 'react';
import Sidebar from './Sidebar';
import ProductGrid from './ProductGrid';
import './MainProductPage.css';

const MainProductPage = () => {
  return (
    <div className="page-wrapper">
      <div className="content-container">
        <h1 className="main-heading">Products For You</h1>
        <div className="layout-body">
          <Sidebar />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default MainProductPage;