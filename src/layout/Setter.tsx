import { type ChangeEvent } from "react";
import "../app/App.css";
import { Input } from "../components/Input";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Paper, FormControl } from "@mui/material";
import { useDispatch } from "react-redux";
import { setMaxErrorAC, setMinErrorAC } from "../model/errors-reducer";
import { useAppSelector } from "../common/hooks/useAppSelector";
import {
  setActiveAC,
  setCountAC,
  setMaxValueAC,
  setMinValueAC,
} from "../model/counter-reducer";

export const Setter = () => {
  const dispatch = useDispatch();
  const maxError = useAppSelector((state) => state.errors.maxError);
  const minError = useAppSelector((state) => state.errors.minError);
  const minValue = useAppSelector((state) => state.counter.minValue);
  const maxValue = useAppSelector((state) => state.counter.maxValue);
  const active = useAppSelector((state) => state.counter.active);
  const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValueMax = Number(e.target.value);
    const currentMinValue = minValue;
    dispatch(setActiveAC({ isActive: false }));
    dispatch(setMaxValueAC({ value: targetValueMax }));

    // Проверяем ошибки только для max значения
    if (targetValueMax <= currentMinValue) {
      dispatch(setMaxErrorAC({ isError: true }));
    } else {
      dispatch(setMaxErrorAC({ isError: false }));
      if (currentMinValue >= targetValueMax) {
        dispatch(setMinErrorAC({ isError: true }));
      } else {
        dispatch(setMinErrorAC({ isError: false }));
      }
    }
  };

  const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValueMin = Number(e.target.value);
    const currentMaxValue = maxValue;
    dispatch(setActiveAC({ isActive: false }));
    dispatch(setMinValueAC({ value: targetValueMin }));

    if (targetValueMin < 0 || targetValueMin >= currentMaxValue) {
      dispatch(setMinErrorAC({ isError: true }));
    } else {
      dispatch(setMinErrorAC({ isError: false }));
      if (currentMaxValue <= targetValueMin) {
        dispatch(setMaxErrorAC({ isError: true }));
      } else {
        dispatch(setMaxErrorAC({ isError: false }));
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
            dispatch(setActiveAC({ isActive: true }));
            dispatch(setCountAC({ count: minValue }));
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
