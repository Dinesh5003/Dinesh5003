import React, { useState } from 'react'

const CounterApp = () => {
  //let count = 0;

  let [count, setCount] = useState(0);

  function increaseCount() {
    //setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    console.log(count);
    
    //count += 1;
  }

  function decreaseCount() {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);

     
    count -= 1;
  }


  return (
    <div>
      <h1>Counter Application</h1>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default CounterApp;