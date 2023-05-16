import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import "./Products.css";

const Products = () => {
  return (
    <div>
      <Navbar isHome={false} />
      <div className="navigation-breadcrumb">
        <h3>Home / Clothing </h3>
      </div>
      <ProductsContainer />
    </div>
  );
};

export default Products;
