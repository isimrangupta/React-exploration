import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import TimerComponent from "./components/TimerComponent";
import DataFetch from "./components/DataFetch";
const App = () => {
const [count, setCount] = useState(0);
const [first, setFirst] = useState(0);
const [color, setColor] = useState(0)


// useEffect(() => {
//   alert("count was changed");
//   setColor(color + 1)
// }, [count]);
  
    

  return (
    <>
    {/* <Navbar color={"cyan" + "blue" + color}/> */}
      {/* <h1>Count value is : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Click</button> */}

{/* <TimerComponent/> */}

<DataFetch/>

    </>
  );
};

export default App;
