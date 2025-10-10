import "../App.css";
import { Button } from "../components/Button";

type CounterPropsType = {
  count: number;
  setCount: (count: number) => void;
  minValue: number;
  maxValue: number;
  error: boolean;
  active: boolean;
};

export const Counter = ({
  count,
  setCount,
  minValue,
  maxValue,
  error,
  active
}: CounterPropsType) => {
  const incCounter = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  const onCliCkReset = () => {
    setCount(minValue);
  };

  return (
    <div className="wrapper">
      {!active && <div className="message">Enter value and press set</div>}
      {active && (
        <div
          className={count === maxValue || error ? "counter-warn" : "counter"}
        >
          {error ? "Incorrect value" : count}
        </div>
      )}
      <div className="card">
        <Button
          name={"INC"}
          callback={incCounter}
          disabled={count >= maxValue || error || !active}
        />
        <Button
          name={"RESET"}
          callback={onCliCkReset}
          disabled={count === minValue || error || !active}
        />
      </div>
    </div>
  );
};
