import { useState, useEffect, useRef } from "react";
import "./App.css";
import StopWatch from "./Component/StopWatch";

function App() {
  // const [count, setCount] = useState(0);
  // let val = useRef(0);

  // let btnRef = useRef();

  // function handleClick() {
  //   val.current = val.current + 1;
  //   console.log("value of val is", val.current);
  //   setCount(count + 1);
  // }

  //It runs on every render
  // useEffect(() => {
  //   console.log("It runs on every render");
  // });

  // function changeColor() {
  //   btnRef.current.style.backgroundColor = "red";
  //   btnRef.current.style.color = "white";
  //   btnRef.current.innerHTML = "Color";
  // }

  return (
    <>
      {/* <div>
        <button ref={btnRef} onClick={handleClick}>
          Increment
        </button>

        <br />
        <br />

        <button onClick={changeColor}>change color of first Button</button>

        <br />

        <div>Count: {count}</div>
      </div> */}

      <StopWatch/>
    </>
  );
}

export default App;
