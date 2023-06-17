import Button from "./Button";
import { CaretRight } from "@phosphor-icons/react";

export default function FormAddExercise() {
  return (
    <div className="form-add-exercise">
      <form>
        <label>Exercise:</label>
        <input type="text"></input>
        <Button classStyle={"no-mg"}>
          <CaretRight weight="bold" size={18} />
        </Button>
      </form>
    </div>
  );
}
