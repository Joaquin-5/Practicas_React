import React from "react";
import { Button } from "./Button";

export const Card = ({ title, description, buttonText }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <Button text={buttonText} color={"blue"} />
    </>
  );
};
