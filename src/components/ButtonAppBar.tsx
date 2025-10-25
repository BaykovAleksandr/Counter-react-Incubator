import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

interface ButtonAppBarProps {
  onThemeChange: (isDark: boolean) => void;
}

export default function ButtonAppBar({ onThemeChange }: ButtonAppBarProps) {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isDark = event.target.checked;
    setDarkMode(isDark);
    onThemeChange(isDark);
  };

  return (
    <Box sx={{ flexGrow: 1, mb: "100px" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            COUNTER
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={handleThemeChange}
                color="default"
              />
            }
            label={darkMode ? "Dark" : "Light"}
            sx={{ color: "white" }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
