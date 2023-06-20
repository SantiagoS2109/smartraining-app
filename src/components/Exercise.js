import { Circle } from "@phosphor-icons/react";
import Button from "./Button";
import Serie from "./Serie";

function Exercise({ title, series, selectedWorkout }) {
  // const sets = selectedWorkout.exercises;
  // console.log(sets);
  // console.log("////////////////////////////////");

  return (
    <div className="exercise">
      <div className="exercise-title">
        <Circle weight="bold" size={28} />
        {console.log(title)}
        <h2>{title}</h2>
      </div>
      <ul>
        <div className="sets-label">
          <p className="sets">Sets</p>
          <p>Weight</p>
        </div>
        <Serie />
        <Serie />
        <Serie />
        <Button classStyle={"button-serie"}>+</Button>
      </ul>
    </div>
  );
}

export default Exercise;
