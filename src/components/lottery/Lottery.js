import React, { useState } from "react";
import Ball from "./Ball";
import "./lottery.css";

const Lottery = ({ title = "Lotto", maxNum = 30, maxBalls = 6 }) => {
  const [nums, setNums] = useState(Array.from({ length: maxBalls }, () => 0));

  const handleClick = () => {
    setNums(
      Array.from(
        { length: maxBalls },
        () => Math.floor(Math.random() * maxNum) + 1
      )
    );
  };

  return (
    <div className="lottery">
      <h1>{title}</h1>
      <div className="ballContainer">
        {nums.map((n, i) => (
          <Ball key={i} num={n} />
        ))}
      </div>
      <button onClick={handleClick}>Generate</button>
    </div>
  );
};

export default Lottery;
