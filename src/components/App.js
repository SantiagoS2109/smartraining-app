import { useState } from "react";

import Logo from "./Logo";
import WorkoutList from "./WorkoutList";
import Button from "./Button";
import FormAddWorkout from "./FormAddWorkout";
import ExerciseList from "./ExerciseList";

const initialWorkouts = [
  {
    id: 118836,
    muscle: "Upper Body",
    date: "02/06/23",
    exercises: [
      {
        exerciseId: 1,
        exercise: "Push-Ups",
        series: [
          {
            seriesId: 1,
            reps: 12,
            peso: 5,
          },
        ],
      },
      // {
      //   exerciseId: 2,
      //   exercise: "Pull-Ups",
      //   series: [
      //     {
      //       seriesId: 1,
      //       reps: 10,
      //       peso: 10,
      //     },
      //   ],
      // },
    ],
  },
  {
    id: 933372,
    muscle: "Lower Body",
    date: "03/06/23",
    exercises: [
      {
        exerciseId: 1,
        exercise: "Quads",
        series: [
          {
            seriesId: 1,
            reps: 12,
            peso: 5,
          },
        ],
      },
      // {
      //   exerciseId: 2,
      //   exercise: "Leg Extension",
      //   series: [
      //     {
      //       seriesId: 1,
      //       reps: 10,
      //       peso: 10,
      //     },
      //   ],
      // },
    ],
  },
  {
    id: 499476,
    muscle: "Cardio",
    date: "12/06/23",
    exercises: [
      {
        exerciseId: 1,
        exercise: "Run",
        series: [
          {
            seriesId: 1,
            reps: 12,
            peso: 5,
          },
        ],
      },
      // {
      //   exerciseId: 2,
      //   exercise: "Rope Jump",
      //   series: [
      //     {
      //       seriesId: 1,
      //       reps: 10,
      //       peso: 10,
      //     },
      //   ],
      // },
    ],
  },
];

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts);
  const [showAddWorkout, setShowAddWorkout] = useState(false);
  const [showFormAddExercise, setShowFormAddExercise] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [exercises, setExercises] = useState(null);

  function handleShowAddWorkout() {
    setShowAddWorkout((show) => !show);
  }

  function handleAddWorkout(newWorkout) {
    setWorkouts((workouts) => [...workouts, newWorkout]);
    setShowAddWorkout(false);
  }

  function handleShowFormAddExercises() {
    setShowFormAddExercise((show) => !show);
  }

  function handleSelection(workout) {
    setSelectedWorkout((cur) => (cur?.id === workout.id ? null : workout));

    console.log(exercises);
  }

  function generateId() {
    return crypto.randomUUID();
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
        {showAddWorkout && (
          <FormAddWorkout
            onAddWorkout={handleAddWorkout}
            generateId={generateId}
          />
        )}
        <Button classStyle={"button-gray"} onClick={handleShowAddWorkout}>
          {!showAddWorkout ? "Nueva sesión" : "Cerrar"}
        </Button>
      </div>
      {selectedWorkout && (
        <ExerciseList
          workouts={workouts}
          showFormAddExercise={showFormAddExercise}
          onShowFormAddExercise={handleShowFormAddExercises}
          selectedWorkout={selectedWorkout}
          generateId={generateId}
        />
      )}
    </div>
  );
}

export default App;
