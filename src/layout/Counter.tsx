import "../app/App.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Paper, Typography, Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../common/hooks/useAppSelector";
import { setCountAC } from "../model/counter-reducer";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useAppSelector((state) => state.counter.count);
  const maxError = useAppSelector((state) => state.errors.maxError);
  const minError = useAppSelector((state) => state.errors.minError);
  const minValue = useAppSelector((state) => state.counter.minValue);
  const maxValue = useAppSelector((state) => state.counter.maxValue);
  const active = useAppSelector((state) => state.counter.active);
  const incCounter = () => {
    if (count < maxValue) {
      dispatch(setCountAC({ count: count + 1 }));
    }
  };

  const onClickReset = () => {
    dispatch(setCountAC({ count: minValue }));
  };

  const hasAnyError = maxError || minError;

  return (
    <Box className="wrapper">
      {!active && !hasAnyError && (
        <Alert severity="info" sx={{ mb: 2 }}>
          Enter value and press set
        </Alert>
      )}
      {!active && hasAnyError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Incorrect value
        </Alert>
      )}

      {active && (
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mb: 2,
            textAlign: "center",
            backgroundColor:
              count === maxValue || hasAnyError
                ? "error.light"
                : "primary.main",
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            component="div"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            {count}
          </Typography>
        </Paper>
      )}

      <Paper elevation={3} sx={{ p: 2 }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            onClick={incCounter}
            disabled={count >= maxValue || hasAnyError || !active}
            fullWidth
            size="large"
          >
            INC
          </Button>
          <Button
            variant="outlined"
            onClick={onClickReset}
            disabled={count === minValue || hasAnyError || !active}
            fullWidth
            size="large"
          >
            RESET
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
