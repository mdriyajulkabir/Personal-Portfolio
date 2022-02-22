import { useContext } from "react";
import "./App.css";
import Home from "./Componetns/Home/Home";
import { ThemeContext } from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className=""
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
