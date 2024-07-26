import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());

    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleRemoveExtraSpacesClick = () => {
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleClearTextClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleCopyToClipboardClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
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
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#042743",
              color: props.mode === "light" ? "black" : "white",
            }}
          />
        </div>

        <button disabled={text.length === 0}
          type="submit"
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert To Uppecase
        </button>

        <button disabled={text.length === 0}
          type="submit"
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowerClick}
        >
          Convert To Lowercase
        </button>
 
        <button disabled={text.length === 0}
          type="submit"
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemoveExtraSpacesClick}
        >
          Remove Extra Spaces
        </button>

        <button disabled={text.length === 0}
          type="submit"
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearTextClick}
        >
          Clear Text
        </button>

        <button disabled={text.length === 0}
          type="submit"
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyToClipboardClick}
        >
          Copy To Clipboard
        </button>
      </div>

      <div className="container mx-1 my-1">
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
