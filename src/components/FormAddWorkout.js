import { Barbell, Calendar } from "@phosphor-icons/react";
import { useState } from "react";
import Button from "./Button";

function FormAddWorkout({ dispatch }) {
  const [muscle, setMuscle] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!muscle || !date) return;

    const id = crypto.randomUUID();

    const newWorkout = {
      id,
      muscle,
      date,
      exercises: [],
    };

    dispatch({ type: "addWorkout", payload: newWorkout });
  }

  return (
    <div className="form-add form-add-workout">
      <h1 className="heading sub--heading">New Workout Session</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-input">
          <Barbell size={24} weight="fill" />
          <label className="form-input--label" htmlFor="muscle">
            Muscle group
          </label>
          <input
            name="muscle"
            type="text"
            value={muscle}
            onChange={(e) => setMuscle(e.target.value)}
          ></input>
        </div>
        <div className="form-input">
          <Calendar size={24} weight="fill" />
          <label className="form-input--label" htmlFor="date">
            Date
          </label>
          <input
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>
        <Button classStyle={"btn--add"}>Add</Button>
      </form>
    </div>
  );
}

export default FormAddWorkout;
