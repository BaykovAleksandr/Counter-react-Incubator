
import "../App.css";
import { Button } from "../components/Button";

type counterPropsType = {
  count: number;
  setCount: (a: number) => void;
  minValue: number;
  maxValue: number;
  error: boolean;
  
};

export const Counter = ({count, setCount, minValue, maxValue, error}: counterPropsType) => {
  

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
      <div className={count === maxValue || error ? "counterRed" : "counter"}>{error? 'Incorrect value':count}</div>
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
