import { StrictMode } from "react";
import ReactDOM from "react-dom";

import GridSheet from "./gridsheet";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GridSheet />
  </StrictMode>,
  rootElement
);
