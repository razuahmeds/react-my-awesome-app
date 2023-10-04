import React from "react";
import "../style/banner.css";
import img1 from "../img/single-slide-hm1-2.png";

function Banner() {
  return (
    <div className="Banner-container">
      <div className="text">
        <h1>iPhone</h1>
        <button className="Banner-btn">Phone price</button>
      </div>
      <div className="imgs">
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default Banner;
