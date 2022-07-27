import "./Appa.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";


import Alert from "./components/Alert";
// import custom_mode from "./components/custom_mode";

function App() {
  //

  function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join("0");
    return (zeros + str).slice(-len);
  }

  function invertColor(hex) {
    if (hex.indexOf("#") === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error("Invalid HEX color.");
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
      g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
      b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
  }

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
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (1) {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#042743";

        document.body.style.color = "white";
        showAlert("Dark mode has been ebabled", "success");
        document.title="TextUtils-Dark Mode"
      } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("Light mode has been enabled", "success");
        document.title="TextUtils-Light Mode"
      }
    }
  };

  const [customModeColor, setcustomModeColor] = useState("dark");
  

const functionToChangeTheCustomMode=(event)=>{
      const newMode=event.target.value;
      setMode(newMode);
      document.body.style.backgroundColor = newMode;
      console.log(newMode)
      document.body.style.color = invertColor(newMode);
      showAlert("Custom mode enabled", "success");
      setMode(newMode);

}



  return (
    <>
      <Navbar
        title="TextUtils2"
        aboutText="textutilsAboutText"
        mode={mode}
        toggleMode={toggleMode}
        functionToChangeTheCustomMode = {functionToChangeTheCustomMode}
      />

      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze!"
          mode={mode}
          showAlert={showAlert}
        />
        {/* so container is a bootstrap class which centers things */}
        {/* <About/> */}
      </div>
    </>
  );
}
let colorPickerElement = document.getElementById("colorPicker");
console.log(colorPickerElement);

export default App;
