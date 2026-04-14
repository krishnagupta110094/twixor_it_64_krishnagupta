import React from "react";
import Navbar from "../components/navbar/Navbar";
import CategoryNav from "../components/categoryNav/CategoryNav";
import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import TopCategories from "../components/topCategory/TopCategory";
import PopularBanner from "../components/popularSection/banner/PopularBanner";
import PopularProduct from "../components/popularSection/products/PopularProduct";
import Footer from "../components/footer/Footer";
import MainProductPage from "../components/productSection/MainProductPage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CategoryNav />
      <Hero />
      <Features />
      <PopularBanner />
      <PopularProduct />
      <TopCategories />
      <MainProductPage />
      <Footer />
    </div>
  );
};

export default Home;
