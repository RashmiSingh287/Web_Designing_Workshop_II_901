import React, { useState } from "react";
import "./App.css";

function App() {

  // useState Hook
  const [count, setCount] = useState(0);

  // Increment Function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement Function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset Function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>React Counter Application</h1>

      <h2>Counter Value: {count}</h2>

      <button onClick={increment}>Increment (+)</button>

      <button onClick={decrement}>Decrement (-)</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
