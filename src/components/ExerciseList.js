import Button from "./Button";
import Exercise from "./Exercise";
import FormAddExercise from "./FormAddExercise";
import Logo from "./Logo";
import { useState } from "react";

function ExerciseList({
  workouts,
  showFormAddExercise,
  onShowFormAddExercise,
  selectedWorkout,
  generateId,
  setWorkouts,
  setSelectedWorkout,
}) {
  const [curExercises, setCurExercises] = useState(selectedWorkout.exercises);
  const [titleExercise, setTitleExercise] = useState("");

  console.log(curExercises);
  console.log(selectedWorkout.exercises);
  const workoutExercises = selectedWorkout.exercises;

  console.log("///////////////////////////////////////");

  function handleSubmit(e) {
    e.preventDefault();

    if (!titleExercise) return;

    // curExercises.map((exercise) => console.log(exercise));

    const newExercise = {
      exerciseId: generateId(),
      exercise: titleExercise,
      series: [
        {
          seriesId: generateId(),
          reps: 0,
          peso: 0,
        },
      ],
    };

    workoutExercises.push(newExercise);

    // setSelectedWorkout([...selectedWorkout.exercises, newExercise]);

    console.log(selectedWorkout.exercises);

    setCurExercises((cur) => [...cur, newExercise]);
    // setCurExercises((exercises) => [...exercises, newExercise]);

    // onAddExercise();

    // onSetShowFormAddExercise(false);
    setTitleExercise("");
    onShowFormAddExercise();
  }

  return (
    <div className="exercises">
      <div className="form-add form-add-exercise">
        <div className="exercises-title">
          <Logo>{`Exercises ${selectedWorkout.muscle}`}</Logo>
        </div>
        <div className="exercises-list">
          {curExercises.map((exercise) => console.log(exercise))}
          {curExercises.map((exercise) => (
            <Exercise
              exercise={exercise}
              title={exercise.exercise}
              series={exercise.series}
              selectedWorkout={selectedWorkout}
              key={exercise.Id}
            />
          ))}
        </div>
        {showFormAddExercise && (
          <FormAddExercise
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
