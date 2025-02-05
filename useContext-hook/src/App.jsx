import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { counterContext } from './components/Context/context'
import './App.css'





const App = () => {
  const [count, setCount] = useState(0)

  function clickHandler(){
    setCount(count+1)
  }

  const [theme, setTheme] = useState('light')

  return (
    <>

    <counterContext.Provider value={{count, setCount}}>

      <Navbar/>

     <div>
     <h1>{count}</h1>
     <button onClick={clickHandler}>click</button>
     </div>

     </counterContext.Provider>


    </>

  )
}

export default App
     

     
    

  
