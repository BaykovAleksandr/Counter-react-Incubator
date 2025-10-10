import "../App.css";
import { Button } from "../components/Button";

type CounterPropsType = {
  count: number;
  setCount: (count: number) => void;
  minValue: number;
  maxValue: number;
  error: boolean;
  setError: (isError: boolean) => void
  active: boolean;
};

export const Counter = ({
  count,
  setCount,
  minValue,
  maxValue,
  error,
  setError,
  active,
}: CounterPropsType) => {
  const incCounter = () => {
    if (maxValue - count > 0) {
      setCount(count + 1);
    }
    else {
      // setCount(count + 1)
      setError(true);

    }

  };

  const onCliCkReset = () => {
    setCount(minValue);
  };
console.log(error)
  return (
    <div className="wrapper">
      {(!active && !error ) && <div className="message">Enter value and press set</div>}
      {(!active && error) && <div className="message warn">"Incorrect value"</div>}
      {active && (
        <div
          className={count === maxValue || error ? "counter-warn" : "counter"}
        >
{count}
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
