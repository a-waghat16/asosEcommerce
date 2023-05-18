import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import SeeSimilar from "../SeeSimilar/SeeSimilar";
import Gallery from "../Gallery/Gallery";
import { options } from "../../utils/fetchData";
import { fetchData } from "../../utils/fetchData";
import "./ProductInfo.css";

const ProductInfo = () => {
  const [textVisibility, setTextVisibility] = useState(Array(5).fill(false));
  const [textSign, setTextSign] = useState(Array(5).fill("+"));
  const [itemData, setItemData] = useState();
  const [quantity, setQuantity] = useState(0);

  const { id } = useParams();

  const url = `https://asos2.p.rapidapi.com/products/v3/detail?id=${id}&lang=en-GB&store=COM&sizeSchema=UK&currency=GBP`;

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchItemData = async () => {
      const response = await fetchData(url, options);
      setItemData(response);
    };

    fetchItemData();
  }, [url]);

  const handleClick = (index) => {
    const updatedVisibility = [...textVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setTextVisibility(updatedVisibility);

    const updatedTextSign = [...textSign];
    updatedTextSign[index] = updatedTextSign[index] === "+" ? "-" : "+";
    setTextSign(updatedTextSign);
  };

  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const subtractQuantity = () => {
    if (quantity === 0) {
      window.alert("Cannot go below zero quantity");
    } else {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = (product) => {
    const productRefined = {
      id: product.id,
      name: product.name,
      price: product.price.current.value,
      quantity: quantity,
      imageUrl: product.media.images[0].url,
    };

    addToCart(productRefined);
  };

  return (
    <div>
      <div className="navigation-breadcrumb">
        <h3>
          <Link style={{ color: "#e7f43d" }} to="/">
            Home
          </Link>{" "}
          /{" "}
          <Link style={{ color: "#e7f43d" }} to="/products">
            Clothing{" "}
          </Link>
          / {itemData ? itemData.brand.name : "Brand"}
        </h3>
      </div>
      <div className="product-overview">
        <Gallery itemData={itemData} />
        <div className="layout-aside">
          <div>
            <h2 className="name">{itemData ? itemData.name : "Fetching Name"}</h2>
            <h4 className="price">{itemData ? itemData.price.current.text : "Fetching Price"}</h4>
            <div className="quantity">
              <p>quantity</p>
              <div>
                <p className="change" onClick={addQuantity}>
                  +
                </p>
                <p>{quantity}</p>
                <p className="change" onClick={subtractQuantity}>
                  -
                </p>
              </div>
            </div>
            <Link
              className="product-button"
              to="/checkout"
              onClick={() => {
                handleAddToCart(itemData);
              }}
            >
              <h4>Add to bag</h4>
            </Link>
          </div>
          <div className="additional-info">
            <div className="additional-info-child">
              <div className="additional-info-title">
                <h4>Description</h4>
                <p onClick={() => handleClick(0)}>{textSign[0]}</p>
              </div>
              <div
                className={`additional-info-text ${textVisibility[0] ? "show" : ""}`}
                dangerouslySetInnerHTML={{
                  __html: itemData ? itemData.description : "fetching item description",
                }}
              ></div>
            </div>
            <div className="additional-info-child">
              <div className="additional-info-title">
                <h4>Brand</h4>
                <p onClick={() => handleClick(1)}>{textSign[1]}</p>
              </div>
              <div
                className={`additional-info-text ${textVisibility[1] ? "show" : ""}`}
                dangerouslySetInnerHTML={{ __html: itemData ? itemData.brand.description : "fetching brand description" }}
              ></div>
            </div>
            <div className="additional-info-child">
              <div className="additional-info-title">
                <h4>About Me</h4>
                <p onClick={() => handleClick(2)}>{textSign[2]}</p>
              </div>
              <div
                className={`additional-info-text ${textVisibility[2] ? "show" : ""}`}
                dangerouslySetInnerHTML={{ __html: itemData ? itemData.info.aboutMe : "fetching info About Me" }}
              ></div>
            </div>
            <div className="additional-info-child">
              <div className="additional-info-title">
                <h4>Size Guide</h4>
                <p onClick={() => handleClick(3)}>{textSign[3]}</p>
              </div>
              <div
                className={`additional-info-text ${textVisibility[3] ? "show" : ""}`}
                dangerouslySetInnerHTML={{ __html: itemData ? itemData.info.sizeAndFit : "Fetching size info" }}
              ></div>
            </div>
            <div className="additional-info-child">
              <div className="additional-info-title">
                <h4>Care Info</h4>
                <p onClick={() => handleClick(4)}>{textSign[4]}</p>
              </div>
              <div
                className={`additional-info-text ${textVisibility[4] ? "show" : ""}`}
                dangerouslySetInnerHTML={{ __html: itemData ? itemData.info.careInfo : "fetching care info" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <SeeSimilar itemData={itemData} />
    </div>
  );
};

export default ProductInfo;
