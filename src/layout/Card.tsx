import { useState } from "react";
import "../App.css";
import { Button } from "../components/Button";

export const Card = () => {
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
  return (
    <div className="wrapper">
      <p className={count === MAXIMUM ? "counterRed" : "counter"}>{count}</p>
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
      </div>
    </div>
  );
};
