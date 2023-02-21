import React, { useState } from "react";
// import PropTypes from 'prop-types';

export const TextForm = (props) => {
  const HandleUpClick = () => {
    // console.log("You have clicked UpperCase:" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const HandleLoClick = () => {
    // console.log("You have clicked LowerCase:" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const HandleClClick = () => {
    // console.log("You have clicked LowerCase:" + text);
    let newText = '';
    setText(newText);
  };
  const HandleCopy =()=>{
    let text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleUpChange = (event) => {
    // console.log("on Change");
    setText(event.target.value);
  };
  const HandleExtraSpaces =()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(' '))
  }
  const [text, setText] = useState('');
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleUpChange}
            placeholder="Enter Text here: "
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={HandleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={HandleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={HandleClClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={HandleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={HandleExtraSpaces}>
        Handle Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} Minutes read </p>
        <h1>Preview</h1>
        <p> {text} </p>
      </div>
    </>
  );
};
export default TextForm;
