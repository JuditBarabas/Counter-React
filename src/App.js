import { useState } from "react";
import "./styles.css";
import { Buttons } from "./Buttons";
import { IntervalInput } from "./IntervalInput";

export default function App() {
  const [count, setCount] = useState(0);
  const [interval, setInterval] = useState(1);

  const increase = () => {
    setCount((prevCount) => prevCount + interval);
  };

  const decrease = () => {
    count > 0 && setCount((prevCount) => prevCount - interval);
  };

  const changeInterval = (event) => {
    setInterval(Number(event.target.value));
  };

  return (
    <div className="App">
      <h1>Current count</h1>
      <h2>{count}</h2>
      Select interval to change count:
      <IntervalInput changeInterval={changeInterval} />
      <Buttons sign="+" increase={increase} />
      <Buttons sign="-" decrease={decrease} />
    </div>
  );
}
