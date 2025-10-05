import { useState } from "react";
import "../App.css";
import { Button } from "../components/Button";

export const Counter = () => {
  const MAXIMUM = 5;
  const MINIMUM = 0;
  const [count, setCount] = useState<number>(MINIMUM);

  const incCounter = () => {
    if (count < MAXIMUM) {
      setCount(count + 1);
    }
  };

  const onCliCkReset = () => {
    setCount(MINIMUM);
  };

  const onCliCkSet = () => {
    alert('Counter')
  };
  return (
    <div className="wrapper">
      <div className={count === MAXIMUM ? "counterRed" : "counter"}>{count}</div>
      <div className="card">
        <Button
          name={"INC"}
          callback={incCounter}
          disabled={count >= MAXIMUM}
        />
        <Button
          name={"RESET"}
          callback={onCliCkReset}
          disabled={count === MINIMUM}
        />
        <Button
          name={"SET"}
          callback={onCliCkSet}
    
        />
      </div>
    </div>
  );
};
