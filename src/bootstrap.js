import React from "react";
import ReactDOM from "react-dom/client";

// register all events
import "mfe-helpers/events/handlers";
import "./index.css";
import App from "./App";
import ErrorBoundary from "components/commons/ErrorBoundary";

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
