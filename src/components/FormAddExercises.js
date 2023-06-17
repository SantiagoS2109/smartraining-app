import Logo from "./Logo";
import ExerciseList from "./ExerciseList";

function FormAddExercises({
  workouts,
  showFormAddExercise,
  onShowFormAddExercise,
}) {
  return (
    <div className="form-add form-add-exercise">
      <div className="exercises-title">
        <Logo>Exercises</Logo>
      </div>
      <ExerciseList
        workouts={workouts}
        showFormAddExercise={showFormAddExercise}
        onShowFormAddExercise={onShowFormAddExercise}
      />
    </div>
  );
}

export default FormAddExercises;
