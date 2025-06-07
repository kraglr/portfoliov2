// index.js or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Or App.css if that's your main CSS
import { DarkModeContextProvider } from "./contexts/darkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);

// Add this logic to apply the theme class to the body element
// This part needs to be outside the React component tree or handled within App.jsx's useEffect
// A more robust way might be within DarkModeContext or a dedicated theme hook.
// For now, let's keep the body class manipulation inside App.jsx as you have a theme-dark/light class on the wrapper div.
