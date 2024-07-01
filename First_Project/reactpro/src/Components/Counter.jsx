import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); //states
  const [incrementBy,setIncrementBy]=useState(1);
  function handleClick() {
    setCount(count + incrementBy);
  }
  function handleClickDec() {
    setCount(count - incrementBy);
  }
  function IncreaseIncrement(){
    setIncrementBy(incrementBy+1);
  }
  function DecreaseIncrement(){
    setIncrementBy(incrementBy-1);
  }
  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleClickDec}>Decrease</button>
    
        <h1>We are inclementing the value  by: {incrementBy}</h1>
        <button onClick={IncreaseIncrement}>Increase Increment</button>
        <button onClick={DecreaseIncrement}>Decrease Increment</button>
    </div>
  );
}
