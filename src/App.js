import "./App.css";
import { ThemeProvider } from "@mui/material";
import CustomTheme from "./Theme/Theme";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import AddTask from "./Components/AddTask/AddTask";
import GetStarted from "./Components/GetStartted/GetStarted";
import Context from "./store/FirebaseContext";
import UserProfile from "./Components/UserProfile/UserProfile";
function App() {
  const bg = {
    mainBg: "#2a3950",
  };
  render(
    <Context>
      <ThemeProvider theme={CustomTheme}>
        <div className="app" style={{ backgroundColor: bg.mainBg }}>
          <BrowserRouter>
            <Routes>
              <Route path="/getstarted" element={<GetStarted />} />
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddTask />} />
              <Route path="/profile" element={<UserProfile />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </Context>,
    document.getElementById("root")
  );
}
export default App;
