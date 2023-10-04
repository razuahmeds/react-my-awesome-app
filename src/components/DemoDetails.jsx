import React from "react";
import "../style/DemoDetails.css";
import { useParams } from "react-router-dom";
import { getSignData } from "../helpers/demoData";

function DemoDetails() {
  const id = useParams().id;

  const {
    title,
    img,
    Display,
    Camera,
    OS,
    RAM,
    ROM,
    Battery,
    price,
    description,
  } = getSignData(Number(id));

  return (
    <div className="dtails">
      <img src={img} alt="" style={{ width: "400px" }} />

      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Display : {Display}</p>
        <h4> Camera : {Camera}</h4>
        <h4> Os : {OS}</h4>
        <h4> Ram : {RAM}</h4>
        <h4> Rom : {ROM}</h4>
        <h4> Battery : {Battery}</h4>
        <h5> price : {price}</h5>
      </div>
    </div>
  );
}

export default DemoDetails;
