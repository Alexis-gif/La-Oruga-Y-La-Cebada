import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4d8e56",
    },
    secondary: {
      main: "#887339",
      contrastText: "#f5edde",
    },
    background: {
      default: "#f4e5c8",
      paper: "#f5edde",
    },
    text: {
      primary: "#887339",
      secondary: "#887339",
    },
  },
});

export default theme;
