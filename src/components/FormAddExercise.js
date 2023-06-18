import { useState } from "react";
import Button from "./Button";
import { CaretRight } from "@phosphor-icons/react";

export default function FormAddExercise({
  generateId,
  titleExercise,
  onSetTitleExercise,
  onHandleSubmit,
}) {
  return (
    <div className="form-add-exercise">
      <form onSubmit={onHandleSubmit}>
        <label>Exercise:</label>
        <input
          type="text"
          value={titleExercise}
          onChange={(e) => onSetTitleExercise(e.target.value)}
        ></input>
        <Button classStyle={"no-mg"}>
          <CaretRight weight="bold" size={18} />
        </Button>
      </form>
    </div>
  );
}
