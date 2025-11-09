import "./App.css";
import Box from "@mui/material/Box";
import { Setter } from "../layout/Setter";
import { Counter } from "../layout/Counter";
import { useState } from "react";
import { Container, ThemeProvider, CssBaseline } from "@mui/material";
import ButtonAppBar from "../components/ButtonAppBar";
import { lightTheme, darkTheme } from "../components/theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   const savedCount = localStorage.getItem("counterValue");
  //   const savedMaxValue = localStorage.getItem("maxValue");
  //   const savedMinValue = localStorage.getItem("minValue");

  //   if (savedCount) setCount(JSON.parse(savedCount));
  //   if (savedMaxValue) setMaxValue(JSON.parse(savedMaxValue));
  //   if (savedMinValue) setMinValue(JSON.parse(savedMinValue));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("counterValue", JSON.stringify(count));
  //   localStorage.setItem("maxValue", JSON.stringify(maxValue));
  //   localStorage.setItem("minValue", JSON.stringify(minValue));
  // }, [count, maxValue, minValue]);

  const handleThemeChange = (isDark: boolean) => {
    setDarkMode(isDark);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box>
        <ButtonAppBar onThemeChange={handleThemeChange} />
        <Container className="main">
          <Counter />
          <Setter />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
