import React from "react";
import Heading from "../components/Heading";

const Dashboard = () => {
  return (
    <div className="relative">
      <Heading
        title="Dashboard"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      />
      <div className="absolute bottom-10 left-[480px]">
        <button className="btn mr-4 ">Cart</button>
        <button className="btn">Wishlist</button>
      </div>
    </div>
  ); 
};

export default Dashboard;
