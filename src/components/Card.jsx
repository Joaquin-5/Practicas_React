import React from "react";
import { Button } from "./Button";

export const Card = ({ title, description, buttonText }) => {
  function explore() {
    console.log("Explorando: " + title);
  }

  return (
    <div className="card">
      <h1>{title}</h1>
      <p className="project-description__p">{description}</p>
      <Button text={buttonText} color={"#d47676"} onClick={explore} />
    </div>
  );
};
