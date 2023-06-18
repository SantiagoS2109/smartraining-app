import { useState } from "react";
import Button from "./Button";
import Exercise from "./Exercise";
import FormAddExercise from "./FormAddExercise";
import Logo from "./Logo";

function ExerciseList({
  workouts,
  showFormAddExercise,
  onShowFormAddExercise,
  selectedWorkout,
  generateId,
}) {
  // const curExercises = selectedWorkout.exercises;

  const [curExercises, setCurExercises] = useState(selectedWorkout.exercises);
  const [titleExercise, setTitleExercise] = useState("");

  console.log(curExercises);

  function handleSubmit(e) {
    e.preventDefault();

    if (!titleExercise) return;

    const newExercise = {
      exerciseId: generateId,
      exercise: titleExercise,
      series: [
        {
          seriesId: generateId,
          reps: 0,
          peso: 0,
        },
      ],
    };

    setCurExercises((cur) => [...cur, newExercise]);
  }

  // const [exercise, setExercise] = useState(selectedWorkout);

  // function handleAddExercise() {}

  return (
    <div className="form-add form-add-exercise">
      <div className="exercises">
        <div className="exercises-title">
          <Logo>{`Exercises ${selectedWorkout.muscle} `}</Logo>
        </div>
        <div className="exercises-list">
          {/* {selectedWorkout.exercises.map((exercise) =>
            exercise.map((exercise) => (
              <Exercise exercise={exercise.exercise} series={exercise.series} />
            ))
          )} */}
          {curExercises.map((exercise) => (
            <Exercise exercise={exercise.exercise} series={exercise.series} />
          ))}
        </div>
        {showFormAddExercise && (
          <FormAddExercise
            generateId={generateId}
            titleExercise={titleExercise}
            onSetTitleExercise={setTitleExercise}
            onHandleSubmit={handleSubmit}
          />
        )}
        <Button classStyle={"button-exercise"} onClick={onShowFormAddExercise}>
          {showFormAddExercise ? "Cerrar" : "Agregar ejercicio"}
        </Button>
      </div>
    </div>
  );
}

export default ExerciseList;
