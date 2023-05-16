import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../../fonts.css";
import "./Navbar.css";

const Navbar = (props) => {
  const color = props.isHome ? "white" : "#111111";
  const navbarClass = props.isHome ? 'home-page' : 'other-page';
  return (
    <nav className={`navbar ${navbarClass}`} style={{ color: { color } }}>
      <div>
        <h4>N&A</h4>
      </div>
      <ul className="navlinks">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <li>
            <NavLink className="nav-link-w nav-link" to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link-m nav-link" to="/products">
              CLOTHING
            </NavLink>
          </li>
          <li>
            <NavLink to="/checkout">
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
