import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import './App.css';
import Footer from "./Components/Footer";
// import { GiHearts } from 'react-icons/gi';
// import { FaCopyright } from 'react-icons/fa';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <div className="App">
        <Router>
          <Navbar
            title="TextManipulator"
            mode={mode}
            toggleMode={toggleMode}
            key={new Date()}
          />
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route exact path="/About" element={<About mode={mode} />} />
              <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Try! TextManipulator - Word & Character counter, UpperCase Converter, Lowercase Converter, Extra Spaces Remover, Calculates Time taken to read Given Paragraph. "
                mode={mode}
              />} />
            </Routes>
          </div>
        </Router>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>

  );
}

export default App;
