import { Barbell, Calendar } from "@phosphor-icons/react";
import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";

function FormAddWorkout({ onAddWorkout }) {
  const [muscle, setMuscle] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!muscle || !date) return;

    const id = crypto.randomUUID();

    function generateId() {
      return crypto.randomUUID();
    }

    const newWorkout = {
      id,
      muscle,
      date,
      exercises: [
        {
          exerciseId: generateId(),
          exercise: "X",
          series: [
            {
              seriesId: generateId(),
              reps: 0,
              peso: 0,
            },
          ],
        },
        {
          exerciseId: generateId(),
          exercise: "X",
          series: [
            {
              seriesId: generateId(),
              reps: 0,
              peso: 0,
            },
          ],
        },
      ],
    };

    onAddWorkout(newWorkout);
  }

  return (
    <div className="form-add form-add-workout">
      <Logo>Workout Session</Logo>

      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <div>
            <Barbell size={32} />
            <label>Grupo muscular</label>
          </div>
          <div className="select">
            <select value={muscle} onChange={(e) => setMuscle(e.target.value)}>
              <option value={""}></option>
              <option value={"Chest"}>Chest</option>
              <option value={"Back"}>Back</option>
              <option value={"Bicep"}>Bicep</option>
              <option value={"Tricep"}>Tricep</option>
              <option value={"Quads"}>Quads</option>
            </select>
            {/* <Button classStyle={"button-plus"}>+</Button> */}
          </div>
        </div>
        <div className="form-input">
          <div>
            <Calendar size={32} />
            <label>Fecha</label>
          </div>
          <div className="select">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </div>
        </div>
        <Button>Añadir</Button>
      </form>
    </div>
  );
}

export default FormAddWorkout;
