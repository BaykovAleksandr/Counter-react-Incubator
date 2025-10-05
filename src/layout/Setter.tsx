import { useState, type ChangeEvent } from "react";
import "../App.css";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const Setter = () => {
  const [maxValue, setMaxValue] = useState(10);
  const [minValue, setMinValue] = useState(0);

  const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setMaxValue(Number(e.target.value));
  const minValueHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setMinValue(Number(e.target.value));

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
        <Button name={"SET"} callback={() => alert("Setter")} />
      </div>
    </div>
  );
};
