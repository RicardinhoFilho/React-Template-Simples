import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GlobalStyles from "./Styles/global";
import { EntidadeProvider } from "./Hooks/EntidadeHook";
import { Routes } from "./Routes/index.routes";
function App() {
  return (
    <EntidadeProvider>
      <div className="App">
        <GlobalStyles />
        <Routes />
      </div>
    </EntidadeProvider>
  );
}

export default App;
