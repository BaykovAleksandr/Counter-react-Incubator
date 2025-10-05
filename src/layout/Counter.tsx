
import "../App.css";
import { Button } from "../components/Button";

type counterPropsType = {
  count: number;
  setCount: (a: number) => void;
  minValue: number;
  maxValue: number;
};

export const Counter = ({count, setCount, minValue, maxValue}: counterPropsType) => {
  

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
      <div className={count === maxValue ? "counterRed" : "counter"}>{count}</div>
      <div className="card">
        <Button
          name={"INC"}
          callback={incCounter}
          disabled={count >= maxValue}
        />
        <Button
          name={"RESET"}
          callback={onCliCkReset}
          disabled={count === minValue}
        />
      </div>
    </div>
  );
};
