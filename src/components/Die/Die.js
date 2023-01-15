import React from "react";
import "./Die.css";
const Die = ({ face }) => {
  return <i class={`die fas fa-dice-${face}`}></i>;
};

export default Die;
