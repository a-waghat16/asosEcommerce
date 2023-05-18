import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <Navbar isHome={false} />
      <div className="navigation-breadcrumb">
        <h3>
          <Link to="/">Home</Link> / Clothing{" "}
        </h3>
      </div>
      <ProductsContainer />
    </div>
  );
};

export default Products;
