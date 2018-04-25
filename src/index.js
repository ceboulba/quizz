import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App titre="My quizzGame !" />,
  document.getElementById("root")
);
registerServiceWorker();
