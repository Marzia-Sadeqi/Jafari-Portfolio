import React from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import App from "./App.jsx";
import { LangProvider } from "./hooks/useLang.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* reducedMotion="user": animations are softened for people who ask for less motion */}
    <MotionConfig reducedMotion="user">
      <LangProvider>
        <App />
      </LangProvider>
    </MotionConfig>
  </React.StrictMode>
);
