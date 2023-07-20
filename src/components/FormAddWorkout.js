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
          <div>
            <Barbell size={32} weight="fill" />
            <label>Muscle group</label>
          </div>
          <div className="select">
            <input
              type="text"
              value={muscle}
              onChange={(e) => setMuscle(e.target.value)}
            >
              {/* <option value={""}></option>
              <option value={"Chest"}>Chest</option>
              <option value={"Back"}>Back</option>
              <option value={"Bicep"}>Bicep</option>
              <option value={"Tricep"}>Tricep</option>
              <option value={"Quads"}>Quads</option> */}
            </input>
          </div>
        </div>
        <div className="form-input">
          <div>
            <Calendar size={32} weight="fill" />
            <label>Date</label>
          </div>
          <div className="select">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </div>
        </div>
        <Button classStyle={"btn--add"}>Add</Button>
      </form>
    </div>
  );
}

export default FormAddWorkout;
