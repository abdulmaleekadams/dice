import React, { useState } from "react";
import Die from "../Die/Die";
import "./RollDie.css";

const RollDie = () => {
  const sides = ["one", "two", "three", "four", "five", "six"];
  const [die1, setDie1] = useState("one");
  const [die2, setDie2] = useState("one");
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    setDie1(newDie1);
    setDie2(newDie2);
    setRolling(!rolling);

    setTimeout(() => {
      setRolling(rolling);
    }, 1000);
  };

  return (
    <div className="rollDie">
      <div className={`${rolling && "roll"} rollDieContainer`}>
        <Die face={die1} />
        <Die face={die2} />
      </div>
      <button onClick={roll} disabled={rolling}>
        {rolling ? "Rolling..." : "Roll Dice"}
      </button>
    </div>
  );
};

export default RollDie;
