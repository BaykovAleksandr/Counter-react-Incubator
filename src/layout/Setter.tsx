import { type ChangeEvent } from "react";
import "../app/App.css";
import { Input } from "../components/Input";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Paper, FormControl } from "@mui/material";

type SetterPropsType = {
  minValue: number;
  maxValue: number;
  setMaxValue: (value: number) => void;
  setMinValue: (value: number) => void;
  setCount: (value: number) => void;
  maxError: boolean;
  minError: boolean;
  setMaxError: (isError: boolean) => void;
  setMinError: (isError: boolean) => void;
  active: boolean;
  setActive: (isActive: boolean) => void;
};

export const Setter = ({
  minValue,
  maxValue,
  setMaxValue,
  setMinValue,
  setCount,
  setMaxError,
  setMinError,
  maxError,
  minError,
  active,
  setActive,
}: SetterPropsType) => {
  const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValueMax = Number(e.target.value);
    setActive(false);
    setMaxValue(targetValueMax);

    // Проверяем ошибки только для max значения
    if (targetValueMax <= minValue) {
      setMaxError(true);
    } else {
      setMaxError(false);
      // Если исправили max ошибку, проверяем min ошибку
      if (minValue >= targetValueMax) {
        setMinError(true);
      } else {
        setMinError(false);
      }
    }
  };

  const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValueMin = Number(e.target.value);
    setActive(false);
    setMinValue(targetValueMin);

    // Проверяем ошибки только для min значения
    if (targetValueMin < 0 || targetValueMin >= maxValue) {
      setMinError(true);
    } else {
      setMinError(false);
      // Если исправили min ошибку, проверяем max ошибку
      if (maxValue <= targetValueMin) {
        setMaxError(true);
      } else {
        setMaxError(false);
      }
    }
  };

  const hasAnyError = maxError || minError;

  return (
    <Box className="wrapper">
      <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
        <Box className="counter-input-group" sx={{ mb: 2 }}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Input
              value={maxValue}
              name="max-value"
              callback={maxValueHandler}
              label="Max value"
              error={maxError}
              helperText={
                maxError ? "Max value must be greater than min value" : ""
              }
            />
          </FormControl>
          <FormControl fullWidth>
            <Input
              value={minValue}
              name="min-value"
              callback={minValueHandler}
              label="Min value"
              error={minError}
              helperText={
                minError
                  ? "Min value must be non-negative and less than max"
                  : ""
              }
            />
          </FormControl>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 2 }} className="card card-setter">
        <Button
          variant="contained"
          onClick={() => {
            setActive(true);
            setCount(minValue);
          }}
          disabled={active || hasAnyError}
          fullWidth
          size="large"
        >
          SET
        </Button>
      </Paper>
    </Box>
  );
};
