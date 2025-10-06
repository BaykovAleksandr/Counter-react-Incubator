import "./App.css";

import { Setter } from "./layout/Setter";
import { Counter } from "./layout/Counter";
import { useState } from 'react';

function App() {
  
  const [maxValue, setMaxValue] = useState(10);
  const [minValue, setMinValue] = useState(0);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  return (
    <div className="main">
      <Counter count={count} setCount={setCount} minValue={minValue} maxValue={maxValue} error={error}
      />
      <Setter minValue={minValue} maxValue={maxValue} setMaxValue={setMaxValue} setMinValue={setMinValue} error={error} setCount={setCount} setError={setError}/>
    </div>
  );
}
export default App;
