import { useState } from "react";

function App() {
  const options = [
    { label: "Dissatisfied ", value: 0 },
    { label: "It was okey ", value: 5 },
    { label: "It was good ", value: 10 },
    { label: "Absolutly amazing! ", value: 20 },
  ];
  const [personal, setPersonal] = useState(0);
  const [friends, setFriends] = useState(0);
  const [bill, setBill] = useState(0);

  const sum = bill + (bill * (personal + friends)) / 200;

  function resetButton() {
    setPersonal(0);
    setFriends(0);
    setBill(0);
  }

  return (
    <div className="App">
      <p>
        How much was the bill{" "}
        <input
          type="text  "
          value={bill}
          onChange={(e) => setBill(+e.target.value)}
        />
      </p>
      <p>
        How did you like the service{" "}
        <select value={personal} onChange={(e) => setPersonal(+e.target.value)}>
          {options.map((opt) => (
            <option value={opt.value} key={opt.label}>
              {opt.label} {opt.value}%
            </option>
          ))}
        </select>
      </p>
      <p>
        How did your friend like the service{" "}
        <select value={friends} onChange={(e) => setFriends(+e.target.value)}>
          {options.map((opt) => (
            <option key={opt.label} value={opt.value}>
              {opt.label} {opt.value}%
            </option>
          ))}
        </select>
      </p>
      <p>
        {" "}
        You pay ${sum} (${bill} + ${(personal + friends) / 2})
      </p>
      <button onClick={resetButton}>Reset</button>
    </div>
  );
}

export default App;
