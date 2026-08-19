import { useState } from "react";
import "./App.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="counter-title">Counter App</h1>

        <h1 className="counter-value">{counter}</h1>

        <div className="counter-buttons">
          <button
            className="increment-btn"
            onClick={increment}
          >
            +
          </button>

          <button
            className="decrement-btn"
            onClick={decrement}
          >
            -
          </button>

          <button
            className="reset-btn"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;