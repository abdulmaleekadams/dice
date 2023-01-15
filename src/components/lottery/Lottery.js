import React, { useState } from "react";
import Ball from "./Ball";
import "./lottery.css";
const Lottery = ({ title = "Lotto", maxNum = 30, maxBalls = 6 }) => {
  const [nums, setNums] = useState([]);
  return (
    <div className="lottery">
      <h1>{title}</h1>
      <div className="ballContainer">
        <Ball num={8} />
        <Ball num={8} />
        <Ball num={8} />
        <Ball num={8} />
        <Ball num={8} />
      </div>
    </div>
  );
};

export default Lottery;
