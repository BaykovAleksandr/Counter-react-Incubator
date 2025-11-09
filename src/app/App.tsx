import "./App.css";
import Box from "@mui/material/Box";
import { Setter } from "../layout/Setter";
import { Counter } from "../layout/Counter";
import { useEffect, useState } from "react";
import { Container, ThemeProvider, CssBaseline } from "@mui/material";
import ButtonAppBar from "../components/ButtonAppBar";
import { lightTheme, darkTheme } from "../components/theme";

function App() {
  const [maxValue, setMaxValue] = useState(5);
  const [minValue, setMinValue] = useState(1);
  const [count, setCount] = useState(0);
  const [maxError, setMaxError] = useState(false);
  const [minError, setMinError] = useState(false);
  const [active, setActive] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedCount = localStorage.getItem("counterValue");
    const savedMaxValue = localStorage.getItem("maxValue");
    const savedMinValue = localStorage.getItem("minValue");

    if (savedCount) setCount(JSON.parse(savedCount));
    if (savedMaxValue) setMaxValue(JSON.parse(savedMaxValue));
    if (savedMinValue) setMinValue(JSON.parse(savedMinValue));
  }, []);

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(count));
    localStorage.setItem("maxValue", JSON.stringify(maxValue));
    localStorage.setItem("minValue", JSON.stringify(minValue));
  }, [count, maxValue, minValue]);

  const handleThemeChange = (isDark: boolean) => {
    setDarkMode(isDark);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box>
        <ButtonAppBar onThemeChange={handleThemeChange} />
        <Container className="main">
          <Counter
            count={count}
            setCount={setCount}
            minValue={minValue}
            maxValue={maxValue}
            maxError={maxError}
            minError={minError}
            active={active}
          />
          <Setter
            minValue={minValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            setMinValue={setMinValue}
            maxError={maxError}
            minError={minError}
            setMaxError={setMaxError}
            setMinError={setMinError}
            setCount={setCount}
            active={active}
            setActive={setActive}
          />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
