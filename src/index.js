import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import App from "./App";
import { BrowserRouter as Route } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  <Route>
    <App />
  </Route>,
  document.getElementById("root")
);
