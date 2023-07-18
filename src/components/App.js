import { useReducer } from "react";

import Logo from "./Logo";
import WorkoutList from "./WorkoutList";
import Button from "./Button";
import ExerciseList from "./ExerciseList";
import FormAddWorkout from "./FormAddWorkout";
import Workout from "./Workout";

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

let initialWorkouts = {
  showAddWorkout: false,
  showFormAddExercise: false,
  selectedWorkout: null,

  titleExercise: "",

  workouts: [],
};

function generateId() {
  return crypto.randomUUID();
}

function reducer(state, action) {
  switch (action.type) {
    case "setShowAddWorkout":
      return {
        ...state,
        showAddWorkout: !state.showAddWorkout,
      };
    case "setShowFormAddExercise":
      return {
        ...state,
        showFormAddExercise: !state.showFormAddExercise,
      };
    case "setSelectedWorkout":
      return {
        ...state,
        selectedWorkout:
          state.selectedWorkout?.id === action.payload.id
            ? null
            : action.payload,
        showAddWorkout: state.showAddWorkout && false,
      };
    case "addWorkout":
      return {
        ...state,
        workouts: [...state.workouts, action.payload],
        showAddWorkout: false,
      };
    case "addExercise":
      const newExercise = {
        exerciseId: generateId(),
        title: action.payload,
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

      const updatedExercises = state.workouts.map((workout) =>
        workout.id === state.selectedWorkout.id
          ? {
              ...workout,
              exercises: [...workout.exercises, newExercise],
            }
          : workout
      );

      return {
        ...state,
        workouts: updatedExercises,
        showFormAddExercise: false,
        titleExercise: "",
      };
    case "cleanWorkouts":
      const confirm = window.confirm(
        "Are you sure you want to clean up all your workouts? 🧹"
      );

      if (!confirm) return state;

      return {
        ...initialWorkouts,
      };

    case "setTitleExercise":
      return {
        ...state,
        titleExercise: action.payload,
      };

    default:
      throw new Error("Unknown acton");
  }
}

function App() {
  const [
    {
      workouts,
      showAddWorkout,
      showFormAddExercise,
      selectedWorkout,
      titleExercise,
    },
    dispatch,
  ] = useReducer(reducer, initialWorkouts);

  return (
    <div className="app">
      <div className="sidebar">
        <Logo>Workouts</Logo>
        <WorkoutList>
          {" "}
          {workouts.map((workout) => (
            <Workout
              key={workout.id}
              workout={workout}
              dispatch={dispatch}
              selectedWorkout={selectedWorkout}
            />
          ))}
        </WorkoutList>
        {showAddWorkout && <FormAddWorkout dispatch={dispatch} />}
        <Button
          classStyle={"button-gray mb--16"}
          onClick={() => dispatch({ type: "setShowAddWorkout" })}
        >
          {!showAddWorkout ? "Nueva sesión" : "Cerrar"}
        </Button>
        {workouts.length >= 1 && (
          <Button
            classStyle={"button-limpiar"}
            onClick={() => dispatch({ type: "cleanWorkouts" })}
          >
            Limpiar sesiones
          </Button>
        )}
      </div>
      {selectedWorkout && (
        <ExerciseList
          workouts={workouts}
          showFormAddExercise={showFormAddExercise}
          selectedWorkout={selectedWorkout}
          generateId={generateId}
          dispatch={dispatch}
          titleExercise={titleExercise}
        />
      )}
    </div>
  );
}

export default App;
