import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, magicToggle } from "./actions";

function App() {
  let dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const magic = useSelector((state) => state.magic);

  return (
    <div className="App">
      <button onClick={() => dispatch(increment(5))}>+</button>
      <h1>hello {counter} </h1>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <br />

      <button onClick={() => dispatch(magicToggle())}> POOF</button>

      <div className={magic}></div>

      {logged ? <h3>I cracked the main frame</h3> : ""}
    </div>
  );
}

export default App;
