import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./Toggle.css";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img
        src="https://cdn-icons-png.flaticon.com/512/890/890347.png"
        className="t-icon"
        alt=""
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/1229/1229467.png"
        className="t-icon"
        alt=""
      />
      <div
        className="t-button"
        style={{ left: theme.state.darkMode ? 0 : 25 }}
        onClick={handleClick}></div>
    </div>
  );
};

export default Toggle;
