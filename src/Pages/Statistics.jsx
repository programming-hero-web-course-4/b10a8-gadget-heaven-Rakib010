import React from "react";
import Heading from "../components/Heading";
import { Helmet } from "react-helmet";

const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>Statistic | GadgetHeaven</title>
      </Helmet>
      <Heading
        title="Statistics"
        subtitle="Join a community of tech enthusiasts with over 10,000 satisfied customers and a 4.8-star average rating. With 95% reporting increased convenience and productivity, our gadgets are designed to enhance every experience"
      ></Heading>
    </div>
  );
};

export default Statistics;
