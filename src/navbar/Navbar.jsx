import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <h1>iPhone .</h1>
      <div className="text-container">
        <Link className="link-btn" to={"/"}>
          Home
        </Link>
        <Link className="link-btn" to={"/"}>
          Shop
        </Link>
        <Link className="link-btn" to={"/"}>
          Collection
        </Link>
        <Link className="link-btn" to={""}>
          Pages
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
