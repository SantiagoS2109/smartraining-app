import Workout from "./Workout";

function WorkoutList({
  workouts,
  onShowFormAddExercises,
  onSelection,
  selectedWorkout,
}) {
  return (
    <ul>
      {workouts.map((workout) => (
        <Workout
          workout={workout}
          muscle={workout.muscle}
          date={workout.date}
          id={workout.id}
          onSelection={onSelection}
          selectedWorkout={selectedWorkout}
          // onShowFormAddExercises={onShowFormAddExercises}
        />
      ))}
    </ul>
  );
}

export default WorkoutList;
