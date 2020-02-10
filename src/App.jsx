import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coffee Picker</h1>
        <p> Can't decide on a coffee? Let us choose for you! </p>
      </header>
      <Content />
    </div>
  );
}

export default App;
