// rfc: to get react function based component
import React, { useState } from "react";

export default function TextForm(props) {

   
   const [text,setText]=useState("Hi there, enter text here!")
  const handleUpClick = () => {
    
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("All converted to uppercase","success")
  };
  const handleLowClick = () => {
    console.log("Uppercase was clicked!", text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("All converted to lowercase","success")
  };

  const handleOnChange = (event) => {
    console.log("Onchange was clicked");
    setText(event.target.value);

  };
  const handleClear = () => {
    console.log("clear all text");
    setText("");
    props.showAlert("All clear","success")
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("All copied","success")
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed all extra spaces","success")
  };
  let numWords=text.split(" ").length;
  let totalLength=text.length;
  if(text==="")
  {
      numWords=0;
  }
  else if(text.charAt(totalLength-1)===" "){
      numWords-=1;
  }
  // setText("Ramachandra Namo Namah");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <form>
          <h1>{props.heading}</h1>

          <div className="form-group">
            <label htmlFor="myBox">Example textarea</label>
            <textarea
            
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "light" ? "black" : "white"
              }}
              className="form-control"
              id="myBox"
              rows="8"
              value={text}
            ></textarea>
          </div>
          <button
            type="button"
            onClick={handleUpClick}
            className="btn btn-primary btn-sm mx-2"
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            onClick={handleLowClick}
            className="btn btn-primary btn-sm mx-2"
          >
            Convert to Lowercase
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="btn btn-primary btn-sm mx-2"
          >
            Clear all text
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="btn btn-primary btn-sm mx-2"
          >
            Copy all text
          </button>
          <button
            type="button"
            onClick={handleExtraSpaces}
            className="btn btn-primary btn-sm mx-2"
          >
            Remove extra spaces
          </button>
        </form>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {numWords} words, {text.length} characters{" "}
          {0.008 * text.split(" ").length} minutes reading
        </p>
        <h2>Preview</h2>
        <p>{text!==""?text:"Enter something to preview it here:-"}</p>
      </div>
    </>
  );
}
