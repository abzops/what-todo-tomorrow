import "./App.css";
import { ThemeProvider } from "@mui/material";
import CustomTheme from "./Theme/Theme";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import AddTask from "./Components/AddTask/AddTask";
import GetStarted from "./Components/GetStartted/GetStarted";
import firebase from "firebase/compat/app";
import { AuthContext } from "./store/FirebaseContext";
import { useContext, useEffect } from "react";
function App() {
  const bg = {
    mainBg: "#2a3950",
  };
  const { setUser, user } = useContext(AuthContext);
  useEffect(() => {
    console.log("casdc");
  }, []);

  render(
    <ThemeProvider theme={CustomTheme}>
      <div className="app" style={{ backgroundColor: bg.mainBg }}>
        <BrowserRouter>
          <Routes>
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddTask />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>,
    document.getElementById("root")
  );
}
export default App;
