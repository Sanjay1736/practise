import { useState } from "react";
export const Counter = () => {
  const [no, setNumber] = useState(0);
  const [Number2, AnotherNumber] = useState(100);
  const [loggedIn, setLoggedIn] = useState(false);

  const add = () => {
    setNumber(no + 1);
  };
  const sub = () => {
    setNumber(no - 1);
  };
  const reset = () => {
    setNumber(0);
  };
  const login = () => {
    setLoggedIn(true);
  };
  return (
    <>
      <div>
        <h1>Counter App</h1>
        <div>Count 1:{no}</div>
        <button onClick={add}>No+1</button>
        <button onClick={sub}>No-1</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div>
        <h3>Another Counter</h3>
        <div>
          <b>Count 2:-</b>
          {Number2}
        </div>
        <button onClick={() => AnotherNumber(Number2 + 5)}>Add+5</button>
        <button onClick={() => AnotherNumber(Number2 - 5)}>Add-5</button>
        <button onClick={() => AnotherNumber(0)}>Reset</button>
      </div>

      <div>{loggedIn ? "User Logged In" : "logged out"}</div>
      <button onClick={login}>Login</button>
    </>
  );
};
