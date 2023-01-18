import React from "react";
import { input } from "./input";
import { getOutput } from "./transformData";

function App() {
  return <pre>{JSON.stringify(getOutput(input), null, 2)}</pre>;
}

export default App;
