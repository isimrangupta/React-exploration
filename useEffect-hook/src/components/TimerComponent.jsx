import { useState, useEffect } from "react";



const TimerComponent = () => {
  const [second, setSecond] = useState(0);  

  // It will run only first render
  useEffect(() => {
  const intervalId = setInterval(() => {
    console.log("setInerval executed")
    setSecond(prevSeconds => prevSeconds + 1)
  }, 1000);
  
    return () => {
      clearInterval(intervalId)
      console.log("Time to stop")
    }
  }, [])

  
  return (
    <>
      <h1>Second: {second} </h1>
    </>
  )
}

export default TimerComponent
