import { useReducer, useEffect } from "react";

import Logo from "./Logo";
import WorkoutList from "./WorkoutList";
import Button from "./Button";
import ExerciseList from "./ExerciseList";
import FormAddWorkout from "./FormAddWorkout";
import Workout from "./Workout";
import Footer from "./Footer";
import { useLocalStorageState } from "./useLocalStorageState";

let initialState = {
  showAddWorkout: false,
  showFormAddExercise: false,
  selectedWorkout: null,

  titleExercise: "",
  title: "SmarTraining | Your Workout Tracker",

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
        selectedWorkout: state.selectedWorkout === true && null,
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
            reps: 0,
            weight: 0,
          },
          {
            setId: 2,
            reps: 0,
            weight: 0,
          },
          {
            setId: 3,
            reps: 0,
            weight: 0,
          },
          {
            setId: 4,
            reps: 0,
            weight: 0,
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
        ...initialState,
      };

    case "deleteWorkout":
      return {
        ...state,
        workouts: state.workouts.filter(
          (workout) => workout.id !== action.payload
        ),
      };

    case "deleteExercise":
      const updatedDeletedExercises = state.workouts.map((workout) =>
        workout.id === state.selectedWorkout.id
          ? {
              ...workout,
              exercises: workout.exercises.filter(
                (exercise) => exercise.exerciseId !== action.payload
              ),
            }
          : workout
      );
      return {
        ...state,
        workouts: updatedDeletedExercises,
      };

    case "setReps":
      const newReps = state.workouts.map((workout) =>
        workout.id === state.selectedWorkout.id
          ? {
              ...workout,
              exercises: workout.exercises.map((exercise) =>
                exercise.exerciseId === action.payload.exerciseId
                  ? {
                      ...exercise,
                      sets: exercise.sets.map((set, i) =>
                        i === action.payload.index
                          ? {
                              ...set,
                              reps: action.payload.reps,
                            }
                          : set
                      ),
                    }
                  : exercise
              ),
            }
          : workout
      );

      return {
        ...state,
        workouts: newReps,
      };

    case "setWeight":
      const newWeights = state.workouts.map((workout) =>
        workout.id === state.selectedWorkout.id
          ? {
              ...workout,
              exercises: workout.exercises.map((exercise) =>
                exercise.exerciseId === action.payload.exerciseId
                  ? {
                      ...exercise,
                      sets: exercise.sets.map((set, i) =>
                        i === action.payload.index
                          ? {
                              ...set,
                              weight: action.payload.weight,
                            }
                          : set
                      ),
                    }
                  : exercise
              ),
            }
          : workout
      );

      return {
        ...state,
        workouts: newWeights,
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
  // const [storedWorkouts, setStoredWorkouts] = useLocalStorageState(
  //   [],
  //   "workouts"
  // );

  const [
    {
      workouts,
      showAddWorkout,
      showFormAddExercise,
      selectedWorkout,
      titleExercise,
      title,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  // useEffect(
  //   function () {
  //     document.title = `${title}`;

  //     return () => (document.title = "SmarTraining | Your Workout Tracker");
  //   },
  //   [title]
  // );

  return (
    <div className="app">
      <Logo />
      <main className="app-content">
        <div className="sidebar">
          <h1 className="heading">Your Workouts</h1>
          <div className={`workout-list ${workouts.length === 0 && "hidden"}`}>
            <WorkoutList>
              {" "}
              {workouts.map((workout) => (
                <Workout
                  key={workout.id}
                  workoutId={workout.id}
                  workout={workout}
                  dispatch={dispatch}
                  selectedWorkout={selectedWorkout}
                />
              ))}
            </WorkoutList>
          </div>
          {showAddWorkout && <FormAddWorkout dispatch={dispatch} />}
          <Button
            classStyle={"button-gray mb--16"}
            onClick={() => dispatch({ type: "setShowAddWorkout" })}
          >
            {!showAddWorkout ? "New session" : "Close"}
          </Button>
          {workouts.length >= 2 && (
            <Button
              classStyle={"button-limpiar"}
              onClick={() => dispatch({ type: "cleanWorkouts" })}
            >
              Delete all sessions
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
