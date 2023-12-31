import { Barbell } from "@phosphor-icons/react";
import Button from "./Button";

function Workout({ workout, selectedWorkout, dispatch, workoutId }) {
  const isSelected = selectedWorkout?.id === workout.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <div className="icon">
        <Barbell color="#484C52" weight="fill" size={32} />
      </div>
      <div className="info">
        <span>{workout.muscle}</span>
        <span>{workout.date}</span>
      </div>
      <div className="btns-container">
        <Button
          classStyle={"button"}
          onClick={() =>
            dispatch({ type: "setSelectedWorkout", payload: workout })
          }
        >
          {isSelected ? "Close" : "Select"}
        </Button>
        <Button
          classStyle={"btn-delete"}
          onClick={() =>
            dispatch({ type: "deleteWorkout", payload: workoutId })
          }
          btnDisabled={selectedWorkout?.id === workout.id && "true"}
        >
          X
        </Button>
      </div>
    </li>
  );
}

export default Workout;
