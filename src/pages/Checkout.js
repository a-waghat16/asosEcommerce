import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Cart from "../components/Cart/Cart";

const Checkout = () => {
  return (
    <div>
      <Navbar isHome={false} />
      <div className="navigation-breadcrumb">
        <h3>
          <Link style={{ color: "#e7f43d" }} to="/">
            Home
          </Link>{" "}
          / Cart{" "}
        </h3>
      </div>
      <Cart />
    </div>
  );
};

export default Checkout;
