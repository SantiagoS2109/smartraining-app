import Button from "./Button";
import Exercise from "./Exercise";
import FormAddExercise from "./FormAddExercise";

function ExerciseList({
  workouts,
  showFormAddExercise,
  onShowFormAddExercise,
}) {
  return (
    <div className="exercises">
      <div className="exercises-list">
        {workouts.map((workout) =>
          workout.exercises.map((exercise) => (
            <Exercise exercise={exercise.exercise} series={exercise.series} />
          ))
        )}
      </div>
      {showFormAddExercise && <FormAddExercise />}
      <Button classStyle={"button-exercise"} onClick={onShowFormAddExercise}>
        {showFormAddExercise ? "Cerrar" : "Agregar ejercicio"}
      </Button>
    </div>
  );
}

export default ExerciseList;
