import { use, useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const date = new Date();

  date.setDate(date.getDate() + count);

  function handleStep(e) {
    setStep(+e.target.value);
    setIsVisible(true);
  }
  function handleCount(e) {
    setCount(+e.target.value);
    setIsVisible(true);
  }
  function handleReset() {
    setStep(1);
    setCount(0);
    setIsVisible(false);
  }

  return (
    <div className="App">
      <div className="step">
        {step}
        <input
          type="range"
          min={1}
          max={20}
          value={step}
          onChange={(e) => handleStep(e)}
        ></input>
      </div>
      <div className="count">
        <button
          onClick={() => {
            setCount(count - step);
            setIsVisible(true);
          }}
        >
          -
        </button>
        <input value={count} onChange={(e) => handleCount(e)}></input>
        <button
          onClick={() => {
            setCount(count + +step);
            setIsVisible(true);
          }}
        >
          +
        </button>
      </div>
      <p>
        {Math.abs(count)}{" "}
        {count > 0
          ? "days from today is"
          : count < 0
            ? "day before was"
            : "Today is"}{" "}
        {date.toLocaleDateString()}{" "}
      </p>
      {isVisible ? <button onClick={handleReset}>Reset</button> : ""}
    </div>
  );
}

export default App;
