import React from "react";
import { laptopData } from "../laptopdate/Date";
import "../styles/laptopDetails.css";
import { Link } from "react-router-dom";

function LaptopDetails() {
  return (
    <div className="Details-container">
      <div className="Details-deals-container">
        <div className="laptop-container">
          {laptopData?.map((item) => {
            return (
              <div key={item.id} className="sale-items">
                <img src={item.img} alt="" />
                <h4>{item.title}</h4>
                <div className="button">
                  <Link to={`/Laptop-CardInfo/${item.id}`}>
                    {" "}
                    <button>Details</button>
                  </Link>
                  <h4> {item.price} </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LaptopDetails;
