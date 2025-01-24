import { useRef, useState } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);

  let timerRef = useRef(null);


  function startTimer() {
    timerRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    setTimer(0);
  }

  return (
    <div>
      <h1>StopWatch: {timer} seconds</h1>

      <button onClick={startTimer}>Start</button>

      <br />
      <br />

      <button onClick={stopTimer}>Stop</button>

      <br />
      <br />

      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default StopWatch;
