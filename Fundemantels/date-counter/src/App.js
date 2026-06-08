import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const number = step * count;

  const date = new Date();
  date.setDate(date.getDate() + number);

  return (
    <div className="App">
      <div className="Step">
        <button onClick={() => (step > 1 ? setStep(step - 1) : setStep(1))}>
          -
        </button>
        Step: {step}
        <button onClick={() => setStep(step + 1)}> +</button>
      </div>
      <div className="Count">
        <button onClick={() => setCount(count - 1)}>-</button>
        Count: {count}
        <button onClick={() => setCount(count + 1)}> +</button>
      </div>
      <p>
        {Math.abs(number) || ""}{" "}
        {number > 0
          ? "days from today will be"
          : number < 0
            ? "days ago was"
            : "Today is"}{" "}
        {date.toLocaleDateString()}{" "}
      </p>
    </div>
  );
}

export default App;
