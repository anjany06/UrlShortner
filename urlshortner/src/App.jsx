import InputShortener from "./InputShortener";
import Background from "./Background";
import LinkResult from "./linkResult";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="container">
        <InputShortener setInputValue={setInputValue}></InputShortener>
        <Background></Background>
        <LinkResult inputValue={inputValue}></LinkResult>
      </div>
    </>
  );
}

export default App;
