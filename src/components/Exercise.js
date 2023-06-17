import { Circle } from "@phosphor-icons/react";
import Button from "./Button";
import Serie from "./Serie";

function Exercise({ exercise, series }) {
  return (
    <div className="exercise">
      <div className="exercise-title">
        <Circle weight="bold" size={28} />
        <h2>{exercise}</h2>
      </div>
      <ul>
        <Serie />
        <Serie />
        <Serie />
        <Button classStyle={"button-serie"}>+</Button>
      </ul>
    </div>
  );
}

export default Exercise;
