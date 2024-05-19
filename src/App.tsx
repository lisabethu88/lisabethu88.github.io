import "./App.css";
import Header from "./components/Header.tsx";
import React, { useEffect, useState } from "react";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import { darkBlue, lightMauve, medMauve } from "./constants.ts";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleSetMode = () => {
    setDarkMode(!darkMode);
  };

  const changeBackgroundColor = () => {
    if (darkMode) {
      document.body.style.backgroundColor = darkBlue;
    } else {
      document.body.style.backgroundColor = medMauve;
    }
  };

  useEffect(() => {
    changeBackgroundColor();
  }, [darkMode]);

  return (
    <div className="App">
      <Header handleSetMode={handleSetMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
