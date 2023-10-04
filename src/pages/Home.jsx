import React from "react";
import Banner from "../components/Banner";
import DailyDeals from "../components/DailyDeals";
import LaptopDetails from "../componentslaptop/LaptopDetails";
import LaptopBanner from "../componentslaptop/LaptopBanner";

function Home() {
  return (
    <div>
      <Banner />
      <DailyDeals />
      <LaptopBanner />
      <LaptopDetails />
    </div>
  );
}

export default Home;
