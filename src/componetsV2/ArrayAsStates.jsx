import React from "react";
import { useState } from "react";

export function ArrayAsStates() {
  const [number, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7]);
  const addValue = () => {
    setNumbers([...number, 7]);
  };
  return (
    <>
      <div>
        <h1>ArrayVsStates</h1>
        <div>ArrayValues{number.join(" ")}</div>
        <button onClick={addValue}>Add Value</button>
      </div>
    </>
  );
}
