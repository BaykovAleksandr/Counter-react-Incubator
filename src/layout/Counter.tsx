import "../app/App.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Paper, Typography, Alert } from "@mui/material";

type CounterPropsType = {
  count: number;
  setCount: (count: number) => void;
  minValue: number;
  maxValue: number;
  maxError: boolean;
  minError: boolean;
  active: boolean;
};

export const Counter = ({
  count,
  setCount,
  minValue,
  maxValue,
  maxError,
  minError,
  active,
}: CounterPropsType) => {
  const incCounter = () => {
    if (maxValue - count > 0) {
      setCount(count + 1);
    }
  };

  const onClickReset = () => {
    setCount(minValue);
  };

  const hasAnyError = maxError || minError;

  return (
    <Box className="wrapper">
      {/* Сообщения */}
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

      {/* Счетчик */}
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

      {/* Кнопки */}
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
