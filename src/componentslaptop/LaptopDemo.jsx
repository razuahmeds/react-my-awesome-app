import React from "react";
import "../styles/laptopDemo.css";
import { useParams } from "react-router-dom";
import { laptopsData } from "../laptopdate/Date";

function LaptopDemo() {
  const id = useParams().id;

  const {
    title,
    img,
    Storage,
    RAM,
    Graphics,
    Display,
    Feature,
    price,
    description,
  } = laptopsData(Number(id));

  return (
    <div className="dtails">
      <img src={img} alt="" style={{ width: "400px" }} />

      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Storage : {Storage}</p>
        <h4> Graphics : {Graphics}</h4>
        <h4> Ram : {RAM}</h4>
        <h4> Feature : {Feature}</h4>
        <h4> Display : {Display}</h4>
        <h5> price : {price}</h5>
      </div>
    </div>
  );
}

export default LaptopDemo;
