import { Circle } from "@phosphor-icons/react";
import Set from "./Set";

function Exercise({ exercise }) {
  return (
    <li className="exercise">
      <div className="exercise-title">
        <Circle weight="bold" size={28} />
        <h2>{exercise.title}</h2>
      </div>

      <div>
        <div className="reps-label">
          <p className="reps">Reps</p>
          <p>Weight</p>
        </div>
        <ul>
          {exercise.sets.map((set, i) => (
            <Set key={set.setId} num={i} set={set}></Set>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default Exercise;
