import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductInfo from "../components/ProductInfo/ProductInfo";

const ProductDetail = () => {
  return (
    <div>
      <Navbar isHome={false}/>
      <ProductInfo />
    </div>
  );
};

export default ProductDetail;
