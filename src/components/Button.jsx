import React from "react";

export const Button = ({ text, color }) => {
  const estilo = {
    backgroundColor: color,
    color: "white",
    padding: "10px",
    border: "none",
  };

  return <button style={estilo}>{text}</button>;
};
