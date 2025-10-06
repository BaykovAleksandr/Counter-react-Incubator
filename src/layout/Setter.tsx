import { type ChangeEvent } from "react";
import "../App.css";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

type setterPropsType = {
  minValue: number;
  maxValue: number;
  setMaxValue: (a: number) => void;
  setMinValue: (a: number) => void;
  setCount: (a: number) => void;
  error: boolean;
  setError: (isError: boolean) => void;
};

export const Setter = ({
  minValue,
  maxValue,
  setMaxValue,
  setMinValue,
  setCount,
  setError,
  error,
}: setterPropsType) => {
  const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValueMax = Number(e.target.value);
    setMaxValue(targetValueMax);
    if (targetValueMax <= minValue || targetValueMax === minValue) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValueMin = Number(e.target.value);
    setMinValue(targetValueMin);
    if (targetValueMin < 0 || targetValueMin >= maxValue) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="counter-input-group">
        <div className="counter-input">
          <label>
            max value:
            <Input
              value={maxValue}
              name="max-value"
              callback={maxValueHandler}
            />
          </label>
        </div>
        <div className={error ? "counter-input input-warn" : "counter-input"}>
          <label>
            min value:
            <Input
              value={minValue}
              name="min-value"
              callback={minValueHandler}
            />
          </label>
        </div>
      </div>
      <div className="card">
        <Button
          name={"SET"}
          callback={() => setCount(minValue)}
          disabled={error}
        />
      </div>
    </div>
  );
};
