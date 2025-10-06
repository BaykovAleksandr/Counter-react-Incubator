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
    if (targetValueMax <= minValue || targetValueMax === minValue) {
      setError(true);
    } else {
      setError(false);
      setMaxValue(targetValueMax);
    }
  };
  const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValueMin = Number(e.target.value);
    if (targetValueMin < 0 || targetValueMin >= maxValue) {
      setError(true);
    } else {
      setError(false);
      setMinValue(targetValueMin);
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
        <div className="counter-input">
          <label>
            min value:
            <Input
              value={minValue}
              name="max-value"
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
