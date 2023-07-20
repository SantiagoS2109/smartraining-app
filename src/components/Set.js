function Serie({ index, set, dispatch, exerciseId }) {
  const initialReps = set.reps;
  const initialPeso = set.weight;

  return (
    <li>
      <p>Set #{index + 1}:</p>
      <input
        type="text"
        value={initialReps}
        onChange={(e) =>
          dispatch({
            type: "setReps",
            payload: { reps: Number(e.target.value), index, exerciseId },
          })
        }
      ></input>
      <input
        type="text"
        value={initialPeso}
        onChange={(e) =>
          dispatch({
            type: "setWeight",
            payload: { weight: Number(e.target.value), index, exerciseId },
          })
        }
      ></input>
    </li>
  );
}

export default Serie;
