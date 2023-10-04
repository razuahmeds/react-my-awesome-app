import React from "react";
import { Link } from "react-router-dom";

function LaptopCardInfo({ item }) {
  return (
    <div className="laptop-demodate">
      <h2 className="titel">{item.title}</h2>
      <img className="img-container" src={item.img} alt="" />
      <i className="date">{item.pages}</i>
      <button className="btn">
        <Link to={`/Laptop-CardInfo/${item.id}`}>Buy now</Link>
      </button>
    </div>
  );
}

export default LaptopCardInfo;
