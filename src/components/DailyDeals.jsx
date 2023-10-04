import React from "react";
import { demoData } from "../helpers/demoData";
import "../style/DailyDeals.css";
import { Link } from "react-router-dom";

function DailyDeals() {
  return (
    <div className="-daily-container">
      <div className="daily-deals-container">
        <div className="img-container">
          {demoData?.map((item) => {
            return (
              <div key={item.id} className="sale-items">
                <img src={item.img} alt="" />
                <h4>{item.title}</h4>
                <div className="button">
                  <Link to={`/card-info/${item.id}`}>
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

export default DailyDeals;
