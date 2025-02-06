import { useMemo, useState } from 'react';
import './App.css'


const nums = new Array(30_000_000).fill(0).map((_, i)=>{
  return{
    index: i,
    isMagical: i===29_000_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums);

  // const magical = numbers.find(item=> item.isMagical=== true) //Expensive computation

useMemo(() => numbers.find(item=> item.isMagical=== true), [numbers])

  return (
    <>
    <span>Magical number is {magical.index}</span>
     <p>Counter: {count}</p>

    <button onClick={()=> setCount(count+1) }>Increment</button>
    </>
  )
}

export default App;
