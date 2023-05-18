import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const Gallery = ({ itemData }) => {
  const [mainImageUrl, setMainImageUrl] = useState(itemData ? `https://${itemData.media.images[0].url}` : "fetching image");

  useEffect(() => {
    setMainImageUrl(itemData ? `https://${itemData.media.images[0].url}` : "");
  }, [itemData]);

  const changeUrl = (url) => {
    setMainImageUrl(url);
  };

  return (
    <div className="gallery">
      <Link className="product-button" to="/products">
        <h4>Back to products</h4>
      </Link>
      <div className="product-gallery">
        <div className="product-img">
          <img src={mainImageUrl} alt="item" />
        </div>
        <div className="small-images">
          <div className="small-image">
            <img
              onClick={() => changeUrl(itemData ? `https://${itemData.media.images[0].url}` : "fetching image")}
              src={itemData ? `https://${itemData.media.images[0].url}` : "fetching image"}
              alt="sub-1"
            />
          </div>
          <div className="small-image">
            <img
              onClick={() => changeUrl(itemData ? `https://${itemData.media.images[1].url}` : "fetching image")}
              src={itemData ? `https://${itemData.media.images[1].url}` : "fetching image"}
              alt="sub-2"
            />
          </div>
          <div className="small-image">
            <img
              onClick={() => changeUrl(itemData ? `https://${itemData.media.images[2].url}` : "fetching image")}
              src={itemData ? `https://${itemData.media.images[2].url}` : "fetching image"}
              alt="sub-3"
            />
          </div>
          <div className="small-image">
            <img
              onClick={() => changeUrl(itemData ? `https://${itemData.media.images[3].url}` : "fetching image")}
              src={itemData ? `https://${itemData.media.images[3].url}` : "fetching image"}
              alt="sub-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
