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
          key={workout.id}
          onSelection={onSelection}
          selectedWorkout={selectedWorkout}
        />
      ))}
    </ul>
  );
}

export default WorkoutList;
