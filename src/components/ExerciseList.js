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
  // const [curExercises, setCurExercises] = useState(selectedWorkout.exercises);
  const [titleExercise, setTitleExercise] = useState("");

  // console.log(curExercises);
  // console.log(selectedWorkout.exercises);
  // const workoutExercises = selectedWorkout.exercises;

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

    const prueba = [...selectedWorkout.exercises, newExercise];
    setSelectedWorkout({ ...selectedWorkout, exercises: prueba });

    console.log(prueba);
    console.log(selectedWorkout);

    const updatedWorkouts = workouts.map((workout) =>
      workout?.id === selectedWorkout?.id
        ? {
            ...workout,
            exercises: selectedWorkout.exercises,
          }
        : workout
    );

    setWorkouts(updatedWorkouts);

    // setWorkouts([...workouts]);

    // setWorkouts();

    // const yepa = workouts.map((workout) => {
    //   workout.id === selectedWorkout.id ? workout : false;
    // });

    // console.log(yepa);
    // console.log(yepa[0].exercises);

    // // yepa[0].exercises.push(newExercise);

    // console.log(yepa[0].exercises);
    ///////////////////////////////////////

    // setCurExercises((cur) => [...cur, newExercise]);

    setTitleExercise("");
    onShowFormAddExercise();
  }

  console.log(selectedWorkout);

  return (
    <div className="exercises">
      <div className="form-add form-add-exercise">
        <div className="exercises-title">
          <Logo>{`Exercises ${selectedWorkout.muscle}`}</Logo>
        </div>
        <div className="exercises-list">
          {/* {console.log(curExercises)} */}
          {/* {curExercises.map((exercise) => console.log(exercise))} */}
          {selectedWorkout.exercises.map((exercise) => (
            <Exercise
              exercise={exercise}
              title={exercise.exercise}
              series={exercise.series}
              selectedWorkout={selectedWorkout}
              key={exercise.exerciseId}
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
