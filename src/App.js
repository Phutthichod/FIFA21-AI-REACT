import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import { FIFAProvider } from "./store/FIFA";
import { Topbar, Main } from "./layout/index";
function App() {
  return (
    <FIFAProvider>
      <div className="App">
        <Topbar />
        <div style={{ marginBottom: 100 }} />
        <Main />
      </div>
    </FIFAProvider>
  );
}

export default App;
