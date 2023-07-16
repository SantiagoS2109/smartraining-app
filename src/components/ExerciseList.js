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
  const [titleExercise, setTitleExercise] = useState("");

  const newExercise = {
    exerciseId: generateId(),
    title: titleExercise,
    sets: [
      {
        setId: 1,
        reps: 12,
        peso: 5,
      },
      {
        setId: 2,
        reps: 10,
        peso: 7,
      },
      {
        setId: 3,
        reps: 8,
        peso: 9,
      },
      {
        setId: 4,
        reps: 6,
        peso: 10,
      },
    ],
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!titleExercise) return;

    const updatedExercises = [...selectedWorkout.exercises, newExercise];
    setSelectedWorkout({ ...selectedWorkout, exercises: updatedExercises });

    // console.log(updatedExercises);
    // console.log(selectedWorkout);

    const updatedWorkouts = workouts.map((workout) =>
      workout?.id === selectedWorkout?.id
        ? {
            ...workout,
            exercises: selectedWorkout.exercises,
          }
        : workout
    );

    console.log(workouts);
    setWorkouts((workouts) =>
      workouts.map((workout) =>
        workout?.id === selectedWorkout?.id
          ? {
              ...workout,
              exercises: selectedWorkout.exercises,
            }
          : workout
      )
    );

    setTitleExercise("");
    onShowFormAddExercise();
  }

  console.log(selectedWorkout);

  return (
    <div className="exercises">
      <div className="form-add form-add-exercise">
        <div className="exercises-title">
          <Logo>{`${selectedWorkout.muscle} workout`}</Logo>
          <span>{selectedWorkout.date}</span>
        </div>
        <ul className="exercises-list">
          {/* {console.log(curExercises)} */}
          {/* {curExercises.map((exercise) => console.log(exercise))} */}
          {/* {selectedWorkout.exercises.map((exercise) => (
            <Exercise
              key={exercise.exerciseId}
              exercise={exercise}
              selectedWorkout={selectedWorkout}
            />
          ))} */}
          {workouts.map(
            (workout) =>
              workout.id === selectedWorkout.id &&
              workout.exercises.map((exercise) => (
                <Exercise
                  key={exercise.exerciseId}
                  exercise={exercise}
                  selectedWorkout={selectedWorkout}
                />
              ))
          )}
        </ul>
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
