import React from "react";
import { useState } from "react";

export function UpdateData() {
  const [sentence, setSentence] = useState("This");
  const addWords = () => {
    setSentence((value) => value + "is ");
    setSentence((value) => value + "Sanjay ");
    setSentence((value) => value + "Learning ");
    setSentence((value) => value + "WebDevelopment");
  };
  return (
    <>
      <div>Sentence:{sentence}</div>
      <button onClick={addWords}>Add Sentence</button>
    </>
  );
}
