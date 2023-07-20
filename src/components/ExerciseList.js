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
  const curWorkout = workouts
    .map((workout) => workout.id === selectedWorkout.id && workout)
    .filter((workout) => workout !== false);

  return (
    <div className="exercises">
      <div className="form-add form-add-exercise">
        <div className="exercises-title">
          <h1 className="heading">{`${selectedWorkout.muscle} workout`}</h1>
          <span>{selectedWorkout.date}</span>
        </div>
        <ul className="exercises-list">
          {curWorkout[0].exercises?.map((exercise) => (
            <Exercise
              dispatch={dispatch}
              key={exercise.exerciseId}
              exercise={exercise}
              selectedWorkout={selectedWorkout}
            />
          ))}
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
