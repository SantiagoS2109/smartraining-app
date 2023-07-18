import Button from "./Button";
import Exercise from "./Exercise";
import FormAddExercise from "./FormAddExercise";
import Logo from "./Logo";

function ExerciseList({
  workouts,
  showFormAddExercise,
  selectedWorkout,
  titleExercise,
  dispatch,
}) {
  return (
    <div className="exercises">
      <div className="form-add form-add-exercise">
        <div className="exercises-title">
          <Logo>{`${selectedWorkout.muscle} workout`}</Logo>
          <span>{selectedWorkout.date}</span>
        </div>
        <ul className="exercises-list">
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
          <FormAddExercise titleExercise={titleExercise} dispatch={dispatch} />
        )}
        <Button
          classStyle={"button-exercise"}
          onClick={() => dispatch({ type: "setShowFormAddExercise" })}
        >
          {showFormAddExercise ? "Cerrar" : "Agregar ejercicio"}
        </Button>
      </div>
    </div>
  );
}

export default ExerciseList;
