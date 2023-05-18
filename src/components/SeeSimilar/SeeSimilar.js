import React, { useEffect, useState } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import { productData } from "../../utils/productData";
import "./SeeSimilar.css";

const SeeSimilar = (props) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (props.itemData) {
      const filtered = productData.products.filter((product) => {
        return product.brandName === props.itemData.brand.name;
      });
      setFilteredProducts(filtered);
    }
  }, [props.itemData]);

  return (
    <div>
      <div className="see-more-title">
        <h4>See More From {props.itemData ? props.itemData.brand.name : "Brand"}</h4>
      </div>
      <div className="container">
        {filteredProducts ? (
          filteredProducts.map((product) => (
            <ProductsCard key={product.id} id={product.id} name={product.name} imageUrl={product.imageUrl} price={product.price.current.text} />
          ))
        ) : (
          <p>Finding products.</p>
        )}
      </div>
    </div>
  );
};

export default SeeSimilar;
