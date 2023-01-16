import React, { useState } from "react";
import "./coin.css";
const Coin = () => {
  const sides = ["head", "tail"];
  const [flips, setFlips] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [side, setSide] = useState("");
  const [roll, setRoll] = useState(false);

  const toggleCoin = () => {
    const randIdx = Math.floor(Math.random() * 2);
    console.log(randIdx);
    setSide(sides[randIdx]);
    setFlips(flips + 1);
    side === "head" ? setHeads(heads + 1) : setTails(tails + 1);
    setRoll(!roll)
    setTimeout(() => {
      setRoll(roll)
    }, 2000)
  };

  return (
    <>
    <div className="coin">
      <h1>Let's flip a coin</h1>
      <button onClick={toggleCoin} disabled={roll}>Flip Me!!!</button>
      <div className="coinImg">
          <span className={`${side} ${roll ? 'roll' : ''}`}>
            {roll ? 'Tossing' : side}
        </span>
      </div>
      <p>
        Out of {flips} flips, there are {heads} heads and {tails} tails
      </p>
    </div>
    </>
  );
};

export default Coin;
