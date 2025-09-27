import React from "react";

export const ListProducts = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
};
