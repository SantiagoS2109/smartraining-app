import { Circle } from "@phosphor-icons/react";
import Set from "./Set";
import Button from "./Button";

function Exercise({ exercise, dispatch }) {
  return (
    <li className="exercise">
      <div className="exercise-sidebar">
        <Button
          classStyle={"btn-delete"}
          onClick={() =>
            dispatch({ type: "deleteExercise", payload: exercise.exerciseId })
          }
        >
          X
        </Button>

        <div className="exercise-title">
          <Circle weight="bold" size={28} />
          <h2>{exercise.title}</h2>
        </div>
      </div>

      <div>
        <div className="reps-label">
          <p className="reps">Reps</p>
          <p>Weight</p>
        </div>
        <ul>
          {exercise.sets.map((set, i) => (
            <Set
              key={set.setId}
              index={i}
              set={set}
              dispatch={dispatch}
              exerciseId={exercise.exerciseId}
            ></Set>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default Exercise;
