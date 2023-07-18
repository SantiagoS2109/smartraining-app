import Button from "./Button";
import { CaretRight } from "@phosphor-icons/react";

export default function FormAddExercise({ titleExercise, dispatch }) {
  return (
    <div className="form-add-exercise">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "addExercise", payload: titleExercise });
        }}
      >
        <label>Exercise:</label>
        <input
          type="text"
          value={titleExercise}
          onChange={(e) =>
            dispatch({ type: "setTitleExercise", payload: e.target.value })
          }
        ></input>
        <Button classStyle={"no-mg"}>
          <CaretRight weight="bold" size={18} />
        </Button>
      </form>
    </div>
  );
}
