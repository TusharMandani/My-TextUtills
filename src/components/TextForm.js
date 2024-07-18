import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
  };

  const handleRemoveExtraSpacesClick = () => {
    setText(text.split(/[ ]+/).join(" "));
  };

  const handleClearTextClick = () => {
    setText("");
  };

  const handleCopyToClipboardClick = () => {
    navigator.clipboard.writeText(text);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary my-2"
          onClick={handleUpClick}
        >
          Convert To Uppecase
        </button>

        <button
          type="submit"
          className="btn btn-primary mx-3"
          onClick={handleLowerClick}
        >
          Convert To Lowercase
        </button>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleRemoveExtraSpacesClick}
        >
          Remove Extra Spaces
        </button>

        <button
          type="submit"
          className="btn btn-primary mx-3"
          onClick={handleClearTextClick}
        >
          Clear Text
        </button>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleCopyToClipboardClick}
        >
          Copy To Clipboard
        </button>
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview : {text}</h3>
      </div>
    </>
  );
}
