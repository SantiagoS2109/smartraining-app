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
        <h2>{title}</h2>
      </div>

      {/* ESTE DIV ERA UN <UL></UL>, SI DA PROBLEMA, CAMBIAR DE VUELTA */}
      <div>
        <div className="sets-label">
          <p className="sets">Sets</p>
          <p>Weight</p>
        </div>
        <Serie />
        <Serie />
        <Serie />
        <Button classStyle={"button-serie"}>+</Button>
      </div>
    </div>
  );
}

export default Exercise;
