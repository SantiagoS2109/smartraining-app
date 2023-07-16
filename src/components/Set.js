import { useState } from "react";

function Serie({ num, set }) {
  const initialReps = set.reps;
  const initialPeso = set.peso;

  // console.log(initialPeso);

  const [reps, setReps] = useState(initialReps);
  const [peso, setPeso] = useState(initialPeso);

  function handleSetReps(newReps) {
    setReps(newReps);
  }

  function handleSetPeso(newPeso) {
    setPeso(newPeso);
  }

  return (
    <li>
      <p>Set #{num + 1}:</p>
      <input
        type="text"
        value={reps}
        onChange={(e) => handleSetReps(Number(e.target.value))}
      ></input>
      <input
        type="text"
        value={peso}
        onChange={(e) => handleSetPeso(Number(e.target.value))}
      ></input>
    </li>
  );
}

export default Serie;
