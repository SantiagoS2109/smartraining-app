import { Circle } from "@phosphor-icons/react";
// import Button from "./Button";
import Set from "./Set";
import { useState } from "react";

function Exercise({ exercise, title, sets, selectedWorkout }) {
  // const sets = selectedWorkout.exercises;
  // console.log(sets);
  // console.log("////////////////////////////////");

  // const sets = [{}];

  console.log(exercise);
  console.log(sets);

  return (
    <li className="exercise">
      <div className="exercise-title">
        <Circle weight="bold" size={28} />
        <h2>{title}</h2>
      </div>

      <div>
        <div className="reps-label">
          <p className="reps">Reps</p>
          <p>Weight</p>
        </div>
        <ul>
          {sets.map((set, i) => (
            <Set
              num={i}
              key={set.setId}
              initialReps={set.reps}
              initialPeso={set.peso}
            ></Set>
          ))}
          {/* <Button classStyle={"button-serie"}>+</Button> */}
        </ul>
      </div>
    </li>
  );
}

export default Exercise;
