import React from "react";
import ReactDOM from "react-dom/client";
import "../i18n.js";
import "./index.css";
import App from "./App.jsx";
// import i18n (needs to be bundled ;))

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
