import "./App.css";

import { Setter } from "./layout/Setter";
import { Counter } from "./layout/Counter";
import { useState } from 'react';

function App() {
  const [maxValue, setMaxValue] = useState(10);
  const [minValue, setMinValue] = useState(0);
  return (
    <div className="main">
      <Counter />
      <Setter minValue={minValue} maxValue={maxValue} setMaxValue={setMaxValue} setMinValue={setMinValue}/>
    </div>
  );
}
export default App;
