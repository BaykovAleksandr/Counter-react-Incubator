import "./App.css";

import { Setter } from "./layout/Setter";
import { Counter } from "./layout/Counter";
import { useEffect, useState } from "react";

function App() {
  const [maxValue, setMaxValue] = useState(5);
  const [minValue, setMinValue] = useState(1);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const [active, setActive] = useState(true);

useEffect(() => {
  const savedCount = localStorage.getItem("counterValue");
  const savedMaxValue = localStorage.getItem("maxValue");
  const savedMinValue = localStorage.getItem("minValue");

  if (savedCount) setCount(JSON.parse(savedCount));
  if (savedMaxValue) setMaxValue(JSON.parse(savedMaxValue));
  if (savedMinValue) setMinValue(JSON.parse(savedMinValue));
}, []);

useEffect(() => {
  localStorage.setItem("counterValue", JSON.stringify(count));
  localStorage.setItem("maxValue", JSON.stringify(maxValue));
  localStorage.setItem("minValue", JSON.stringify(minValue));
}, [count, maxValue, minValue]);

  return (
    <div className="main">
      <Counter
        count={count}
        setCount={setCount}
        minValue={minValue}
        maxValue={maxValue}
        error={error}
        setError={setError}
        active={active}
      />
      <Setter
        minValue={minValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        setMinValue={setMinValue}
        error={error}
        setCount={setCount}
        setError={setError}
        active={active}
        setActive={setActive}
      />
    </div>
  );
}
export default App;
