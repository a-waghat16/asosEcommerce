import React from "react";
import "./ProductsCard.css";
import { Link } from "react-router-dom";

const ProductsCard = (props) => {
  const url = `/productdetail/${props.id}`;
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link className="card" to={url} onClick={handleClick}>
      <div className="img-card">
        <img src={`https://${props.imageUrl}`} alt="item" />
      </div>
      <div className="product-name">{props.name}</div>
      <div className="product-price">{props.price}</div>
    </Link>
  );
};

export default ProductsCard;
