import { ThemeProvider } from "@mui/material";
import NavBar from "./components/NavBar";
import theme from "./components/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
