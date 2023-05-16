import React from "react";
import "./ProductsCard.css";

const ProductsCard = (props) => {
  return (
    <div className="card">
      <div className='img-card'>
        <img src={`https://${props.imageUrl}`}  alt='item'/>
      </div>
      <div className="product-name">{props.name}</div>
      <div className="product-price">{props.price}</div>
    </div>
  );
};

export default ProductsCard;
