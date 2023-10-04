import React from "react";
import { demoData } from "../laptopdate/demoData";
import LaptopCardInfo from "./LaptopCardInfo";

function LaptopCardDemo() {
  return (
    <div className="components">
      {demoData.map((item, index) => {
        return <LaptopCardInfo item={item} key={index} />;
      })}
    </div>
  );
}

export default LaptopCardDemo;
