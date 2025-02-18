import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [adjective, setAdjective] = useState("good");
const [count, setCount] = useState(0);
 

// const getAdjective = ()=>{
//   return "another" + count
// }
  
const getAdjective = useCallback(() => {
  return "another " + count;
}, [count]);

  

  return (
    <>
      <Navbar adjective={adjective} getAdjective={getAdjective} />
    <button onClick={() => setCount(count + 1)}>count is {count}</button>
   
    </>
  );
}

export default App;
