import { useState } from "react";

import Logo from "./Logo";
import WorkoutList from "./WorkoutList";
import Button from "./Button";
import ExerciseList from "./ExerciseList";
import FormAddWorkout from "./FormAddWorkout";

// {
//   id: 118836,
//   muscle: "Upper Body",
//   date: "02/06/23",
//   exercises: [
//     {
//       exerciseId: 1,
//       exercise: "Push-Ups",
//       series: [
//         {
//           seriesId: 1,
//           reps: 12,
//           peso: 5,
//         },
//       ],
//     },
//     // {
//     //   exerciseId: 2,
//     //   exercise: "Pull-Ups",
//     //   series: [
//     //     {
//     //       seriesId: 1,
//     //       reps: 10,
//     //       peso: 10,
//     //     },
//     //   ],
//     // },
//   ],
// },
// {
//   id: 933372,
//   muscle: "Lower Body",
//   date: "03/06/23",
//   exercises: [
//     {
//       exerciseId: 1,
//       exercise: "Quads",
//       series: [
//         {
//           seriesId: 1,
//           reps: 12,
//           peso: 5,
//         },
//       ],
//     },
//     // {
//     //   exerciseId: 2,
//     //   exercise: "Leg Extension",
//     //   series: [
//     //     {
//     //       seriesId: 1,
//     //       reps: 10,
//     //       peso: 10,
//     //     },
//     //   ],
//     // },
//   ],
// },
// {
//   id: 499476,
//   muscle: "Cardio",
//   date: "12/06/23",
//   exercises: [
//     {
//       exerciseId: 1,
//       exercise: "Run",
//       series: [
//         {
//           seriesId: 1,
//           reps: 12,
//           peso: 5,
//         },
//       ],
//     },
//     // {
//     //   exerciseId: 2,
//     //   exercise: "Rope Jump",
//     //   series: [
//     //     {
//     //       seriesId: 1,
//     //       reps: 10,
//     //       peso: 10,
//     //     },
//     //   ],
//     // },
//   ],
// },

let initialWorkouts = [];

function App() {
  getLocalStorage();

  const [workouts, setWorkouts] = useState(initialWorkouts);
  const [showAddWorkout, setShowAddWorkout] = useState(false);
  const [showFormAddExercise, setShowFormAddExercise] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  function handleShowAddWorkout() {
    setShowAddWorkout((show) => !show);
  }

  function handleAddWorkout(newWorkout) {
    setWorkouts((workouts) => [...workouts, newWorkout]);
    setShowAddWorkout(false);

    setLocalStorage();
  }

  function handleSetShowFormAddExercises() {
    setShowFormAddExercise((show) => !show);
  }

  function handleSelection(workout) {
    setSelectedWorkout((cur) => (cur?.id === workout.id ? null : workout));

    showAddWorkout && setShowAddWorkout(false);

    workout.exercises.length === 0 && setShowFormAddExercise(true);
  }

  function generateId() {
    return crypto.randomUUID();
  }

  function handleCleanWorkouts() {
    initialWorkouts = [];
    setWorkouts(initialWorkouts);

    setLocalStorage();
  }

  // --------------------- Get & Set Local Storage ---------------------------

  function setLocalStorage() {
    localStorage.setItem("initialWorkouts", JSON.stringify(workouts));
  }

  function getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("initialWorkouts"));

    if (!data) return;

    initialWorkouts = data;
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Logo>Workouts</Logo>
        <WorkoutList
          workouts={workouts}
          selectedWorkout={selectedWorkout}
          onSelection={handleSelection}
          // onShowFormAddExercises={handleShowFormAddExercises}
        />
        {showAddWorkout && <FormAddWorkout onAddWorkout={handleAddWorkout} />}
        <Button
          classStyle={"button-gray mb--16"}
          onClick={handleShowAddWorkout}
        >
          {!showAddWorkout ? "Nueva sesión" : "Cerrar"}
        </Button>
        {workouts.length >= 1 && (
          <Button classStyle={"button-limpiar"} onClick={handleCleanWorkouts}>
            Limpiar sesiones
          </Button>
        )}
      </div>
      {selectedWorkout && (
        <ExerciseList
          workouts={workouts}
          showFormAddExercise={showFormAddExercise}
          onShowFormAddExercise={handleSetShowFormAddExercises}
          selectedWorkout={selectedWorkout}
          setSelectedWorkout={setSelectedWorkout}
          generateId={generateId}
          setWorkouts={setWorkouts}
        />
      )}
    </div>
  );
}

export default App;
