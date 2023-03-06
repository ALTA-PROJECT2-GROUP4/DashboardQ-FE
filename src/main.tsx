import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";

import App from "./routes/App";
// import MenteeList from "./pages/MenteeList";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
