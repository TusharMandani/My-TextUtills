import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
function App() {
  return (
    <>
      <Navbar title="My TextUtils" about="About" home="Home"></Navbar>

      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"></TextForm>
      </div>

      <div className="container">
        <About></About>
      </div>
    </>
  );
}

export default App;
