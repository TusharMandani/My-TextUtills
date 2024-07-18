import React from "react";

export default function About() {
  const EnabledDarkMode = () => {};
  return (
    <div className="container my-5">
      <h1>About MyText Utils</h1>
      <p>
        Welcome to MyText Utils, your one-stop solution for all your text
        processing needs. Whether you need to convert text to uppercase,
        lowercase, or remove extra spaces, MyText Utils has got you covered.
        Designed with simplicity and efficiency in mind, this app is perfect for
        students, writers, and anyone who deals with text on a daily basis.
      </p>

      <h2>Features</h2>
      <ul>
        <li>
          <strong>Convert Text to Uppercase:</strong> Instantly transform your
          text to uppercase with a single click.
        </li>
        <li>
          <strong>Convert Text to Lowercase:</strong> Easily switch your text to
          lowercase for uniformity.
        </li>
        <li>
          <strong>Remove Extra Spaces:</strong> Clean up your text by removing
          unnecessary spaces.
        </li>
        <li>
          <strong>Word and Character Count:</strong> Keep track of the number of
          words and characters in your text.
        </li>
        <li>
          <strong>Copy to Clipboard:</strong> Quickly copy your processed text
          to the clipboard for use in other applications.
        </li>
        <li>
          <strong>User-Friendly Interface:</strong> Simple and intuitive design
          for a seamless user experience.
        </li>
      </ul>

      <h2>How It Works</h2>
      <ol>
        <li>
          <strong>Enter Text:</strong> Type or paste your text into the input
          area.
        </li>
        <li>
          <strong>Choose an Action:</strong> Select the action you want to
          perform, such as converting to uppercase or removing spaces.
        </li>
        <li>
          <strong>Get Results:</strong> Instantly see the results of your text
          transformation.
        </li>
        <li>
          <strong>Copy or Reset:</strong> Copy the processed text to your
          clipboard or reset the input to start over.
        </li>
      </ol>

      <h2>Why MyText Utils?</h2>
      <p>Here are a few reasons why MyText Utils stands out:</p>
      <ul>
        <li>
          <strong>Efficient:</strong> Perform multiple text transformations
          quickly and efficiently.
        </li>
        <li>
          <strong>Easy to Use:</strong> User-friendly interface makes text
          processing a breeze.
        </li>
        <li>
          <strong>Free:</strong> Enjoy all features without any cost or
          subscription.
        </li>
      </ul>

      <p>
        Thank you for choosing MyText Utils. We hope it makes your text
        processing tasks easier and more efficient. If you have any feedback or
        suggestions, feel free to reach out to us. Happy text processing!
      </p>

      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          onClick={EnabledDarkMode}
        >
          Enabled dark mode
        </button>
      </div>
    </div>
  );
}
