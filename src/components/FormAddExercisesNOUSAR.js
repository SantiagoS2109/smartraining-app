import Logo from "./Logo";
import ExerciseList from "./ExerciseList";

function FormAddExercises({
  workouts,
  showFormAddExercise,
  onShowFormAddExercise,
}) {
  return (
    <div className="form-add form-add-exercise">
      <ExerciseList
        workouts={workouts}
        showFormAddExercise={showFormAddExercise}
        onShowFormAddExercise={onShowFormAddExercise}
      />
    </div>
  );
}

export default FormAddExercises;
