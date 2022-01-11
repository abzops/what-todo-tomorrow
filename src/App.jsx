import "./App.css";
import Header from "./Components/Header/Header";
import { ThemeProvider } from "@mui/material";
import CustomTheme from "./Theme/Theme";

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <div>
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
