import React from "react";
import { Span } from "reactyons";

const Percentage = ({ children: percentage, ...props }) => {
  const p = Math.abs(Math.floor(percentage));
  const ui = { green: percentage >= 0, red: percentage < 0 };

  return (
    <Span {...ui} {...props}>{p}%</Span>
  );
};

export default Percentage;
