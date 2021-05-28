import React, { useState } from "react";
import Circle from "./components/circle/Circle";
import Content from "./components/content/Content";
import Nav from "./components/navigation/Nav";
import "./style.css";

const App = () => {
  const [menuState, setMenuState] = useState(false);

  const toggleState = () => {
    setMenuState(!menuState);
  };
  return (
    <>
      <div className={`container ${menuState ? "show-nav" : ""}`}>
        <Circle onToggle={toggleState} />
        <Content />
      </div>
      <Nav />
    </>
  );
};

export default App;
