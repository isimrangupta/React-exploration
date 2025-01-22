import { useState } from "react"
import './App.css'
const App = () => {
  const [count, setCount] = useState(0)

function clickHandler(){
  setCount(count+1)
}

  return (
    <>
      <div className="countValue">This count value is {count} </div>
      <button className="incrimentBtn"
      onClick={clickHandler}
      >Incriment</button>
    </>
  )
}

export default App
