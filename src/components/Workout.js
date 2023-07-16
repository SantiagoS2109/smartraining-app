import { Barbell } from "@phosphor-icons/react";
import Button from "./Button";

function Workout({ workout, onSelection, selectedWorkout }) {
  const isSelected = selectedWorkout?.id === workout.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <div className="icon">
        <Barbell color="#484C52" weight="fill" size={42} />
      </div>
      <div className="info">
        <span>{workout.muscle}</span>
        <span>{workout.date}</span>
      </div>
      <div className="button">
        <Button onClick={() => onSelection(workout)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </div>
    </li>
  );
}

export default Workout;
